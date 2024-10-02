
// - Imports - //

// Local.
import { BoolOrStr, DataAttributes, AnyString } from "./common";
import { GlobalListeners, GlobalListeners_native } from "./GlobalListeners";
import { CSSProperties } from "./CSSProperties";
import { ARIAAttributes, ARIAAttributes_native, ARIARole } from "./ARIAAttributes";


// - Info source (at around Q3 2024) - //
//
// MDN docs: https://developer.mozilla.org/en-US/docs/Web/HTML


// - HTML related typing - //

// Tags.
/** All known HTML tag names. */
export type HTMLTags = keyof HTMLNativeAttributesBy;

// Attributes with tag arg.
/** HTML element attributes by tag name with camelCase listener and aria attributes. */
export type HTMLAttributes<Tag extends string, Fallback = HTMLAttributesAny> = [Tag] extends [HTMLTags] ? Partial<HTMLNativeAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;
/** HTML element attributes by tag name with lowercase listener and aria attributes. */
export type HTMLAttributes_native<Tag extends string, Fallback = HTMLAttributesAny> = [Tag] extends [HTMLTags] ? Partial<HTMLNativeAttributesBy_native[Tag] & HTMLGlobalAttributes_native & GlobalListeners_native & ARIAAttributes_native> : Fallback;

// Attributes without tag.
/** The all possible attributes that HTML elements can have - in camelCase. */
export type HTMLAttributesAny = Partial<HTMLOtherAttributes & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** The all possible attributes that HTML elements can have - in native case. */
export type HTMLAttributesAny_native = Partial<HTMLOtherAttributes_native & HTMLGlobalAttributes_native & GlobalListeners_native & ARIAAttributes_native>;

// Attributes dictionary.
/** Dictionary of HTML attributes by tag in camelCase. */
export type HTMLAttributesBy = { [Tag in HTMLTags]: HTMLAttributes<Tag>; };
/** Dictionary of HTML attributes by tag in native case. */
export type HTMLAttributesBy_native = { [Tag in HTMLTags]: HTMLAttributes_native<Tag>; };


// - HTML global attributes - //

// Global.
export interface HTMLGlobalAttributes extends Partial<DataAttributes>, Omit<HTMLGlobalAttributes_native,
    | "autocapitalize"
    | "autofocus"
    | "contenteditable"
    | "enterkeyhint"
    | "exportparts"
    | "inputmode"
    | "itemid"
    | "itemprop"
    | "itemref"
    | "itemscope"
    | "itemtype"
    | "popover"
    | "spellcheck"
    | "tabindex"
    | "virtualkeyboardpolicy"
    | "writingsuggestions"
> {
    autoCapitalize: "none" | "off" | "sentences" | "on" | "words" | "characters" | AnyString;
    autoFocus: boolean | null;
    className: string; // Add in addition to "class".
    contentEditable: BoolOrStr;
    enterKeyHint: string;
    exportParts: string;
    inputMode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | AnyString;
    itemId: string;
    itemProp: string;
    itemRef: string | string[];
    itemScope: string;
    itemType: string;
    popOver: string;
    spellCheck: BoolOrStr;
    tabIndex: string | number;
    virtualKeyboardPolicy: "auto" | "manual" | AnyString;
    writingSuggestions: BoolOrStr;
}

export interface HTMLGlobalAttributes_native extends Partial<DataAttributes> {
    accesskey: string;
    anchor: string;
    autocapitalize: "none" | "off" | "sentences" | "on" | "words" | "characters" | AnyString;
    autofocus: boolean | null;
    class: string;
    contenteditable: BoolOrStr;
    dir: "ltr" | "rtl" | "auto" | AnyString;
    data: Record<string, any>;
    draggable: BoolOrStr;
    enterkeyhint: string;
    exportparts: string;
    hidden: BoolOrStr;
    id: string;
    insert: BoolOrStr;
    inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | AnyString;
    itemid: string;
    itemprop: string;
    itemref: string | string[];
    itemscope: string;
    itemtype: string;
    lang: string;
    nonce: string;
    part: string;
    popover: string;
    role: ARIARole | AnyString;
    slot: string;
    spellcheck: BoolOrStr;
    style: string | CSSProperties;
    tabindex: string | number;
    title: string;
    translate: "yes" | "no" | AnyString;
    virtualkeyboardpolicy: "auto" | "manual" | AnyString;
    writingsuggestions: BoolOrStr;
}


// - HTML common attributes (tag specific) - //

/** All attributes that are specific to tags in native case - excluding HTMLGlobalAttributes. */
interface HTMLOtherAttributes extends Omit<HTMLOtherAttributes_native,
    | "accept-charset"
    | "autocomplete"
    | "bgcolor"
    | "colspan"
    | "crossorigin"
    | "datetime"
    | "dirname"
    | "enctype"
    | "enterkeyhint"
    | "formaction"
    | "formenctype"
    | "formmethod"
    | "formnovalidate"
    | "formtarget"
    | "hreflang"
    | "http-equiv"
    | "ismap"
    | "maxlength"
    | "minlength"
    | "novalidate"
    | "playsinline"
    | "readonly"
    | "referrerpolicy"
    | "rowspan"
    | "srcdoc"
    | "srclang"
    | "srcset"
    | "usemap"
> {
    "acceptCharset": HTMLOtherAttributes_native["accept-charset"]; // Special: "accept-charset"
    "autoComplete": HTMLOtherAttributes_native["autocomplete"];
    "autoPlay": HTMLOtherAttributes_native["autoplay"];
    "bgColor": HTMLOtherAttributes_native["bgcolor"];
    "colSpan": HTMLOtherAttributes_native["colspan"];
    "crossOrigin": HTMLOtherAttributes_native["crossorigin"];
    "dateTime": HTMLOtherAttributes_native["datetime"];
    "dirName": HTMLOtherAttributes_native["dirname"];
    "encType": HTMLOtherAttributes_native["enctype"];
    // "enterKeyHint": HTMLOtherAttributes_native["enterkeyhint"]; // Global.
    "formAction": HTMLOtherAttributes_native["formaction"];
    "formEncType": HTMLOtherAttributes_native["formenctype"];
    "formMethod": HTMLOtherAttributes_native["formmethod"];
    "formNoValidate": HTMLOtherAttributes_native["formnovalidate"];
    "formTarget": HTMLOtherAttributes_native["formtarget"];
    "hrefLang": HTMLOtherAttributes_native["hreflang"];
    "httpEquiv": HTMLOtherAttributes_native["http-equiv"]; // Special: "http-equiv"
    // "inputMode": string; // Global.
    "isMap": HTMLOtherAttributes_native["ismap"];
    "maxLength": HTMLOtherAttributes_native["maxlength"];
    "minLength": HTMLOtherAttributes_native["minlength"];
    "noValidate": HTMLOtherAttributes_native["novalidate"];
    "playsInline": HTMLOtherAttributes_native["playsinline"];
    "readOnly": HTMLOtherAttributes_native["readonly"];
    "referrerPolicy": HTMLOtherAttributes_native["referrerpolicy"];
    "rowSpan": HTMLOtherAttributes_native["rowspan"];
    "srcDoc": HTMLOtherAttributes_native["srcdoc"];
    "srcLang": HTMLOtherAttributes_native["srclang"];
    "srcSet": HTMLOtherAttributes_native["srcset"];
    "useMap": HTMLOtherAttributes_native["usemap"];
}
/** All attributes that are specific to tags in native case - excluding HTMLGlobalAttributes_native. */
interface HTMLOtherAttributes_native {
    "accept": string;
    "accept-charset": string;
    "action": string;
    "align": "left" | "top" | "right" | "bottom" | AnyString;
    "allow": string;
    "alt": string;
    "as": "audio" | "document" | "embed" | "fetch" | "font" | "image" | "object" | "script" | "style" | "track" | "video" | "worker" | AnyString;
    "async": BoolOrStr;
    "autocomplete": BoolOrStr;
    "autoplay": BoolOrStr;
    "background": string;
    "bgcolor": string;
    "border": string;
    "capture": "user" | "environment" | AnyString;
    "charset": string;
    "checked": BoolOrStr;
    "cite": string;
    "color": string;
    "cols": string | number;
    "colspan": string | number;
    "content": string | number;
    "controls": BoolOrStr;
    "coords": string;
    "crossorigin": "anonymous" | "use-credentials" | "" | AnyString;
    "csp": string;
    "data": string; // <object>
    "datetime": string;
    "decoding": string;
    "default": BoolOrStr;
    "defer": BoolOrStr;
    "dirname": string;
    "disabled": BoolOrStr;
    "download": string;
    "enctype": "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | AnyString;
    // "enterkeyhint": string; // Global.
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
    // "intrinsicsize": string; // Deprecated and weird.
    // "inputmode": string; // Global.
    "ismap": BoolOrStr;
    "kind": "subtitles" | "captions" | "chapters" | "metadata" | AnyString;
    "label": string;
    "language": string;
    "loading": "lazy" | "eager" | AnyString;
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
    "rel": "alternate" | "author" | "bookmark" | "canonical" | "dns-prefetch" | "external" | "expect" | "help" | "icon" | "license" | "manifest" | "me" | "modulepreload" | "next" | "nofollow" | "noopener" | "noreferrer" | "opener" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prey" | "privacy-policy" | "search" | "stylesheet" | "tag" | "terms-of-service" | AnyString;
    "required": BoolOrStr;
    "reversed": BoolOrStr;
    "role": ARIARole | AnyString;
    "rows": string | number;
    "rowspan": string | number;
    "sandbox": "allow-downloads" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation" | "allow-top-navigation-to-custom-protocols" | AnyString;
    "scope": "row" | "col" | "rowgroup" | "colgroup" | AnyString;
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
    "type": string; // "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    "usemap": string;
    "value": string | number;
    "width": string | number;
    "wrap": "hard" | "soft" | "off" | AnyString;
}


// - HTML attributes by tag name - //

/** HTML attributes by tags in camelCase. */
interface HTMLNativeAttributesBy {
    a: Pick<HTMLOtherAttributes, "download" | "href" | "hrefLang" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target" | "type">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLOtherAttributes, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerPolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLOtherAttributes, "autoPlay" | "controls" | "crossOrigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLOtherAttributes, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLOtherAttributes, "cite">;
    body: Pick<HTMLOtherAttributes, "background" | "bgColor">;
    br: {};
    button: Pick<HTMLOtherAttributes, "disabled" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value">;
    canvas: Pick<HTMLOtherAttributes, "height" | "width">;
    caption: Pick<HTMLOtherAttributes, "align">;
    center: {};
    cite: {};
    code: {};
    col: Pick<HTMLOtherAttributes, "align">;
    colgroup: Pick<HTMLOtherAttributes, "align">;
    data: Pick<HTMLOtherAttributes, "value">;
    datalist: {};
    dd: {};
    del: Pick<HTMLOtherAttributes, "cite" | "dateTime">;
    details: Pick<HTMLOtherAttributes, "open">;
    dfn: {};
    dialog: Pick<HTMLOtherAttributes, "open">;
    div: {}; // Pick<HTMLOtherAttributes, "height" | "width">; // Legacy
    dl: {};
    dt: {};
    em: {};
    embed: Pick<HTMLOtherAttributes, "height" | "src" | "type" | "width">;
    fencedframe: {};
    fieldset: Pick<HTMLOtherAttributes, "disabled" | "form" | "name">;
    figcaption: {};
    figure: {};
    font: Pick<HTMLOtherAttributes, "color">;
    footer: {};
    form: Pick<HTMLOtherAttributes, "accept" | "acceptCharset" | "action">;
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
    hr: Pick<HTMLOtherAttributes, "color" | "align">;
    html: {};
    i: {};
    iframe: Pick<HTMLOtherAttributes, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerPolicy" | "sandbox" | "src" | "srcDoc" | "width">;
    img: Pick<HTMLOtherAttributes, "align" | "alt" | "border" | "crossOrigin" | "decoding" | "height" | "isMap" | "loading" | "referrerPolicy" | "sizes" | "src" | "srcSet" | "useMap" | "width">; // | "intrinsicsize"
    input: Pick<HTMLOtherAttributes,
        | "accept"
        | "alt"
        | "capture"
        | "checked"
        | "dirName"
        | "disabled"
        | "form"
        | "formAction"
        | "formEncType"
        | "formMethod"
        | "formNoValidate"
        | "formTarget"
        | "height"
        | "list"
        | "max"
        | "maxLength"
        | "min"
        | "minLength"
        | "multiple"
        | "name"
        | "pattern"
        | "placeholder"
        | "readOnly"
        | "required"
        | "size"
        | "src"
        | "step"
        | "useMap"
        | "value"
        | "width"
    > & {
        type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    };
    ins: Pick<HTMLOtherAttributes, "cite" | "dateTime">;
    kbd: {};
    label: Pick<HTMLOtherAttributes, "for" | "form">;
    legend: {};
    li: Pick<HTMLOtherAttributes, "value">;
    link: Pick<HTMLOtherAttributes, "as" | "crossOrigin" | "href" | "hrefLang" | "integrity" | "media" | "referrerPolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLOtherAttributes, "name">;
    mark: {};
    marquee: Pick<HTMLOtherAttributes, "bgColor" | "loop">;
    menu: Pick<HTMLOtherAttributes, "type">;
    meta: Pick<HTMLOtherAttributes, "charset" | "content" | "httpEquiv" | "name">;
    meter: Pick<HTMLOtherAttributes, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLOtherAttributes, "border" | "data" | "form" | "height" | "name" | "type" | "useMap" | "width">;
    ol: Pick<HTMLOtherAttributes, "reversed" | "start" | "type">;
    optgroup: Pick<HTMLOtherAttributes, "disabled" | "label">;
    option: Pick<HTMLOtherAttributes, "disabled" | "label" | "selected" | "value">;
    output: Pick<HTMLOtherAttributes, "for" | "form" | "name">;
    p: {};
    param: Pick<HTMLOtherAttributes, "name" | "value">;
    picture: {};
    plaintext: {};
    portal: {};
    pre: {};
    progress: Pick<HTMLOtherAttributes, "form" | "max" | "value">;
    q: Pick<HTMLOtherAttributes, "cite">;
    rb: {};
    rp: {};
    rt: {};
    rtc: {};
    ruby: {};
    s: {};
    samp: {};
    script: Pick<HTMLOtherAttributes, "async" | "crossOrigin" | "defer" | "integrity" | "language" | "referrerPolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLOtherAttributes, "autoComplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLOtherAttributes, "media" | "sizes" | "src" | "srcSet" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLOtherAttributes, "media" | "type">; // "scoped"
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLOtherAttributes, "align" | "background" | "bgColor" | "border" | "summary">;
    tbody: Pick<HTMLOtherAttributes, "align" | "bgColor">;
    td: Pick<HTMLOtherAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    template: {};
    textarea: Pick<HTMLOtherAttributes,
        | "autoComplete"
        | "cols"
        | "dirName"
        | "disabled"
        // | "enterKeyHint" // Global.
        | "form"
        // | "inputmode" // Global.
        | "maxLength"
        | "minLength"
        | "name"
        | "placeholder"
        | "readOnly"
        | "required"
        | "rows"
        | "wrap"
    >;
    tfoot: Pick<HTMLOtherAttributes, "align" | "bgColor">;
    th: Pick<HTMLOtherAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">; // "scope"
    thead: Pick<HTMLOtherAttributes, "align">;
    time: Pick<HTMLOtherAttributes, "dateTime">;
    title: {};
    tr: Pick<HTMLOtherAttributes, "align" | "bgColor">;
    track: Pick<HTMLOtherAttributes, "default" | "kind" | "label" | "src" | "srcLang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLOtherAttributes, "autoPlay" | "controls" | "crossOrigin" | "height" | "loop" | "muted" | "playsInline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
};

/** HTML attributes by tags in native case. */
interface HTMLNativeAttributesBy_native {
    a: Pick<HTMLOtherAttributes_native, "download" | "href" | "hreflang" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    abbr: {};
    acronym: {};
    address: {};
    area: Pick<HTMLOtherAttributes_native, "alt" | "coords" | "download" | "href" | "media" | "ping" | "referrerpolicy" | "rel" | "shape" | "target">;
    article: {};
    aside: {};
    audio: Pick<HTMLOtherAttributes_native, "autoplay" | "controls" | "crossorigin" | "loop" | "muted" | "preload" | "src">;
    b: {};
    base: Pick<HTMLOtherAttributes_native, "href" | "target">;
    bdi: {};
    bdo: {};
    big: {};
    blockquote: Pick<HTMLOtherAttributes_native, "cite">;
    body: Pick<HTMLOtherAttributes_native, "background" | "bgcolor">;
    br: {};
    button: Pick<HTMLOtherAttributes_native, "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "name" | "type" | "value">;
    canvas: Pick<HTMLOtherAttributes_native, "height" | "width">;
    caption: Pick<HTMLOtherAttributes_native, "align">;
    center: {};
    cite: {};
    code: {};
    col: Pick<HTMLOtherAttributes_native, "align">;
    colgroup: Pick<HTMLOtherAttributes_native, "align">;
    data: Pick<HTMLOtherAttributes_native, "value">;
    datalist: {};
    dd: {};
    del: Pick<HTMLOtherAttributes_native, "cite" | "datetime">;
    details: Pick<HTMLOtherAttributes_native, "open">;
    dfn: {};
    dialog: Pick<HTMLOtherAttributes_native, "open">;
    div: {}; // Pick<HTMLOtherAttributes_native, "height" | "width">; // Legacy
    dl: {};
    dt: {};
    em: {};
    embed: Pick<HTMLOtherAttributes_native, "height" | "src" | "type" | "width">;
    fencedframe: {};
    fieldset: Pick<HTMLOtherAttributes_native, "disabled" | "form" | "name">;
    figcaption: {};
    figure: {};
    font: Pick<HTMLOtherAttributes_native, "color">;
    footer: {};
    form: Pick<HTMLOtherAttributes_native, "accept" | "accept-charset" | "action">;
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
    hr: Pick<HTMLOtherAttributes_native, "color" | "align">;
    html: {};
    i: {};
    iframe: Pick<HTMLOtherAttributes_native, "align" | "allow" | "csp" | "height" | "loading" | "name" | "referrerpolicy" | "sandbox" | "src" | "srcdoc" | "width">;
    img: Pick<HTMLOtherAttributes_native, "align" | "alt" | "border" | "crossorigin" | "decoding" | "height" | "ismap" | "loading" | "referrerpolicy" | "sizes" | "src" | "srcset" | "usemap" | "width">; // | "intrinsicsize"
    input: Pick<HTMLOtherAttributes_native,
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
    ins: Pick<HTMLOtherAttributes_native, "cite" | "datetime">;
    kbd: {};
    label: Pick<HTMLOtherAttributes_native, "for" | "form">;
    legend: {};
    li: Pick<HTMLOtherAttributes_native, "value">;
    link: Pick<HTMLOtherAttributes_native, "as" | "crossorigin" | "href" | "hreflang" | "integrity" | "media" | "referrerpolicy" | "rel" | "sizes" | "type">;
    main: {};
    map: Pick<HTMLOtherAttributes_native, "name">;
    mark: {};
    marquee: Pick<HTMLOtherAttributes_native, "bgcolor" | "loop">;
    menu: Pick<HTMLOtherAttributes_native, "type">;
    meta: Pick<HTMLOtherAttributes_native, "charset" | "content" | "http-equiv" | "name">;
    meter: Pick<HTMLOtherAttributes_native, "form" | "high" | "low" | "max" | "min" | "optimum" | "value">;
    nav: {};
    nobr: {};
    noembed: {};
    noframes: {};
    noscript: {};
    object: Pick<HTMLOtherAttributes_native, "border" | "data" | "form" | "height" | "name" | "type" | "usemap" | "width">;
    ol: Pick<HTMLOtherAttributes_native, "reversed" | "start" | "type">;
    optgroup: Pick<HTMLOtherAttributes_native, "disabled" | "label">;
    option: Pick<HTMLOtherAttributes_native, "disabled" | "label" | "selected" | "value">;
    output: Pick<HTMLOtherAttributes_native, "for" | "form" | "name">;
    p: {};
    param: Pick<HTMLOtherAttributes_native, "name" | "value">;
    picture: {};
    plaintext: {};
    portal: {};
    pre: {};
    progress: Pick<HTMLOtherAttributes_native, "form" | "max" | "value">;
    q: Pick<HTMLOtherAttributes_native, "cite">;
    rb: {};
    rp: {};
    rt: {};
    rtc: {};
    ruby: {};
    s: {};
    samp: {};
    script: Pick<HTMLOtherAttributes_native, "async" | "crossorigin" | "defer" | "integrity" | "language" | "referrerpolicy" | "src" | "type">;
    search: {};
    section: {};
    select: Pick<HTMLOtherAttributes_native, "autocomplete" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
    slot: {};
    small: {};
    source: Pick<HTMLOtherAttributes_native, "media" | "sizes" | "src" | "srcset" | "type">;
    span: {};
    strike: {};
    strong: {};
    style: Pick<HTMLOtherAttributes_native, "media" | "type">; // "scoped"
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLOtherAttributes_native, "align" | "background" | "bgcolor" | "border" | "summary">;
    tbody: Pick<HTMLOtherAttributes_native, "align" | "bgcolor">;
    td: Pick<HTMLOtherAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">;
    template: {};
    textarea: Pick<HTMLOtherAttributes_native,
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
    tfoot: Pick<HTMLOtherAttributes_native, "align" | "bgcolor">;
    th: Pick<HTMLOtherAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">; // "scope"
    thead: Pick<HTMLOtherAttributes_native, "align">;
    time: Pick<HTMLOtherAttributes_native, "datetime">;
    title: {};
    tr: Pick<HTMLOtherAttributes_native, "align" | "bgcolor">;
    track: Pick<HTMLOtherAttributes_native, "default" | "kind" | "label" | "src" | "srclang">;
    tt: {};
    u: {};
    ul: {};
    var: {};
    video: Pick<HTMLOtherAttributes_native, "autoplay" | "controls" | "crossorigin" | "height" | "loop" | "muted" | "playsinline" | "preload" | "src" | "width">;
    wbr: {};
    xmp: {};
};
