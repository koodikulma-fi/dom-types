
// - Import - //

// Typing.
import { DOMCleanProps, DOMTags } from "../ts";
// Reading.
import { parseDOMStyle, decapitalizeString, recapitalizeString } from "./domLib";
// Constants.
import { domListenerProps, domSkipAttributes } from "./domConstants";


// - Reading from DOM and as string (skipping listeners) - //

/** Read the domProps from a node. Does not read listeners, but returns: `{ className?, style?, data?, attributes? }`. */
export function readFromDOM(node: HTMLElement | SVGElement | Node): DOMCleanProps {
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
                    domProps.data[recapitalizeString(attr.slice(5))] = node.getAttribute(attr);
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

/** Helper to write a DOM string for a single tag.
 * - To write a DOM string for a tree of infos, handle the tree externally with recursion and call this with childrenContent for each.
 * @param tag The tag of the DOM element. If "", reads it from readFromNode if given, or assumes it's a text node like situation: just output the textContent.
 * @param domProps The cleaned dom props to apply.
 * @param childrenContent String for the children content to insert inside, or `true` to force a separate opening and closing tag in any case.
 * @param readFromNode If provided, then sets the tag (if not given) and extends the domProps by reading from the element. If a node, then just the textContent.
 */
export function readDOMString(tag: string, domProps?: DOMCleanProps | null, childrenContent?: string | null | boolean, readFromNode?: Node | null): string {
    
    // Prepare.
    let dom = "";
    if (!domProps)
        domProps = {};

    // No tag.
    if (!tag) {
        // From element.
        if (readFromNode instanceof Element)
            tag = readFromNode.tagName.toLowerCase() as DOMTags || "";
        // If has no tag at this point, we stop and return the childrenContent and/or our textContent from the simple node.
        if (!tag)
            return (readFromNode && readFromNode.textContent || "") + (childrenContent === true ? "" : childrenContent || "");
    }

    // Read from node.
    if (readFromNode) {
        // Read props from element.
        const { className, style, data, attributes } = readFromDOM(readFromNode);
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
            s += prop + ": " + style[prop] + ";";
        if (s)
            dom += ' style="' + s + '"';
    }
    // .. Data.
    if (data) {
        for (const prop in data)
            dom += ' data-' + decapitalizeString(prop, "-") + '="' + data[prop].toString() + '"';
    }
    // .. Other attributes - skipping listeners and special.
    if (attributes) {
        for (let prop in attributes)
            // Just in case, check also domListenerProps here - if was fed externally.
            if (attributes[prop] && !domSkipAttributes[prop] && !domListenerProps[prop.toLowerCase()])
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
