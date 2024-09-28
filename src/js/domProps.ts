
// - Imports - //

// Typing.
import { DOMCleanProps, DOMDiffProps, DOMUncleanProps, GlobalEventHandler } from "../ts";
// Library.
import { equalSubDictionaries, getClassNameDiffs, getDictionaryDiffs, parseDOMStyle, recapitalizeString } from "./domLib";
// Constants.
import { domListenerProps, domRenamedAttributes, domSkipAttributes } from "./domConstants";


// - DOM props helpers - //

/** Clean the given DOM properties. Returns: `{ style?, className?, data?, listeners?, attributes? }`.
 *      * Note. Does not clean existing styles dictionary, only converts a string format style to dictionary format.
 * - _className_: Combines "class" and "className" to "className". With both: `props.class + " " + props.className`.
 * - _style_: Handles "style" separately supporting string vs. dictionary, combines to a dictionary with camelCase names.
 * - _data_: Converts all "data-*" to a dictionary with camelCase keys (according to the native data attribute convention), and also supports "data" as a stand alone dictionary.
 * - _listeners_: Converts any known listener props to its listener form, eg. "onClick" or "onclick" both become "click" - with both, the latter value overrides.
 * - _attributes_: Any other are found in `{ attributes }`. Cleans "aria" related: eg. "ariaAutoComplete" becomes "aria-autocomplete" - with both, the latter value overrides.
 */
export function cleanDOMProps(origProps: DOMUncleanProps): DOMCleanProps {
    // Copy.
    const props: DOMCleanProps = {};
    // Class.
    if (origProps.class)
        props.className = origProps.className ? origProps.class + " " + origProps.className : origProps.class;
    // Style.
    if (origProps.style) {
        const style = typeof origProps.style === "string" ? parseDOMStyle(origProps.style) : origProps.style;
        for (const _p in style) {
            props.style = style;
            break;
        }
    }
    // Data.
    if (origProps.data)
        props.data = { ...origProps.data };
    // Attributes, including finding listeners and more data.
    for (const prop of Object.keys(origProps)) {
        // Listeners.
        if (domListenerProps[prop.toLowerCase()]) {
            // Don't assign empty.
            if (!origProps[prop])
                continue;
            // Make sure has.
            if (!props.listeners)
                props.listeners = {};
            // Assign.
            props.listeners[prop.toLowerCase()] = origProps[prop] ?? undefined;
        }
        // Data.
        else if (prop.startsWith("data-")) {
            // // Don't assign empty.
            // if (origProps[prop] === undefined)
            //     continue;
            // Make sure has.
            if (!props.data)
                props.data = {};
            // Assign, but convert prop to camelCase and drop "data-". For example: "data-my-value" -> "myValue".
            props.data[recapitalizeString(prop.slice(5), "-")] = origProps[prop];
        }
        // Normal attributes.
        else {
            // Don't assign empty.
            if (origProps[prop] === undefined)
                continue;
            // Make sure has.
            if (!props.attributes)
                props.attributes = {};
            // Assign and handle naming conversion for "aria" related.
            props[domRenamedAttributes[prop] || prop.startsWith("aria") && !prop.startsWith("aria-") && "aria-" + prop.slice(4).toLowerCase() || prop] = origProps[prop];
        }
    }
    // Return cleaned.
    return props as any;
}

/** Comparison method specialized into DOMCleanProps (= cleaned up attributes description of a dom element). */
export function equalDOMProps(a: DOMCleanProps, b: DOMCleanProps): boolean {
    // Added (not existing in a) or changed (existing in both).
    for (const attr in b) {
        // Class names.
        if (attr === "className") {
            if ((a.className || "") !== (b.className || ""))
                return false;
        }
        // Others are dictionaries suitable for shallow comparison.
        // .. For optimal checks, they should never contain empty dictionaries, or then should be undefined. (This is so in cleanDOMProps.)
        else if (!equalSubDictionaries(a, b, attr))
            return false;
    }
    // Deleted - not existing in b.
    // .. Note that at this moment, we've already validated all cases where exists in both.
    // .. So, if the b[prop] is undefined, and a[prop] is not, there's a change. (If b[prop] is not undefined, then handled above - not here.)
    for (const prop in a) {
        if (b[prop] === undefined && a[prop] !== undefined && prop !== "className")
            return false;
    }
    // Are equal.
    return true;
}

/** Returns the dictionaries for differences.
 * - After the process, the given newProps then represents the appliedProps, so to speak.
 * - If element is null, just returns the diffs without applying anything.
 */
export function applyDOMProps(domElement: HTMLElement | SVGElement | Element | null, newProps: DOMCleanProps, oldProps: DOMCleanProps = {}, logWarnings: boolean = true): DOMDiffProps | null {
    
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
                    const dMap: DOMStringMap | undefined = (domElement as HTMLElement).dataset;
                    if (dMap)
                        for (const prop in subDiffs)
                            subDiffs[prop] !== undefined ? dMap[prop] = subDiffs[prop] : delete dMap[prop];
                }
                // For styles, we use the very flexible element.style[prop] = value. If value is null, then will remove.
                // .. This way, we support both ways to input styles: "backgroundColor" and "background-color".
                else {
                    const s: CSSStyleDeclaration | undefined = (domElement as HTMLElement).style;
                    if (s)
                        for (const prop in subDiffs)
                            s[prop] = subDiffs[prop] ?? null;
                }
            }
        }
    }

    // Class.
    if (oldProps.className !== undefined || newProps.className !== undefined) {
        // Collect diffs.
        const classDiffs = getClassNameDiffs(oldProps.className, newProps.className);
        if (classDiffs)
            diffs.classNames = classDiffs;
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
                if (domSkipAttributes[attr]) {
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
                const oldListener = oldProps.listeners?.[prop] as GlobalEventHandler | undefined;
                if (oldListener)
                    domElement.removeEventListener(prop, oldListener);
                // Assign new listener.
                if (subDiffs[prop])
                    domElement.addEventListener(prop, subDiffs[prop]);
            }
        }
    }

    // If had diffs, return difs, otherwise null.
    for (const _prop in diffs)
        return diffs;
    return null;
}
