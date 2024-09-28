
// - Imports - //

// Local.
import { DataAttributes, OrString } from "./common";
import { GlobalListeners, GlobalListeners_native } from "./GlobalListeners";
import { CSSBlendMode, CSSColorNames, CSSProperties } from "./CSSProperties";
import { ARIAAttributes, ARIAAttributes_native } from "./ARIAAttributes";
// For reusing "a" definition.
import { HTMLAttributes, HTMLAttributes_native } from "./HTMLAttributes";


// - Info source (at around Q3 2024) - //
//
// MDN docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#event_attributes


// - Exports - //

// Tags.
/** All known SVG tag names. */
export type SVGTags = keyof SVGNativeAttributesBy;

// Attributes.
/** SVG element attributes by tag name with camelCase listener and aria attributes. */
export type SVGAttributes<Tag extends string, Fallback = SVGAttributesAny> = [Tag] extends [SVGTags] ? Partial<SVGNativeAttributesBy[Tag] & SVGCoreAttributes & GlobalListeners & ARIAAttributes> : Fallback;
/** SVG element attributes by tag name with lowercase listener and aria attributes. */
export type SVGAttributes_native<Tag extends string, Fallback = SVGAttributesAny_native> = [Tag] extends [SVGTags] ? Partial<SVGNativeAttributesBy_native[Tag] & SVGCoreAttributes_native & GlobalListeners_native & ARIAAttributes_native> : Fallback;

// Attributes without tag.
/** The all possible attributes that SVG elements can have - in camelCase. */
export type SVGAttributesAny = Partial<SVGOtherAttributes & SVGCoreAttributes & GlobalListeners & ARIAAttributes>;
/** The all possible attributes that SVG elements can have - in native case. */
export type SVGAttributesAny_native = Partial<SVGOtherAttributes_native & SVGCoreAttributes_native & GlobalListeners_native & ARIAAttributes_native>;


// - SVG Generic attributes - //

interface SVGCoreAttributes extends DataAttributes {
    "id": string | number;
    "class": string;
    /** Alias for "class". */
    "className": string;
    "lang": string;
    "style": string | CSSProperties;
    /** Translates to "tabindex". */
    "tabIndex": string | number;
    /** Translates to "xml:base". */
    "xmlBase": string;
    /** Translates to "xml:lang". */
    "xmlLang": string;
    /** Translates to "xml:space". */
    "xmlSpace": string;
    "xmlns": string;
    /** Translates to "xmlns:xlink". */
    "xmlnsXlink": string;
}
interface SVGCoreAttributes_native extends DataAttributes {
    "id": string | number;
    "class": string;
    "lang": string;
    "style": string | CSSProperties;
    "tabindex": string | number;
    "xml:base": string;
    "xml:lang": string;
    "xml:space": string;
    "xmlns": string;
    "xmlns:xlink": string;
}


// - SVG animation attributes - //

interface SVGAnimationAttributes extends
    AnimationTargetElementAttributes,
    AnimationAttributeTargetAttributes,
    AnimationTimingAttributes,
    AnimationValueAttributes,
    AnimationAdditionAttributes
    {}

interface AnimationTargetElementAttributes {
    "href": string;
}
interface AnimationAttributeTargetAttributes {
    "attributeType": string;
    "attributeName": string;
}
interface AnimationTimingAttributes {
    "begin": string | number;
    "dur": string | number;
    "end": string | number;
    "min": string | number;
    "max": string | number;
    "restart": "always" | "whenNotActive" | "never" | OrString;
    "repeatCount": "indefinite" | OrString | number;
    "repeatDur": string | number;
    "fill": "freeze" | "remove" | CSSColorNames | OrString;
}
interface AnimationValueAttributes {
    "calcMode": "discrete" | "linear" | "paced" | "spline" | OrString;
    "values": string | number;
    "keyTimes": string | number;
    "keySplines": string;
    "from": string | number;
    "to": string | number;
    "by": string | number;
}
interface AnimationAdditionAttributes {
    "additive": "replace" | "sum" | OrString;
    "accumulate": "none" | "sum" | OrString;
}


// - SVG Other attributes - //

/** Note: All SVG presentation attributes can be used as CSS properties. */
interface SVGPresentationAttributes extends Pick<SVGOtherAttributes_native, 
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


// - SVG tag specific attributes - //

/** All tag specific SVG other attributes in camelCase. */
interface SVGOtherAttributes extends Omit<SVGOtherAttributes_native,
    | "accent-height"
    | "alignment-baseline"
    | "allow-reorder"
    | "arabic-form"
    | "baseline-shift"
    | "color-interpolation"
    | "color-interpolation-filters"
    | "color-rendering"
    | "crossorigin"
    | "dominant-baseline"
    | "fill-opacity"
    | "fill-rule"
    | "flood-color"
    | "flood-opacity"
    | "font-family"
    | "font-size"
    | "font-size-adjust"
    | "font-style"
    | "font-variant"
    | "font-weight"
    | "glyph-name"
    | "glyph-orientation-horizontal"
    | "glyph-orientation-vertical"
    | "horiz-adv-x"
    | "horiz-origin-x"
    | "horiz-origin-y"
    | "image-rendering"
    | "letter-spacing"
    | "lighting-color"
    | "marker-end"
    | "marker-mid"
    | "marker-start"
    | "overline-position"
    | "overline-thickness"
    | "paint-order"
    | "pointer-events"
    | "shape-rendering"
    | "stop-color"
    | "stop-opacity"
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
    | "transform-origin"
    | "underline-position"
    | "underline-thickness"
    | "unicode-bidi"
    | "unicode-range"
    | "units-per-em"
    | "v-alphabetic"
    | "v-hanging"
    | "v-ideographic"
    | "v-mathematical"
    | "vector-effect"
    | "vert-adv-y"
    | "vert-origin-x"
    | "vert-origin-y"
    | "word-spacing"
    | "writing-mode"
    | "xlink:actuate"
    | "xlink:arcrole"
    | "xlink:href"
    | "xlink:role"
    | "xlink:show"
    | "xlink:title"
    | "xlink:type"
> {
    "accentHeight": SVGOtherAttributes_native["accent-height"];
    "alignmentBaseline": SVGOtherAttributes_native["alignment-baseline"];
    "allowReorder": SVGOtherAttributes_native["allow-reorder"];
    "arabicForm": SVGOtherAttributes_native["arabic-form"];
    "baselineShift": SVGOtherAttributes_native["baseline-shift"];
    "capHeight": SVGOtherAttributes_native["cap-height"];
    "clipPath": SVGOtherAttributes_native["clip-path"];
    "clipRule": SVGOtherAttributes_native["clip-rule"];
    "colorInterpolation": SVGOtherAttributes_native["color-interpolation"];
    "colorInterpolationFilters": SVGOtherAttributes_native["color-interpolation-filters"];
    "colorRendering": SVGOtherAttributes_native["color-rendering"];
    "crossOrigin": SVGOtherAttributes_native["crossorigin"];
    "dominantBaseline": SVGOtherAttributes_native["dominant-baseline"];
    "fillOpacity": SVGOtherAttributes_native["fill-opacity"];
    "fillRule": SVGOtherAttributes_native["fill-rule"];
    "floodColor": SVGOtherAttributes_native["flood-color"];
    "floodOpacity": SVGOtherAttributes_native["flood-opacity"];
    "fontFamily": SVGOtherAttributes_native["font-family"];
    "fontSize": SVGOtherAttributes_native["font-size"];
    "fontSizeAdjust": SVGOtherAttributes_native["font-size-adjust"];
    "fontStretch": SVGOtherAttributes_native["font-stretch"];
    "fontStyle": SVGOtherAttributes_native["font-style"];
    "fontVariant": SVGOtherAttributes_native["font-variant"];
    "fontWeight": SVGOtherAttributes_native["font-weight"];
    "glyphName": SVGOtherAttributes_native["glyph-name"];
    "glyphOrientationHorizontal": SVGOtherAttributes_native["glyph-orientation-horizontal"];
    "glyphOrientationVertical": SVGOtherAttributes_native["glyph-orientation-vertical"];
    "horizAdvX": SVGOtherAttributes_native["horiz-adv-x"];
    "horizOriginX": SVGOtherAttributes_native["horiz-origin-x"];
    "horizOriginY": SVGOtherAttributes_native["horiz-origin-y"];
    "imageRendering": SVGOtherAttributes_native["image-rendering"];
    "letterSpacing": SVGOtherAttributes_native["letter-spacing"];
    "lightingColor": SVGOtherAttributes_native["lighting-color"];
    "markerEnd": SVGOtherAttributes_native["marker-end"];
    "markerMid": SVGOtherAttributes_native["marker-mid"];
    "markerStart": SVGOtherAttributes_native["marker-start"];
    "overlinePosition": SVGOtherAttributes_native["overline-position"];
    "overlineThickness": SVGOtherAttributes_native["overline-thickness"];
    "paintOrder": SVGOtherAttributes_native["paint-order"];
    "pointerEvents": SVGOtherAttributes_native["pointer-events"];
    "shapeRendering": SVGOtherAttributes_native["shape-rendering"];
    "stopColor": SVGOtherAttributes_native["stop-color"];
    "stopOpacity": SVGOtherAttributes_native["stop-opacity"];
    "strokeDasharray": SVGOtherAttributes_native["stroke-dasharray"];
    "strokeDashoffset": SVGOtherAttributes_native["stroke-dashoffset"];
    "strokeLinecap": SVGOtherAttributes_native["stroke-linecap"];
    "strokeLinejoin": SVGOtherAttributes_native["stroke-linejoin"];
    "strokeMiterlimit": SVGOtherAttributes_native["stroke-miterlimit"];
    "strokeOpacity": SVGOtherAttributes_native["stroke-opacity"];
    "strokeWidth": SVGOtherAttributes_native["stroke-width"];
    "textAnchor": SVGOtherAttributes_native["text-anchor"];
    "textDecoration": SVGOtherAttributes_native["text-decoration"];
    "textRendering": SVGOtherAttributes_native["text-rendering"];
    "transformOrigin": SVGOtherAttributes_native["transform-origin"];
    "underlinePosition": SVGOtherAttributes_native["underline-position"];
    "underlineThickness": SVGOtherAttributes_native["underline-thickness"];
    "unicodeBidi": SVGOtherAttributes_native["unicode-bidi"];
    "unicodeRange": SVGOtherAttributes_native["unicode-range"];
    "unitsPerEm": SVGOtherAttributes_native["units-per-em"];
    "vAlphabetic": SVGOtherAttributes_native["v-alphabetic"];
    "vHanging": SVGOtherAttributes_native["v-hanging"];
    "vIdeographic": SVGOtherAttributes_native["v-ideographic"];
    "vMathematical": SVGOtherAttributes_native["v-mathematical"];
    "vectorEffect": SVGOtherAttributes_native["vector-effect"];
    "vertAdvY": SVGOtherAttributes_native["vert-adv-y"];
    "vertOriginX": SVGOtherAttributes_native["vert-origin-x"];
    "vertOriginY": SVGOtherAttributes_native["vert-origin-y"];
    "wordSpacing": SVGOtherAttributes_native["word-spacing"];
    "writingMode": SVGOtherAttributes_native["writing-mode"];
    "xlinkActuate": SVGOtherAttributes_native["xlink:actuate"];
    "xlinkArcrole": SVGOtherAttributes_native["xlink:arcrole"];
    "xlinkHref": SVGOtherAttributes_native["xlink:href"];
    "xlinkRole": SVGOtherAttributes_native["xlink:role"];
    "xlinkShow": SVGOtherAttributes_native["xlink:show"];
    "xlinkTitle": SVGOtherAttributes_native["xlink:title"];
    "xlinkType": SVGOtherAttributes_native["xlink:type"];
}
/** All attributes that are specific to tags - so excluding SVGCoreAttributes. */
interface SVGOtherAttributes_native {
    "accent-height": string | number;
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | OrString;
    "allow-reorder": "no" | "yes" | OrString;
    "alphabetic": string | number;
    "amplitude": string | number;
    "arabic-form": "initial" | "medial" | "terminal" | "isolated" | OrString;
    "ascent": string | number;
    "autoReverse": string | number;
    "azimuth": string | number;
    "baseFrequency": string | number;
    "baseline-shift": string;
    "baseProfile": string | number;
    "bbox": string | number;
    "bias": string | number;
    "cap-height": string | number;
    "clip": string;
    "clip-path": string;
    "clip-rule": string | number;
    "clipPathUnits": string | number;
    "color": string;
    "color-interpolation": "auto" | "sRGB" | "linearRGB" | "inherit" | OrString;
    "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | "inherit" | OrString;
    "color-rendering": string | number;
    "crossorigin": string;
    "cursor": string;
    "cx": string | number;
    "cy": string | number;
    "d": string;
    // data-*
    "decelerate": string;
    "decoding": string;
    "descent": string | number;
    "diffuseConstant": string | number;
    "direction": "ltr" | "rtl" | OrString;
    "display": string;
    "divisor": string | number;
    "dominant-baseline": string;
    "dx": string | number;
    "dy": string | number;
    "edgeMode": string | number;
    "elevation": string | number;
    "exponent": string | number;
    "fill": CSSColorNames | OrString; // Also others.
    "fill-opacity": string | number;
    "fill-rule": "nonzero" | "evenodd" | "inherit";
    "filter": string;
    "filterRes": string | number;
    "filterUnits": string | number;
    "flood-color": string;
    "flood-opacity": string | number;
    "font-family": string;
    "font-size": string | number;
    "font-size-adjust": "none" | OrString | number;
    "font-stretch": "normal" | "semi-condensed" | "condensed" | "extra-condensed" | "ultra-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | OrString | number;
    "font-style": "normal" | "italic" | "oblique" | OrString;
    "font-variant": "normal" | "none" | OrString;
    "font-weight": "normal" | "bold" | "bolder" | "lighter" | OrString | number;
    "format": string;
    "fr": string | number;
    "fx": string | number;
    "fy": string | number;
    "g1": string;
    "g2": string;
    "glyph-name": string;
    "glyph-orientation-horizontal": string | number;
    "glyph-orientation-vertical": string | number;
    "glyphRef": string | number;
    "gradientTransform": string;
    "gradientUnits": "userSpaceOnUse" | "objectBoundingBox" | OrString;
    "hanging": string | number;
    "height": string | number;
    "href": string;
    "horiz-adv-x": string | number;
    "horiz-origin-x": string | number;
    "horiz-origin-y": string | number;
    "id": string | number;
    "ideographic": string | number;
    "image-rendering": string;
    "in": "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | OrString;
    "in2": "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | OrString;
    "intercept": string | number;
    "k": string | number;
    "k1": string | number;
    "k2": string | number;
    "k3": string | number;
    "k4": string | number;
    "kernelMatrix": string | number | string[] | number[];
    "kernelUnitLength": string | number;
    "keyPoints": string | number;
    "lengthAdjust": string | number;
    "letter-spacing": string | number;
    "limitingConeAngle": string | number;
    "lighting-color": string;
    "local": string;
    "marker-end": "none" | OrString;
    "marker-mid": "none" | OrString;
    "marker-start": "none" | OrString;
    "markerHeight": string | number;
    "markerUnits": string | number;
    "markerWidth": string | number;
    "mask": string;
    "maskContentUnits": "userSpaceOnUse" | "strokeWidth" | OrString;
    "maskUnits": string | number;
    "mathematical": string | number;
    "media": string | number;
    "method": "align" | "stretch" | OrString;
    "mode": CSSBlendMode;
    "name": string;
    "numOctaves": string | number;
    "offset": string | number;
    "opacity": string | number;
    "operator": "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic" | OrString;
    "order": string | number;
    "orient": "auto" | "auto-start-reverse" | OrString | number;
    "orientation": "h" | "v" | OrString;
    "origin": string;
    "overflow": "visible" | "hidden" | "scroll" | "auto" | OrString;
    "overline-position": string | number;
    "overline-thickness": string | number;
    "panose-1": string | number;
    "paint-order": "normal" | "fill" | "stroke" | "markers" | OrString;
    "path": string;
    "pathLength": string | number;
    "patternContentUnits": "userSpaceOnUse" | "objectBoundingBox" | OrString;
    "patternTransform": "string";
    "patternUnits": "userSpaceOnUse" | "objectBoundingBox" | OrString;
    "ping": string;
    "pointer-events": "bounding-box" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "none" | OrString;
    "points": string | number | string[] | number[];
    "pointsAtX": string | number;
    "pointsAtY": string | number;
    "pointsAtZ": string | number;
    "preserveAlpha": "true" | "false" | OrString;
    "preserveAspectRatio": "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax" | "meet" | "slice" | OrString;
    "primitiveUnits": "userSpaceOnUse" | "objectBoundingBox" | OrString;
    "r": string | number;
    "radius": string | number;
    "referrerPolicy": "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | OrString;
    "refX": "left" | "center" | "right" | OrString | number;
    "refY": "left" | "center" | "right" | OrString | number;
    "rel": string;
    "requiredExtensions": string; 
    "requiredFeatures": string; // Deprecated.
    "result": string;
    "rotate": "auto" | "auto-reverse" | OrString | number;
    "rx": string | number;
    "ry": string | number;
    "scale": string | number;
    "seed": string | number;
    "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | OrString;
    "side": "left" | "right" | OrString;
    "slope": string | number;
    "spacing": "auto" | "exact" | OrString;
    "specularConstant": string | number;
    "specularExponent": string | number;
    "speed": string | number;
    "spreadMethod": "pad" | "reflect" | "repeat" | OrString;
    "startOffset": string | number;
    "stdDeviation": string | number;
    "stemh": string | number;
    "stemv": string | number;
    "stitchTiles": "noStitch" | "stitch" | OrString;
    "stop-color"?: CSSColorNames;
    "stop-opacity"?: string | number;
    "strikethrough-position": string | number;
    "strikethrough-thickness": string | number;
    "string": string | boolean | number;
    "stroke": CSSColorNames | OrString; // Also others.
    "stroke-dasharray": string | number;
    "stroke-dashoffset": string | number;
    "stroke-linecap": "butt" | "round" | "square" | "inherit" | OrString;
    "stroke-linejoin": "butt" | "round" | "square" | "inherit" | OrString;
    "stroke-miterlimit": string | number;
    "stroke-opacity": string | number;
    "stroke-width": string | number;
    "surfaceScale": string | number;
    "systemLanguage": string;
    "tableValues": string | string | number[] | number[];
    "target": "_self" | "_parent" | "_top" | "_blank" | OrString;
    "targetX": string | number;
    "targetY": string | number;
    "text-anchor": "start" | "middle" | "end" | OrString;
    "text-decoration": string;
    "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | OrString;
    "textLength": string | number;
    "title": string;
    "to": string | number; // Also in AnimationValueAttributes
    "transform": string;
    "transform-origin": string;
    "type":
        | "translate" | "scale" | "rotate" | "skewX" | "skewY" // animateTransform
        | "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha" // feColorMatrix
        | "identity" | "table" | "discrete" | "linear" | "gamma" // feFuncR, feFuncG, feFuncB, feFuncA
        | "fractalNoise" | "turbulence" // feTurbulence
        | OrString; // style, script
    "u1": string;
    "u2": string;
    "underline-position": string | number;
    "underline-thickness": string | number;
    "unicode": string;
    "unicode-bidi": "normal" | "embed" | "bidi-override" | "isolate" | "isolate-override" | "plaintext" | OrString;
    "unicode-range": string | number;
    "units-per-em": string | number;
    "v-alphabetic": string | number;
    "v-hanging": string | number;
    "v-ideographic": string | number;
    "v-mathematical": string | number;
    "values": string | number; // Also in AnimationValueAttributes
    "vector-effect": "none" | "non-scaling-stroke" | "non-scaling-size" | "non-rotation" | "fixed-position" | OrString;
    "version": string;
    "vert-adv-y": string | number;
    "vert-origin-x": string | number;
    "vert-origin-y": string | number;
    "viewBox": string;
    "viewTarget": string | number;
    "visibility": "visible" | "hidden" | "collapse" | OrString;
    "width": string | number;
    "widths": string | number;
    "word-spacing": "normal" | OrString | number;
    "writing-mode": "horizontal-tb" | "vertical-rl" | "vertical-lr" | OrString;
    "x1": string | number;
    "x2": string | number;
    "x": string | number;
    "xChannelSelector": "R" | "G" | "B" | "A" | OrString;
    "xHeight": string | number;
    "xlink:actuate": string;
    "xlink:arcrole": string;
    "xlink:href": string;
    "xlink:role": string;
    "xlink:show": string;
    "xlink:title": string;
    "xlink:type": string;
    "y1": string | number;
    "y2": string | number;
    "y": string | number;
    "yChannelSelector": "R" | "G" | "B" | "A" | OrString;
    "z": string | number;
    "zoomAndPan": "disable" | "magnify" | OrString;
}


// - By tag - //

// Manual additions.
/** By tags with attributes in camelCase. Might allow some more than should. */
interface SVGNativeAttributesBy {
    a: Pick<HTMLAttributes<"a">, "download" | "href" | "hrefLang" | "ping" | "referrerPolicy" | "rel" | "target"> & Pick<SVGOtherAttributes, "type" | "xlinkHref">;
    animate: SVGAnimationAttributes;
    animateMotion: {
        keyPoints: SVGOtherAttributes["keyPoints"];
        path: SVGOtherAttributes["path"];
        rotate: SVGOtherAttributes["rotate"];
    } & SVGAnimationAttributes;
    animateTransform: SVGAnimationAttributes;
    circle: SVGPresentationAttributes & Pick<SVGOtherAttributes, "cx" | "cy" | "r" | "pathLength">;
    clipPath: Pick<SVGOtherAttributes, "clipPathUnits">;
    defs: {};
    desc: {};
    ellipse: SVGPresentationAttributes & Pick<SVGOtherAttributes, "cx" | "cy" | "rx" | "ry" | "pathLength">;
    feBlend: Pick<SVGOtherAttributes, "in" | "in2" | "mode">;
    feColorMatrix: Pick<SVGOtherAttributes, "in" | "type" | "values">;
    feComponentTransfer: Pick<SVGOtherAttributes, "in">;
    feComposite: Pick<SVGOtherAttributes, "in" | "in2" | "operator" | "k1" | "k2" | "k3" | "k4">;
    feConvolveMatrix: Pick<SVGOtherAttributes, "in" | "order" | "kernelMatrix" | "divisor" | "bias" | "targetX" | "targetY" | "edgeMode" | "kernelUnitLength" | "preserveAlpha">;
    feDiffuseLighting: Pick<SVGOtherAttributes, "in" | "surfaceScale" | "diffuseConstant" | "kernelUnitLength">;
    feDisplacementMap: Pick<SVGOtherAttributes, "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector">;
    feDistantLight: Pick<SVGOtherAttributes, "azimuth" | "elevation">;
    feDropShadow: Pick<SVGOtherAttributes, "dx" | "dy" | "stdDeviation">;
    feFlood: Pick<SVGOtherAttributes, "floodColor" | "floodOpacity">;
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: Pick<SVGOtherAttributes, "in" | "stdDeviation" | "edgeMode">;
    feImage: Pick<SVGOtherAttributes, "in" | "crossOrigin" | "preserveAspectRatio" | "xlinkHref">;
    feMergeNode: Pick<SVGOtherAttributes, "in">;
    feMorphology: Pick<SVGOtherAttributes, "in" | "operator" | "radius">;
    feOffset: Pick<SVGOtherAttributes, "in" | "dx" | "dy">;
    fePointLight: Pick<SVGOtherAttributes, "x" | "y" | "z">;
    feSpecularLighting: Pick<SVGOtherAttributes, "in" | "surfaceScale" | "specularConstant" | "specularExponent" | "kernelUnitLength">;
    feSpotLight: Pick<SVGOtherAttributes, "x" | "y" | "z" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "specularExponent" | "limitingConeAngle">;
    feTile: Pick<SVGOtherAttributes, "in">;
    feTurbulunece: Pick<SVGOtherAttributes, "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type">;
    filter: Pick<SVGOtherAttributes, "x" | "y" | "width" | "height" | "filterUnits" | "primitiveUnits" | "xlinkHref">;
    foreignObject: Pick<SVGOtherAttributes, "height" | "width" | "x" | "y">;
    g: SVGPresentationAttributes;
    image: SVGPresentationAttributes & Pick<SVGOtherAttributes, "x" | "y" | "width" | "height" | "href" | "xlinkHref" | "preserveAspectRatio" | "crossOrigin" | "decoding">;
    line: SVGPresentationAttributes & Pick<SVGOtherAttributes, "x1" | "y1" | "x2" | "y2" | "pathLength">;
    linearGradient: Pick<SVGOtherAttributes, "gradientUnits" | "gradientTransform" | "href" | "spreadMethod" | "x1" | "x2" | "xlinkHref" | "y1" | "y2">;
    marker: Pick<SVGOtherAttributes, "markerHeight" |"markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
    mask: Pick<SVGOtherAttributes, "height" | "maskContentUnits" | "maskUnits" | "x" | "y" | "width">;
    metadata: {};
    mpath: Pick<SVGOtherAttributes, "xlinkHref">;
    path: SVGPresentationAttributes & Pick<SVGOtherAttributes, "d" | "pathLength">;
    pattern: Pick<SVGOtherAttributes, "height" | "href" | "patternContentUnits" | "patternTransform" | "patternUnits" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "xlinkHref" | "y">;
    polygon: SVGPresentationAttributes & Pick<SVGOtherAttributes, "points" | "pathLength">;
    polyline: SVGPresentationAttributes & Pick<SVGOtherAttributes, "points" | "pathLength">;
    radialGradient: Pick<SVGOtherAttributes, "cx" | "cy" | "fr" | "fx" | "fy" | "gradientUnits" | "gradientTransform" | "href" | "r" | "spreadMethod" | "xlinkHref">;
    rect: SVGPresentationAttributes & Pick<SVGOtherAttributes, "x" | "y" | "width" | "height" | "rx" | "ry" | "pathLength">;
    script: Pick<SVGOtherAttributes, "crossOrigin" | "href" | "type" | "xlinkHref">;
    set: Pick<SVGOtherAttributes, "to">;
    stop: Pick<SVGOtherAttributes, "offset" | "stopColor" | "stopOpacity">;
    style: Pick<SVGOtherAttributes, "type" | "media" | "title">;
    svg: Pick<SVGOtherAttributes, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGOtherAttributes, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: SVGPresentationAttributes & Pick<SVGOtherAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGOtherAttributes, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGOtherAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGOtherAttributes, "href" | "xlinkHref" | "x" | "y" | "width" | "height">;
    view: {};
}
/** By tags with attributes in native case. Might allow some more than should. */
interface SVGNativeAttributesBy_native {
    a: Pick<HTMLAttributes_native<"a">, "download" | "href" | "hreflang" | "ping" | "referrerpolicy" | "rel" | "target"> & Pick<SVGOtherAttributes_native, "type" | "xlink:href">;
    animate: SVGAnimationAttributes;
    animateMotion: {
        keyPoints: SVGOtherAttributes_native["keyPoints"];
        path: SVGOtherAttributes_native["path"];
        rotate: SVGOtherAttributes_native["rotate"];
    } & SVGAnimationAttributes;
    animateTransform: SVGAnimationAttributes;
    circle: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "cx" | "cy" | "r" | "pathLength">;
    clipPath: Pick<SVGOtherAttributes_native, "clipPathUnits">;
    defs: {};
    desc: {};
    ellipse: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "cx" | "cy" | "rx" | "ry" | "pathLength">;
    feBlend: Pick<SVGOtherAttributes_native, "in" | "in2" | "mode">;
    feColorMatrix: Pick<SVGOtherAttributes_native, "in" | "type" | "values">;
    feComponentTransfer: Pick<SVGOtherAttributes_native, "in">;
    feComposite: Pick<SVGOtherAttributes_native, "in" | "in2" | "operator" | "k1" | "k2" | "k3" | "k4">;
    feConvolveMatrix: Pick<SVGOtherAttributes_native, "in" | "order" | "kernelMatrix" | "divisor" | "bias" | "targetX" | "targetY" | "edgeMode" | "kernelUnitLength" | "preserveAlpha">;
    feDiffuseLighting: Pick<SVGOtherAttributes_native, "in" | "surfaceScale" | "diffuseConstant" | "kernelUnitLength">;
    feDisplacementMap: Pick<SVGOtherAttributes_native, "in" | "in2" | "scale" | "xChannelSelector" | "yChannelSelector">;
    feDistantLight: Pick<SVGOtherAttributes_native, "azimuth" | "elevation">;
    feDropShadow: Pick<SVGOtherAttributes_native, "dx" | "dy" | "stdDeviation">;
    feFlood: Pick<SVGOtherAttributes_native, "flood-color" | "flood-opacity">;
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: Pick<SVGOtherAttributes_native, "in" | "stdDeviation" | "edgeMode">;
    feImage: Pick<SVGOtherAttributes_native, "in" | "crossorigin" | "preserveAspectRatio" | "xlink:href">;
    feMergeNode: Pick<SVGOtherAttributes_native, "in">;
    feMorphology: Pick<SVGOtherAttributes_native, "in" | "operator" | "radius">;
    feOffset: Pick<SVGOtherAttributes_native, "in" | "dx" | "dy">;
    fePointLight: Pick<SVGOtherAttributes_native, "x" | "y" | "z">;
    feSpecularLighting: Pick<SVGOtherAttributes_native, "in" | "surfaceScale" | "specularConstant" | "specularExponent" | "kernelUnitLength">;
    feSpotLight: Pick<SVGOtherAttributes_native, "x" | "y" | "z" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "specularExponent" | "limitingConeAngle">;
    feTile: Pick<SVGOtherAttributes_native, "in">;
    feTurbulunece: Pick<SVGOtherAttributes_native, "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type">;
    filter: Pick<SVGOtherAttributes_native, "x" | "y" | "width" | "height" | "filterUnits" | "primitiveUnits" | "xlink:href">;
    foreignObject: Pick<SVGOtherAttributes_native, "height" | "width" | "x" | "y">;
    g: SVGPresentationAttributes;
    image: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "x" | "y" | "width" | "height" | "href" | "xlink:href" | "preserveAspectRatio" | "crossorigin" | "decoding">;
    line: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "x1" | "y1" | "x2" | "y2" | "pathLength">;
    linearGradient: Pick<SVGOtherAttributes_native, "gradientUnits" | "gradientTransform" | "href" | "spreadMethod" | "x1" | "x2" | "xlink:href" | "y1" | "y2">;
    marker: Pick<SVGOtherAttributes_native, "markerHeight" |"markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
    mask: Pick<SVGOtherAttributes_native, "height" | "maskContentUnits" | "maskUnits" | "x" | "y" | "width">;
    metadata: {};
    mpath: Pick<SVGOtherAttributes_native, "xlink:href">;
    path: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "d" | "pathLength">;
    pattern: Pick<SVGOtherAttributes_native, "height" | "href" | "patternContentUnits" | "patternTransform" | "patternUnits" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "xlink:href" | "y">;
    polygon: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "points" | "pathLength">;
    polyline: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "points" | "pathLength">;
    radialGradient: Pick<SVGOtherAttributes_native, "cx" | "cy" | "fr" | "fx" | "fy" | "gradientUnits" | "gradientTransform" | "href" | "r" | "spreadMethod" | "xlink:href">;
    rect: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "x" | "y" | "width" | "height" | "rx" | "ry" | "pathLength">;
    script: Pick<SVGOtherAttributes_native, "crossorigin" | "href" | "type" | "xlink:href">;
    set: Pick<SVGOtherAttributes_native, "to">;
    stop: Pick<SVGOtherAttributes_native, "offset" | "stop-color" | "stop-opacity">;
    style: Pick<SVGOtherAttributes_native, "type" | "media"> & { title: string; };
    svg: Pick<SVGOtherAttributes_native, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGOtherAttributes_native, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: SVGPresentationAttributes & Pick<SVGOtherAttributes_native, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGOtherAttributes_native, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGOtherAttributes_native, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGOtherAttributes_native, "href" | "xlink:href" | "x" | "y" | "width" | "height">;
    view: {};
}
