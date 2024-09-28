
// - Import - //

// Typing.
import { DOMCleanProps, DOMTags, DOMTreeNode } from "../ts";
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

/** Read the content inside a (root) tree node as a html string. Useful for server side or static rendering.
 * - Note that the DOMTreeNode is a simple type, that in "dom-types" is only used for this purpose.
 *      * In a state based rendering library, it could be used to keep track of the grounded DOM tree and which def is where.
 *      * But you can also manually convert your structure to the simple DOMTreeNode type, just to use this reader function.
 * - If onlyClosedTagsFor is an array, only uses closed tag (`<div />`) for elements with matching tag (if they have no kids).
 *      * If it's null | undefined, then uses closed tags based on whether has children or not (= only if no children). Defaults to ["img"]. 
 */
export function readAsString(treeNode: DOMTreeNode, onlyClosedTagsFor: string[] | null | undefined = ["img"]): string {

    // Get def.
    const def = treeNode.def;
    if (!def)
        return "";

    // Read content.
    let tag = def.tag;
    let dom = "";
    // Not dom type - just return the contents inside.
    if (typeof tag !== "string") {
        if (treeNode.children)
            for (const tNode of treeNode.children)
                dom += readAsString(tNode);
        return dom;
    }

    // Prepare dom type.
    let element: Node | null = null;
    // Tagless - text node.
    if (!tag) {
        const content = def.domContent;
        if (content)
            content instanceof Node ? element = content : dom += content.toString();
    }
    // PseudoElement - get the tag.
    else if (tag === "_")
        element = def.domElement || null;
    // Not valid - or was simple. Not that in the case of simple, there should be no innerDom (it's the same with real dom elements).
    if (!tag && !element)
        return dom;

    // Read from element.
    let domProps = treeNode.domProps || {};
    if (element) {
        if (element instanceof Element)
            tag = element.tagName.toLowerCase() as DOMTags || "";
        if (!tag)
            return element.textContent || "";
        // Read props from element.
        const { className, style, data, attributes } = readFromDOM(def.domElement as Element);
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
    // Start tag.
    const { className, style, data, attributes } = domProps;
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
    if (treeNode.children && treeNode.children[0] !== undefined ? false : !onlyClosedTagsFor || onlyClosedTagsFor.includes(tag))
        dom += "/>";
    else {
        // Close the initial tag.
        dom += ">";
        // Add contents.
        for (const tNode of treeNode.children || [])
            dom += readAsString(tNode);
        // Close the tag.
        dom += '</' + tag + '>';
    }

    return dom;
}
