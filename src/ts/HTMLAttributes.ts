
// - Imports - //

// Local.
import { BoolOrStr, DataAttributes, OrString } from "./common";
import { ARIAAttributes, ARIAAttributes_native, AriaRole } from "./ARIAAttributes";
import { GlobalListeners, GlobalListeners_native } from "./GlobalListeners";
import { CSSProperties } from "./CSSProperties";


// - HTML related typing - //

// Tags and element.
/** All known HTML tag names. */
export type HTMLTags = keyof HTMLNativeAttributesBy; // HTMLElementTagNameMap;

// HTML attributes.
/** HTML element attributes by tag name with camelCase listener and aria attributes. */
export type HTMLAttributes<Tag extends HTMLTags = HTMLTags> = Partial<HTMLNativeAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes>;
/** HTML element attributes by tag name with lowercase listener and aria attributes. */
export type HTMLAttributes_native<Tag extends HTMLTags = HTMLTags> = Partial<HTMLNativeAttributesBy_native[Tag] & HTMLGlobalAttributes_native & GlobalListeners_native & ARIAAttributes_native>;
/** HTML element attributes by tag name with both lowercase and camelCase listener keys. */
export type HTMLAttributes_mixed<Tag extends HTMLTags = HTMLTags> = HTMLAttributes<Tag> & HTMLAttributes_native<Tag>;


// - DOM common attributes - //

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

export interface HTMLGlobalAttributes_native extends Partial<DataAttributes> {
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


// - DOM attributes used by some tags only - camelCase - //

interface HTMLManualAttributes extends Omit<HTMLManualAttributes_native,
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
    "acceptCharset": HTMLManualAttributes_native["accept-charset"]; // Special: "accept-charset"
    "autoComplete": HTMLManualAttributes_native["autocomplete"];
    "autoPlay": HTMLManualAttributes_native["autoplay"];
    "bgColor": HTMLManualAttributes_native["bgcolor"];
    "colSpan": HTMLManualAttributes_native["colspan"];
    "crossOrigin": HTMLManualAttributes_native["crossorigin"];
    "dateTime": HTMLManualAttributes_native["datetime"];
    "dirName": HTMLManualAttributes_native["dirname"];
    "encType": HTMLManualAttributes_native["enctype"];
    // "enterKeyHint": HTMLManualAttributes_native["enterkeyhint"]; // Global.
    "formAction": HTMLManualAttributes_native["formaction"];
    "formEncType": HTMLManualAttributes_native["formenctype"];
    "formMethod": HTMLManualAttributes_native["formmethod"];
    "formNoValidate": HTMLManualAttributes_native["formnovalidate"];
    "formTarget": HTMLManualAttributes_native["formtarget"];
    "hrefLang": HTMLManualAttributes_native["hreflang"];
    "httpEquiv": HTMLManualAttributes_native["http-equiv"]; // Special: "http-equiv"
    // "inputMode": string; // Global.
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


// - DOM attributes used by some tags only - lowercase - //

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
    "data": string; // <object>
    "datetime": string;
    "decoding": string;
    "default": BoolOrStr;
    "defer": BoolOrStr;
    "dirname": string;
    "disabled": BoolOrStr;
    "download": string;
    "enctype": "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | OrString;
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
    "type": string; // "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    "usemap": string;
    "value": string | number;
    "width": string | number;
    "wrap": "hard" | "soft" | "off" | OrString;
}


// - DOM attributes by tag name - camelCase - //

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
    div: {}; // Pick<HTMLManualAttributes, "height" | "width">; // Legacy
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
    img: Pick<HTMLManualAttributes, "align" | "alt" | "border" | "crossOrigin" | "decoding" | "height" | "isMap" | "loading" | "referrerPolicy" | "sizes" | "src" | "srcSet" | "useMap" | "width">; // | "intrinsicsize"
    input: Pick<HTMLManualAttributes,
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
    style: Pick<HTMLManualAttributes, "media" | "type">; // "scoped"
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "border" | "summary">;
    tbody: Pick<HTMLManualAttributes, "align" | "bgColor">;
    td: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">;
    template: {};
    textarea: Pick<HTMLManualAttributes,
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
    tfoot: Pick<HTMLManualAttributes, "align" | "bgColor">;
    th: Pick<HTMLManualAttributes, "align" | "background" | "bgColor" | "colSpan" | "headers" | "rowSpan">; // "scope"
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
};


// - DOM attributes by tag name - lowercase - //

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
    div: {}; // Pick<HTMLManualAttributes_native, "height" | "width">; // Legacy
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
    img: Pick<HTMLManualAttributes_native, "align" | "alt" | "border" | "crossorigin" | "decoding" | "height" | "ismap" | "loading" | "referrerpolicy" | "sizes" | "src" | "srcset" | "usemap" | "width">; // | "intrinsicsize"
    input: Pick<HTMLManualAttributes_native,
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
    style: Pick<HTMLManualAttributes_native, "media" | "type">; // "scoped"
    sub: {};
    summary: {};
    sup: {};
    table: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "border" | "summary">;
    tbody: Pick<HTMLManualAttributes_native, "align" | "bgcolor">;
    td: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">;
    template: {};
    textarea: Pick<HTMLManualAttributes_native,
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
    tfoot: Pick<HTMLManualAttributes_native, "align" | "bgcolor">;
    th: Pick<HTMLManualAttributes_native, "align" | "background" | "bgcolor" | "colspan" | "headers" | "rowspan">; // "scope"
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
};
export {
    // - HTML related typing - //
    // Tags and element.
    /** All known HTML tag names. */
    DataAttributes
};

