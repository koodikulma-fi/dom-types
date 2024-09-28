/** Type for className input.
 * - Represents what can be fed into the MixDOM.classNames method with (ValidName extends string):
 *     1. ValidName (single className string),
 *     2. Array<ValidName>,
 *     3. Record<ValidName, any>.
 *     + If you want to use the validation only for Arrays and Records but not Strings, add 2nd parameter `string` to the type: `CleanClassName<ValidName, string>`
 */
type PreClassName<Valid extends string = string, Single extends string = Valid> = Single | Partial<Record<Valid, any>> | Array<Valid> | Set<Valid>;
/** Split a string into a typed array.
 * - Use with PropType to validate and get deep value types with, say, dotted strings.
 */
type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
/** Split a string array by a string. */
type SplitArr<S extends string[] | readonly string[], D extends string> = Split<S[number] & string, D>;
/** Typing tool for class name validation. The input can be:
 *    1. A string, either single or concatenated: "bold", "bold italic".
 *    2. An array of strings, similarly either single or concatenated: ["bold", "bold italic"].
 *    3. A record of string keys (where values are non-important for typing). Similarly short or long: { "bold": false, "bold italic": true }
 *    4. Anything else is accepted including "". This is to allow usage like: doHighlight && "highlight" (for strings or arrays). For objects used like: { "highlight": doHighlight }.
 * - Note that this returns either `string` (for valid strings), `Valid[]` or `any` (for valid objects & arrays), or `never` type (for failure).
 *   .. This is mostly because of whatever happens to work in practice in all the required scenarios.
 *   .. It's also because more detail is not required, and can then support mangling more flexible (while avoiding problems like circular constraints).
 * - Note that this functionality is paired with a javascript function's inner workings. (It will collect a valid class name out of the same input.)
 */
type NameValidator<Valid extends any, Input> = [
    Input
] extends [string] ? Split<Input, " "> extends Valid[] ? string : never : [
    Input
] extends [Array<any> | Readonly<Array<any>>] ? Input extends Valid[] ? Valid[] : SplitArr<Input, " "> extends Valid[] ? any : never : [
    Input
] extends [object] ? keyof Input extends Valid ? any : Split<keyof Input & string, " "> extends Valid[] ? any : never : any;
/** Helper to validate class names (paired with a javascript function that actually supports handling: (...params: any[]) => string;
 * 1. First create a type for valid names, eg.: `type ValidNames = "bold" | "italic" | "underline" | "dimmed";
 * 2. Then define a shortcut for the validator with the ValidNames type: `const cleanNames: ValidateNames<ValidNames> = MixDOM.classNames;`.
 * 3. Then reuse the function for validation:
 *     a. For strings: `const okName = cleanNames("bold", "underline italic", false, "");` // => "bold underline italic"
 *     b. For arrays: `const okName = cleanNames(["underline", "dimmed italic", false, ""], [], undefined, ["bold"]);` // => "underline dimmed italic bold"
 *     c. For objects: `const okName = cleanNames({"bold": false, "dimmed italic": true}, null, {"underline": true });` // => "dimmed italic underline"
 * - You can also mix these freely: `const okName = cleanNames("bold", ["italic"], {"underline": false});`
 * - Note however, that the typing support is made for 10 arguments max. Anything after that uses a common type ...T[], so it will get buggy in various ways.
 *
 * ```
 *
 * // - Testing - //
 *
 * // Prepare.
 * type ValidNames = "a" | "b";
 * const validate = classNames as ValidateNames<ValidNames>;
 *
 * // Do tests.
 * // .. These should not produce errors in typing.
 * validate(["a"]);
 * validate(["a", "b", ""]);
 * validate(["a", "b", "a b", "b a"]);
 * validate(["a", false, undefined, "b"]);
 * validate(["a", false, undefined, "b"] as const);
 * validate({"a": true, "b a": false});
 * validate({"a": true, "b a": false} as const);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validate("FAIL");
 * validate(["FAIL"]);
 * validate({"FAIL": false});
 * validate("a", "a b", undefined, "FAIL", ["a", false]);
 * validate("a", "a b", undefined, ["a", "FAIL", false]);
 * validate(["a", "b", "a b", "FAIL", false]);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false, "FAIL": true});
 * validate("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validate("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 *
 * ```
 */
type ValidateNames<Valid extends string, Nulls extends any = undefined | null | false | 0 | ""> = <T1 extends NameValidator<Valid | Nulls, T1>, T2 extends NameValidator<Valid | Nulls, T2>, T3 extends NameValidator<Valid | Nulls, T3>, T4 extends NameValidator<Valid | Nulls, T4>, T5 extends NameValidator<Valid | Nulls, T5>, T6 extends NameValidator<Valid | Nulls, T6>, T7 extends NameValidator<Valid | Nulls, T7>, T8 extends NameValidator<Valid | Nulls, T8>, T9 extends NameValidator<Valid | Nulls, T9>, T10 extends NameValidator<Valid | Nulls, T10>, Tn extends NameValidator<Valid, Tn>>(t1?: T1, t2?: T2, t3?: T3, t4?: T4, t5?: T5, t6?: T6, t7?: T7, t8?: T8, t9?: T9, t10?: T10, ...tn: Tn[]) => string;

type BoolOrStr = boolean | "true" | "false";
type OrString = string & {};
type InheritInitial = "inherit" | "initial";
type InheritInitialRevUnset = InheritInitial | "revert" | "revert-layer" | "unset";
/** Exclude methods and property functions from an object like. */
type GetMethodKeys<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T];
/** Each value gets stringified when applied to `element.dataset`, but we can allow inputting numbers and booleans. (Could even allow arrays but perhaps it'd just be misleading.) */
interface DataAttributes {
    [dataKey: `data-${string}`]: string | number | boolean | null | undefined;
}

/** There's over 100 color names + PascalCase vs. lowercase. See https://www.w3schools.com/cssref/css_colors.php */
type CSSColorNames = "transparent" | "currentcolor" | "currentColor" | OrString;
/** Common blend modes. */
type CSSBlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | OrString;
/** The CSS properties with camelCase keys. Values are strings, or numbers for certain natively supported style properties (like "width", "height", "opacity" and others). */
interface CSSProperties extends Partial<Omit<CSSStyleDeclaration, GetMethodKeys<CSSStyleDeclaration> | CSSNumericPropertyNames> & Record<CSSNumericPropertyNames, string | number>> {
    [index: number]: never;
    position?: "absolute" | "relative" | "fixed" | "static" | "sticky" | InheritInitialRevUnset | OrString;
}
/** Commonly used CSS properties that can receive numeric input natively. */
type CSSNumericPropertyNames = "borderWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderTopWidth" | "bottom" | "columnGap" | "flexGrow" | "flexShrink" | "fontWeight" | "gap" | "gridColumnEnd" | "gridColumnGap" | "gridColumnStart" | "gridRowEnd" | "gridRowGap" | "gridRowStart" | "height" | "inset" | "left" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxWidth" | "maxHeight" | "minWidth" | "minHeight" | "offsetDistance" | "opacity" | "order" | "outlineWidth" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "right" | "rowGap" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "stopOpacity" | "strokeWidth" | "strokeOpacity" | "tabIndex" | "tabSize" | "top" | "width" | "zIndex";

type GlobalEventHandler = (this: GlobalEventHandlers, ev: UIEvent) => void;
interface GlobalListeners_native extends GlobalEventHandlers {
    onactivate: GlobalEventHandler;
    onbegin: GlobalEventHandler;
    onend: GlobalEventHandler;
    onfocusin: GlobalEventHandler;
    onfocusout: GlobalEventHandler;
    onmousewheel: GlobalEventHandler;
    onrepeat: GlobalEventHandler;
    onshow: GlobalEventHandler;
    onunload: GlobalEventHandler;
}
/** All listener attributes (matching GlobalEventHandlers) with camelCase keys referring to the lowercase originals in type. */
interface GlobalListeners {
    onAbort: GlobalEventHandlers["onabort"];
    onActivate: GlobalEventHandler;
    onAnimationCancel: GlobalEventHandlers["onanimationcancel"];
    onAnimationEnd: GlobalEventHandlers["onanimationend"];
    onAnimationIteration: GlobalEventHandlers["onanimationiteration"];
    onAnimationStart: GlobalEventHandlers["onanimationstart"];
    onAuxClick: GlobalEventHandlers["onauxclick"];
    onBegin: GlobalEventHandler;
    onBlur: GlobalEventHandlers["onblur"];
    onCanPlay: GlobalEventHandlers["oncanplay"];
    onCanPlayThrough: GlobalEventHandlers["oncanplaythrough"];
    onChange: GlobalEventHandlers["onchange"];
    onClick: GlobalEventHandlers["onclick"];
    onClose: GlobalEventHandlers["onclose"];
    onContextMenu: GlobalEventHandlers["oncontextmenu"];
    onCueChange: GlobalEventHandlers["oncuechange"];
    onDblClick: GlobalEventHandlers["ondblclick"];
    onDrag: GlobalEventHandlers["ondrag"];
    onDragEnd: GlobalEventHandlers["ondragend"];
    onDragEnter: GlobalEventHandlers["ondragenter"];
    onDragLeave: GlobalEventHandlers["ondragleave"];
    onDragOver: GlobalEventHandlers["ondragover"];
    onDragStart: GlobalEventHandlers["ondragstart"];
    onDrop: GlobalEventHandlers["ondrop"];
    onDurationChange: GlobalEventHandlers["ondurationchange"];
    onEmptied: GlobalEventHandlers["onemptied"];
    onEnded: GlobalEventHandlers["onended"];
    onError: GlobalEventHandlers["onerror"];
    onFocus: GlobalEventHandlers["onfocus"];
    onFocusIn: GlobalEventHandler;
    onFocusOut: GlobalEventHandler;
    onGotPointerCapture: GlobalEventHandlers["ongotpointercapture"];
    onInput: GlobalEventHandlers["oninput"];
    onInvalid: GlobalEventHandlers["oninvalid"];
    onKeyDown: GlobalEventHandlers["onkeydown"];
    onKeyPress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onKeyUp: GlobalEventHandlers["onkeyup"];
    onLoad: GlobalEventHandlers["onload"];
    onLoadedData: GlobalEventHandlers["onloadeddata"];
    onLoadedMetaData: GlobalEventHandlers["onloadedmetadata"];
    onLoadStart: GlobalEventHandlers["onloadstart"];
    onLostPointerCapture: GlobalEventHandlers["onlostpointercapture"];
    onMouseDown: GlobalEventHandlers["onmousedown"];
    onMouseEnter: GlobalEventHandlers["onmouseenter"];
    onMouseLeave: GlobalEventHandlers["onmouseleave"];
    onMouseMove: GlobalEventHandlers["onmousemove"];
    onMouseOut: GlobalEventHandlers["onmouseout"];
    onMouseOver: GlobalEventHandlers["onmouseover"];
    onMouseUp: GlobalEventHandlers["onmouseup"];
    onMouseWheel: GlobalEventHandler;
    onPause: GlobalEventHandlers["onpause"];
    onPlay: GlobalEventHandlers["onplay"];
    onPlaying: GlobalEventHandlers["onplaying"];
    onPointerCancel: GlobalEventHandlers["onpointercancel"];
    onPointerDown: GlobalEventHandlers["onpointerdown"];
    onPointerEnter: GlobalEventHandlers["onpointerenter"];
    onPointerLeave: GlobalEventHandlers["onpointerleave"];
    onPointerMove: GlobalEventHandlers["onpointermove"];
    onPointerOut: GlobalEventHandlers["onpointerout"];
    onPointerOver: GlobalEventHandlers["onpointerover"];
    onPointerUp: GlobalEventHandlers["onpointerup"];
    onProgress: GlobalEventHandlers["onprogress"];
    onRateChange: GlobalEventHandlers["onratechange"];
    onRepeat: GlobalEventHandler;
    onReset: GlobalEventHandlers["onreset"];
    onResize: GlobalEventHandlers["onresize"];
    onScroll: GlobalEventHandlers["onscroll"];
    onSecurityPolicyViolation: GlobalEventHandlers["onsecuritypolicyviolation"];
    onSeeked: GlobalEventHandlers["onseeked"];
    onSeeking: GlobalEventHandlers["onseeking"];
    onSelect: GlobalEventHandlers["onselect"];
    onShow: GlobalEventHandler;
    onStalled: GlobalEventHandlers["onstalled"];
    onSubmit: GlobalEventHandlers["onsubmit"];
    onSuspend: GlobalEventHandlers["onsuspend"];
    onTimeUpdate: GlobalEventHandlers["ontimeupdate"];
    onToggle: GlobalEventHandlers["ontoggle"];
    onTouchCancel: GlobalEventHandlers["ontouchcancel"];
    onTouchEnd: GlobalEventHandlers["ontouchend"];
    onTouchMove: GlobalEventHandlers["ontouchmove"];
    onTouchStart: GlobalEventHandlers["ontouchstart"];
    onTransitionCancel: GlobalEventHandlers["ontransitioncancel"];
    onTransitionEnd: GlobalEventHandlers["ontransitionend"];
    onTransitionRun: GlobalEventHandlers["ontransitionrun"];
    onTransitionStart: GlobalEventHandlers["ontransitionstart"];
    onUnload: GlobalEventHandler;
    onVolumeChange: GlobalEventHandlers["onvolumechange"];
    onWaiting: GlobalEventHandlers["onwaiting"];
    onWheel: GlobalEventHandlers["onwheel"];
}

/** Collected from https://www.w3.org/TR/wai-aria-1.1/#role_definitions */
type AriaRole = "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "command" | "complementary" | "composite" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "input" | "landmark" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "range" | "region" | "roletype" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "section" | "sectionhead" | "select" | "separator" | "slider" | "spinbutton" | "status" | "structure" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | "widget" | "window" | OrString;
interface ARIAAttributes extends ARIAMixin {
}
/** Matches somewhere around 95% with ARIAMixin values - this has a couple of more keys. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) */
interface ARIAAttributes_native {
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) */
    "role": AriaRole;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) */
    "aria-activedescendant": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) */
    "aria-atomic": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) */
    "aria-autocomplete": "none" | "inline" | "list" | "both" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) */
    "aria-braillelabel": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) */
    "aria-brailleroledescription": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) */
    "aria-busy": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) */
    "aria-checked": boolean | "false" | "mixed" | "true" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) */
    "aria-colcount": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) */
    "aria-colindex": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) */
    "aria-colspan": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) */
    "aria-controls": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) */
    "aria-current": boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) */
    "aria-description": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) */
    "aria-describedby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) */
    "aria-details": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) */
    "aria-disabled": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) */
    "aria-dropeffect": "none" | "copy" | "execute" | "link" | "move" | "popup" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) */
    "aria-errormessage": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) */
    "aria-expanded": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto) */
    "aria-flowto": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) */
    "aria-grabbed": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) */
    "aria-haspopup": boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) */
    "aria-hidden": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) */
    "aria-invalid": boolean | "false" | "true" | "grammar" | "spelling" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) */
    "aria-keyshortcuts": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) */
    "aria-label": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) */
    "aria-labelledby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) */
    "aria-level": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) */
    "aria-live": "off" | "assertive" | "polite" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) */
    "aria-modal": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) */
    "aria-multiline": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) */
    "aria-multiselectable": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) */
    "aria-orientation": "horizontal" | "vertical" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) */
    "aria-owns": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) */
    "aria-placeholder": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) */
    "aria-posinset": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) */
    "aria-pressed": boolean | "false" | "mixed" | "true" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) */
    "aria-readonly": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) */
    "aria-relevant": "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | OrString;
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
    "aria-sort": "none" | "ascending" | "descending" | "other" | OrString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) */
    "aria-valuemax": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) */
    "aria-valuemin": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) */
    "aria-valuenow": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) */
    "aria-valuetext": string;
}

/** All known HTML tag names. */
type HTMLTags = keyof HTMLNativeAttributesBy;
/** HTML element attributes by tag name with camelCase listener and aria attributes. */
type HTMLAttributes<Tag extends HTMLTags = HTMLTags> = Partial<HTMLNativeAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** HTML element attributes by tag name with lowercase listener and aria attributes. */
type HTMLAttributes_native<Tag extends HTMLTags = HTMLTags> = Partial<HTMLNativeAttributesBy_native[Tag] & HTMLGlobalAttributes_native & GlobalListeners_native & ARIAAttributes_native>;
/** HTML element attributes by tag name with both lowercase and camelCase listener keys. */
type HTMLAttributes_mixed<Tag extends HTMLTags = HTMLTags> = HTMLAttributes<Tag> & HTMLAttributes_native<Tag>;
interface HTMLGlobalAttributes extends Partial<DataAttributes>, Omit<HTMLGlobalAttributes_native, "autocapitalize" | "autofocus" | "contenteditable" | "enterkeyhint" | "exportparts" | "inputmode" | "itemid" | "itemprop" | "itemref" | "itemscope" | "itemtype" | "popover" | "spellcheck" | "tabindex" | "virtualkeyboardpolicy" | "writingsuggestions"> {
    autoCapitalize: "none" | "off" | "sentences" | "on" | "words" | "characters" | OrString;
    autoFocus: boolean | null;
    contentEditable: BoolOrStr;
    enterKeyHint: string;
    exportParts: string;
    inputMode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | OrString;
    itemId: string;
    itemProp: string;
    itemRef: string | string[];
    itemScope: string;
    itemType: string;
    popOver: string;
    spellCheck: BoolOrStr;
    tabIndex: string | number;
    virtualKeyboardPolicy: "auto" | "manual" | OrString;
    writingSuggestions: BoolOrStr;
}
interface HTMLGlobalAttributes_native extends Partial<DataAttributes> {
    accesskey: string;
    anchor: string;
    autocapitalize: "none" | "off" | "sentences" | "on" | "words" | "characters" | OrString;
    autofocus: boolean | null;
    class: string;
    contenteditable: BoolOrStr;
    dir: "ltr" | "rtl" | "auto" | OrString;
    data: Record<string, any>;
    draggable: BoolOrStr;
    enterkeyhint: string;
    exportparts: string;
    hidden: BoolOrStr;
    id: string;
    insert: BoolOrStr;
    inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | OrString;
    itemid: string;
    itemprop: string;
    itemref: string | string[];
    itemscope: string;
    itemtype: string;
    lang: string;
    nonce: string;
    part: string;
    popover: string;
    role: AriaRole;
    slot: string;
    spellcheck: BoolOrStr;
    style: string | CSSProperties;
    tabindex: string | number;
    title: string;
    translate: "yes" | "no" | OrString;
    virtualkeyboardpolicy: "auto" | "manual" | OrString;
    writingsuggestions: BoolOrStr;
}
interface HTMLManualAttributes extends Omit<HTMLManualAttributes_native, "accept-charset" | "autocomplete" | "bgcolor" | "colspan" | "crossorigin" | "datetime" | "dirname" | "enctype" | "enterkeyhint" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "hreflang" | "http-equiv" | "ismap" | "maxlength" | "minlength" | "novalidate" | "playsinline" | "readonly" | "referrerpolicy" | "rowspan" | "srcdoc" | "srclang" | "srcset" | "usemap"> {
    "acceptCharset": HTMLManualAttributes_native["accept-charset"];
    "autoComplete": HTMLManualAttributes_native["autocomplete"];
    "autoPlay": HTMLManualAttributes_native["autoplay"];
    "bgColor": HTMLManualAttributes_native["bgcolor"];
    "colSpan": HTMLManualAttributes_native["colspan"];
    "crossOrigin": HTMLManualAttributes_native["crossorigin"];
    "dateTime": HTMLManualAttributes_native["datetime"];
    "dirName": HTMLManualAttributes_native["dirname"];
    "encType": HTMLManualAttributes_native["enctype"];
    "formAction": HTMLManualAttributes_native["formaction"];
    "formEncType": HTMLManualAttributes_native["formenctype"];
    "formMethod": HTMLManualAttributes_native["formmethod"];
    "formNoValidate": HTMLManualAttributes_native["formnovalidate"];
    "formTarget": HTMLManualAttributes_native["formtarget"];
    "hrefLang": HTMLManualAttributes_native["hreflang"];
    "httpEquiv": HTMLManualAttributes_native["http-equiv"];
    "isMap": HTMLManualAttributes_native["ismap"];
    "maxLength": HTMLManualAttributes_native["maxlength"];
    "minLength": HTMLManualAttributes_native["minlength"];
    "noValidate": HTMLManualAttributes_native["novalidate"];
    "playsInline": HTMLManualAttributes_native["playsinline"];
    "readOnly": HTMLManualAttributes_native["readonly"];
    "referrerPolicy": HTMLManualAttributes_native["referrerpolicy"];
    "rowSpan": HTMLManualAttributes_native["rowspan"];
    "srcDoc": HTMLManualAttributes_native["srcdoc"];
    "srcLang": HTMLManualAttributes_native["srclang"];
    "srcSet": HTMLManualAttributes_native["srcset"];
    "useMap": HTMLManualAttributes_native["usemap"];
}
interface HTMLManualAttributes_native {
    "accept": string;
    "accept-charset": string;
    "action": string;
    "align": "left" | "top" | "right" | "bottom" | OrString;
    "allow": string;
    "alt": string;
    "as": "audio" | "document" | "embed" | "fetch" | "font" | "image" | "object" | "script" | "style" | "track" | "video" | "worker" | OrString;
    "async": BoolOrStr;
    "autocomplete": BoolOrStr;
    "autoplay": BoolOrStr;
    "background": string;
    "bgcolor": string;
    "border": string;
    "capture": "user" | "environment" | OrString;
    "charset": string;
    "checked": BoolOrStr;
    "cite": string;
    "color": string;
    "cols": string | number;
    "colspan": string | number;
    "content": string | number;
    "controls": BoolOrStr;
    "coords": string;
    "crossorigin": "anonymous" | "use-credentials" | "" | OrString;
    "csp": string;
    "data": string;
    "datetime": string;
    "decoding": string;
    "default": BoolOrStr;
    "defer": BoolOrStr;
    "dirname": string;
    "disabled": BoolOrStr;
    "download": string;
    "enctype": "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | OrString;
    "for": string;
    "form": string;
    "formaction": string;
    "formenctype": string;
    "formmethod": string;
    "formnovalidate": string;
    "formtarget": string;
    "headers": string;
    "height": string | number;
    "high": string | number;
    "href": string;
    "hreflang": string;
    "http-equiv": string;
    "integrity": string;
    "ismap": BoolOrStr;
    "kind": "subtitles" | "captions" | "chapters" | "metadata" | OrString;
    "label": string;
    "language": string;
    "loading": "lazy" | "eager" | OrString;
    "list": string;
    "loop": BoolOrStr;
    "low": string | number;
    "max": string | number;
    "maxlength": string | number;
    "minlength": string | number;
    "media": string;
    "method": string;
    "min": string | number;
    "multiple": BoolOrStr;
    "muted": BoolOrStr;
    "name": string;
    "novalidate": BoolOrStr;
    "open": BoolOrStr;
    "optimum": string | number;
    "pattern": string;
    "ping": string;
    "placeholder": string;
    "playsinline": BoolOrStr;
    "poster": string;
    "preload": string;
    "readonly": string;
    "referrerpolicy": string;
    "rel": "alternate" | "author" | "bookmark" | "canonical" | "dns-prefetch" | "external" | "expect" | "help" | "icon" | "license" | "manifest" | "me" | "modulepreload" | "next" | "nofollow" | "noopener" | "noreferrer" | "opener" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prey" | "privacy-policy" | "search" | "stylesheet" | "tag" | "terms-of-service" | OrString;
    "required": BoolOrStr;
    "reversed": BoolOrStr;
    "role": AriaRole;
    "rows": string | number;
    "rowspan": string | number;
    "sandbox": "allow-downloads" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation" | "allow-top-navigation-to-custom-protocols" | OrString;
    "scope": "row" | "col" | "rowgroup" | "colgroup" | OrString;
    "selected": BoolOrStr;
    "shape": string;
    "size": string | number;
    "sizes": string;
    "span": string | number;
    "src": string;
    "srcdoc": string;
    "srclang": string;
    "srcset": string;
    "start": string | number;
    "step": string | number;
    "summary": string;
    "target": string;
    "type": string;
    "usemap": string;
    "value": string | number;
    "width": string | number;
    "wrap": "hard" | "soft" | "off" | OrString;
}
interface HTMLNativeAttributesBy {
    a: Pick<HTMLManualAttributes, "download" | "href" | "hrefLang" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target" | "type">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLManualAttributes, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLManualAttributes, "autoPlay" | "controls" | "crossOrigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLManualAttributes, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLManualAttributes, "cite">;
    body: Pick<HTMLManualAttributes, "background" | "bgColor">;
    br: {};
    button: Pick<HTMLManualAttributes, "disabled" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value">;
    canvas: Pick<HTMLManualAttributes, "height" | "width">;
    caption: Pick<HTMLManualAttributes, "align">;
    center: {};
    cite: {};
    code: {};
    col: Pick<HTMLManualAttributes, "align">;
    colgroup: Pick<HTMLManualAttributes, "align">;
    data: Pick<HTMLManualAttributes, "value">;
    datalist: {};
    dd: {};
    del: Pick<HTMLManualAttributes, "cite" | "dateTime">;
    details: Pick<HTMLManualAttributes, "open">;
    dfn: {};
    dialog: Pick<HTMLManualAttributes, "open">;
    div: {};
    dl: {};
    dt: {};
    em: {};
    embed: Pick<HTMLManualAttributes, "height" | "src" | "type" | "width">;
    fencedframe: {};
    fieldset: Pick<HTMLManualAttributes, "disabled" | "form" | "name">;
    figcaption: {};
    figure: {};
    font: Pick<HTMLManualAttributes, "color">;
    footer: {};
    form: Pick<HTMLManualAttributes, "accept" | "acceptCharset" | "action">;
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
    hr: Pick<HTMLManualAttributes, "color" | "align">;
    html: {};
    i: {};
    iframe: Pick<HTMLManualAttributes, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerPolicy" | "sandbox" | "src" | "srcDoc" | "width">;
    img: Pick<HTMLManualAttributes, "align" | "alt" | "border" | "crossOrigin" | "decoding" | "height" | "isMap" | "loading" | "referrerPolicy" | "sizes" | "src" | "srcSet" | "useMap" | "width">;
    input: Pick<HTMLManualAttributes, "accept" | "alt" | "capture" | "checked" | "dirName" | "disabled" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "list" | "max" | "maxLength" | "min" | "minLength" | "multiple" | "name" | "pattern" | "placeholder" | "readOnly" | "required" | "size" | "src" | "step" | "useMap" | "value" | "width"> & {
        type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    };
    ins: Pick<HTMLManualAttributes, "cite" | "dateTime">;
    kbd: {};
    label: Pick<HTMLManualAttributes, "for" | "form">;
    legend: {};
    li: Pick<HTMLManualAttributes, "value">;
    link: Pick<HTMLManualAttributes, "as" | "crossOrigin" | "href" | "hrefLang" | "integrity" | "media" | "referrerPolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLManualAttributes, "name">;
    mark: {};
    marquee: Pick<HTMLManualAttributes, "bgColor" | "loop">;
    menu: Pick<HTMLManualAttributes, "type">;
    meta: Pick<HTMLManualAttributes, "charset" | "content" | "httpEquiv" | "name">;
    meter: Pick<HTMLManualAttributes, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLManualAttributes, "border" | "data" | "form" | "height" | "name" | "type" | "useMap" | "width">;
    ol: Pick<HTMLManualAttributes, "reversed" | "start" | "type">;
    optgroup: Pick<HTMLManualAttributes, "disabled" | "label">;
    option: Pick<HTMLManualAttributes, "disabled" | "label" | "selected" | "value">;
    output: Pick<HTMLManualAttributes, "for" | "form" | "name">;
    p: {};
    param: Pick<HTMLManualAttributes, "name" | "value">;
    picture: {};
    plaintext: {};
    portal: {};
    pre: {};
    progress: Pick<HTMLManualAttributes, "form" | "max" | "value">;
    q: Pick<HTMLManualAttributes, "cite">;
    rb: {};
    rp: {};
    rt: {};
    rtc: {};
    ruby: {};
    s: {};
    samp: {};
    script: Pick<HTMLManualAttributes, "async" | "crossOrigin" | "defer" | "integrity" | "language" | "referrerPolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLManualAttributes, "autoComplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLManualAttributes, "media" | "sizes" | "src" | "srcSet" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLManualAttributes, "media" | "type">;
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "border" | "summary">;
    tbody: Pick<HTMLManualAttributes, "align" | "bgColor">;
    td: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    template: {};
    textarea: Pick<HTMLManualAttributes, "autoComplete" | "cols" | "dirName" | "disabled" | "form" | "maxLength" | "minLength" | "name" | "placeholder" | "readOnly" | "required" | "rows" | "wrap">;
    tfoot: Pick<HTMLManualAttributes, "align" | "bgColor">;
    th: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    thead: Pick<HTMLManualAttributes, "align">;
    time: Pick<HTMLManualAttributes, "dateTime">;
    title: {};
    tr: Pick<HTMLManualAttributes, "align" | "bgColor">;
    track: Pick<HTMLManualAttributes, "default" | "kind" | "label" | "src" | "srcLang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLManualAttributes, "autoPlay" | "controls" | "crossOrigin" | "height" | "loop" | "muted" | "playsInline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
}
interface HTMLNativeAttributesBy_native {
    a: Pick<HTMLManualAttributes_native, "download" | "href" | "hreflang" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLManualAttributes_native, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLManualAttributes_native, "autoplay" | "controls" | "crossorigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLManualAttributes_native, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLManualAttributes_native, "cite">;
    body: Pick<HTMLManualAttributes_native, "background" | "bgcolor">;
    br: {};
    button: Pick<HTMLManualAttributes_native, "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "name" | "type" | "value">;
    canvas: Pick<HTMLManualAttributes_native, "height" | "width">;
    caption: Pick<HTMLManualAttributes_native, "align">;
    center: {};
    cite: {};
    code: {};
    col: Pick<HTMLManualAttributes_native, "align">;
    colgroup: Pick<HTMLManualAttributes_native, "align">;
    data: Pick<HTMLManualAttributes_native, "value">;
    datalist: {};
    dd: {};
    del: Pick<HTMLManualAttributes_native, "cite" | "datetime">;
    details: Pick<HTMLManualAttributes_native, "open">;
    dfn: {};
    dialog: Pick<HTMLManualAttributes_native, "open">;
    div: {};
    dl: {};
    dt: {};
    em: {};
    embed: Pick<HTMLManualAttributes_native, "height" | "src" | "type" | "width">;
    fencedframe: {};
    fieldset: Pick<HTMLManualAttributes_native, "disabled" | "form" | "name">;
    figcaption: {};
    figure: {};
    font: Pick<HTMLManualAttributes_native, "color">;
    footer: {};
    form: Pick<HTMLManualAttributes_native, "accept" | "accept-charset" | "action">;
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
    hr: Pick<HTMLManualAttributes_native, "color" | "align">;
    html: {};
    i: {};
    iframe: Pick<HTMLManualAttributes_native, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerpolicy" | "sandbox" | "src" | "srcdoc" | "width">;
    img: Pick<HTMLManualAttributes_native, "align" | "alt" | "border" | "crossorigin" | "decoding" | "height" | "ismap" | "loading" | "referrerpolicy" | "sizes" | "src" | "srcset" | "usemap" | "width">;
    input: Pick<HTMLManualAttributes_native, "accept" | "alt" | "capture" | "checked" | "dirname" | "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "height" | "list" | "max" | "maxlength" | "min" | "minlength" | "multiple" | "name" | "pattern" | "placeholder" | "readonly" | "required" | "size" | "src" | "step" | "usemap" | "value" | "width"> & {
        type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    };
    ins: Pick<HTMLManualAttributes_native, "cite" | "datetime">;
    kbd: {};
    label: Pick<HTMLManualAttributes_native, "for" | "form">;
    legend: {};
    li: Pick<HTMLManualAttributes_native, "value">;
    link: Pick<HTMLManualAttributes_native, "as" | "crossorigin" | "href" | "hreflang" | "integrity" | "media" | "referrerpolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLManualAttributes_native, "name">;
    mark: {};
    marquee: Pick<HTMLManualAttributes_native, "bgcolor" | "loop">;
    menu: Pick<HTMLManualAttributes_native, "type">;
    meta: Pick<HTMLManualAttributes_native, "charset" | "content" | "http-equiv" | "name">;
    meter: Pick<HTMLManualAttributes_native, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLManualAttributes_native, "border" | "data" | "form" | "height" | "name" | "type" | "usemap" | "width">;
    ol: Pick<HTMLManualAttributes_native, "reversed" | "start" | "type">;
    optgroup: Pick<HTMLManualAttributes_native, "disabled" | "label">;
    option: Pick<HTMLManualAttributes_native, "disabled" | "label" | "selected" | "value">;
    output: Pick<HTMLManualAttributes_native, "for" | "form" | "name">;
    p: {};
    param: Pick<HTMLManualAttributes_native, "name" | "value">;
    picture: {};
    plaintext: {};
    portal: {};
    pre: {};
    progress: Pick<HTMLManualAttributes_native, "form" | "max" | "value">;
    q: Pick<HTMLManualAttributes_native, "cite">;
    rb: {};
    rp: {};
    rt: {};
    rtc: {};
    ruby: {};
    s: {};
    samp: {};
    script: Pick<HTMLManualAttributes_native, "async" | "crossorigin" | "defer" | "integrity" | "language" | "referrerpolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLManualAttributes_native, "autocomplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLManualAttributes_native, "media" | "sizes" | "src" | "srcset" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLManualAttributes_native, "media" | "type">;
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "border" | "summary">;
    tbody: Pick<HTMLManualAttributes_native, "align" | "bgcolor">;
    td: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">;
    template: {};
    textarea: Pick<HTMLManualAttributes_native, "autocomplete" | "cols" | "dirname" | "disabled" | "form" | "maxlength" | "minlength" | "name" | "placeholder" | "readonly" | "required" | "rows" | "wrap">;
    tfoot: Pick<HTMLManualAttributes_native, "align" | "bgcolor">;
    th: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">;
    thead: Pick<HTMLManualAttributes_native, "align">;
    time: Pick<HTMLManualAttributes_native, "datetime">;
    title: {};
    tr: Pick<HTMLManualAttributes_native, "align" | "bgcolor">;
    track: Pick<HTMLManualAttributes_native, "default" | "kind" | "label" | "src" | "srclang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLManualAttributes_native, "autoplay" | "controls" | "crossorigin" | "height" | "loop" | "muted" | "playsinline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
}

/** All known SVG tag names. */
type SVGTags = keyof SVGNativeAttributesBy;
/** SVG element attributes by tag name with camelCase listener and aria attributes. */
type SVGAttributes<Tag extends SVGTags = SVGTags> = Partial<SVGNativeAttributesBy[Tag] & SVGCoreAttributes & GlobalListeners & ARIAAttributes>;
/** SVG element attributes by tag name with lowercase listener and aria attributes. */
type SVGAttributes_native<Tag extends SVGTags = SVGTags> = Partial<SVGNativeAttributesBy_native[Tag] & SVGCoreAttributes_native & GlobalListeners_native & ARIAAttributes_native>;
/** SVG element attributes by tag name with both lowercase and camelCase listener keys. */
type SVGAttributes_mixed<Tag extends SVGTags = SVGTags> = SVGAttributes<Tag> & SVGAttributes_native<Tag>;
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
    /** Alias for "class". */
    "className": string;
    "lang": string;
    "style": string | CSSProperties;
    "tabindex": string | number;
    "xml:base": string;
    "xml:lang": string;
    "xml:space": string;
    "xmlns": string;
    "xmlns:xlink": string;
}
interface SVGAnimationAttributes extends AnimationTargetElementAttributes, AnimationAttributeTargetAttributes, AnimationTimingAttributes, AnimationValueAttributes, AnimationAdditionAttributes {
}
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
/** Note: All SVG presentation attributes can be used as CSS properties. */
interface SVGPresentationAttributes extends Pick<SVGOtherAttributes_native, "alignment-baseline" | "baseline-shift" | "clip" | "clip-path" | "clip-rule" | "color" | "color-interpolation" | "color-interpolation-filters" | "color-rendering" | "cursor" | "d" | "direction" | "display" | "dominant-baseline" | "fill" | "fill-opacity" | "fill-rule" | "filter" | "flood-color" | "flood-opacity" | "font-family" | "font-size" | "font-size-adjust" | "font-stretch" | "font-style" | "font-variant" | "font-weight" | "glyph-orientation-horizontal" | "glyph-orientation-vertical" | "image-rendering" | "letter-spacing" | "letter-spacing" | "marker-end" | "marker-mid" | "marker-start" | "marker-start" | "opacity" | "overflow" | "pointer-events" | "shape-rendering" | "stop-color" | "stop-color" | "stroke" | "stroke-dasharray" | "stroke-dashoffset" | "stroke-linecap" | "stroke-linejoin" | "stroke-miterlimit" | "stroke-opacity" | "stroke-width" | "text-anchor" | "text-decoration" | "text-rendering" | "transform" | "transform-origin" | "unicode-bidi" | "vector-effect" | "visibility" | "word-spacing" | "writing-mode"> {
}
/** All tag specific SVG other attributes in camelCase. */
interface SVGOtherAttributes extends Omit<SVGOtherAttributes_native, "accent-height" | "alignment-baseline" | "allow-reorder" | "arabic-form" | "baseline-shift" | "color-interpolation" | "color-interpolation-filters" | "color-rendering" | "crossorigin" | "dominant-baseline" | "fill-opacity" | "fill-rule" | "flood-color" | "flood-opacity" | "font-family" | "font-size" | "font-size-adjust" | "font-style" | "font-variant" | "font-weight" | "glyph-name" | "glyph-orientation-horizontal" | "glyph-orientation-vertical" | "horiz-adv-x" | "horiz-origin-x" | "horiz-origin-y" | "image-rendering" | "letter-spacing" | "lighting-color" | "marker-end" | "marker-mid" | "marker-start" | "overline-position" | "overline-thickness" | "paint-order" | "pointer-events" | "shape-rendering" | "stop-color" | "stop-opacity" | "stroke-dasharray" | "stroke-dashoffset" | "stroke-linecap" | "stroke-linejoin" | "stroke-miterlimit" | "stroke-opacity" | "stroke-width" | "text-anchor" | "text-decoration" | "text-rendering" | "transform-origin" | "underline-position" | "underline-thickness" | "unicode-bidi" | "unicode-range" | "units-per-em" | "v-alphabetic" | "v-hanging" | "v-ideographic" | "v-mathematical" | "vector-effect" | "vert-adv-y" | "vert-origin-x" | "vert-origin-y" | "word-spacing" | "writing-mode" | "xlink:actuate" | "xlink:arcrole" | "xlink:href" | "xlink:role" | "xlink:show" | "xlink:title" | "xlink:type"> {
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
    "fill": CSSColorNames | OrString;
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
    "requiredFeatures": string;
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
    "stroke": CSSColorNames | OrString;
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
    "to": string | number;
    "transform": string;
    "transform-origin": string;
    "type": "translate" | "scale" | "rotate" | "skewX" | "skewY" | "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha" | "identity" | "table" | "discrete" | "linear" | "gamma" | "fractalNoise" | "turbulence" | OrString;
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
    "values": string | number;
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
    marker: Pick<SVGOtherAttributes, "markerHeight" | "markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
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
    text: Pick<SVGOtherAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
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
    marker: Pick<SVGOtherAttributes_native, "markerHeight" | "markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
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
    style: Pick<SVGOtherAttributes_native, "type" | "media"> & {
        title: string;
    };
    svg: Pick<SVGOtherAttributes_native, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGOtherAttributes_native, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: Pick<SVGOtherAttributes_native, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGOtherAttributes_native, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGOtherAttributes_native, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGOtherAttributes_native, "href" | "xlink:href" | "x" | "y" | "width" | "height">;
    view: {};
}

type DOMTags = HTMLTags | SVGTags;
type DOMElement<Tag extends DOMTags = DOMTags> = Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement | SVGElement;
type DOMAttributes<Tag extends DOMTags = DOMTags, Other = never> = [Tag] extends [HTMLTags] ? HTMLAttributes<Tag> : [Tag] extends [SVGTags] ? SVGAttributes<Tag> : Other;
type DOMAttributes_native<Tag extends DOMTags = DOMTags, Other = never> = [Tag] extends [HTMLTags] ? HTMLAttributes_native<Tag> : [Tag] extends [SVGTags] ? SVGAttributes_native<Tag> : Other;
type DOMAttributesBy = {
    [Tag in DOMTags]: DOMAttributes<Tag>;
};
type DOMAttributesBy_native = {
    [Tag in DOMTags]: DOMAttributes_native<Tag>;
};

/** The type for unclean DOM props - before processing them to the main categories by functionality: `{ style, className, data, attributes, listeners }`. */
interface DOMUncleanProps extends Record<string, any> {
    style?: CSSProperties | string;
    class?: string;
    className?: string;
    data?: Record<string, any>;
}
/** Type for clean DOM props.
 * - Represents the _total state_. For example, after creating a new element should apply all features here.
 * - To see type for _changes_ in the states, see `DOMDiffProps` type.
 */
interface DOMCleanProps {
    /** Style in camelCase keys. Can apply directly with `element.style[prop] = value ?? null`.
     * - When value is null, the style property is removed.
     * - The `element.style[prop]` form supports both naming: eg. "backgroundColor" and "background-color".
     */
    style?: CSSProperties;
    /** Class name as a string. Use `className.split(" ")` to get each name. */
    className?: string;
    /** Data to be set with `element.dataset[prop] = value`. For example: `element.dataset.myKey = true` -> `<... data-my-key="true" />` */
    data?: Record<string, any>;
    /** Each value is in stringified form. None should be undefined, but if is, simply don't apply. */
    attributes?: Partial<Record<keyof DOMAttributes & string, string | undefined>>;
    /** Each value is a callback. None should be undefined, but if is, simply don't apply. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string, GlobalEventHandler | undefined>>;
}
/** Type for differences in the props. Should apply them to the existing element.
 * - All values are dictionaries.
 *      * The dictionaries only contain keys for _changes_ (against the previous state) - not the full state.
 *      * If any sub-value in the dictionary is undefined, should remove the feature, otherwise apply.
 *      * In case of class names, the value is `true` for adding a class, and `false` for removing.
 * - To see type for _total state_, see `DOMCleanProps` type.
 */
interface DOMDiffProps {
    /** If no style, no changes in styles. If value in the dictionary is undefined means removed. */
    style?: CSSProperties;
    /** If no classNames, no changes in class names. The keys are class names: for each, if true class name was added, if false name was removed. */
    classNames?: Record<string, boolean>;
    /** If no data, no changes in data attribute. If value in the dictionary is undefined means removed: eg. `delete element.dataSet.myKey`. */
    data?: Record<string, any>;
    /** If no attributes, no changes in general attributes. If value in the dictionary is undefined means removed: eg. `element.removeAttribute(attr)`. Otherwise apply: `element.setAttribute(attr, val)`. */
    attributes?: Record<string, any>;
    /** If no listeners, no changes in listeners. If value in the dictionary is undefined means removed: eg. `element.removeEventListener(name, callback)`. Otherwise apply: `element.addEventListener(name, callback)`. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string, GlobalEventHandler | undefined>>;
}
/** A base type for a definition of a state, that can contain dom information (if the tag is a string). */
interface DOMDef {
    /** The tag of the thing to render. Typically a string for DOM related features, like "div". For complex, it's likely a function or a class. */
    tag: any;
    /** If wanting to insert simple content, or an external node inside. */
    domContent?: string | number | Node | null;
    /** If wanting to apply props to a foreign element. */
    domElement?: Element | null;
}
/** A base type for a tree hierarchy for DOM-grounded defs.
 * - Each tree node can contain other tree nodes as `children`.
 * - Each tree node should have a "def" referring to DOMDef, `{ tag, domContent?, domElement? }`.
 * - Each tree node can have "domProps" if related to dom.
 */
interface DOMTreeNode {
    /** Any child DOMTreeNodes. Used to form a clean nested tree structure (no cyclical references - or the tree goes forever). */
    children?: DOMTreeNode[];
    /** Render definition that ultimately produced this tree node. */
    def?: DOMDef;
    /** The applied domProps. Useful for comparing against last state. Should be updated after applying the props to the DOM. */
    domProps?: DOMCleanProps;
}

/**
 * - With "-" as replaceBy, functions like this: "testProp" => "test-prop", and "TestProp" => "-test-prop".
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `data.TestProp = true`   =>   `<div data--test-prop="true" />`
 */
declare function decapitalizeString(str: string, replaceBy?: string): string;
/**
 * - With "-" as splitter, functions like this: "test-prop" => "testProp", and "-test-prop" => "TestProp".
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `data.TestProp = true`   =>   `<div data--test-prop="true" />`
 */
declare function recapitalizeString(str: string, splitter?: string): string;
/** Parse style string to a dictionary with camelCase keys. Value is string or undefined. */
declare function parseDOMStyle(cssText: string, nullIfEmpty: true): CSSProperties | null;
declare function parseDOMStyle(cssText: string, nullIfEmpty?: false): CSSProperties;
declare function parseDOMStyle(cssText: string, nullIfEmpty?: boolean): CSSProperties | null;
/** Returns a string to be used as class name (with no duplicates and optional nested TypeScript verification).
 * - Each item in the classNames can be:
 *     1. ValidName (single className string),
 *     2. Array<ValidName>,
 *     3. Record<ValidName, any>.
 *     + If you want to use the validation only for Arrays and Records but not Strings, add 2nd parameter `string` to the type: `classNames<ValidName, string>`
 * - Unfortunately, the name validation inputted here only works for Array and Record types, and single strings.
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *     1. Declare a validator by: `const classNames: ValidateNames<ValidName> = classNames;`
 *     2. Then use it like this: `const okName = classNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 *
 * ```
 *
 * // - Basic JS usage - //
 *
 * // Simple addition with duplication prevention and cutting false-like ("", 0, false, null, undefined).
 * classNames("a", "b", 0, undefined, [false, "b", "c"]); // "a b c"
 * // With long strings, duplicates can happen within - simply checks the new ones to be added.
 * classNames("a b", "b"); // "a b b"
 * // Simulate some validation.
 * classNames("a", 1 && "b", ["b", 0 && "c"], { "d": true, "e": null }); // "a b d"
 *
 *
 * // - Simple usage with typing - //
 *
 * // Let's say only "a" and "b" are valid.
 * type Names = "a" | "b";
 *
 * // Just try "a" and "b" separately.
 * classNames<Names>("a", "b", ["b", "a"]); // "a b"
 * classNames<Names>("a", "a b", ["a b"]); // This fails for "a b" since not valid.
 * // Let's allow anything as simple strings, so we can do "a b".
 * classNames<Names, string>("a", "a b", ["a b"]); // "a a b"
 * // We could use this pattern, if only has like 2 or 3 names. But not recommended.
 * classNames<Names, Names | `${Names} ${Names}`>("a", "a b"); // "a b"
 *
 *
 * // - For full validation use ValidateNames type - //
 *
 * // Prepare.
 * type Names = "a" | "b";
 * const validate = classNames as ValidateNames<Names>;
 *
 * // Do tests.
 * // .. These should not produce errors in typing.
 * validate(["a"]);
 * validate(["a", "b", ""]);
 * validate(["a", "b", "a b", "b a"]);
 * validate(["a", false, undefined, "b"]);
 * validate(["a", false, undefined, "b"] as const);
 * validate({"a": true, "b a": false});
 * validate({"a": true, "b a": false} as const);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validate("FAIL");
 * validate(["FAIL"]);
 * validate({"FAIL": false});
 * validate("a", "a b", undefined, "FAIL", ["a", false]);
 * validate("a", "a b", undefined, ["a", "FAIL", false]);
 * validate(["a", "b", "a b", "FAIL", false]);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false, "FAIL": true});
 * validate("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validate("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 *
 * ```
 */
declare function classNames<ValidNames extends string = string, SingleName extends string = ValidNames>(...classNames: Array<PreClassName<ValidNames, SingleName> | "" | false | 0 | null | undefined>): string;
/** Collects unique names as dictionary keys with value `true` for each found.
 * - The names are assumed to be:
 *      1. String (use stringSplitter),
 *      2. Iterable of string names, or an iterable of this type itself (recursively).
 *      3. Record where names are keys, values tells whether to include or not.
 */
declare function collectNamesTo(names: PreClassName, record: Record<string, true>, stringSplitter?: string): void;
/** Get diffs in class names in the form of: Record<string, boolean>, where true means added, false removed, otherwise not included.
 * - Note. This process only checks for changes - it ignores changes in order completely.
 */
declare function getClassNameDiffs(origName?: string, newName?: string): Record<string, boolean> | null;
/** Collect shallow differences in two dictionaries. Assumes first one is original and second are the updates (= the next state) of the dictionary. Returns `null` if no changes detected. */
declare function getDictionaryDiffs<T extends Record<string, any>>(orig: Partial<T>, update: Partial<T>): Partial<T> | null;
/** Checks if both `a` and `b` contains the same property, which is presumably a dictionary, and if so whether the dictionaries are equal in the shallow sense. If not, returns false. */
declare function equalSubDictionaries<Prop extends string>(a: Partial<Record<Prop, any>>, b: Partial<Record<Prop, any>>, prop: Prop): boolean;
/** Creates a new HTML or SVG node - the tag is assumed to be in lowercase, only used to detect for "svg", and otherwise fed to the createElement or createElementNS.
 * - Does not insert it the new node into parent, but only uses the parent to help determine whether should be SVG or HTML element.
 * - The namespaceURI defaults to: "http://www.w3.org/2000/svg".
 */
declare function createDOMElement(tag: string, checkByParentNode?: Node | null | undefined, namespaceURI?: string): Element;
/** Check if a node is SVG (using ownerSVGElement property on the SVGElement, not present for HTMLElement or basic Node). */
declare function isNodeSVG(node: Node | null | undefined): boolean;

declare const domSkipAttributes: {
    innerHTML: boolean;
    outerHTML: boolean;
    textContent: boolean;
    innerText: boolean;
    outerText: boolean;
};
/** Contains all the attributes that cannot be directly translated.
 * - The key is the camelCase name, the value is the native name.
 * - Note that ones not found in here, are directly the same.
 *      * Note that this also includes capitalized ones from HTML (about a dozen) that could likely work also _without_ lowercasing them, eg. "contentEditable" ~ "contenteditable".
 */
declare const domRenamedAttributes: Partial<Record<string, string>>;
/** Maps native listener attribute names to the event names. For example: `{ "onclick": "click" }`. Assumed usage: `const listenerProp = domListenerProps[attr.toLowerCase()]`. */
declare const domListenerProps: Record<"onAbort" | "onActivate" | "onAnimationCancel" | "onAnimationEnd" | "onAnimationIteration" | "onAnimationStart" | "onAuxClick" | "onBegin" | "onBlur" | "onCanPlay" | "onCanPlayThrough" | "onChange" | "onClick" | "onClose" | "onContextMenu" | "onCueChange" | "onDblClick" | "onDrag" | "onDragEnd" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDragStart" | "onDrop" | "onDurationChange" | "onEmptied" | "onEnded" | "onError" | "onFocus" | "onFocusIn" | "onFocusOut" | "onGotPointerCapture" | "onInput" | "onInvalid" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "onLoad" | "onLoadedData" | "onLoadedMetaData" | "onLoadStart" | "onLostPointerCapture" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseOut" | "onMouseOver" | "onMouseUp" | "onMouseWheel" | "onPause" | "onPlay" | "onPlaying" | "onPointerCancel" | "onPointerDown" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerOut" | "onPointerOver" | "onPointerUp" | "onProgress" | "onRateChange" | "onRepeat" | "onReset" | "onResize" | "onScroll" | "onSecurityPolicyViolation" | "onSeeked" | "onSeeking" | "onSelect" | "onShow" | "onStalled" | "onSubmit" | "onSuspend" | "onTimeUpdate" | "onToggle" | "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart" | "onTransitionCancel" | "onTransitionEnd" | "onTransitionRun" | "onTransitionStart" | "onUnload" | "onVolumeChange" | "onWaiting" | "onWheel", string>;

/** Read the domProps from a node. Does not read listeners, but returns: `{ className?, style?, data?, attributes? }`. */
declare function readFromDOM(node: HTMLElement | SVGElement | Node): DOMCleanProps;
/** Read the content inside a (root) tree node as a html string. Useful for server side or static rendering.
 * - Note that the DOMTreeNode is a simple type, that in "dom-types" is only used for this purpose.
 *      * In a state based rendering library, it could be used to keep track of the grounded DOM tree and which def is where.
 *      * But you can also manually convert your structure to the simple DOMTreeNode type, just to use this reader function.
 * - If onlyClosedTagsFor is an array, only uses closed tag (`<div />`) for elements with matching tag (if they have no kids).
 *      * If it's null | undefined, then uses closed tags based on whether has children or not (= only if no children). Defaults to ["img"].
 */
declare function readAsString(treeNode: DOMTreeNode, onlyClosedTagsFor?: string[] | null | undefined): string;

/** Clean the given DOM properties. Returns: `{ style?, className?, data?, listeners?, attributes? }`.
 *      * Note. Does not clean existing styles dictionary, only converts a string format style to dictionary format.
 * - _className_: Combines "class" and "className" to "className". With both: `props.class + " " + props.className`.
 * - _style_: Handles "style" separately supporting string vs. dictionary, combines to a dictionary with camelCase names.
 * - _data_: Converts all "data-*" to a dictionary with camelCase keys (according to the native data attribute convention), and also supports "data" as a stand alone dictionary.
 * - _listeners_: Converts any known listener props to its listener form, eg. "onClick" or "onclick" both become "click" - with both, the latter value overrides.
 * - _attributes_: Any other are found in `{ attributes }`. Cleans "aria" related: eg. "ariaAutoComplete" becomes "aria-autocomplete" - with both, the latter value overrides.
 */
declare function cleanDOMProps(origProps: DOMUncleanProps): DOMCleanProps;
/** Comparison method specialized into DOMCleanProps (= cleaned up attributes description of a dom element). */
declare function equalDOMProps(a: DOMCleanProps, b: DOMCleanProps): boolean;
/** Returns the dictionaries for differences.
 * - After the process, the given newProps then represents the appliedProps, so to speak.
 * - If element is null, just returns the diffs without applying anything.
 */
declare function applyDOMProps(domElement: HTMLElement | SVGElement | Element | null, newProps: DOMCleanProps, oldProps?: DOMCleanProps, logWarnings?: boolean): DOMDiffProps | null;

export { CSSBlendMode, CSSColorNames, CSSNumericPropertyNames, CSSProperties, DOMAttributes, DOMAttributesBy, DOMAttributesBy_native, DOMAttributes_native, DOMCleanProps, DOMDef, DOMDiffProps, DOMElement, DOMTags, DOMTreeNode, DOMUncleanProps, DataAttributes, GlobalEventHandler, GlobalListeners, GlobalListeners_native, HTMLAttributes, HTMLAttributes_mixed, HTMLAttributes_native, HTMLGlobalAttributes, HTMLGlobalAttributes_native, HTMLTags, NameValidator, PreClassName, SVGAttributes, SVGAttributes_mixed, SVGAttributes_native, SVGTags, Split, SplitArr, ValidateNames, applyDOMProps, classNames, cleanDOMProps, collectNamesTo, createDOMElement, decapitalizeString, domListenerProps, domRenamedAttributes, domSkipAttributes, equalDOMProps, equalSubDictionaries, getClassNameDiffs, getDictionaryDiffs, isNodeSVG, parseDOMStyle, readAsString, readFromDOM, recapitalizeString };
