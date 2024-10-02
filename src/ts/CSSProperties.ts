
// - Imports - //

import { GetMethodKeys, InheritInitial, AnyString } from "./common";


// - Info source - //
//
// Collected info from the below sources in Q3 2024:
// - https://www.w3schools.com/cssref
// - https://developer.mozilla.org/en-US/docs/Web/CSS
// - Quick tests in Chrome and FireFox.


// - CSS properties - //

/** The CSS properties with camelCase keys.
 * - Values are strings, or numbers for certain natively supported style properties (like "width", "height", "opacity" and others).
 * - Some properties contain extra hints: like "filter": `"blur(px)" | "brightness(%)" | "contrast(%)"` and so on.
 * - Documented on Q3 2024 from:
 *      * w3schools: https://www.w3schools.com/cssref
 *      * MDN reference: https://developer.mozilla.org/en-US/docs/Web/CSS/
 *      * Quick tests in Chrome and FireFox.
 */
export interface CSSProperties extends Partial<
    & { [Key in CSSPropertyNamesString]?: InheritInitial | AnyString; }
    & { [Key in CSSPropertyNamesNumeric]?: number | InheritInitial | AnyString; }
    & { [Key in CSSPropertyNamesColor]?: CSSColorNames | InheritInitial; }
> {

    // Skip numeric keys.
    [index: number]: never;
    // [colorNames: string]: InheritInitial | undefined | AnyString;
    

    // - Suggestive types in alphabetical order - //

    // A.
    alignContent?: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | InheritInitial | AnyString;
    alignItems?: "normal" | "stretch" | "positional alignment" | "flex-start" | "flex-end" | "baseline" | InheritInitial | AnyString;
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | CSSBaselineAlignment | InheritInitial | AnyString
    all?: InheritInitial | AnyString;
    // animationDelay?: InheritInitial | AnyString;
    animationDirection?: "normal" | "reverse" | "alternate" | "alternate-reverse" | InheritInitial | AnyString;
    // animationDuration?: InheritInitial | AnyString;
    animationFillMode?: "none" | "forwards" | "backwards" | "both" | InheritInitial | AnyString;
    animationIterationCount?: number | "infinite" | InheritInitial | AnyString;
    animationName?: "none" | InheritInitial | AnyString;
    animationPlayState?: "paused" | "running" | InheritInitial | AnyString;
    animationTimingFunction?: CSSTimingFunction | InheritInitial | AnyString;

    // B.

    // Background.
    /** Shorthand for: "background-color" | "background-image" | "background-position" | "background-size" | "background-repeat" | "background-origin" | "background-clip" | "background-attachment". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background) */
    background?: CSSColorNames | InheritInitial; // Just for the comment.
    backgroundAttachment?: "scroll" | "fixed" | "local" | InheritInitial | AnyString;
    backgroundBlendMode?: CSSBlendMode | AnyString; // Does not actually have "inherit" | "initial".
    backgroundClip?: "border-box" | "padding-box" | "content-box" | InheritInitial | AnyString;
    // backgroundColor?: CSSColorNames | InheritInitial;
    // backgroundImage?: InheritInitial | AnyString;
    backgroundOrigin?: "padding-box" | "border-box" | "content-box";
    backgroundPosition?: CSSPositionString | InheritInitial | AnyString;
    backgroundPositionX?: CSSPositionX | InheritInitial | AnyString;
    backgroundPositionY?: CSSPositionY | InheritInitial | AnyString;
    backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | AnyString;
    backgroundSize?: number | "auto" | "cover" | "contain" | InheritInitial | AnyString;

    // Other.
    blockSize?: number | "auto" | InheritInitial | AnyString;

    // Border.
    /** Shorthand for: "border-width" | "border-style" (required) | "border-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border) */
    border?: InheritInitial | AnyString; // Just for the comment.

    // Border block.
    /** Shorthand for: "border-block-width" | "border-block-style" (required) | "border-block-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block) */
    borderBlock?: InheritInitial | AnyString; // Just for the comment.
    // borderBlockColor?: CSSColorNames | InheritInitial;
    borderBlockStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockWidth?: 0 | InheritInitial | AnyString;

    // Border block end.
    /** Shorthand for: "border-block-end-width" | "border-block-end-style" | "border-block-end-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end) */
    borderBlockEnd?: InheritInitial | AnyString; // Just for the comment.
    // borderBlockEndColor?: CSSColorNames | InheritInitial;
    borderBlockEndStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockEndWidth?: 0 | InheritInitial | AnyString;

    // Border block start.
    /** Shorthand for: "border-block-start-width" | "border-block-start-style" | "border-block-start-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start) */
    borderBlockStart?: InheritInitial | AnyString; // Just for the comment.
    // borderBlockStartColor?: CSSColorNames | InheritInitial;
    borderBlockStartStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockStartWidth?: 0 | InheritInitial | AnyString;
    
    // Border inline.
    /** Shorthand for: "border-inline-width" | "border-inline-style" (required) | "border-inline-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline) */
    borderInline?: InheritInitial | AnyString; // Just for the comment.
    // borderInlineColor?: CSSColorNames | InheritInitial;
    borderInlineStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineWidth?: 0 | InheritInitial | AnyString;

    // Border inline end.
    /** Shorthand for: "border-inline-end-width" | "border-inline-end-style" | "border-inline-end-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end) */
    borderInlineEnd?: InheritInitial | AnyString; // Just for the comment.
    // borderInlineEndColor?: CSSColorNames | InheritInitial;
    borderInlineEndStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineEndWidth?: 0 | InheritInitial | AnyString;

    // Border inline start.
    /** Shorthand for: "border-inline-start-width" | "border-inline-start-style" | "border-inline-start-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start) */
    borderInlineStart?: InheritInitial | AnyString; // Just for the comment.
    // borderInlineStartColor?: CSSColorNames | InheritInitial;
    borderInlineStartStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineStartWidth?: 0 | InheritInitial | AnyString;

    // Border specials.
    borderCollapse?: "separate" | "collapse" | InheritInitial | AnyString;
    borderSpacing?: 0 | InheritInitial | AnyString;
    
    // Border image.
    /** Shorthand for: "border-image-source" | "border-image-slice" | "border-image-width" | "border-image-outset" | "border-image-repeat". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) */
    borderImage?: "source slice width outset repeat" | InheritInitial | AnyString;
    // borderImageOutset?: number | InheritInitial | AnyString;
    borderImageRepeat?: "stretch" | "repeat" | "round" | "space" | InheritInitial | AnyString;
    borderImageSlice?: number | "fill" | InheritInitial | AnyString;
    borderImageSource?: "none" | InheritInitial | AnyString;
    borderImageWidth?: number | "auto" | InheritInitial | AnyString;

    // Border bottom.
    /** Shorthand for: "border-bottom-width" | "border-bottom-style" (required) | "border-bottom-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) */
    borderBottom?: InheritInitial | AnyString;
    // borderBottomColor?: CSSColorNames | InheritInitial;
    borderBottomStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBottomWidth?: 0 | InheritInitial | AnyString;

    // Border left.
    /** Shorthand for: "border-left-width" | "border-left-style" (required) | "border-left-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) */
    borderLeft?: InheritInitial | AnyString;
    // borderLeftColor?: CSSColorNames | InheritInitial;
    borderLeftStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderLeftWidth?: 0 | InheritInitial | AnyString;

    // Border right.
    /** Shorthand for: "border-right-width" | "border-right-style" (required) | "border-right-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) */
    borderRight?: InheritInitial | AnyString;
    // borderRightColor?: CSSColorNames | InheritInitial;
    borderRightStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderRightWidth?: 0 | InheritInitial | AnyString;
    
    // Border top.
    /** Shorthand for: "border-top-width" | "border-top-style" (required) | "border-top-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) */
    borderTop?: InheritInitial | AnyString;
    // borderTopColor?: CSSColorNames | InheritInitial;
    borderTopStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderTopWidth?: 0 | InheritInitial | AnyString;

    // Border radius.
    // borderRadius?: InheritInitial | AnyString;
    // borderEndEndRadius?: InheritInitial | AnyString;
    // borderEndStartRadius?: InheritInitial | AnyString;
    // borderStartEndRadius?: InheritInitial | AnyString;
    // borderStartStartRadius?: InheritInitial | AnyString;
    // borderTopLeftRadius?: InheritInitial | AnyString;
    // borderTopRightRadius?: InheritInitial | AnyString;
    // borderBottomLeftRadius?: InheritInitial | AnyString;
    // borderBottomRightRadius?: InheritInitial | AnyString;

    // Bottom.
    bottom?: 0 | "auto" | InheritInitial | AnyString;
    boxDecorationBreak?: "slice" | "clone" | "initial" | InheritInitial | AnyString;
    boxReflect?: "none" | "below" | "above" | "left" | "right" | "position" | InheritInitial | AnyString;
    boxShadow?: "none" | "h v blur? spread? color?" | "h v blur? spread? color? inset" | InheritInitial | AnyString;
    boxSizing?: "content-box" | "border-box" | InheritInitial | AnyString;
    breakAfter?: CSSBreakMode | InheritInitial | AnyString;
    breakBefore?: CSSBreakMode | InheritInitial | AnyString;
    breakInside?: CSSBreakMode | InheritInitial | AnyString;

    // C.
    captionSide?: "top" | "bottom" | InheritInitial | AnyString;
    caretColor?: "auto" | CSSColorNames | InheritInitial;
    clear?: "none" | "left" | "right" | "both" | InheritInitial | AnyString;
    clip?: "auto" | InheritInitial | AnyString;
    clipPath?: "clip-source" | "basic-shape" | "margin-box" | "border-box" | "padding-box" | "content-box" | "fill-box" | "stroke-box" | "view-box" | "none" | InheritInitial | AnyString;
    // color?: CSSColorNames | InheritInitial;
    colorScheme?: "normal" | "light" | "dark" | "only" | AnyString; // Does not actually have "inherit" | "initial".
    columnCount?: number | "auto" | InheritInitial | AnyString;
    columnFill?: "balance" | "auto" | InheritInitial | AnyString;
    columnGap?: 0 | "normal" | InheritInitial | AnyString;
    // columnRule?: InheritInitial | AnyString;
    // columnRuleColor?: CSSColorNames | InheritInitial;
    columnRuleStyle?: CSSBorderStyle | InheritInitial | AnyString;
    columnRuleWidth?: number | "medium" | "thin" | "thick" | InheritInitial | AnyString;
    columnSpan?: "none" | "all" | InheritInitial | AnyString;
    columnWidth?: 0 | "auto" | InheritInitial | AnyString;
    columns?: "auto" | InheritInitial | AnyString;
    content?: "normal" | "none" | "counter" | "attr" | "string" | "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote" | InheritInitial | AnyString;
    counterIncrement?: "none" | InheritInitial | AnyString;
    counterReset?: "none" | InheritInitial | AnyString;
    counterSet?: "none" | InheritInitial | AnyString;
    cursor?: CSSCursor | InheritInitial | AnyString;

    // D.
    direction?: "ltr" | "rtl" | InheritInitial | AnyString;
    display?: CSSDisplayMode | InheritInitial | AnyString;

    // E.
    emptyCells?: "show" | "hide" | InheritInitial | AnyString;

    // F.
    filter?: "none" | "blur(px)" | "brightness(%)" | "contrast(%)" | "drop-shadow(h v blur spread)" | "grayscale(%)" | "hue-rotate(deg)" | "invert(%)" | "opacity(%)" | "saturate(%)" | "sepia(%)" | "url(string)" | InheritInitial | AnyString;
    flex?: "auto" | InheritInitial | AnyString;
    flexBasis?: 0 | "auto" | InheritInitial | AnyString;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | InheritInitial | AnyString;
    // flexFlow?: InheritInitial | AnyString;
    // flexGrow?: number | InheritInitial | AnyString;
    // flexShrink?: number | InheritInitial | AnyString;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | InheritInitial | AnyString;
    float?: "none" | "left" | "right" | InheritInitial | AnyString;
    font?: "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | InheritInitial | AnyString;
    // fontFamily?: InheritInitial | AnyString;
    fontFeatureSettings?: "normal" | InheritInitial | AnyString;
    fontKerning?: "auto" | "normal" | InheritInitial | AnyString;
    fontSize?: "medium" | "xx-small" | "x-small" | "small" | "large" | "x-large" | "xx-large" | "smaller" | "larger" | InheritInitial | AnyString;
    fontSizeAdjust?: number | "none" | InheritInitial | AnyString;
    fontStretch?: "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "normal" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | InheritInitial | AnyString;
    fontStyle?: "normal" | "italic" | "oblique" | InheritInitial | AnyString;
    fontVariant?: "normal" | "small-caps" | InheritInitial | AnyString;
    fontVariantCaps?: "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | "unset" | InheritInitial | AnyString;
    fontWeight?: number | "normal" | "bold" | "bolder" | "lighter" | InheritInitial | AnyString;

    // G.
    gap?: 0 | InheritInitial | AnyString;
    grid?: "none" | InheritInitial | AnyString;
    gridArea?: AnyString; // Does not actually have "inherit" | "initial".
    gridAutoColumns?: "auto" | "max-content" | "min-content" | AnyString; // Does not actually have "inherit" | "initial".
    gridAutoFlow?: "row" | "column" | "dense" | "row dense" | "column dense" | AnyString; // Does not actually have "inherit" | "initial".
    gridAutoRows?: "auto" | "max-content" | "min-content" | AnyString; // Does not actually have "inherit" | "initial".
    gridColumn?: number | AnyString; // Does not actually have "inherit" | "initial".
    gridColumnEnd?: number | "auto" | AnyString; // Does not actually have "inherit" | "initial".
    gridColumnStart?: number | "auto" | AnyString; // Does not actually have "inherit" | "initial".
    gridRow?: AnyString; // Does not actually have "inherit" | "initial".
    gridRowEnd?: number | "auto" | AnyString; // Does not actually have "inherit" | "initial".
    /** @deprecated replaced by "rowGap". */
    gridRowGap?: 0 | "normal" | InheritInitial | AnyString;
    gridRowStart?: number | "auto" | AnyString; // Does not actually have "inherit" | "initial".
    gridTemplate?: "none" | InheritInitial | AnyString;
    gridTemplateAreas?: "none" | AnyString; // Does not actually have "inherit" | "initial".
    gridTemplateColumns?: "none" | "auto" | "max-content" | "min-content" | InheritInitial | AnyString;
    gridTemplateRows?: "none" | "auto" | "max-content" | "min-content" | InheritInitial | AnyString;

    // H.
    hangingPunctuation?: "none" | "first" | "last" | "allow-end" | "force-end" | InheritInitial | AnyString;
    height?: number | "auto" | InheritInitial | AnyString;
    hyphens?: "none" | "manual" | "auto" | InheritInitial | AnyString;
    hyphenateCharacter?: "auto" | InheritInitial | AnyString;

    // I.
    imageRendering?: "auto" | "smooth" | "high-quality" | "crisp-edges" | "pixelated" | InheritInitial | AnyString;
    /** Not present in FireFox in late 2024. */
    initialLetter?: number | "normal" | InheritInitial | AnyString;
    inlineSize?: 0 | "auto" | InheritInitial | AnyString;
    inset?: 0 | "auto" | InheritInitial | AnyString;
    insetBlock?: 0 | "auto" | InheritInitial | AnyString;
    insetBlockStart?: 0 | "auto" | InheritInitial | AnyString;
    insetBlockEnd?: 0 | "auto" | InheritInitial | AnyString;
    insetInline?: 0 | "auto" | InheritInitial | AnyString;
    insetInlineStart?: 0 | "auto" | InheritInitial | AnyString;
    insetInlineEnd?: 0 | "auto" | InheritInitial | AnyString;
    isolation?: "auto" | "isolate" | InheritInitial | AnyString;

    // J.
    justifyContent?: "center" |"flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | InheritInitial | AnyString;
    justifyItems?: "legacy" | "normal" | "stretch" | "start" | "left" | "center" | "end" | "right" | InheritInitial | AnyString;
    justifySelf?: "auto" | "normal" | "start" | "left" | "end" | "right" | "center" | "stretch" | CSSBaselineAlignment | InheritInitial | AnyString;

    // L.
    left?: 0 | "auto" | InheritInitial | AnyString;
    letterSpacing?: 0 | "normal" | InheritInitial | AnyString;
    lineHeight?: number | "normal" | InheritInitial | AnyString;
    // listStyle?: InheritInitial | AnyString;
    listStyleImage?: "none" | InheritInitial | AnyString;
    listStylePosition?: "inside" | "outside" | InheritInitial | AnyString;
    listStyleType?: CSSListStyleType | InheritInitial | AnyString;

    // M.
    margin?: 0 | "auto" | InheritInitial | AnyString;
    marginBlock?: 0 | "auto" | InheritInitial | AnyString;
    marginBlockEnd?: 0 | "auto" | InheritInitial | AnyString;
    marginBlockStart?: 0 | "auto" | InheritInitial | AnyString;
    marginBottom?: 0 | "auto" | InheritInitial | AnyString;
    marginInline?: 0 | "auto" | InheritInitial | AnyString;
    marginInlineEnd?: 0 | "auto" | InheritInitial | AnyString;
    marginInlineStart?: 0 | "auto" | InheritInitial | AnyString;
    marginLeft?: 0 | "auto" | InheritInitial | AnyString;
    marginRight?: 0 | "auto" | InheritInitial | AnyString;
    marginTop?: 0 | "auto" | InheritInitial | AnyString;
    marker?: "none" | InheritInitial | AnyString;
    markerEnd?: "none" | InheritInitial | AnyString;
    markerMid?: "none" | InheritInitial | AnyString;
    markerStart?: "none" | InheritInitial | AnyString;
    mask?: "none" | InheritInitial | AnyString;
    maskClip?: "border-box" | "content-box" | "padding-box" | "fill-box" | "stroke-box" | "view-box" | "no-clip" | "border" | "padding" | "content" | "text" | InheritInitial | AnyString;
    maskComposite?: "add" | "subtract" | "intersect" | "exclude" | InheritInitial | AnyString;
    maskImage?: "none" | InheritInitial | AnyString;
    maskMode?: "match-source" | "luminance" | "alpha" | InheritInitial | AnyString;
    maskOrigin?: "border-box" | "content-box" | "padding-box" | "fill-box" | "stroke-box" | "view-box" | InheritInitial | AnyString;
    maskPosition?: CSSPositionString | InheritInitial | AnyString;
    maskRepeat?: "repeat" | "repeat-x" | "repeat-y" | "space" | "round" | "no-repeat" | InheritInitial | AnyString;
    maskSize?: 0 | "auto" | "contain" | "cover" | InheritInitial | AnyString;
    maskType?: "luminance" | "alpha" | InheritInitial | AnyString;
    maxBlockSize?: 0 | "auto" | InheritInitial | AnyString;
    maxHeight?: 0 | "none" | InheritInitial | AnyString;
    maxInlineSize?: 0 | "auto" | InheritInitial | AnyString;
    maxWidth?: 0 | "none" | InheritInitial | AnyString;
    minHeight?: 0 | InheritInitial | AnyString;
    minBlockSize?: 0 | "auto" | InheritInitial | AnyString;
    minInlineSize?: 0 | "auto" | InheritInitial | AnyString;
    minWidth?: 0 | InheritInitial | AnyString;
    mixBlendMode?: CSSBlendMode | AnyString; // Does not actually have "inherit" | "initial".

    // N - no entries.

    // O.
    objectFit?: "fill" | "contain" | "cover" | "scale-down" | "none" | InheritInitial | AnyString;
    objectPosition?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "offset-anchor" | "offset-distance" | "offset-path" | "offset-position" | "offset-rotate". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/offset) */
    offset?: "auto" | InheritInitial | AnyString;
    offsetAnchor?: "auto" | CSSPositionString | InheritInitial | AnyString;
    offsetDistance?: 0 | "auto" | InheritInitial | AnyString;
    offsetPath?: "none" | "path(svg_path_string)" | "ray(string)" | "url(string)" | InheritInitial | AnyString;
    offsetPosition?: "auto" | "normal" | CSSPositionString | InheritInitial | AnyString;
    offsetRotate?: "auto" | InheritInitial | AnyString;
    // opacity?: number | InheritInitial | AnyString;
    // order?: number | InheritInitial | AnyString;
    /** Not present in FireFox in late 2024. */
    orphans?: number | InheritInitial | AnyString;
    // outline?: InheritInitial | AnyString;
    // outlineColor?: CSSColorNames | InheritInitial;
    outlineOffset?: 0 | InheritInitial | AnyString;
    outlineStyle?: CSSBorderStyle | InheritInitial | AnyString;
    outlineWidth?: 0 | InheritInitial | AnyString;
    overflow?: CSSOverflowMode | InheritInitial | AnyString;
    overflowAnchor?: "auto" | "none" | InheritInitial | AnyString;
    overflowBehavior?: "auto" | "contain" | "none" | InheritInitial | AnyString;
    overflowBehaviorBlock?: "auto" | "contain" | "none" | InheritInitial | AnyString;
    overflowBehaviorInline?: "auto" | "contain" | "none" | InheritInitial | AnyString;
    overflowBehaviorX?: "auto" | "contain" | "none" | InheritInitial | AnyString;
    overflowBehaviorY?: "auto" | "contain" | "none" | InheritInitial | AnyString;
    overflowWrap?: "normal" | "anywhere" | "break-word" | InheritInitial | AnyString;
    overflowX?: CSSOverflowMode | InheritInitial | AnyString;
    overflowY?: CSSOverflowMode | InheritInitial | AnyString;
    
    // P.
    padding?: 0 | InheritInitial | AnyString;
    paddingBlock?: 0 | "auto" | InheritInitial | AnyString;
    paddingBlockEnd?: 0 | "auto" | InheritInitial | AnyString;
    paddingBlockStart?: 0 | "auto" | InheritInitial | AnyString;
    paddingBottom?: 0 | InheritInitial | AnyString;
    paddingInline?: 0 | "auto" | InheritInitial | AnyString;
    paddingInlineEnd?: 0 | "auto" | InheritInitial | AnyString;
    paddingInlineStart?: 0 | "auto" | InheritInitial | AnyString;
    paddingLeft?: 0 | InheritInitial | AnyString;
    paddingRight?: 0 | InheritInitial | AnyString;
    paddingTop?: 0 | InheritInitial | AnyString;
    pageBreakAfter?: "auto" | "always" | "avoid" | "left" | "right" | InheritInitial | AnyString;
    pageBreakBefore?: "auto" | "always" | "avoid" | "left" | "right" | InheritInitial | AnyString;
    pageBreakInside?: "auto" | "avoid" | InheritInitial | AnyString;
    paintOrder?: "normal" | CSSPaintOrderString | InheritInitial | AnyString;
    perspective?: 0 | "none" | InheritInitial | AnyString;
    perspectiveOrigin?: 0 | InheritInitial | AnyString;
    placeContent?: "normal" | "stretch" | "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | InheritInitial | AnyString;
    placeItems?: "normal legacy" | "start" | "end" | "center" | "stretch" | InheritInitial | AnyString;
    placeSelf?: "auto" | "normal" | "start" | "left" | "end" | "right" | "center" | "stretch" | CSSBaselineAlignment | InheritInitial | AnyString;
    pointerEvents?: "auto" | "none" | InheritInitial | AnyString;
    position?: "static" | "absolute" | "fixed" | "relative" | "sticky" | InheritInitial | AnyString;

    // Q.
    quotes?: "none" | InheritInitial | AnyString;

    // R.
    resize?: "none" | "both" | "horizontal" | "vertical" | InheritInitial | AnyString;
    right?: 0 | "auto" | InheritInitial | AnyString;
    rotate?: "0deg" | "90deg" | "-90deg" | "180deg" | InheritInitial | AnyString;
    rowGap?: 0 | "normal" | InheritInitial | AnyString;

    // S.
    scale?: number | "none" | InheritInitial | AnyString;
    scrollBehaviour?: "auto" | "smooth" | InheritInitial | AnyString;
    scrollMargin?: 0 | InheritInitial | AnyString;
    scrollMarginBlock?: 0 | InheritInitial | AnyString;
    scrollMarginBlockEnd?: 0 | InheritInitial | AnyString;
    scrollMarginBlockStart?: 0 | InheritInitial | AnyString;
    scrollMarginBottom?: 0 | InheritInitial | AnyString;
    scrollMarginInline?: 0 | InheritInitial | AnyString;
    scrollMarginInlineEnd?: 0 | InheritInitial | AnyString;
    scrollMarginInlineStart?: 0 | InheritInitial | AnyString;
    scrollMarginLeft?: 0 | InheritInitial | AnyString;
    scrollMarginRight?: 0 | InheritInitial | AnyString;
    scrollMarginTop?: 0 | InheritInitial | AnyString;
    scrollPadding?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingBlock?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingBlockEnd?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingBlockStart?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingBottom?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingInline?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingInlineEnd?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingInlineStart?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingLeft?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingRight?: 0 | "auto" | InheritInitial | AnyString;
    scrollPaddingTop?: 0 | "auto" | InheritInitial | AnyString;
    scrollSnapAlign?: "none" | "start" | "end" | "center" | InheritInitial | AnyString;
    scrollSnapStop?: "normal" | "always" | InheritInitial | AnyString;
    scrollSnapType?: "none" | "x" | "y" | "block" | "inline" | "both" | "mandatory" | "proximity" | InheritInitial | AnyString;
    scrollbarColor?: "auto" | CSSColorNames | InheritInitial;

    // T.
    tabSize?: number | InheritInitial | AnyString;
    tableLayout?: "auto" | "fixed" | InheritInitial | AnyString;
    textAlign?: "left" | "right" | "center" | "justify" | InheritInitial | AnyString;
    textAlignLast?: "auto" | "left" | "right" | "center" | "justify" | "start" | "end" | InheritInitial | AnyString;
    /** Shorthand for: "text-decoration-color" | "text-decoration-line" | "text-decoration-style" | "text-decoration-thickness". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) */
    textDecoration?: InheritInitial | AnyString; // Just for the comment.
    // textDecorationColor?: CSSColorNames | InheritInitial;
    textDecorationLine?: "none" | "underline" | "overline" | "line-through" | InheritInitial | AnyString;
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy" | InheritInitial | AnyString;
    textDecorationThickness?: 0 | "auto" | "from-font" | InheritInitial | AnyString;
    /** Shorthand for: "text-emphasis-color" | "text-emphasis-position" | "text-emphasis-style". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis) */
    textEmphasis?: "none" | "filled" | "open" | "dot" | "circle" | "double-circle" | "triangle" | "sesame" | InheritInitial | AnyString;
    // textEmphasisColor?: CSSColorNames | InheritInitial;
    textEmphasisPosition?: "over" | "under" | "left" | "right" | InheritInitial | AnyString;
    textEmphasisStyle?: "none" | "filled" | "open" | "dot" | "circle" | "double-circle" | "triangle" | "sesame" | InheritInitial | AnyString;
    textIndent?: 0 | InheritInitial | AnyString;
    textJustify?: "auto" | "inter-word" | "inter-character" | "none" | InheritInitial | AnyString;
    textOrientation?: "mixed" | "upright" | "sideways" | "sideways-right" | "use-glyph-orientation" | InheritInitial | AnyString;
    textOverflow?: "clip" | "ellipsis" | InheritInitial | AnyString;
    textShadow?: "none" | "h v blur? color?" | InheritInitial | AnyString;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | InheritInitial | AnyString;
    textUnderlineOffset?: 0 | "auto" | InheritInitial | AnyString;
    textUnderlinePosition?: 0 | "auto" | "under" | "from-font" | "left" | "right" | InheritInitial | AnyString;
    top?: 0 | "auto" | InheritInitial | AnyString;
    transform?: "none" | CSSTransformHints | InheritInitial | AnyString;
    transformOrigin?: CSSPositionString | InheritInitial | AnyString;
    transformStyle?: "flat" | "preserve-3d" | InheritInitial | AnyString;
    /** Shorthand for: "transition-delay" | "transition-duration" | "transition-property" | "transition-timing-function". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) */
    transition?: InheritInitial | AnyString; // Just for the comment.
    // transitionDelay?: InheritInitial | AnyString;
    // transitionDuration?: InheritInitial | AnyString;
    transitionProperty?: "none" | "all" | InheritInitial | AnyString;
    transitionTimingFunction?: CSSTimingFunction | InheritInitial | AnyString;
    translate?: "x-axis y-axis z-axis" | InheritInitial | AnyString;

    // U.
    unicodeBidi?: "normal" | "embed" | "bidi-override" | "isolate" | "isolate-override" | "plaintext" | InheritInitial | AnyString;
    userSelect?: "auto" | "none" | "text" | "all" | AnyString; // Does not actually have "inherit" | "initial".

    // V.
    verticalAlign?: "baseline" | "sub" | "super" | "top" | "text-top" | "middle" | "bottom" | "text-bottom" | InheritInitial | AnyString;
    visibility?: "visible" | "hidden" | "collapse" | InheritInitial | AnyString;

    // W.
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | InheritInitial | AnyString;
    /** Not present in FireFox in late 2024. */
    widows?: number | InheritInitial | AnyString;
    width?: number | "auto" | InheritInitial | AnyString;
    wordBreak?: "normal" | "break-all" | "keep-all" | "break-word" | InheritInitial | AnyString;
    wordSpacing?: 0 | "normal" | InheritInitial | AnyString;
    wordWrap?: "normal" | "break-word" | InheritInitial | AnyString;
    writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr" | InheritInitial | AnyString;

    // Z.
    zIndex?: number | "auto" | InheritInitial | AnyString;
    zoom?: number | "normal" | "unset" | InheritInitial | AnyString;

};


// - Common CSS value names - //

/** This is just in the ballpark. Hard to get precise info on this. */
export type CSSBaselineAlignment = 
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start baseline"
    | "end baseline"
    | "center baseline"
    ;

/** Common blend modes. */
export type CSSBlendMode =
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    ;

/** Common CSS border styles. Used for all border style related. */
export type CSSBorderStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

/** Common CSS break mode. Used for: "breakAfter", "breakBefore", "breakInside". */
export type CSSBreakMode = "auto" | "all" | "always" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

/** There's over 100 color names + PascalCase vs. lowercase. See https://www.w3schools.com/cssref/css_colors.php */
export type CSSColorNames = "transparent" | "currentcolor" | "currentColor" | AnyString;

/** All CSS color names in PascalCase in late 2024. There are 133 colors (+ same in lower case). Because of this, not included in the main type. */
export type CSSColorNamesAll =
    | "AliceBlue"
    | "AntiqueWhite"
    | "Aqua"
    | "Aquamarine"
    | "Azure"
    | "Beige"
    | "Bisque"
    | "Black"
    | "BlanchedAlmond"
    | "Blue"
    | "BlueViolet"
    | "Brown"
    | "BurlyWood"
    | "CadetBlue"
    | "Chartreuse"
    | "Chocolate"
    | "Coral"
    | "CornflowerBlue"
    | "Cornsilk"
    | "Crimson"
    | "Cyan"
    | "DarkBlue"
    | "DarkCyan"
    | "DarkGoldenRod"
    | "DarkGray"
    | "DarkGrey"
    | "DarkGreen"
    | "DarkKhaki"
    | "DarkMagenta"
    | "DarkOliveGreen"
    | "DarkOrange"
    | "DarkOrchid"
    | "DarkRed"
    | "DarkSalmon"
    | "DarkSeaGreen"
    | "DarkSlateBlue"
    | "DarkSlateGray"
    | "DarkSlateGrey"
    | "DarkTurquoise"
    | "DarkViolet"
    | "DeepPink"
    | "DeepSkyBlue"
    | "DimGray"
    | "DimGrey"
    | "DodgerBlue"
    | "FireBrick"
    | "FloralWhite"
    | "ForestGreen"
    | "Fuchsia"
    | "Gainsboro"
    | "GhostWhite"
    | "Gold"
    | "GoldenRod"
    | "Gray"
    | "Grey"
    | "Green"
    | "GreenYellow"
    | "HoneyDew"
    | "HotPink"
    | "IndianRed"
    | "Indigo"
    | "Ivory"
    | "Khaki"
    | "Lavender"
    | "LavenderBlush"
    | "LawnGreen"
    | "LemonChiffon"
    | "LightBlue"
    | "LightCoral"
    | "LightCyan"
    | "LightGoldenRodYellow"
    | "LightGray"
    | "LightGrey"
    | "LightGreen"
    | "LightPink"
    | "LightSalmon"
    | "LightSeaGreen"
    | "LightSkyBlue"
    | "LightSlateGray"
    | "LightSlateGrey"
    | "LightSteelBlue"
    | "LightYellow"
    | "Lime"
    | "LimeGreen"
    | "Linen"
    | "Magenta"
    | "Maroon"
    | "MediumAquamarine" // Originally MediumAquaMarine, but case doesn't actually matter at all.
    | "MediumBlue"
    | "MediumOrchid"
    | "MediumPurple"
    | "MediumSeaGreen"
    | "MediumSlateBlue"
    | "MediumSpringGreen"
    | "MediumTurquoise"
    | "MediumVioletRed"
    | "MidnightBlue"
    | "MintCream"
    | "MistyRose"
    | "Moccasin"
    | "NavajoWhite"
    | "Navy"
    | "OldLace"
    | "Olive"
    | "OliveDrab"
    | "Orange"
    | "OrangeRed"
    | "Orchid"
    | "PaleGoldenRod"
    | "PaleGreen"
    | "PaleTurquoise"
    | "PaleVioletRed"
    | "PapayaWhip"
    | "PeachPuff"
    | "Peru"
    | "Pink"
    | "Plum"
    | "PowderBlue"
    | "Purple"
    | "RebeccaPurple"
    | "Red"
    | "RosyBrown"
    | "RoyalBlue"
    | "SaddleBrown"
    | "Salmon"
    | "SandyBrown"
    | "SeaGreen"
    | "SeaShell"
    | "Sienna"
    | "Silver"
    | "SkyBlue"
    | "SlateBlue"
    | "SlateGray"
    | "SlateGrey"
    | "Snow"
    | "SpringGreen"
    | "SteelBlue"
    | "Tan"
    | "Teal"
    | "Thistle"
    | "Tomato"
    | "Turquoise"
    | "Violet"
    | "Wheat"
    | "White"
    | "WhiteSmoke"
    | "Yellow"
    | "YellowGreen"
    ;

/** The CSS display modes. */
export type CSSDisplayMode =
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "liste-item"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "table-cell"
    | "table-column"
    | "table-row"
    | "none"
    ;

/** The common CSS cursors. */
export type CSSCursor =
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "pointer"
    | "progress"
    | "s-resize"
    | "se-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "url(string)"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    ;

/** The common CSS list style types. Just used for "listStyleType". */
export type CSSListStyleType =
    // Common.
    | "disc"
    | "circle"
    | "square"
    | "armenian"
    | "none"
    // More options.
    | "cjk-ideographic"
    | "decimal"
    | "decimal-leading-zero"
    | "georgian"
    | "hebrew"
    | "hiragana"
    | "hiragana-iroha"
    | "katakana"
    | "katakana-iroha"
    | "lower-alpha"
    | "lower-greek"
    | "lower-latin"
    | "lower-roman"
    | "upper-alpha"
    | "upper-greek"
    | "upper-latin"
    | "upper-roman"
    ;

/** The common CSS overflow modes. Used for all overflow related. */
export type CSSOverflowMode = "visible" | "hidden" | "clip" | "scroll" | "auto";

/** Used for "paintOrder". Defines in which order the rendering happens in micro-scale. */
export type CSSPaintOrderString =
    | "stroke"
    | `stroke ${"fill" | "markers"}`
    | `stroke ${"fill markers" | "markers fill"}`
    | "fill"
    | `fill ${"stroke" | "markers"}`
    | `fill ${"stroke markers" | "markers stroke"}`
    | "markers"
    | `markers ${"stroke" | "fill"}`
    | `markers ${"stroke fill" | "fill stroke"}`
    ;

/** The horizontal positioning options. */
export type CSSPositionX = "left" | "center" | "right";
/** The vertical positioning options. */
export type CSSPositionY = "top" | "center" | "bottom";
/** The combined horizontal and vertical options using the common names. The values can also be numbers or percentages. */
export type CSSPositionString = CSSPositionX | CSSPositionY | `${CSSPositionX} ${CSSPositionY}`;
    
/** Commonly used CSS properties that are about colors. */
export type CSSPropertyNamesColor = 
    | "accentColor"
    | "backgroundColor"
    | "borderColor"
    | "borderBlockColor"
    | "borderBlockEndColor"
    | "borderBlockStartColor"
    | "borderBottomColor"
    | "borderInlineColor"
    | "borderInlineEndColor"
    | "borderInlineStartColor"
    | "borderLeftColor"
    | "borderRightColor"
    | "borderTopColor"
    | "caretColor"
    | "color"
    | "columnRuleColor"
    | "floodColor"
    | "lightingColor"
    | "outlineColor"
    | "scrollbarColor"
    | "stopColor"
    | "textEmphasisColor"
    | "textDecorationColor"
    | "webkitTextFillColor"
    | "webkitTextStrokeColor"
    ;

/** Commonly used CSS properties that can receive numeric input natively. */
export type CSSPropertyNamesNumeric = 
    | "animationIterationCount" // Also "infinite"
    | "aspectRatio"
    | "backgroundSize" // Also "auto" | "cover" | "contain"
    | "blockSize" // Also "auto"
    | "borderWidth" // Only 0
    | "borderBlockEndWidth" // Only 0
    | "borderBlockStartWidth" // Only 0
    | "borderBlockWidth" // Only 0
    | "borderBottomWidth" // Only 0
    | "borderImageOutset"
    | "borderImageSlice"
    | "borderImageWidth" // Also "auto"
    | "borderInlineEndWidth" // Only 0
    | "borderInlineStartWidth" // Only 0
    | "borderInlineWidth" // Only 0
    | "borderLeftWidth" // Only 0
    | "borderRightWidth" // Only 0
    | "borderSpacing" // Only 0
    | "borderTopWidth" // Only 0
    | "bottom" // Only 0
    | "columnCount" // Also "auto"
    | "columnGap" // Only 0, also "normal"
    | "columnRuleWidth" // Also "medium" | "thin" | "thick"
    | "columnWidth" // Only 0, also "auto"
    | "flexBasis" // Only 0, also "auto"
    | "flexGrow"
    | "flexShrink"
    | "fontSizeAdjust" // Also "none"
    | "fontWeight"
    | "gap" // Only 0
    | "gridColumn"
    | "gridColumnEnd"
    | "gridColumnGap"
    | "gridColumnStart"
    | "gridRowEnd"
    | "gridRowGap" // Only 0
    | "gridRowStart"
    | "height" // Also "auto"
    | "initialLetter"
    | "inlineSize" // Only 0
    | "inset" // Only 0
    | "insetBlock" // Only 0
    | "insetBlockStart" // Only 0
    | "insetBlockEnd" // Only 0
    | "insetInline" // Only 0
    | "insetInlineStart" // Only 0
    | "insetInlineEnd" // Only 0
    | "left" // Only 0
    | "letterSpacing" // Only 0
    | "lineHeight"
    | "margin" // Only 0
    | "marginBlock" // Only 0
    | "marginBlockEnd" // Only 0
    | "marginBlockStart" // Only 0
    | "marginBottom" // Only 0
    | "marginInline" // Only 0
    | "marginInlineEnd" // Only 0
    | "marginInlineStart" // Only 0
    | "marginLeft" // Only 0
    | "marginRight" // Only 0
    | "marginTop" // Only 0
    | "maskSize" // Only 0
    | "maxBlockSize" // Only 0
    | "maxHeight" // Only 0
    | "maxInlineSize" // Only 0
    | "maxWidth" // Only 0
    | "minBlockSize" // Only 0
    | "minHeight" // Only 0
    | "minInlineSize" // Only 0
    | "minWidth" // Only 0
    | "objectPosition" // Only 0
    | "offsetDistance" // Only 0
    | "opacity"
    | "order"
    | "orphans"
    | "outlineOffset" // Only 0
    | "outlineWidth" // Only 0
    | "padding" // Only 0
    | "paddingBottom" // Only 0
    | "paddingBlock" // Only 0
    | "paddingBlockEnd" // Only 0
    | "paddingBlockStart" // Only 0
    | "paddingInline" // Only 0
    | "paddingInlineStart" // Only 0
    | "paddingInlineEnd" // Only 0
    | "paddingLeft" // Only 0
    | "paddingRight" // Only 0
    | "paddingTop" // Only 0
    | "perspective" // Only 0
    | "perspectiveOrigin" // Only 0
    | "right" // Only 0
    | "rowGap" // Only 0
    | "scale"
    | "scrollMargin" // Only 0
    | "scrollMarginBlock" // Only 0
    | "scrollMarginBlockEnd" // Only 0
    | "scrollMarginBlockStart" // Only 0
    | "scrollMarginBottom" // Only 0
    | "scrollMarginInline" // Only 0
    | "scrollMarginInlineEnd" // Only 0
    | "scrollMarginInlineStart" // Only 0
    | "scrollMarginLeft" // Only 0
    | "scrollMarginRight" // Only 0
    | "scrollMarginTop" // Only 0
    | "scrollPadding" // Only 0
    | "scrollPaddingBlock" // Only 0
    | "scrollPaddingBlockEnd" // Only 0
    | "scrollPaddingBlockStart" // Only 0
    | "scrollPaddingBottom" // Only 0
    | "scrollPaddingInline" // Only 0
    | "scrollPaddingInlineEnd" // Only 0
    | "scrollPaddingInlineStart" // Only 0
    | "scrollPaddingLeft" // Only 0
    | "scrollPaddingRight" // Only 0
    | "scrollPaddingTop" // Only 0
    | "stopOpacity"
    | "strokeWidth"
    | "strokeOpacity"
    | "tabIndex"
    | "tabSize"
    | "textUnderlineOffset" // Only 0
    | "textUnderlinePosition" // Only 0
    | "textDecorationThickness" // Only 0
    | "textIndent" // Only 0
    | "top" // Only 0
    | "widows"
    | "width" // Also "auto"
    | "wordSpacing"
    | "zIndex"
    | "zoom"
;

/** Common string properties. */
export type CSSPropertyNamesString = string & keyof Omit<CSSStyleDeclaration, GetMethodKeys<CSSStyleDeclaration> | CSSPropertyNamesNumeric | CSSPropertyNamesColor | number>;

/** CSS timing function. Used for "animationTimingFunction" and "transitionTimingFunction". */
export type CSSTimingFunction = 
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "step-start"
    | "step-end"
    | "steps(int,start|end)"
    | "cubic-bezier(n,n,n,n)"
    ;

/** Hints for CSS transforms. */
export type CSSTransformHints = 
    | "matrix(n,n,n,n,n,n)"
    | "matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)"
    | "translate(x,y)"
    | "translate3d(x,y,z)"
    | "translateX(x)"
    | "translateY(y)"
    | "translateZ(z)"
    | "scale(x,y)"
    | "scale3d(x,y,z)"
    | "scaleX(x)"
    | "scaleY(y)"
    | "scaleZ(z)"
    | "rotate(angle)"
    | "rotate3d(x,y,z,angle)"
    | "rotateX(angle)"
    | "rotateY(angle)"
    | "rotateZ(angle)"
    | "skew(x-angle,y-angle)"
    | "skewX(angle)"
    | "skewY(angle)"
    | "perspective(n)"
    ;
