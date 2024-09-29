
// - DOM creation - //

/** Creates a new HTML or SVG node - the tag is assumed to be in lowercase, only used to detect for "svg", and otherwise fed to the createElement or createElementNS.
 * - Does not insert it the new node into parent, but only uses the parent to help determine whether should be SVG or HTML element.
 * - The namespaceURI defaults to: "http://www.w3.org/2000/svg".
 */
export function createDOMElement(tag: string, checkByParentNode?: Node | null | undefined, namespaceURI?: string) {
    return tag === "svg" || checkByParentNode && checkByParentNode["ownerSVGElement"] !== undefined ?
        document.createElementNS(namespaceURI || "http://www.w3.org/2000/svg", tag) :
        document.createElement(tag);
}

/** Check if a node is SVG (using ownerSVGElement property on the SVGElement, not present for HTMLElement or basic Node). */
export function isNodeSVG(node: Node | null | undefined): boolean {
    return node && node["ownerSVGElement"] !== undefined || false;
}



// - - - - - - - - - - - - - - - - - //
// - - - - - - - - - - - - - - - - - //
// - - Old creation alternatives - - //
// - - - - - - - - - - - - - - - - - //
// - - - - - - - - - - - - - - - - - //



// // - Imports - //
//
// // Typing.
// import { CSSProperties, PreClassName } from "../ts";
//
//
// // - Local constants - //
//
// const svgTags = {
//     a: "maybe", // It's almost like in HTML, but has that "xlink:href".
//     animate: true,
//     animateMotion: true,
//     animateTransform: true,
//     circle: true,
//     clipPath: true,
//     defs: true,
//     desc: true,
//     ellipse: true,
//     feBlend: true,
//     feColorMatrix: true,
//     feComponentTransfer: true,
//     feComposite: true,
//     feConvolveMatrix: true,
//     feDiffuseLighting: true,
//     feDisplacementMap: true,
//     feDistantLight: true,
//     feDropShadow: true,
//     feFlood: true,
//     feFuncA: true,
//     feFuncB: true,
//     feFuncG: true,
//     feFuncR: true,
//     feGaussianBlur: true,
//     feImage: true,
//     feMergeNode: true,
//     feMorphology: true,
//     feOffset: true,
//     fePointLight: true,
//     feSpecularLighting: true,
//     feSpotLight: true,
//     feTile: true,
//     feTurbulunece: true,
//     filter: true,
//     foreignObject: true,
//     g: true,
//     image: true,
//     line: true,
//     linearGradient: true,
//     marker: true,
//     mask: true,
//     metadata: true,
//     mpath: true,
//     path: true,
//     pattern: true,
//     polygon: true,
//     polyline: true,
//     radialGradient: true,
//     rect: true,
//     script: true,
//     set: true,
//     stop: true,
//     style: true,
//     svg: true,
//     switch: true,
//     symbol: true,
//     text: true,
//     textPath: true,
//     title: true,
//     tspan: true,
//     use: true,
//     view: true,
// } as const;
//
//
// // - Helpers - //
//
// /** Creates a new HTML or SVG node - the tag should be in lowercase.
//  * - Does not insert it the new node into parent, but only uses the parent to help determine whether should be SVG or HTML element.
//  * - The SVGNamespaceURI defaults to: "http://www.w3.org/2000/svg".
//  */
// export function createElement(tag: string, checkByParentNode?: Node | null | undefined, SVGNamespaceURI?: string) {
//     return tag === "svg" || checkByParentNode && checkByParentNode["ownerSVGElement"] !== undefined ?
//         document.createElementNS(SVGNamespaceURI || "http://www.w3.org/2000/svg", tag) :
//         document.createElement(tag);
// }
//
// /** Determine by tag and/or parentNode, whether should create an SVG or HTML element. Checks the explicitly always SVG tags, or otherwise parentNode's ownerSVGElement. */
// export function shouldBeSVG(kidTag: string, parentNode?: Node | null | undefined): boolean {
//     return svgTags[kidTag] === true || parentNode && parentNode["ownerSVGElement"] !== undefined || false;
//     // return kidTag === "svg" || parentNode && parentNode["ownerSVGElement"] !== undefined || false;
// }
//
// /** Check if a node is SVG. */
// export function isNodeSVG(node: Node | null | undefined): boolean {
//     return node && node["ownerSVGElement"] !== undefined || false;
// }
//
// /** The tag should be in lowercase. In case for "a" element, the answer depends on the given defaultAnswer, as it can reside on either side. */
// export function isTagSVG(tag: string, defaultAnswer: boolean = false): boolean {
//     return defaultAnswer ? !!svgTags[tag] : svgTags[tag] === true;
// }
//
// /** Check if is running in browser or not. Checks by document object. */
// export function isInBrowser(): boolean {
//     return document && typeof document === "object" || false;
// }
