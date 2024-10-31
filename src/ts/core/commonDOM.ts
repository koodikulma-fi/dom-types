
// - Common DOM related helpers - //

/** The common global event handler used in Element.addEventListener/removeEventListener flow. */
export type GlobalEventHandler = (event: Event) => void;

/** Each value gets stringified when applied to `element.dataset`, but we can allow inputting numbers and booleans. (Could even allow arrays but perhaps it'd just be misleading.) */
export interface DataAttributes { [dataKey: `data-${string}`]: string | number | boolean | null | undefined; }

/** Collected from https://www.w3.org/TR/wai-aria-1.1/#role_definitions */
export type ARIARole =
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "command"
    | "complementary"
    | "composite"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "input"
    | "landmark"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "range"
    | "region"
    | "roletype"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "section"
    | "sectionhead"
    | "select"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "structure"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | "widget"
    | "window"
    ; // | AnyString;


// - Tags - //

/** All known HTML tag names. */
export type HTMLTags = 
    | "a"
    | "abbr"
    | "acronym"
    | "address"
    | "area"
    | "article"
    | "aside"
    | "audio"
    | "b"
    | "base"
    | "bdi"
    | "bdo"
    | "big"
    | "blockquote"
    | "body"
    | "br"
    | "button"
    | "canvas"
    | "caption"
    | "center"
    | "cite"
    | "code"
    | "col"
    | "colgroup"
    | "data"
    | "datalist"
    | "dd"
    | "del"
    | "details"
    | "dfn"
    | "dialog"
    | "div"
    | "dl"
    | "dt"
    | "em"
    | "embed"
    | "fencedframe"
    | "fieldset"
    | "figcaption"
    | "figure"
    | "font"
    | "footer"
    | "form"
    | "frame"
    | "frameset"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "head"
    | "header"
    | "hgroup"
    | "hr"
    | "html"
    | "i"
    | "iframe"
    | "img"
    | "input"
    | "ins"
    | "kbd"
    | "label"
    | "legend"
    | "li"
    | "link"
    | "main"
    | "map"
    | "mark"
    | "marquee"
    | "menu"
    | "meta"
    | "meter"
    | "nav"
    | "nobr"
    | "noembed"
    | "noframes"
    | "noscript"
    | "object"
    | "ol"
    | "optgroup"
    | "option"
    | "output"
    | "p"
    | "param"
    | "picture"
    | "plaintext"
    | "portal"
    | "pre"
    | "progress"
    | "q"
    | "rb"
    | "rp"
    | "rt"
    | "rtc"
    | "ruby"
    | "s"
    | "samp"
    | "script"
    | "search"
    | "section"
    | "select"
    | "slot"
    | "small"
    | "source"
    | "span"
    | "strike"
    | "strong"
    | "style"
    | "sub"
    | "summary"
    | "sup"
    | "table"
    | "tbody"
    | "td"
    | "template"
    | "textarea"
    | "tfoot"
    | "th"
    | "thead"
    | "time"
    | "title"
    | "tr"
    | "track"
    | "tt"
    | "u"
    | "ul"
    | "var"
    | "video"
    | "wbr"
    | "xmp"
    ;

/** All known SVG tag names. */
export type SVGTags = 
    | "a"
    | "animate"
    | "animateMotion"
    | "animateTransform"
    | "circle"
    | "clipPath"
    | "defs"
    | "desc"
    | "ellipse"
    | "feBlend"
    | "feColorMatrix"
    | "feComponentTransfer"
    | "feComposite"
    | "feConvolveMatrix"
    | "feDiffuseLighting"
    | "feDisplacementMap"
    | "feDistantLight"
    | "feDropShadow"
    | "feFlood"
    | "feFuncA"
    | "feFuncB"
    | "feFuncG"
    | "feFuncR"
    | "feGaussianBlur"
    | "feImage"
    | "feMergeNode"
    | "feMorphology"
    | "feOffset"
    | "fePointLight"
    | "feSpecularLighting"
    | "feSpotLight"
    | "feTile"
    | "feTurbulunece"
    | "filter"
    | "foreignObject"
    | "g"
    | "image"
    | "line"
    | "linearGradient"
    | "marker"
    | "mask"
    | "metadata"
    | "mpath"
    | "path"
    | "pattern"
    | "polygon"
    | "polyline"
    | "radialGradient"
    | "rect"
    | "script"
    | "set"
    | "stop"
    | "style"
    | "svg"
    | "switch"
    | "symbol"
    | "text"
    | "textPath"
    | "title"
    | "tspan"
    | "use"
    | "view"
    ;

/** All known HTML and SVG tag names. */
export type DOMTags = HTMLTags | SVGTags;


// - Element - //

/** Get HTML or SVG element type by DOM tag. */
export type DOMElement<Tag extends DOMTags = DOMTags> = DOMTags extends Tag ? HTMLElement | SVGElement : Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement | SVGElement;
