
// - Imports - //

import type { GlobalListeners_native, DOMTags, HTMLCommonAttributes_core, HTMLGlobalAttributes_core } from "../ts";


// - DOM related constants (specific to our system here) - //

/** Attributes that should always be skipped in regards to reading and applying attributes. */
export const domSkipAttributes = {
    innerHTML: true,
    outerHTML: true,
    textContent: true,
    innerText: true,
    outerText: true,
};

/** Attributes that should be applied directly to the element. For example: `element.value = val´ vs. `element.setAttribute("value", val)`. Value of undefined, will be applied as "". */
export const domDirectAttributes = {
    value: true,
} satisfies Partial<Record<keyof HTMLCommonAttributes_core | keyof HTMLGlobalAttributes_core, true>>;
/** Attributes that if they have value `"" | "0" | "false"` (in lower case), will be applied by removing the attribute. Otherwise sets the attribute with the given value. */
export const domFalseStrAttributes = {
    async: true,
    autocomplete: true,
    autoplay: true,
    contenteditable: true,
    checked: true,
    controls: true,
    default: true,
    defer: true,
    disabled: true,
    draggable: true,
    hidden: true,
    insert: true,
    ismap: true,
    loop: true,
    multiple: true,
    muted: true,
    novalidate: true,
    open: true,
    playsinline: true,
    required: true,
    reversed: true,
    selected: true,
    spellcheck: true,
    writingsuggestions: true,
} satisfies Partial<Record<keyof HTMLCommonAttributes_core | keyof HTMLGlobalAttributes_core, true>>;

/** All the self closing tags. */
export const domSelfClosingTags: DOMTags[] = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

/** Contains all the attributes that cannot be directly translated.
 * - The key is the camelCase name, the value is the native name.
 * - Note that ones not found in here, are directly the same.
 *      * Note that this also includes capitalized ones from HTML (about a dozen) that could likely work also _without_ lowercasing them, eg. "contentEditable" ~ "contenteditable".
 */
export const domRenamedAttributes: Partial<Record<string, string>> = {

    // HTML global (optional).
    // .. The conversion should not be needed when using .setAttribute on a HTML element. But to keep bookkeeping cleaner.
    autoCapitalize: "autocapitalize",
    autoFocus: "autofocus",
    contentEditable: "contenteditable",
    enterKeyHint: "enterkeyhint",
    exportParts: "exportparts",
    inputMode: "inputmode",
    itemId: "itemid",
    itemProp: "itemprop",
    itemRef: "itemref",
    itemScope: "itemscope",
    itemType: "itemtype",
    popOver: "popover",
    spellCheck: "spellcheck",
    tabIndex: "tabindex",
    virtualKeyboardPolicy: "virtualkeyboardpolicy",
    writingSuggestions: "writingsuggestions",

    // HTML common (optional + mandatory)
    // .. For all except "acceptCharset" and "httpEquiv", the conversion likely works without lowercasing when using .setAttribute on a HTML element.
    acceptCharset: "accept-charset", // Not optional.
    autoComplete: "autocomplete",
    autoPlay: "autoplay",
    bgColor: "bgcolor",
    colSpan: "colspan",
    crossOrigin: "crossorigin", // Note. This collides with SVG, but works exactly the same.
    dateTime: "datetime",
    dirName: "dirname",
    encType: "enctype",
    formAction: "formaction",
    formEncType: "formenctype",
    formMethod: "formmethod",
    formNoValidate: "formnovalidate",
    formTarget: "formtarget",
    hrefLang: "hreflang",
    httpEquiv: "http-equiv", // Not optional.
    isMap: "ismap",
    maxLength: "maxlength",
    minLength: "minlength",
    noValidate: "novalidate",
    playsInline: "playsinline",
    readOnly: "readonly",
    referrerPolicy: "referrerpolicy",
    rowSpan: "rowspan",
    srcDoc: "srcdoc",
    srcLang: "srclang",
    srcSet: "srcset",
    useMap: "usemap",

    // SVG - core.
    xmlBase: "xml:base",
    xmlLang: "xml:lang",
    xmlSpace: "xml:space",
    xmlnsXlink: "xmlns:xlink",

    // SVG - other.
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    allowReorder: "allow-reorder",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorRendering: "color-rendering",
    // crossOrigin: "crossorigin", // Already included above for HTML. Works exactly the same.
    dominantBaseline: "dominant-baseline",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    pointerEvents: "pointer-events",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xlinkActuate: "xlink:actuate",
    xlinkArcrole: "xlink:arcrole",
    xlinkHref: "xlink:href",
    xlinkRole: "xlink:role",
    xlinkShow: "xlink:show",
    xlinkTitle: "xlink:title",
    xlinkType: "xlink:type",
}; // satisfies Partial<Record<keyof HTMLAttributes & string | keyof SVGAttributes & string, keyof HTMLAttributes_native & string | keyof SVGAttributes_native & string>>;

/** Maps native listener attribute names to the event names. For example: `{ "onclick": "click" }`. Assumed usage: `const listenerProp = domListenerProps[attr.toLowerCase()]`. */
export const domListenerProps = [
    "abort",
    "activate",
    "animationcancel",
    "animationend",
    "animationiteration",
    "animationstart",
    "auxclick",
    "beforeinput",
    "beforetoggle",
    "begin",
    "blur",
    "cancel",
    "canplay",
    "canplaythrough",
    "change",
    "click",
    "close",
    "contextlost",
    "contextmenu",
    "contextrestored",
    "copy",
    "cuechange",
    "cut",
    "dblclick",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "focus",
    "focusin",
    "focusout",
    "formdata",
    "gotpointercapture",
    "input",
    "invalid",
    "keydown",
    "keypress",
    "keyup",
    "load",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "lostpointercapture",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "mousewheel",
    "paste",
    "pause",
    "play",
    "playing",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "progress",
    "ratechange",
    "repeat",
    "reset",
    "resize",
    "scroll",
    "scrollend",
    "securitypolicyviolation",
    "seeked",
    "seeking",
    "select",
    "selectionchange",
    "selectstart",
    "show",
    "slotchange",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "toggle",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "transitioncancel",
    "transitionend",
    "transitionrun",
    "transitionstart",
    "unload",
    "volumechange",
    "waiting",
    "webkitanimationend",
    "webkitanimationiteration",
    "webkitanimationstart",
    "webkittransitionend",
    "wheel",
].reduce((acc,evName) => (acc["on" + evName]=evName, acc), {}) as Record<keyof GlobalListeners_native & string, string>;
