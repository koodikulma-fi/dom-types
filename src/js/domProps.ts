
// - Imports - //

// Typing.
import { DOMCleanProps, DOMDiffProps, DOMTags, DOMUncleanProps } from "../ts";
// Library.
import { equalSubDictionaries, getNameDiffs, getDictionaryDiffs, parseDOMStyle, camelCaseStr, lowerCaseStr } from "./domLib";
// Constants.
import { domListenerProps, domRenamedAttributes, domSkipAttributes } from "./domConstants";


// - Local constants - //

const cssProps = { class: true, className: true, style: true };


// - Reading from DOM (skipping listeners) - //

/** Read the domProps from a node. Does not read listeners, but returns: `{ className?, style?, data?, attributes? }`. */
export function readDOMProps(node: HTMLElement | SVGElement | Node): DOMCleanProps {
    // Prepare.
    const domProps: DOMCleanProps = {};
    if (!(node instanceof Element))
        return domProps;
    // Read from attributes.
    for (const attr of node.getAttributeNames()) {
        switch(attr) {
            case "style": {
                const style = parseDOMStyle((node as HTMLElement | SVGElement).style.cssText, true);
                if (style)
                    domProps.style = style;
                break;
            }
            case "class":
                domProps.className = node.className;
                break;
            default: {
                // Data based.
                if (attr.startsWith("data-")) {
                    domProps.data = domProps.data || {};
                    domProps.data[camelCaseStr(attr.slice(5))] = node.getAttribute(attr);
                }
                // Others are just attributes, we don't get listeners by getAttributeNames.
                else {
                    domProps.attributes = domProps.attributes || {};
                    domProps.attributes[attr] = node.getAttribute(attr) ?? undefined;
                }
            }
        }
    }
    // Return collected.
    return domProps;
}

/** Clean the given DOM properties. Returns: `{ style?, className?, data?, listeners?, attributes? }`.
 * - Note. Does not clean existing styles dictionary, only converts a string format style to dictionary format.
 * - About parts:
 *      * _className_: Combines "class" and "className" to "className". With both: `props.class + " " + props.className`.
 *      * _style_: Handles "style" separately supporting string vs. dictionary, combines to a dictionary with camelCase names.
 *      * _data_: Converts all "data-*" to a dictionary with camelCase keys (according to the native data attribute convention), and also supports "data" as a stand alone dictionary.
 *      * _listeners_: Converts any known listener props to its listener form, eg. "onClick" or "onclick" both become "click" - with both, the latter value overrides.
 *      * _attributes_: Any other are found in `{ attributes }`. Cleans "aria" related: eg. "ariaAutoComplete" becomes "aria-autocomplete" - with both, the latter value overrides.
 * - You can customize the listenerProps and renamedAttrs. They default to the domListenerProps and domRenamedAttributes constants.
 */
export function cleanDOMProps(origProps: DOMUncleanProps, listenerProps: Partial<Record<string, string>> = domListenerProps, renamedAttrs: Partial<Record<string, string>> = domRenamedAttributes): DOMCleanProps {
    // Loop all mixed up props.
    const props: DOMCleanProps = {};
    let lProp: string | undefined;
    for (const prop in origProps) {
        // Style and class.
        if (cssProps[prop]) {
            // Style.
            if (prop === "style") {
                // Parse from string, or use a dictionary directly.
                const style = typeof origProps.style === "string" ? parseDOMStyle(origProps.style) : origProps.style || {};
                // If has any, assign. (Otherwise leave "style" unassigned.)
                for (const _p in style) {
                    props.style = style;
                    break;
                }
            }
            // Class.
            else if (origProps[prop])
                props.className = props.className ? props.className + " " + origProps[prop] : origProps[prop];
        }
        // Listeners.
        else if (lProp = listenerProps[prop.toLowerCase()]) {
            // Don't assign empty.
            if (!origProps[prop])
                continue;
            // Make sure has.
            props.listeners = props.listeners || {};
            // Assign.
            props.listeners[lProp] = origProps[prop] ?? undefined;
        }
        // Data.
        else if (prop.startsWith("data")) {
            // // Don't assign empty.
            // if (origProps[prop] === undefined)
            //     continue;
            // One data property.
            if (prop[4] === "-") {
                // Make sure has.
                props.data = props.data || {};
                // Assign, but convert prop to camelCase and drop "data-". For example: "data-my-value" -> "myValue".
                props.data[camelCaseStr(prop.slice(5))] = origProps[prop];
            }
            // The whole thing.
            else
                props.data = { ...props.data, ...origProps.data };
        }
        // Normal attributes.
        else {
            // Don't assign empty.
            if (origProps[prop] === undefined)
                continue;
            // Make sure has.
            props.attributes = props.attributes || {};
            // Assign and handle naming conversion for "aria" related.
            props.attributes[renamedAttrs[prop] || prop.startsWith("aria") && prop[4] !== "-" && "aria-" + prop.slice(4).toLowerCase() || prop] = origProps[prop];
        }
    }
    // Return cleaned.
    return props;
}

/** Comparison method specialized into DOMCleanProps (= cleaned up attributes description of a dom element). */
export function equalDOMProps(a: DOMCleanProps, b: DOMCleanProps): boolean {
    return (a.className || "") === (b.className || "") && equalSubDictionaries(a, b, "style", "data", "listeners", "attributes");
}

/** Returns the dictionaries for differences.
 * - After the process, the given newProps then represents the appliedProps, so to speak.
 * - If element is null, just returns the diffs without applying anything.
 */
export function applyDOMProps(domElement: HTMLElement | SVGElement | Element | null, newProps: DOMCleanProps, oldProps: DOMCleanProps = {}, logWarnings: boolean = true, skipAttrs: Record<string, any> = domSkipAttributes): DOMDiffProps | null {
    
    // Prepare.
    const diffs: DOMDiffProps = {};

    // Style and/or data.
    const runStyleData = (oldProps.style || newProps.style ? 1 : 0) | (oldProps.data || newProps.data ? 2 : 0) as 0 | 1 | 2 | 3;
    if (runStyleData) {
        for (const attr of runStyleData === 1 ? ["style"] : runStyleData === 2 ? ["data"] : ["style", "data"]) {
            // Collect diffs.
            const subDiffs = getDictionaryDiffs(oldProps[attr] || {}, newProps[attr] || {});
            if (subDiffs)
                diffs[attr] = subDiffs;
            // Apply.
            if (subDiffs && domElement) {
                // Data.
                if (attr === "data") {
                    const dMap = (domElement as HTMLElement | { dataset?: undefined; }).dataset;
                    if (dMap) {
                        for (const p in subDiffs)
                            subDiffs[p] !== undefined ? dMap[p] = subDiffs[p] : delete dMap[p];
                    }
                }
                // For styles, we use the very flexible element.style[prop] = value. If value is null, then will remove.
                // .. This way, we support both ways to input styles: "backgroundColor" and "background-color".
                else {
                    const s = (domElement as HTMLElement | { style?: undefined; }).style;
                    if (s) {
                        for (const p in subDiffs)
                            s[p] = subDiffs[p] ?? null;
                    }
                }
            }
        }
    }

    // Class.
    if (oldProps.className || newProps.className) {
        // Collect diffs.
        const classDiffs = getNameDiffs(oldProps.className, newProps.className);
        if (classDiffs)
            diffs.className = classDiffs;
        // Apply.
        if (classDiffs && domElement)
            for (const name in classDiffs)
                domElement.classList[classDiffs[name] ? "add" : "remove"](name);
    }

    // Attributes.
    if (oldProps.attributes || newProps.attributes) {
        // Collect diffs.
        const subDiffs = getDictionaryDiffs(oldProps.attributes || {}, newProps.attributes || {});
        if (subDiffs)
            diffs.attributes = subDiffs;
        // Apply.
        if (subDiffs && domElement) {
            for (const attr in subDiffs) {
                // Skip and warn.
                if (skipAttrs[attr]) {
                    if (logWarnings)
                        console.warn("Warning: Tried to apply a protected attribute: ", attr, " for element: ", domElement);
                    continue;
                }
                // Set or remove.
                subDiffs[attr] === undefined ? domElement.removeAttribute(attr) : domElement.setAttribute(attr, subDiffs[attr]!);
            }
        }
    }

    // Listeners.
    if (oldProps.listeners || newProps.listeners) {
        // Collect diffs.
        const subDiffs = getDictionaryDiffs(oldProps.listeners || {}, newProps.listeners || {});
        if (subDiffs)
            diffs.attributes = subDiffs;
        // Apply.
        if (subDiffs && domElement) {
            for (const prop in subDiffs) {
                // Remove old, if had.
                const oldListener = oldProps.listeners?.[prop];
                if (oldListener)
                    domElement.removeEventListener(prop, oldListener);
                // Assign new listener.
                if (subDiffs[prop])
                    domElement.addEventListener(prop, subDiffs[prop]!);
            }
        }
    }

    // If had diffs, return difs, otherwise null.
    for (const _prop in diffs)
        return diffs;
    return null;
}


// - Reading as a DOM string (skipping listeners) - //

/** Helper to write a DOM string for a single tag.
 * - To write a DOM string for a tree of infos, handle the tree externally with recursion and call this with childrenContent for each.
 * @param tag The tag of the DOM element. If "", reads it from readFromNode if given, or assumes it's a text node like situation: just output the textContent.
 * @param domProps The cleaned dom props to apply.
 * @param childrenContent String for the children content to insert inside, or `true` to force a separate opening and closing tag in any case.
 * @param readFromNode If provided, then sets the tag (if not given) and extends the domProps by reading from the element. If a node, then just the textContent.
 * @param skipAttrs Which attributes should always be ignored. Defaults to domSkipAttributes constant.
 */
export function readDOMString(tag: string, domProps?: DOMCleanProps | null, childrenContent?: string | null | boolean, readFromNode?: Node | null, skipAttrs: Record<string, any> = domSkipAttributes): string {
    
    // Prepare.
    let dom = "";
    if (!domProps)
        domProps = {};

    // No tag.
    if (!tag) {
        // From element.
        if (readFromNode && readFromNode instanceof Element)
            tag = readFromNode.tagName.toLowerCase() as DOMTags || "";
        // If has no tag at this point, we stop and return the childrenContent and/or our textContent from the simple node.
        if (!tag)
            // Let's merge both contents. In practice, there should only be either.
            return (readFromNode && readFromNode.textContent || "") + (childrenContent === true ? "" : childrenContent || "");
    }

    // Read from node.
    if (readFromNode) {
        // Read props from element.
        const { className, style, data, attributes } = readDOMProps(readFromNode);
        // Merge the props together - for conflicts use higher preference for what was just read from dom.
        if (className)
            domProps.className = domProps.className ? domProps.className + " " + className : className;
        if (style) {
            domProps.style = domProps.style || {};
            for (const prop in style)
                domProps.style[prop] = style[prop];
        }
        if (data) {
            domProps.data = domProps.data || {};
            for (const prop in data)
                domProps.data[prop] = data[prop];
        }
        for (const prop in attributes)
            domProps[prop] = attributes[prop];
    }

    // Parse.
    const { className, style, data, attributes } = domProps;

    // Start tag.
    dom += "<" + tag;

    // Add props.
    // .. Class.
    if (className)
        dom += ' class="' + className + '"';
    // .. Style.
    if (style) {
        let s = "";
        for (const prop in style)
            s += (s ? " " : "") + lowerCaseStr(prop) + ": " + style[prop] + ";";
        if (s)
            dom += ' style="' + s + '"';
    }
    // .. Data.
    if (data) {
        for (const prop in data)
            dom += ' data-' + lowerCaseStr(prop) + '="' + data[prop].toString() + '"';
    }
    // .. Other attributes - skipping listeners and special.
    if (attributes) {
        for (let prop in attributes)
            // Just in case, check also domListenerProps here - if was fed externally.
            if (attributes[prop] && !skipAttrs[prop] && !domListenerProps[prop.toLowerCase()])
                dom += ' ' + prop + '="' + attributes[prop]!.toString() + '"';
    }

    // Close the tag.
    if (!childrenContent)
        dom += "/>";
    else {
        // Close the initial tag.
        dom += ">";
        // Add contents.
        if (childrenContent !== true)
            dom += childrenContent;
        // Close the tag.
        dom += '</' + tag + '>';
    }

    // Return the combined string.
    return dom;
}
