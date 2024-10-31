
// - Imports - //

import { AnyString, BoolOrStr, ARIARole, GlobalEventHandler, HTMLTags, SVGTags, DOMTags, HTMLCommonAttributes_core, HTMLGlobalAttributes_core, SVGAnimationAttributes_core, SVGCommonAttributes_core, SVGGlobalAttributes_core, GlobalListeners_core } from "./index_base";


// - Info sources (at around Q3 2024) - //
//
// MDN docs: https://developer.mozilla.org/en-US/docs/Web/HTML
// MDN docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#event_attributes


// - Basic attributes - //

/** Matches somewhere around 95% with ARIAMixin values - this has a couple of more keys. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) */
export interface ARIAAttributes {
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) */
    "role": ARIARole | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) */
    "aria-activedescendant": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) */
    "aria-atomic": BoolOrStr | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) */
    "aria-autocomplete": "none" | "inline" | "list" | "both" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) */
    "aria-braillelabel": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) */
    "aria-brailleroledescription": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) */
    "aria-busy": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) */
    "aria-checked": boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) */
    "aria-colcount": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) */
    "aria-colindex": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) */
    "aria-colspan": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) */
    "aria-controls": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) */
    "aria-current": boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) */
    "aria-description": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) */
    "aria-describedby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) */
    "aria-details": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) */
    "aria-disabled": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) */
    "aria-dropeffect": "none" | "copy" | "execute" | "link" | "move" | "popup" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) */
    "aria-errormessage": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) */
    "aria-expanded": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto) */
    "aria-flowto": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) */
    "aria-grabbed": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) */
    "aria-haspopup": boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) */
    "aria-hidden": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) */
    "aria-invalid": boolean | "false" | "true" | "grammar" | "spelling" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) */
    "aria-keyshortcuts": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) */
    "aria-label": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) */
    "aria-labelledby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) */
    "aria-level": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) */
    "aria-live": "off" | "assertive" | "polite" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) */
    "aria-modal": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) */
    "aria-multiline": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) */
    "aria-multiselectable": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) */
    "aria-orientation": "horizontal" | "vertical" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) */
    "aria-owns": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) */
    "aria-placeholder": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) */
    "aria-posinset": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) */
    "aria-pressed": boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) */
    "aria-readonly": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) */
    "aria-relevant": "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) */
    "aria-required": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) */
    "aria-roledescription": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) */
    "aria-rowcount": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) */
    "aria-rowindex": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) */
    "aria-rowspan": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) */
    "aria-selected": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) */
    "aria-setsize": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) */
    "aria-sort": "none" | "ascending" | "descending" | "other" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) */
    "aria-valuemax": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) */
    "aria-valuemin": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) */
    "aria-valuenow": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) */
    "aria-valuetext": string;
}


// - DOM listeners - //

/** All listener attributes (matching GlobalEventHandlers + couple more) with native keys referring. Values are event handler types. */
export interface GlobalListeners extends GlobalListeners_core {}


// - HTML related attributes - //

// Attributes with tag arg.
/** HTML element attributes by tag name with native case listener and aria attributes. */
export type HTMLAttributes<Tag extends string, Fallback = HTMLAttributesAny> = Tag extends HTMLTags ? Partial<HTMLOwnAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;

// Attributes without tag.
/** The all possible attributes that HTML elements can have - in native case. */
export type HTMLAttributesAny = Partial<HTMLCommonAttributes & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes>;

// Attributes dictionary.
/** Dictionary of HTML attributes by tag in native case. */
export type HTMLAttributesBy = { [Tag in HTMLTags]: HTMLAttributes<Tag>; };


// - HTML global attributes - //

/** HTML attributes in native case available on all HTML elements. */
export interface HTMLGlobalAttributes extends HTMLGlobalAttributes_core {}


// - HTML common attributes (tag specific) - //

/** All attributes that are specific to tags in camelCase - excluding HTMLGlobalAttributes. */
export interface HTMLCommonAttributes extends HTMLCommonAttributes_core {}


// - HTML attributes by tag name - //

/** HTML attributes by tags in native case - without global attributes, listeners nor aria. */
export interface HTMLOwnAttributesBy {
    a: Pick<HTMLCommonAttributes, "download" | "href" | "hreflang" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLCommonAttributes, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLCommonAttributes, "autoplay" | "controls" | "crossorigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLCommonAttributes, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLCommonAttributes, "cite">;
    body: Pick<HTMLCommonAttributes, "background" | "bgcolor">;
    br: {};
    button: Pick<HTMLCommonAttributes, "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "name" | "type" | "value">;
    canvas: Pick<HTMLCommonAttributes, "height" | "width">;
    caption: Pick<HTMLCommonAttributes, "align">;
    center: {};
    cite: {};
    code: {};
    col: Pick<HTMLCommonAttributes, "align">;
    colgroup: Pick<HTMLCommonAttributes, "align">;
    data: Pick<HTMLCommonAttributes, "value">;
    datalist: {};
    dd: {};
    del: Pick<HTMLCommonAttributes, "cite" | "datetime">;
    details: Pick<HTMLCommonAttributes, "open">;
    dfn: {};
    dialog: Pick<HTMLCommonAttributes, "open">;
    div: {}; // Pick<HTMLCommonAttributes, "height" | "width">; // Legacy
    dl: {};
    dt: {};
    em: {};
    embed: Pick<HTMLCommonAttributes, "height" | "src" | "type" | "width">;
    fencedframe: {};
    fieldset: Pick<HTMLCommonAttributes, "disabled" | "form" | "name">;
    figcaption: {};
    figure: {};
    font: Pick<HTMLCommonAttributes, "color">;
    footer: {};
    form: Pick<HTMLCommonAttributes, "accept" | "accept-charset" | "action">;
    frame: {};
    frameset: {};
    h1: {};
    h2: {};
    h3: {};
    h4: {};
    h5: {};
    h6: {};
    head: {};
    header: {};
    hgroup: {};
    hr: Pick<HTMLCommonAttributes, "color" | "align">;
    html: {};
    i: {};
    iframe: Pick<HTMLCommonAttributes, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerpolicy" | "sandbox" | "src" | "srcdoc" | "width">;
    img: Pick<HTMLCommonAttributes, "align" | "alt" | "border" | "crossorigin" | "decoding" | "height" | "ismap" | "loading" | "referrerpolicy" | "sizes" | "src" | "srcset" | "usemap" | "width">; // | "intrinsicsize"
    input: Pick<HTMLCommonAttributes,
        | "accept"
        | "alt"
        | "capture"
        | "checked"
        | "dirname"
        | "disabled"
        | "form"
        | "formaction"
        | "formenctype"
        | "formmethod"
        | "formnovalidate"
        | "formtarget"
        | "height"
        | "list"
        | "max"
        | "maxlength"
        | "min"
        | "minlength"
        | "multiple"
        | "name"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "required"
        | "size"
        | "src"
        | "step"
        | "usemap"
        | "value"
        | "width"
    > & {
        type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    };
    ins: Pick<HTMLCommonAttributes, "cite" | "datetime">;
    kbd: {};
    label: Pick<HTMLCommonAttributes, "for" | "form">;
    legend: {};
    li: Pick<HTMLCommonAttributes, "value">;
    link: Pick<HTMLCommonAttributes, "as" | "crossorigin" | "href" | "hreflang" | "integrity" | "media" | "referrerpolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLCommonAttributes, "name">;
    mark: {};
    marquee: Pick<HTMLCommonAttributes, "bgcolor" | "loop">;
    menu: Pick<HTMLCommonAttributes, "type">;
    meta: Pick<HTMLCommonAttributes, "charset" | "content" | "http-equiv" | "name">;
    meter: Pick<HTMLCommonAttributes, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLCommonAttributes, "border" | "data" | "form" | "height" | "name" | "type" | "usemap" | "width">;
    ol: Pick<HTMLCommonAttributes, "reversed" | "start" | "type">;
    optgroup: Pick<HTMLCommonAttributes, "disabled" | "label">;
    option: Pick<HTMLCommonAttributes, "disabled" | "label" | "selected" | "value">;
    output: Pick<HTMLCommonAttributes, "for" | "form" | "name">;
    p: {};
    param: Pick<HTMLCommonAttributes, "name" | "value">;
    picture: {};
    plaintext: {};
    portal: {};
    pre: {};
    progress: Pick<HTMLCommonAttributes, "form" | "max" | "value">;
    q: Pick<HTMLCommonAttributes, "cite">;
    rb: {};
    rp: {};
    rt: {};
    rtc: {};
    ruby: {};
    s: {};
    samp: {};
    script: Pick<HTMLCommonAttributes, "async" | "crossorigin" | "defer" | "integrity" | "language" | "referrerpolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLCommonAttributes, "autocomplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLCommonAttributes, "media" | "sizes" | "src" | "srcset" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLCommonAttributes, "media" | "type">; // "scoped"
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLCommonAttributes, "align" | "background" | "bgcolor" | "border" | "summary">;
    tbody: Pick<HTMLCommonAttributes, "align" | "bgcolor">;
    td: Pick<HTMLCommonAttributes, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">;
    template: {};
    textarea: Pick<HTMLCommonAttributes,
        | "autocomplete"
        | "cols"
        | "dirname"
        | "disabled"
        // | "enterkeyhint" // Global.
        | "form"
        // | "inputmode" // Global.
        | "maxlength"
        | "minlength"
        | "name"
        | "placeholder"
        | "readonly"
        | "required"
        | "rows"
        | "wrap"
    >;
    tfoot: Pick<HTMLCommonAttributes, "align" | "bgcolor">;
    th: Pick<HTMLCommonAttributes, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">; // "scope"
    thead: Pick<HTMLCommonAttributes, "align">;
    time: Pick<HTMLCommonAttributes, "datetime">;
    title: {};
    tr: Pick<HTMLCommonAttributes, "align" | "bgcolor">;
    track: Pick<HTMLCommonAttributes, "default" | "kind" | "label" | "src" | "srclang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLCommonAttributes, "autoplay" | "controls" | "crossorigin" | "height" | "loop" | "muted" | "playsinline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
};

// Test.
// type HasAllTags = HTMLOwnAttributesBy extends Record<HTMLTags, Record<string, any>> ? true : false;


// - SVG related attributes - //

// Attributes with tag arg.
/** SVG element attributes by tag name with lowercase listener and aria attributes. */
export type SVGAttributes<Tag extends string, Fallback = SVGAttributesAny> = Tag extends SVGTags ? Partial<SVGOwnAttributesBy[Tag] & SVGGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;

// Attributes without tag.
/** The all possible attributes that SVG elements can have - in native case. */
export type SVGAttributesAny = Partial<SVGCommonAttributes & SVGGlobalAttributes & GlobalListeners & ARIAAttributes>;

// Attributes dictionary.
/** Dictionary of SVG attributes by tag in native case. */
export type SVGAttributesBy = { [Tag in SVGTags]: SVGAttributes<Tag>; };


// - SVG core (or global) attributes - //

/** SVG attributes in native case available on all SVG elements. */
export interface SVGGlobalAttributes extends SVGGlobalAttributes_core {}

/** All SVG presentation attributes in native case. They can also be used as CSS properties. */
export interface SVGPresentationAttributes extends Pick<SVGCommonAttributes_core, 
    | "alignment-baseline"
    | "baseline-shift"
    | "clip"
    | "clip-path"
    | "clip-rule"
    | "color"
    | "color-interpolation"
    | "color-interpolation-filters"
    | "color-rendering"
    | "cursor"
    | "d"
    | "direction"
    | "display"
    | "dominant-baseline"
    | "fill"
    | "fill-opacity"
    | "fill-rule"
    | "filter"
    | "flood-color"
    | "flood-opacity"
    | "font-family"
    | "font-size"
    | "font-size-adjust"
    | "font-stretch"
    | "font-style"
    | "font-variant"
    | "font-weight"
    | "glyph-orientation-horizontal"
    | "glyph-orientation-vertical"
    | "image-rendering"
    | "letter-spacing"
    | "letter-spacing"
    | "marker-end"
    | "marker-mid"
    | "marker-start"
    | "opacity"
    | "overflow"
    | "pointer-events"
    | "shape-rendering"
    | "stop-color"
    | "stop-color"
    | "stroke"
    | "stroke-dasharray"
    | "stroke-dashoffset"
    | "stroke-linecap"
    | "stroke-linejoin"
    | "stroke-miterlimit"
    | "stroke-opacity"
    | "stroke-width"
    | "text-anchor"
    | "text-decoration"
    | "text-rendering"
    | "transform"
    | "transform-origin"
    | "unicode-bidi"
    | "vector-effect"
    | "visibility"
    | "word-spacing"
    | "writing-mode"
> {}

/** All attributes that are specific to tags in native case - excluding SVGGlobalAttributes. */
export interface SVGCommonAttributes extends SVGCommonAttributes_core {}


// - SVG attributes by tag name - //

/** SVG attributes by tags in native case - without global attributes, listeners nor aria. Might allow some more than should. */
export interface SVGOwnAttributesBy {
    a: Pick<HTMLAttributes<"a">, "download" | "href" | "hreflang" | "ping" | "referrerpolicy" | "rel" | "target"> & Pick<SVGCommonAttributes, "type" | "xlink:href">;
    animate: SVGAnimationAttributes_core;
    animateMotion: {
        keyPoints: SVGCommonAttributes["keyPoints"];
        path: SVGCommonAttributes["path"];
        rotate: SVGCommonAttributes["rotate"];
    } & SVGAnimationAttributes_core;
    animateTransform: SVGAnimationAttributes_core;
    circle: SVGPresentationAttributes & Pick<SVGCommonAttributes, "cx" | "cy" | "r" | "pathLength">;
    clipPath: Pick<SVGCommonAttributes, "clipPathUnits">;
    defs: {};
    desc: {};
    ellipse: SVGPresentationAttributes & Pick<SVGCommonAttributes, "cx" | "cy" | "rx" | "ry" | "pathLength">;
    feBlend: Pick<SVGCommonAttributes, "in" | "in2" | "mode">;
    feColorMatrix: Pick<SVGCommonAttributes, "in" | "type" | "values">;
    feComponentTransfer: Pick<SVGCommonAttributes, "in">;
    feComposite: Pick<SVGCommonAttributes, "in" | "in2" | "operator" | "k1" | "k2" | "k3" | "k4">;
    feConvolveMatrix: Pick<SVGCommonAttributes, "in" | "order" | "kernelMatrix" | "divisor" | "bias" | "targetX" | "targetY" | "edgeMode" | "kernelUnitLength" | "preserveAlpha">;
    feDiffuseLighting: Pick<SVGCommonAttributes, "in" | "surfaceScale" | "diffuseConstant" | "kernelUnitLength">;
    feDisplacementMap: Pick<SVGCommonAttributes, "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector">;
    feDistantLight: Pick<SVGCommonAttributes, "azimuth" | "elevation">;
    feDropShadow: Pick<SVGCommonAttributes, "dx" | "dy" | "stdDeviation">;
    feFlood: Pick<SVGCommonAttributes, "flood-color" | "flood-opacity">;
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: Pick<SVGCommonAttributes, "in" | "stdDeviation" | "edgeMode">;
    feImage: Pick<SVGCommonAttributes, "in" | "crossorigin" | "preserveAspectRatio" | "xlink:href">;
    feMergeNode: Pick<SVGCommonAttributes, "in">;
    feMorphology: Pick<SVGCommonAttributes, "in" | "operator" | "radius">;
    feOffset: Pick<SVGCommonAttributes, "in" | "dx" | "dy">;
    fePointLight: Pick<SVGCommonAttributes, "x" | "y" | "z">;
    feSpecularLighting: Pick<SVGCommonAttributes, "in" | "surfaceScale" | "specularConstant" | "specularExponent" | "kernelUnitLength">;
    feSpotLight: Pick<SVGCommonAttributes, "x" | "y" | "z" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "specularExponent" | "limitingConeAngle">;
    feTile: Pick<SVGCommonAttributes, "in">;
    feTurbulunece: Pick<SVGCommonAttributes, "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type">;
    filter: Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "filterUnits" | "primitiveUnits" | "xlink:href">;
    foreignObject: Pick<SVGCommonAttributes, "height" | "width" | "x" | "y">;
    g: SVGPresentationAttributes;
    image: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "href" | "xlink:href" | "preserveAspectRatio" | "crossorigin" | "decoding">;
    line: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x1" | "y1" | "x2" | "y2" | "pathLength">;
    linearGradient: Pick<SVGCommonAttributes, "gradientUnits" | "gradientTransform" | "href" | "spreadMethod" | "x1" | "x2" | "xlink:href" | "y1" | "y2">;
    marker: Pick<SVGCommonAttributes, "markerHeight" |"markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
    mask: Pick<SVGCommonAttributes, "height" | "maskContentUnits" | "maskUnits" | "x" | "y" | "width">;
    metadata: {};
    mpath: Pick<SVGCommonAttributes, "xlink:href">;
    path: SVGPresentationAttributes & Pick<SVGCommonAttributes, "d" | "pathLength">;
    pattern: Pick<SVGCommonAttributes, "height" | "href" | "patternContentUnits" | "patternTransform" | "patternUnits" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "xlink:href" | "y">;
    polygon: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    polyline: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    radialGradient: Pick<SVGCommonAttributes, "cx" | "cy" | "fr" | "fx" | "fy" | "gradientUnits" | "gradientTransform" | "href" | "r" | "spreadMethod" | "xlink:href">;
    rect: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "rx" | "ry" | "pathLength">;
    script: Pick<SVGCommonAttributes, "crossorigin" | "href" | "type" | "xlink:href">;
    set: Pick<SVGCommonAttributes, "to">;
    stop: Pick<SVGCommonAttributes, "offset" | "stop-color" | "stop-opacity">;
    style: Pick<SVGCommonAttributes, "type" | "media"> & { title: string; };
    svg: Pick<SVGCommonAttributes, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGCommonAttributes, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGCommonAttributes, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGCommonAttributes, "href" | "xlink:href" | "x" | "y" | "width" | "height">;
    view: {};
}


// - DOM tags and attributes - //

// Attributes with tag arg.
/** Get DOM attributes by tag in native case. In case fits both (like "a" tag) then gives both. Otherwise either or Fallback if not found (defaults to DOMAttributesAny). */
export type DOMAttributes<Tag extends string, Fallback = DOMAttributesAny> = Tag extends HTMLTags ? Tag extends SVGTags ? SVGAttributes<Tag> & HTMLAttributes<Tag> : HTMLAttributes<Tag> : Tag extends SVGTags ? SVGAttributes<Tag> : Fallback;

// Attributes without tag.
/** All the possible attributes that DOM elements (HTML or SVG) can have - in native case. */
export type DOMAttributesAny = HTMLAttributesAny & SVGAttributesAny;

// Attributes dictionary.
/** Dictionary of DOM attributes by tag in native case. */
export type DOMAttributesBy = { [Tag in DOMTags]: DOMAttributes<Tag>; };
