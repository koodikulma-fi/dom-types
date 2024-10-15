import { AnyString, BoolOrStr, ARIARole, GlobalEventHandler, HTMLTags, SVGTags, DOMTags, HTMLCommonAttributes_core, HTMLGlobalAttributes_core, SVGAnimationAttributes_core, SVGCommonAttributes_core, SVGGlobalAttributes_core } from "./core";
/** ARIA attributes in camelCase. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) */
export interface ARIAAttributes {
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) */
    role: ARIARole | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) */
    ariaActiveDescendant: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) */
    ariaAtomic: BoolOrStr | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) */
    ariaAutoComplete: "none" | "inline" | "list" | "both" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) */
    ariaBrailleLabel: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) */
    ariaBrailleRoleDescription: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) */
    ariaBusy: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) */
    ariaChecked: boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) */
    ariaColCount: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) */
    ariaColIndex: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) */
    ariaColSpan: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) */
    ariaControls: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) */
    ariaCurrent: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) */
    ariaDescription: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) */
    ariaDescribedBy: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) */
    ariaDetails: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) */
    ariaDisabled: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) */
    ariaDropEffect: "none" | "copy" | "execute" | "link" | "move" | "popup" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) */
    ariaErrorMessage: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) */
    ariaExpanded: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto) */
    ariaFlowTo: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) */
    ariaGrabbed: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) */
    ariaHasPopup: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) */
    ariaHidden: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) */
    ariaInvalid: boolean | "false" | "true" | "grammar" | "spelling" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) */
    ariaKeyShortcuts: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) */
    ariaLabel: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) */
    ariaLabelledBy: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) */
    ariaLevel: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) */
    ariaLive: "off" | "assertive" | "polite" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) */
    ariaModal: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) */
    ariaMultiLine: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) */
    ariaMultiSelectable: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) */
    ariaOrientation: "horizontal" | "vertical" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) */
    ariaOwns: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) */
    ariaPlaceholder: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) */
    ariaPosInSet: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) */
    ariaPressed: boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) */
    ariaReadOnly: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) */
    ariaRelevant: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) */
    ariaRequired: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) */
    ariaRoleDescription: string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) */
    ariaRowCount: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) */
    ariaRowIndex: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) */
    ariaRowSpan: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) */
    ariaSelected: BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) */
    ariaSetSize: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) */
    ariaSort: "none" | "ascending" | "descending" | "other" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) */
    ariaValueMax: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) */
    ariaValueMin: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) */
    ariaValueNow: number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) */
    ariaValueText: string;
}
/** All listener attributes (matching GlobalEventHandlers + couple more) with camelCase keys. Values are event handler types. */
export interface GlobalListeners {
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
/** HTML element attributes by tag name with camelCase listener and aria attributes. */
export type HTMLAttributes<Tag extends string, Fallback = HTMLAttributesAny> = [Tag] extends [HTMLTags] ? Partial<HTMLNativeAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;
/** The all possible attributes that HTML elements can have - in camelCase. */
export type HTMLAttributesAny = Partial<HTMLCommonAttributes & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** Dictionary of HTML attributes by tag in camelCase. */
export type HTMLAttributesBy = {
    [Tag in HTMLTags]: HTMLAttributes<Tag>;
};
/** HTML attributes in camelCase available on all HTML elements. */
export interface HTMLGlobalAttributes extends Omit<HTMLGlobalAttributes_core, "autocapitalize" | "autofocus" | "contenteditable" | "enterkeyhint" | "exportparts" | "inputmode" | "itemid" | "itemprop" | "itemref" | "itemscope" | "itemtype" | "popover" | "spellcheck" | "tabindex" | "virtualkeyboardpolicy" | "writingsuggestions"> {
    autoCapitalize: HTMLGlobalAttributes_core["autocapitalize"];
    autoFocus: HTMLGlobalAttributes_core["autofocus"];
    className: string;
    contentEditable: HTMLGlobalAttributes_core["contenteditable"];
    enterKeyHint: HTMLGlobalAttributes_core["enterkeyhint"];
    exportParts: HTMLGlobalAttributes_core["exportparts"];
    inputMode: HTMLGlobalAttributes_core["inputmode"];
    itemId: HTMLGlobalAttributes_core["itemid"];
    itemProp: HTMLGlobalAttributes_core["itemprop"];
    itemRef: HTMLGlobalAttributes_core["itemref"];
    itemScope: HTMLGlobalAttributes_core["itemscope"];
    itemType: HTMLGlobalAttributes_core["itemtype"];
    popOver: HTMLGlobalAttributes_core["popover"];
    spellCheck: HTMLGlobalAttributes_core["spellcheck"];
    tabIndex: HTMLGlobalAttributes_core["tabindex"];
    virtualKeyboardPolicy: HTMLGlobalAttributes_core["virtualkeyboardpolicy"];
    writingSuggestions: HTMLGlobalAttributes_core["writingsuggestions"];
}
/** All attributes that are specific to tags in camelCase - excluding HTMLGlobalAttributes. */
interface HTMLCommonAttributes extends Omit<HTMLCommonAttributes_core, "accept-charset" | "autocomplete" | "bgcolor" | "colspan" | "crossorigin" | "datetime" | "dirname" | "enctype" | "enterkeyhint" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "hreflang" | "http-equiv" | "ismap" | "maxlength" | "minlength" | "novalidate" | "playsinline" | "readonly" | "referrerpolicy" | "rowspan" | "srcdoc" | "srclang" | "srcset" | "usemap"> {
    "acceptCharset": HTMLCommonAttributes_core["accept-charset"];
    "autoComplete": HTMLCommonAttributes_core["autocomplete"];
    "autoPlay": HTMLCommonAttributes_core["autoplay"];
    "bgColor": HTMLCommonAttributes_core["bgcolor"];
    "colSpan": HTMLCommonAttributes_core["colspan"];
    "crossOrigin": HTMLCommonAttributes_core["crossorigin"];
    "dateTime": HTMLCommonAttributes_core["datetime"];
    "dirName": HTMLCommonAttributes_core["dirname"];
    "encType": HTMLCommonAttributes_core["enctype"];
    "formAction": HTMLCommonAttributes_core["formaction"];
    "formEncType": HTMLCommonAttributes_core["formenctype"];
    "formMethod": HTMLCommonAttributes_core["formmethod"];
    "formNoValidate": HTMLCommonAttributes_core["formnovalidate"];
    "formTarget": HTMLCommonAttributes_core["formtarget"];
    "hrefLang": HTMLCommonAttributes_core["hreflang"];
    "httpEquiv": HTMLCommonAttributes_core["http-equiv"];
    "isMap": HTMLCommonAttributes_core["ismap"];
    "maxLength": HTMLCommonAttributes_core["maxlength"];
    "minLength": HTMLCommonAttributes_core["minlength"];
    "noValidate": HTMLCommonAttributes_core["novalidate"];
    "playsInline": HTMLCommonAttributes_core["playsinline"];
    "readOnly": HTMLCommonAttributes_core["readonly"];
    "referrerPolicy": HTMLCommonAttributes_core["referrerpolicy"];
    "rowSpan": HTMLCommonAttributes_core["rowspan"];
    "srcDoc": HTMLCommonAttributes_core["srcdoc"];
    "srcLang": HTMLCommonAttributes_core["srclang"];
    "srcSet": HTMLCommonAttributes_core["srcset"];
    "useMap": HTMLCommonAttributes_core["usemap"];
}
/** HTML attributes by tags in camelCase. */
interface HTMLNativeAttributesBy {
    a: Pick<HTMLCommonAttributes, "download" | "href" | "hrefLang" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target" | "type">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLCommonAttributes, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLCommonAttributes, "autoPlay" | "controls" | "crossOrigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLCommonAttributes, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLCommonAttributes, "cite">;
    body: Pick<HTMLCommonAttributes, "background" | "bgColor">;
    br: {};
    button: Pick<HTMLCommonAttributes, "disabled" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value">;
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
    del: Pick<HTMLCommonAttributes, "cite" | "dateTime">;
    details: Pick<HTMLCommonAttributes, "open">;
    dfn: {};
    dialog: Pick<HTMLCommonAttributes, "open">;
    div: {};
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
    form: Pick<HTMLCommonAttributes, "accept" | "acceptCharset" | "action">;
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
    iframe: Pick<HTMLCommonAttributes, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerPolicy" | "sandbox" | "src" | "srcDoc" | "width">;
    img: Pick<HTMLCommonAttributes, "align" | "alt" | "border" | "crossOrigin" | "decoding" | "height" | "isMap" | "loading" | "referrerPolicy" | "sizes" | "src" | "srcSet" | "useMap" | "width">;
    input: Pick<HTMLCommonAttributes, "accept" | "alt" | "capture" | "checked" | "dirName" | "disabled" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "list" | "max" | "maxLength" | "min" | "minLength" | "multiple" | "name" | "pattern" | "placeholder" | "readOnly" | "required" | "size" | "src" | "step" | "useMap" | "value" | "width"> & {
        type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    };
    ins: Pick<HTMLCommonAttributes, "cite" | "dateTime">;
    kbd: {};
    label: Pick<HTMLCommonAttributes, "for" | "form">;
    legend: {};
    li: Pick<HTMLCommonAttributes, "value">;
    link: Pick<HTMLCommonAttributes, "as" | "crossOrigin" | "href" | "hrefLang" | "integrity" | "media" | "referrerPolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLCommonAttributes, "name">;
    mark: {};
    marquee: Pick<HTMLCommonAttributes, "bgColor" | "loop">;
    menu: Pick<HTMLCommonAttributes, "type">;
    meta: Pick<HTMLCommonAttributes, "charset" | "content" | "httpEquiv" | "name">;
    meter: Pick<HTMLCommonAttributes, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLCommonAttributes, "border" | "data" | "form" | "height" | "name" | "type" | "useMap" | "width">;
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
    script: Pick<HTMLCommonAttributes, "async" | "crossOrigin" | "defer" | "integrity" | "language" | "referrerPolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLCommonAttributes, "autoComplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLCommonAttributes, "media" | "sizes" | "src" | "srcSet" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLCommonAttributes, "media" | "type">;
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLCommonAttributes, "align" | "background" | "bgColor" | "border" | "summary">;
    tbody: Pick<HTMLCommonAttributes, "align" | "bgColor">;
    td: Pick<HTMLCommonAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    template: {};
    textarea: Pick<HTMLCommonAttributes, "autoComplete" | "cols" | "dirName" | "disabled" | "form" | "maxLength" | "minLength" | "name" | "placeholder" | "readOnly" | "required" | "rows" | "wrap">;
    tfoot: Pick<HTMLCommonAttributes, "align" | "bgColor">;
    th: Pick<HTMLCommonAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    thead: Pick<HTMLCommonAttributes, "align">;
    time: Pick<HTMLCommonAttributes, "dateTime">;
    title: {};
    tr: Pick<HTMLCommonAttributes, "align" | "bgColor">;
    track: Pick<HTMLCommonAttributes, "default" | "kind" | "label" | "src" | "srcLang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLCommonAttributes, "autoPlay" | "controls" | "crossOrigin" | "height" | "loop" | "muted" | "playsInline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
}
/** SVG element attributes by tag name with camelCase listener and aria attributes. */
export type SVGAttributes<Tag extends string, Fallback = SVGAttributesAny> = [Tag] extends [SVGTags] ? Partial<SVGNativeAttributesBy[Tag] & SVGGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;
/** The all possible attributes that SVG elements can have - in camelCase. */
export type SVGAttributesAny = Partial<SVGCommonAttributes & SVGGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** Dictionary of SVG attributes by tag in camelCase. */
export type SVGAttributesBy = {
    [Tag in SVGTags]: SVGAttributes<Tag>;
};
/** SVG attributes in camelCase available on all SVG elements. */
export interface SVGGlobalAttributes extends Omit<SVGGlobalAttributes_core, "tabindex" | "xml:base" | "xml:lang" | "xml:space" | "xmlns:xlink"> {
    /** Alias for "class". */
    "className": string;
    /** Translates to "tabindex". */
    "tabIndex": string | number;
    /** Translates to "xml:base". */
    "xmlBase": string;
    /** Translates to "xml:lang". */
    "xmlLang": string;
    /** Translates to "xml:space". */
    "xmlSpace": string;
    /** Translates to "xmlns:xlink". */
    "xmlnsXlink": string;
}
/** All SVG presentation attributes in camelCase. They can also be used as CSS properties. */
interface SVGPresentationAttributes extends Pick<SVGCommonAttributes, "alignmentBaseline" | "baselineShift" | "clip" | "clipPath" | "clipRule" | "color" | "colorInterpolation" | "colorInterpolationFilters" | "colorRendering" | "cursor" | "d" | "direction" | "display" | "dominantBaseline" | "fill" | "fillOpacity" | "fillRule" | "filter" | "floodColor" | "floodOpacity" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "imageRendering" | "letterSpacing" | "letterSpacing" | "markerEnd" | "markerMid" | "markerStart" | "opacity" | "overflow" | "pointerEvents" | "shapeRendering" | "stopColor" | "stopColor" | "stroke" | "strokeDashArray" | "strokeDashOffset" | "strokeLineCap" | "strokeLineJoin" | "strokeMiterLimit" | "strokeOpacity" | "strokeWidth" | "textAnchor" | "textDecoration" | "textRendering" | "transform" | "transformOrigin" | "unicodeBidi" | "vectorEffect" | "visibility" | "wordSpacing" | "writingMode"> {
}
/** All attributes that are specific to tags in camelCase - excluding SVGGlobalAttributes. */
interface SVGCommonAttributes extends Omit<SVGCommonAttributes_core, "accent-height" | "alignment-baseline" | "allow-reorder" | "arabic-form" | "baseline-shift" | "color-interpolation" | "color-interpolation-filters" | "color-rendering" | "crossorigin" | "dominant-baseline" | "fill-opacity" | "fill-rule" | "flood-color" | "flood-opacity" | "font-family" | "font-size" | "font-size-adjust" | "font-style" | "font-variant" | "font-weight" | "glyph-name" | "glyph-orientation-horizontal" | "glyph-orientation-vertical" | "horiz-adv-x" | "horiz-origin-x" | "horiz-origin-y" | "image-rendering" | "letter-spacing" | "lighting-color" | "marker-end" | "marker-mid" | "marker-start" | "overline-position" | "overline-thickness" | "paint-order" | "pointer-events" | "shape-rendering" | "stop-color" | "stop-opacity" | "stroke-dasharray" | "stroke-dashoffset" | "stroke-linecap" | "stroke-linejoin" | "stroke-miterlimit" | "stroke-opacity" | "stroke-width" | "text-anchor" | "text-decoration" | "text-rendering" | "transform-origin" | "underline-position" | "underline-thickness" | "unicode-bidi" | "unicode-range" | "units-per-em" | "v-alphabetic" | "v-hanging" | "v-ideographic" | "v-mathematical" | "vector-effect" | "vert-adv-y" | "vert-origin-x" | "vert-origin-y" | "word-spacing" | "writing-mode" | "xlink:actuate" | "xlink:arcrole" | "xlink:href" | "xlink:role" | "xlink:show" | "xlink:title" | "xlink:type"> {
    "accentHeight": SVGCommonAttributes_core["accent-height"];
    "alignmentBaseline": SVGCommonAttributes_core["alignment-baseline"];
    "allowReorder": SVGCommonAttributes_core["allow-reorder"];
    "arabicForm": SVGCommonAttributes_core["arabic-form"];
    "baselineShift": SVGCommonAttributes_core["baseline-shift"];
    "capHeight": SVGCommonAttributes_core["cap-height"];
    "clipPath": SVGCommonAttributes_core["clip-path"];
    "clipRule": SVGCommonAttributes_core["clip-rule"];
    "colorInterpolation": SVGCommonAttributes_core["color-interpolation"];
    "colorInterpolationFilters": SVGCommonAttributes_core["color-interpolation-filters"];
    "colorRendering": SVGCommonAttributes_core["color-rendering"];
    "crossOrigin": SVGCommonAttributes_core["crossorigin"];
    "dominantBaseline": SVGCommonAttributes_core["dominant-baseline"];
    "fillOpacity": SVGCommonAttributes_core["fill-opacity"];
    "fillRule": SVGCommonAttributes_core["fill-rule"];
    "floodColor": SVGCommonAttributes_core["flood-color"];
    "floodOpacity": SVGCommonAttributes_core["flood-opacity"];
    "fontFamily": SVGCommonAttributes_core["font-family"];
    "fontSize": SVGCommonAttributes_core["font-size"];
    "fontSizeAdjust": SVGCommonAttributes_core["font-size-adjust"];
    "fontStretch": SVGCommonAttributes_core["font-stretch"];
    "fontStyle": SVGCommonAttributes_core["font-style"];
    "fontVariant": SVGCommonAttributes_core["font-variant"];
    "fontWeight": SVGCommonAttributes_core["font-weight"];
    "glyphName": SVGCommonAttributes_core["glyph-name"];
    "glyphOrientationHorizontal": SVGCommonAttributes_core["glyph-orientation-horizontal"];
    "glyphOrientationVertical": SVGCommonAttributes_core["glyph-orientation-vertical"];
    "horizAdvX": SVGCommonAttributes_core["horiz-adv-x"];
    "horizOriginX": SVGCommonAttributes_core["horiz-origin-x"];
    "horizOriginY": SVGCommonAttributes_core["horiz-origin-y"];
    "imageRendering": SVGCommonAttributes_core["image-rendering"];
    "letterSpacing": SVGCommonAttributes_core["letter-spacing"];
    "lightingColor": SVGCommonAttributes_core["lighting-color"];
    "markerEnd": SVGCommonAttributes_core["marker-end"];
    "markerMid": SVGCommonAttributes_core["marker-mid"];
    "markerStart": SVGCommonAttributes_core["marker-start"];
    "overlinePosition": SVGCommonAttributes_core["overline-position"];
    "overlineThickness": SVGCommonAttributes_core["overline-thickness"];
    "paintOrder": SVGCommonAttributes_core["paint-order"];
    "pointerEvents": SVGCommonAttributes_core["pointer-events"];
    "shapeRendering": SVGCommonAttributes_core["shape-rendering"];
    "stopColor": SVGCommonAttributes_core["stop-color"];
    "stopOpacity": SVGCommonAttributes_core["stop-opacity"];
    "strokeDashArray": SVGCommonAttributes_core["stroke-dasharray"];
    "strokeDashOffset": SVGCommonAttributes_core["stroke-dashoffset"];
    "strokeLineCap": SVGCommonAttributes_core["stroke-linecap"];
    "strokeLineJoin": SVGCommonAttributes_core["stroke-linejoin"];
    "strokeMiterLimit": SVGCommonAttributes_core["stroke-miterlimit"];
    "strokeOpacity": SVGCommonAttributes_core["stroke-opacity"];
    "strokeWidth": SVGCommonAttributes_core["stroke-width"];
    "textAnchor": SVGCommonAttributes_core["text-anchor"];
    "textDecoration": SVGCommonAttributes_core["text-decoration"];
    "textRendering": SVGCommonAttributes_core["text-rendering"];
    "transformOrigin": SVGCommonAttributes_core["transform-origin"];
    "underlinePosition": SVGCommonAttributes_core["underline-position"];
    "underlineThickness": SVGCommonAttributes_core["underline-thickness"];
    "unicodeBidi": SVGCommonAttributes_core["unicode-bidi"];
    "unicodeRange": SVGCommonAttributes_core["unicode-range"];
    "unitsPerEm": SVGCommonAttributes_core["units-per-em"];
    "vAlphabetic": SVGCommonAttributes_core["v-alphabetic"];
    "vHanging": SVGCommonAttributes_core["v-hanging"];
    "vIdeographic": SVGCommonAttributes_core["v-ideographic"];
    "vMathematical": SVGCommonAttributes_core["v-mathematical"];
    "vectorEffect": SVGCommonAttributes_core["vector-effect"];
    "vertAdvY": SVGCommonAttributes_core["vert-adv-y"];
    "vertOriginX": SVGCommonAttributes_core["vert-origin-x"];
    "vertOriginY": SVGCommonAttributes_core["vert-origin-y"];
    "wordSpacing": SVGCommonAttributes_core["word-spacing"];
    "writingMode": SVGCommonAttributes_core["writing-mode"];
    "xlinkActuate": SVGCommonAttributes_core["xlink:actuate"];
    "xlinkArcrole": SVGCommonAttributes_core["xlink:arcrole"];
    "xlinkHref": SVGCommonAttributes_core["xlink:href"];
    "xlinkRole": SVGCommonAttributes_core["xlink:role"];
    "xlinkShow": SVGCommonAttributes_core["xlink:show"];
    "xlinkTitle": SVGCommonAttributes_core["xlink:title"];
    "xlinkType": SVGCommonAttributes_core["xlink:type"];
}
/** SVG attributes by tags in camelCase. Might allow some more than should. */
interface SVGNativeAttributesBy {
    a: Pick<HTMLAttributes<"a">, "download" | "href" | "hrefLang" | "ping" | "referrerPolicy" | "rel" | "target"> & Pick<SVGCommonAttributes, "type" | "xlinkHref">;
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
    feFlood: Pick<SVGCommonAttributes, "floodColor" | "floodOpacity">;
    feFuncA: {};
    feFuncB: {};
    feFuncG: {};
    feFuncR: {};
    feGaussianBlur: Pick<SVGCommonAttributes, "in" | "stdDeviation" | "edgeMode">;
    feImage: Pick<SVGCommonAttributes, "in" | "crossOrigin" | "preserveAspectRatio" | "xlinkHref">;
    feMergeNode: Pick<SVGCommonAttributes, "in">;
    feMorphology: Pick<SVGCommonAttributes, "in" | "operator" | "radius">;
    feOffset: Pick<SVGCommonAttributes, "in" | "dx" | "dy">;
    fePointLight: Pick<SVGCommonAttributes, "x" | "y" | "z">;
    feSpecularLighting: Pick<SVGCommonAttributes, "in" | "surfaceScale" | "specularConstant" | "specularExponent" | "kernelUnitLength">;
    feSpotLight: Pick<SVGCommonAttributes, "x" | "y" | "z" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "specularExponent" | "limitingConeAngle">;
    feTile: Pick<SVGCommonAttributes, "in">;
    feTurbulunece: Pick<SVGCommonAttributes, "baseFrequency" | "numOctaves" | "seed" | "stitchTiles" | "type">;
    filter: Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "filterUnits" | "primitiveUnits" | "xlinkHref">;
    foreignObject: Pick<SVGCommonAttributes, "height" | "width" | "x" | "y">;
    g: SVGPresentationAttributes;
    image: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "href" | "xlinkHref" | "preserveAspectRatio" | "crossOrigin" | "decoding">;
    line: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x1" | "y1" | "x2" | "y2" | "pathLength">;
    linearGradient: Pick<SVGCommonAttributes, "gradientUnits" | "gradientTransform" | "href" | "spreadMethod" | "x1" | "x2" | "xlinkHref" | "y1" | "y2">;
    marker: Pick<SVGCommonAttributes, "markerHeight" | "markerUnits" | "markerWidth" | "orient" | "preserveAspectRatio" | "refX" | "refY" | "viewBox">;
    mask: Pick<SVGCommonAttributes, "height" | "maskContentUnits" | "maskUnits" | "x" | "y" | "width">;
    metadata: {};
    mpath: Pick<SVGCommonAttributes, "xlinkHref">;
    path: SVGPresentationAttributes & Pick<SVGCommonAttributes, "d" | "pathLength">;
    pattern: Pick<SVGCommonAttributes, "height" | "href" | "patternContentUnits" | "patternTransform" | "patternUnits" | "preserveAspectRatio" | "viewBox" | "width" | "x" | "xlinkHref" | "y">;
    polygon: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    polyline: SVGPresentationAttributes & Pick<SVGCommonAttributes, "points" | "pathLength">;
    radialGradient: Pick<SVGCommonAttributes, "cx" | "cy" | "fr" | "fx" | "fy" | "gradientUnits" | "gradientTransform" | "href" | "r" | "spreadMethod" | "xlinkHref">;
    rect: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "width" | "height" | "rx" | "ry" | "pathLength">;
    script: Pick<SVGCommonAttributes, "crossOrigin" | "href" | "type" | "xlinkHref">;
    set: Pick<SVGCommonAttributes, "to">;
    stop: Pick<SVGCommonAttributes, "offset" | "stopColor" | "stopOpacity">;
    style: Pick<SVGCommonAttributes, "type" | "media" | "title">;
    svg: Pick<SVGCommonAttributes, "baseProfile" | "height" | "preserveAspectRatio" | "version" | "viewBox" | "width" | "x" | "y">;
    switch: {};
    symbol: Pick<SVGCommonAttributes, "height" | "preserveAspectRatio" | "refX" | "refY" | "viewBox" | "width" | "x" | "y">;
    text: SVGPresentationAttributes & Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    textPath: Pick<SVGCommonAttributes, "href" | "lengthAdjust" | "method" | "path" | "side" | "spacing" | "startOffset" | "textLength">;
    title: {};
    tspan: Pick<SVGCommonAttributes, "x" | "y" | "dx" | "dy" | "rotate" | "lengthAdjust" | "textLength">;
    use: Pick<SVGCommonAttributes, "href" | "xlinkHref" | "x" | "y" | "width" | "height">;
    view: {};
}
/** Get DOM attributes by tag in camelCase. In case fits both (like "a" tag) then gives both. Otherwise either or Fallback if not found (defaults to DOMAttributesAny). */
export type DOMAttributes<Tag extends string, Fallback = DOMAttributesAny> = [Tag] extends [HTMLTags] ? [Tag] extends [SVGTags] ? SVGAttributes<Tag> & HTMLAttributes<Tag> : HTMLAttributes<Tag> : [Tag] extends [SVGTags] ? SVGAttributes<Tag> : Fallback;
/** All the possible attributes that DOM elements (HTML or SVG) can have - in camelCase. */
export type DOMAttributesAny = HTMLAttributesAny & SVGAttributesAny;
/** Dictionary of DOM attributes by tag in camelCase. */
export type DOMAttributesBy = {
    [Tag in DOMTags]: DOMAttributes<Tag>;
};export * from "./core";
