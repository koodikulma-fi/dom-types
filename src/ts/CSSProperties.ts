
// - Imports - //

import { OrString } from "./common";


// - CSS - //

/** There's over 100 color names + PascalCase vs. lowercase. See https://www.w3schools.com/cssref/css_colors.php */
export type CSSColorNames = "transparent" | "currentcolor" | "currentColor" | OrString;
/** Common blend modes. */
export type CSSBlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | OrString;

/** The CSS properties with camelCase keys. Values are strings, or numbers for certain natively supported style properties (like "width", "height", "opacity" and others). */
export interface CSSProperties extends Partial<Omit<CSSStyleDeclaration,
    | "item"
    | "getPropertyPriority"
    | "getPropertyValue"
    | "removeProperty"
    | "setProperty"
    | CSSNumericPropertyNames
> & Record<CSSNumericPropertyNames, string | number>> {
    [index: number]: never;
};
/** Commonly used CSS properties that can receive numeric input natively. */
export type CSSNumericPropertyNames = 
    | "borderWidth"
    | "borderBottomWidth"
    | "borderLeftWidth"
    | "borderRightWidth"
    | "borderTopWidth"
    | "bottom"
    | "columnGap"
    | "flexGrow"
    | "flexShrink"
    | "fontWeight"
    | "gap"
    | "gridColumnEnd"
    | "gridColumnGap"
    | "gridColumnStart"
    | "gridRowEnd"
    | "gridRowGap"
    | "gridRowStart"
    | "height"
    | "inset"
    | "left"
    | "margin"
    | "marginBottom"
    | "marginLeft"
    | "marginRight"
    | "marginTop"
    | "maxWidth"
    | "maxHeight"
    | "minWidth"
    | "minHeight"
    | "offsetDistance"
    | "opacity"
    | "order"
    | "outlineWidth"
    | "padding"
    | "paddingTop"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "right"
    | "rowGap"
    | "scrollMargin"
    | "scrollMarginBlock"
    | "scrollMarginBlockEnd"
    | "scrollMarginBlockStart"
    | "scrollMarginBottom"
    | "scrollMarginInline"
    | "scrollMarginInlineEnd"
    | "scrollMarginInlineStart"
    | "scrollMarginLeft"
    | "scrollMarginRight"
    | "scrollMarginTop"
    | "scrollPadding"
    | "scrollPaddingBlock"
    | "scrollPaddingBlockEnd"
    | "scrollPaddingBlockStart"
    | "scrollPaddingBottom"
    | "scrollPaddingInline"
    | "scrollPaddingInlineEnd"
    | "scrollPaddingInlineStart"
    | "scrollPaddingLeft"
    | "scrollPaddingRight"
    | "scrollPaddingTop"
    | "stopOpacity"
    | "strokeWidth"
    | "strokeOpacity"
    | "tabIndex"
    | "tabSize"
    | "top"
    | "width"
    | "zIndex"
;
