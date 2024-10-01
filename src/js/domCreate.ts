
// - Imports - //

import { DOMTags, OrString } from "../ts";


// - DOM creation - //

/** Creates a new HTML or SVG node - the tag is assumed to be in lowercase, only used to detect for "svg", and otherwise fed to the createElement or createElementNS.
 * - Does not insert it the new node into checkSVGByParentNode, but only uses the parent to help determine whether should be SVG or HTML element.
 *      * If checkSVGByParentNode is a boolean, it directly defines whether to use SVG (true) or HTML (false).
 *      * The answer is already known on the TS side, in case checkSVGByParentNode is a boolean or specifically a HTMLElement or SVGElement.
 * - The namespaceURI defaults to: "http://www.w3.org/2000/svg".
 */
export function createDOMElement(tag: "svg", checkSVGByParentNode?: boolean | Node | null | undefined, namespaceURI?: string): SVGSVGElement;
export function createDOMElement<Tag extends string>(tag: Tag, checkSVGByParentNode: true | SVGElement, namespaceURI?: string): Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : SVGElement;
export function createDOMElement<Tag extends string>(tag: Tag, checkSVGByParentNode?: false | null | undefined | HTMLElement, namespaceURI?: string): Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement;
export function createDOMElement(tag: DOMTags | OrString, checkSVGByParentNode?: boolean | Node | null | undefined, namespaceURI?: string): HTMLElement | SVGElement;
export function createDOMElement(tag: DOMTags | OrString, checkSVGByParentNode?: boolean | Node | null | undefined, namespaceURI?: string): HTMLElement | SVGElement {
    return tag === "svg" || checkSVGByParentNode && (checkSVGByParentNode === true || checkSVGByParentNode["ownerSVGElement"] !== undefined) ?
        document.createElementNS(namespaceURI || "http://www.w3.org/2000/svg", tag) as SVGElement :
        document.createElement(tag) as HTMLElement;
}

/** Check if a node is SVG using "ownerSVGElement" property on the SVGElement: if undefined, not an SVG (otherwise null or an element).
 * - For simple known cases, the answer is already known on the TS side, in case the node is HTMLElement or SVGElement.
 */
export function isNodeSVG(node: HTMLElement): false;
export function isNodeSVG(node: SVGElement): true;
export function isNodeSVG(node: Node | null | undefined): boolean;
export function isNodeSVG(node: Node | null | undefined): boolean {
    return node && node["ownerSVGElement"] !== undefined || false;
}
