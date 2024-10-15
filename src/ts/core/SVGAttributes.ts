
// - Imports - //

// Local.
import { AnyString } from "../helpers";
import { DataAttributes } from "./commonDOM";
import { CSSBlendMode, CSSColorNames, CSSProperties } from "../CSSProperties";


// - Info source (at around Q3 2024) - //
//
// MDN docs: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#event_attributes


// - SVG core (or global) attributes - //

/** SVG attributes in native case available on all SVG elements. */
export interface SVGGlobalAttributes_core extends DataAttributes {
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

/** SVG animation attributes in native case available on all animation related elements (animate, animateMotion, animateTransform). */
export interface SVGAnimationAttributes_core extends
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
    "restart": "always" | "whenNotActive" | "never" | AnyString;
    "repeatCount": "indefinite" | AnyString | number;
    "repeatDur": string | number;
    "fill": "freeze" | "remove" | CSSColorNames;
}
interface AnimationValueAttributes {
    "calcMode": "discrete" | "linear" | "paced" | "spline" | AnyString;
    "values": string | number;
    "keyTimes": string | number;
    "keySplines": string;
    "from": string | number;
    "to": string | number;
    "by": string | number;
}
interface AnimationAdditionAttributes {
    "additive": "replace" | "sum" | AnyString;
    "accumulate": "none" | "sum" | AnyString;
}


// - SVG common attributes (tag specific) - //

/** All attributes that are specific to tags in native case - excluding SVGGlobalAttributes. */
export interface SVGCommonAttributes_core {
    "accent-height": string | number;
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | AnyString;
    "allow-reorder": "no" | "yes" | AnyString;
    "alphabetic": string | number;
    "amplitude": string | number;
    "arabic-form": "initial" | "medial" | "terminal" | "isolated" | AnyString;
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
    "color-interpolation": "auto" | "sRGB" | "linearRGB" | "inherit" | AnyString;
    "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | "inherit" | AnyString;
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
    "direction": "ltr" | "rtl" | AnyString;
    "display": string;
    "divisor": string | number;
    "dominant-baseline": string;
    "dx": string | number;
    "dy": string | number;
    "edgeMode": string | number;
    "elevation": string | number;
    "exponent": string | number;
    "fill": CSSColorNames;
    "fill-opacity": string | number;
    "fill-rule": "nonzero" | "evenodd" | "inherit" | AnyString;
    "filter": string;
    "filterRes": string | number;
    "filterUnits": string | number;
    "flood-color": string;
    "flood-opacity": string | number;
    "font-family": string;
    "font-size": string | number;
    "font-size-adjust": "none" | AnyString | number;
    "font-stretch": "normal" | "semi-condensed" | "condensed" | "extra-condensed" | "ultra-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | AnyString | number;
    "font-style": "normal" | "italic" | "oblique" | AnyString;
    "font-variant": "normal" | "none" | AnyString;
    "font-weight": "normal" | "bold" | "bolder" | "lighter" | AnyString | number;
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
    "gradientUnits": "userSpaceOnUse" | "objectBoundingBox" | AnyString;
    "hanging": string | number;
    "height": string | number;
    "href": string;
    "horiz-adv-x": string | number;
    "horiz-origin-x": string | number;
    "horiz-origin-y": string | number;
    "id": string | number;
    "ideographic": string | number;
    "image-rendering": string;
    "in": "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | AnyString;
    "in2": "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | AnyString;
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
    "marker-end": "none" | AnyString;
    "marker-mid": "none" | AnyString;
    "marker-start": "none" | AnyString;
    "markerHeight": string | number;
    "markerUnits": string | number;
    "markerWidth": string | number;
    "mask": string;
    "maskContentUnits": "userSpaceOnUse" | "strokeWidth" | AnyString;
    "maskUnits": string | number;
    "mathematical": string | number;
    "media": string | number;
    "method": "align" | "stretch" | AnyString;
    "mode": CSSBlendMode | AnyString;
    "name": string;
    "numOctaves": string | number;
    "offset": string | number;
    "opacity": string | number;
    "operator": "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic" | AnyString;
    "order": string | number;
    "orient": "auto" | "auto-start-reverse" | AnyString | number;
    "orientation": "h" | "v" | AnyString;
    "origin": string;
    "overflow": "visible" | "hidden" | "scroll" | "auto" | AnyString;
    "overline-position": string | number;
    "overline-thickness": string | number;
    "panose-1": string | number;
    "paint-order": "normal" | "fill" | "stroke" | "markers" | AnyString;
    "path": string;
    "pathLength": string | number;
    "patternContentUnits": "userSpaceOnUse" | "objectBoundingBox" | AnyString;
    "patternTransform": "string";
    "patternUnits": "userSpaceOnUse" | "objectBoundingBox" | AnyString;
    "ping": string;
    "pointer-events": "bounding-box" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "none" | AnyString;
    "points": string | number | string[] | number[];
    "pointsAtX": string | number;
    "pointsAtY": string | number;
    "pointsAtZ": string | number;
    "preserveAlpha": "true" | "false" | AnyString;
    "preserveAspectRatio": "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax" | "meet" | "slice" | AnyString;
    "primitiveUnits": "userSpaceOnUse" | "objectBoundingBox" | AnyString;
    "r": string | number;
    "radius": string | number;
    "referrerPolicy": "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | AnyString;
    "refX": "left" | "center" | "right" | AnyString | number;
    "refY": "left" | "center" | "right" | AnyString | number;
    "rel": string;
    "requiredExtensions": string; 
    "requiredFeatures": string; // Deprecated.
    "result": string;
    "rotate": "auto" | "auto-reverse" | AnyString | number;
    "rx": string | number;
    "ry": string | number;
    "scale": string | number;
    "seed": string | number;
    "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | AnyString;
    "side": "left" | "right" | AnyString;
    "slope": string | number;
    "spacing": "auto" | "exact" | AnyString;
    "specularConstant": string | number;
    "specularExponent": string | number;
    "speed": string | number;
    "spreadMethod": "pad" | "reflect" | "repeat" | AnyString;
    "startOffset": string | number;
    "stdDeviation": string | number;
    "stemh": string | number;
    "stemv": string | number;
    "stitchTiles": "noStitch" | "stitch" | AnyString;
    "stop-color"?: CSSColorNames;
    "stop-opacity"?: string | number;
    "strikethrough-position": string | number;
    "strikethrough-thickness": string | number;
    "string": string | boolean | number;
    "stroke": CSSColorNames;
    "stroke-dasharray": string | number | number[];
    "stroke-dashoffset": string | number | number[];
    "stroke-linecap": "butt" | "round" | "square" | "inherit" | AnyString;
    "stroke-linejoin": "butt" | "round" | "square" | "inherit" | AnyString;
    "stroke-miterlimit": string | number;
    "stroke-opacity": string | number;
    "stroke-width": string | number;
    "surfaceScale": string | number;
    "systemLanguage": string;
    "tableValues": string | string | number[] | number[];
    "target": "_self" | "_parent" | "_top" | "_blank" | AnyString;
    "targetX": string | number;
    "targetY": string | number;
    "text-anchor": "start" | "middle" | "end" | AnyString;
    "text-decoration": string;
    "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | AnyString;
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
        | AnyString; // style, script
    "u1": string;
    "u2": string;
    "underline-position": string | number;
    "underline-thickness": string | number;
    "unicode": string;
    "unicode-bidi": "normal" | "embed" | "bidi-override" | "isolate" | "isolate-override" | "plaintext" | AnyString;
    "unicode-range": string | number;
    "units-per-em": string | number;
    "v-alphabetic": string | number;
    "v-hanging": string | number;
    "v-ideographic": string | number;
    "v-mathematical": string | number;
    "values": string | number; // Also in AnimationValueAttributes
    "vector-effect": "none" | "non-scaling-stroke" | "non-scaling-size" | "non-rotation" | "fixed-position" | AnyString;
    "version": string;
    "vert-adv-y": string | number;
    "vert-origin-x": string | number;
    "vert-origin-y": string | number;
    "viewBox": string;
    "viewTarget": string | number;
    "visibility": "visible" | "hidden" | "collapse" | AnyString;
    "width": string | number;
    "widths": string | number;
    "word-spacing": "normal" | AnyString | number;
    "writing-mode": "horizontal-tb" | "vertical-rl" | "vertical-lr" | AnyString;
    "x1": string | number;
    "x2": string | number;
    "x": string | number;
    "xChannelSelector": "R" | "G" | "B" | "A" | AnyString;
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
    "yChannelSelector": "R" | "G" | "B" | "A" | AnyString;
    "z": string | number;
    "zoomAndPan": "disable" | "magnify" | AnyString;
}
