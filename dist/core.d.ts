type BoolOrStr = boolean | "true" | "false";
type AnyString = string & {};
type InheritInitial = "inherit" | "initial";
/** See if the Key is readonly. */
type IsReadOnlyKey<T, Key extends keyof T> = (<G>() => G extends Pick<T, Key> ? true : false) extends (<G>() => G extends Record<Key, T[Key]> ? true : false) ? false : true;
/** Exclude methods and property functions from an object like. */
type GetMethodKeys<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T];

/** The common global event handler used in Element.addEventListener/removeEventListener flow. */
type GlobalEventHandler = (event: Event) => void;
/** Each value gets stringified when applied to `element.dataset`, but we can allow inputting numbers and booleans. (Could even allow arrays but perhaps it'd just be misleading.) */
interface DataAttributes {
    [dataKey: `data-${string}`]: string | number | boolean | null | undefined;
}
/** Collected from https://www.w3.org/TR/wai-aria-1.1/#role_definitions */
type ARIARole = "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "command" | "complementary" | "composite" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "input" | "landmark" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "range" | "region" | "roletype" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "section" | "sectionhead" | "select" | "separator" | "slider" | "spinbutton" | "status" | "structure" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | "widget" | "window";
/** All known HTML tag names. */
type HTMLTags = "a" | "abbr" | "acronym" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fencedframe" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "nobr" | "noembed" | "noframes" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "portal" | "pre" | "progress" | "q" | "rb" | "rp" | "rt" | "rtc" | "ruby" | "s" | "samp" | "script" | "search" | "section" | "select" | "slot" | "small" | "source" | "span" | "strike" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp";
/** All known SVG tag names. */
type SVGTags = "a" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulunece" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "script" | "set" | "stop" | "style" | "svg" | "switch" | "symbol" | "text" | "textPath" | "title" | "tspan" | "use" | "view";
/** All known HTML and SVG tag names. */
type DOMTags = HTMLTags | SVGTags;
/** Get HTML or SVG element type by DOM tag. */
type DOMElement<Tag extends DOMTags = DOMTags> = DOMTags extends Tag ? HTMLElement | SVGElement : Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement | SVGElement;

/** All listener attributes (matching GlobalEventHandlers + couple more) with camelCase keys. Values are event handler types. */
interface GlobalListeners_core {
    /** Fires when the user aborts the download.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
     */
    onabort: (ev: UIEvent) => void;
    /** @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/DOMActivate_event) */
    onactivate: (ev: AnimationEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event) */
    onanimationcancel: (ev: AnimationEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event) */
    onanimationend: (ev: AnimationEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
    onanimationiteration: (ev: AnimationEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
    onanimationstart: (ev: AnimationEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event) */
    onauxclick: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event) */
    onbeforeinput: (ev: InputEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event) */
    onbeforetoggle: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginEvent_event) */
    onbegin: (ev: Event) => void;
    /** Fires when the object loses the input focus.
     * @param ev The focus event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
     */
    onblur: (ev: FocusEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event) */
    oncancel: (ev: Event) => void;
    /** Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
     */
    oncanplay: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event) */
    oncanplaythrough: (ev: Event) => void;
    /** Fires when the contents of the object or selection have changed.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
     */
    onchange: (ev: Event) => void;
    /** Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
     */
    onclick: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event) */
    onclose: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) */
    oncontextlost: (ev: Event) => void;
    /** Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
     */
    oncontextmenu: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event) */
    oncontextrestored: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event) */
    oncopy: (ev: ClipboardEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event) */
    oncuechange: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event) */
    oncut: (ev: ClipboardEvent) => void;
    /** Fires when the user double-clicks the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
     */
    ondblclick: (ev: MouseEvent) => void;
    /** Fires on the source object continuously during a drag operation.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
     */
    ondrag: (ev: DragEvent) => void;
    /** Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
     */
    ondragend: (ev: DragEvent) => void;
    /** Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
     */
    ondragenter: (ev: DragEvent) => void;
    /** Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
     */
    ondragleave: (ev: DragEvent) => void;
    /** Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
     */
    ondragover: (ev: DragEvent) => void;
    /** Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
     */
    ondragstart: (ev: DragEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event) */
    ondrop: (ev: DragEvent) => void;
    /** Occurs when the duration attribute is updated.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
     */
    ondurationchange: (ev: Event) => void;
    /** Occurs when the media element is reset to its initial state.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
     */
    onemptied: (ev: Event) => void;
    /** Occurs when the end of playback is reached.
     * @param ev The event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
     */
    onended: (ev: Event) => void;
    /** Fires when an error occurs during object loading.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
     */
    onerror: OnErrorEventHandler;
    /** Fires when the object receives focus.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
     */
    onfocus: (ev: FocusEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusin_event) */
    onfocusin: (ev: FocusEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusout_event) */
    onfocusout: (ev: FocusEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event) */
    onformdata: (ev: FormDataEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event) */
    ongotpointercapture: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event) */
    oninput: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event) */
    oninvalid: (ev: Event) => void;
    /** Fires when the user presses a key.
     * @param ev The keyboard event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
     */
    onkeydown: (ev: KeyboardEvent) => void;
    /** Fires when the user presses an alphanumeric key.
     * @param ev The event.
     * @deprecated
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
     */
    onkeypress: (ev: KeyboardEvent) => void;
    /** Fires when the user releases a key.
     * @param ev The keyboard event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
     */
    onkeyup: (ev: KeyboardEvent) => void;
    /** Fires immediately after the browser loads the object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
     */
    onload: (ev: Event) => void;
    /** Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
     */
    onloadeddata: (ev: Event) => void;
    /** Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
     */
    onloadedmetadata: (ev: Event) => void;
    /** Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
     */
    onloadstart: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event) */
    onlostpointercapture: (ev: PointerEvent) => void;
    /** Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
     */
    onmousedown: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event) */
    onmouseenter: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event) */
    onmouseleave: (ev: MouseEvent) => void;
    /** Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
     */
    onmousemove: (ev: MouseEvent) => void;
    /** Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
     */
    onmouseout: (ev: MouseEvent) => void;
    /** Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
     */
    onmouseover: (ev: MouseEvent) => void;
    /** Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
     */
    onmouseup: (ev: MouseEvent) => void;
    /** @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousewheel_event) */
    onmousewheel: (ev: MouseEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event) */
    onpaste: (ev: ClipboardEvent) => void;
    /** Occurs when playback is paused.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
     */
    onpause: (ev: Event) => void;
    /** Occurs when the play method is requested.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
     */
    onplay: (ev: Event) => void;
    /** Occurs when the audio or video has started playing.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
     */
    onplaying: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event) */
    onpointercancel: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event) */
    onpointerdown: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event) */
    onpointerenter: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event) */
    onpointerleave: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event) */
    onpointermove: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event) */
    onpointerout: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event) */
    onpointerover: (ev: PointerEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event) */
    onpointerup: (ev: PointerEvent) => void;
    /** Occurs to indicate progress while downloading media data.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
     */
    onprogress: (ev: ProgressEvent) => void;
    /** Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
     */
    onratechange: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/repeatEvent_event) */
    onrepeat: (ev: Event) => void;
    /** Fires when the user resets a form.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
     */
    onreset: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event) */
    onresize: (ev: UIEvent) => void;
    /** Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
     */
    onscroll: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event) */
    onscrollend: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event) */
    onsecuritypolicyviolation: (ev: SecurityPolicyViolationEvent) => void;
    /** Occurs when the seek operation ends.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
     */
    onseeked: (ev: Event) => void;
    /** Occurs when the current playback position is moved.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
     */
    onseeking: (ev: Event) => void;
    /** Fires when the current selection changes.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
     */
    onselect: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event) */
    onselectionchange: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event) */
    onselectstart: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event) */
    onshow: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event) */
    onslotchange: (ev: Event) => void;
    /** Occurs when the download has stopped.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
     */
    onstalled: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event) */
    onsubmit: (ev: SubmitEvent) => void;
    /** Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
     */
    onsuspend: (ev: Event) => void;
    /** Occurs to indicate the current playback position.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
     */
    ontimeupdate: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event) */
    ontoggle: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event) */
    ontouchcancel: (ev: TouchEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event) */
    ontouchend: (ev: TouchEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event) */
    ontouchmove: (ev: TouchEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event) */
    ontouchstart: (ev: TouchEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event) */
    ontransitioncancel: (ev: TransitionEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
    ontransitionend: (ev: TransitionEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event) */
    ontransitionrun: (ev: TransitionEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event) */
    ontransitionstart: (ev: TransitionEvent) => void;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) */
    onunload: (ev: Event) => void;
    /** Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
     */
    onvolumechange: (ev: Event) => void;
    /** Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
     */
    onwaiting: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `onanimationend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)*/
    onwebkitanimationend: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `onanimationiteration`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
    onwebkitanimationiteration: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `onanimationstart`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
    onwebkitanimationstart: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `ontransitionend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
    onwebkittransitionend: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event) */
    onwheel: (ev: WheelEvent) => void;
}

/** The CSS properties with camelCase keys.
 * - Values are strings, or numbers for certain natively supported style properties (like "width", "height", "opacity" and others).
 * - Some properties contain extra hints: like "filter": `"blur(px)" | "brightness(%)" | "contrast(%)"` and so on.
 * - Documented on Q3 2024 from:
 *      * w3schools: https://www.w3schools.com/cssref
 *      * MDN reference: https://developer.mozilla.org/en-US/docs/Web/CSS/
 *      * Quick tests in Chrome and FireFox.
 */
interface CSSProperties extends Partial<{
    [Key in CSSPropertyNamesString]?: InheritInitial | AnyString;
} & {
    [Key in CSSPropertyNamesNumeric]?: number | InheritInitial | AnyString;
} & {
    [Key in CSSPropertyNamesColor]?: CSSColorNames | InheritInitial;
}> {
    [index: number]: never;
    alignContent?: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | InheritInitial | AnyString;
    alignItems?: "normal" | "stretch" | "positional alignment" | "flex-start" | "flex-end" | "baseline" | InheritInitial | AnyString;
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | CSSBaselineAlignment | InheritInitial | AnyString;
    all?: InheritInitial | AnyString;
    animationDirection?: "normal" | "reverse" | "alternate" | "alternate-reverse" | InheritInitial | AnyString;
    animationFillMode?: "none" | "forwards" | "backwards" | "both" | InheritInitial | AnyString;
    animationIterationCount?: number | "infinite" | InheritInitial | AnyString;
    animationName?: "none" | InheritInitial | AnyString;
    animationPlayState?: "paused" | "running" | InheritInitial | AnyString;
    animationTimingFunction?: CSSTimingFunction | InheritInitial | AnyString;
    /** Shorthand for: "background-color" | "background-image" | "background-position" | "background-size" | "background-repeat" | "background-origin" | "background-clip" | "background-attachment". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background) */
    background?: CSSColorNames | InheritInitial;
    backgroundAttachment?: "scroll" | "fixed" | "local" | InheritInitial | AnyString;
    backgroundBlendMode?: CSSBlendMode | AnyString;
    backgroundClip?: "border-box" | "padding-box" | "content-box" | InheritInitial | AnyString;
    backgroundOrigin?: "padding-box" | "border-box" | "content-box";
    backgroundPosition?: CSSPositionString | InheritInitial | AnyString;
    backgroundPositionX?: CSSPositionX | InheritInitial | AnyString;
    backgroundPositionY?: CSSPositionY | InheritInitial | AnyString;
    backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | AnyString;
    backgroundSize?: number | "auto" | "cover" | "contain" | InheritInitial | AnyString;
    blockSize?: number | "auto" | InheritInitial | AnyString;
    /** Shorthand for: "border-width" | "border-style" (required) | "border-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border) */
    border?: InheritInitial | AnyString;
    /** Shorthand for: "border-block-width" | "border-block-style" (required) | "border-block-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block) */
    borderBlock?: InheritInitial | AnyString;
    borderBlockStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-block-end-width" | "border-block-end-style" | "border-block-end-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end) */
    borderBlockEnd?: InheritInitial | AnyString;
    borderBlockEndStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockEndWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-block-start-width" | "border-block-start-style" | "border-block-start-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start) */
    borderBlockStart?: InheritInitial | AnyString;
    borderBlockStartStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBlockStartWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-inline-width" | "border-inline-style" (required) | "border-inline-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline) */
    borderInline?: InheritInitial | AnyString;
    borderInlineStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-inline-end-width" | "border-inline-end-style" | "border-inline-end-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end) */
    borderInlineEnd?: InheritInitial | AnyString;
    borderInlineEndStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineEndWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-inline-start-width" | "border-inline-start-style" | "border-inline-start-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start) */
    borderInlineStart?: InheritInitial | AnyString;
    borderInlineStartStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderInlineStartWidth?: 0 | InheritInitial | AnyString;
    borderCollapse?: "separate" | "collapse" | InheritInitial | AnyString;
    borderSpacing?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-image-source" | "border-image-slice" | "border-image-width" | "border-image-outset" | "border-image-repeat". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) */
    borderImage?: "source slice width outset repeat" | InheritInitial | AnyString;
    borderImageRepeat?: "stretch" | "repeat" | "round" | "space" | InheritInitial | AnyString;
    borderImageSlice?: number | "fill" | InheritInitial | AnyString;
    borderImageSource?: "none" | InheritInitial | AnyString;
    borderImageWidth?: number | "auto" | InheritInitial | AnyString;
    /** Shorthand for: "border-bottom-width" | "border-bottom-style" (required) | "border-bottom-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) */
    borderBottom?: InheritInitial | AnyString;
    borderBottomStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderBottomWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-left-width" | "border-left-style" (required) | "border-left-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) */
    borderLeft?: InheritInitial | AnyString;
    borderLeftStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderLeftWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-right-width" | "border-right-style" (required) | "border-right-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) */
    borderRight?: InheritInitial | AnyString;
    borderRightStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderRightWidth?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "border-top-width" | "border-top-style" (required) | "border-top-color". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) */
    borderTop?: InheritInitial | AnyString;
    borderTopStyle?: CSSBorderStyle | InheritInitial | AnyString;
    borderTopWidth?: 0 | InheritInitial | AnyString;
    bottom?: 0 | "auto" | InheritInitial | AnyString;
    boxDecorationBreak?: "slice" | "clone" | "initial" | InheritInitial | AnyString;
    boxReflect?: "none" | "below" | "above" | "left" | "right" | "position" | InheritInitial | AnyString;
    boxShadow?: "none" | "h v blur? spread? color?" | "h v blur? spread? color? inset" | InheritInitial | AnyString;
    boxSizing?: "content-box" | "border-box" | InheritInitial | AnyString;
    breakAfter?: CSSBreakMode | InheritInitial | AnyString;
    breakBefore?: CSSBreakMode | InheritInitial | AnyString;
    breakInside?: CSSBreakMode | InheritInitial | AnyString;
    captionSide?: "top" | "bottom" | InheritInitial | AnyString;
    caretColor?: "auto" | CSSColorNames | InheritInitial;
    clear?: "none" | "left" | "right" | "both" | InheritInitial | AnyString;
    clip?: "auto" | InheritInitial | AnyString;
    clipPath?: "clip-source" | "basic-shape" | "margin-box" | "border-box" | "padding-box" | "content-box" | "fill-box" | "stroke-box" | "view-box" | "none" | InheritInitial | AnyString;
    colorScheme?: "normal" | "light" | "dark" | "only" | AnyString;
    columnCount?: number | "auto" | InheritInitial | AnyString;
    columnFill?: "balance" | "auto" | InheritInitial | AnyString;
    columnGap?: 0 | "normal" | InheritInitial | AnyString;
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
    direction?: "ltr" | "rtl" | InheritInitial | AnyString;
    display?: CSSDisplayMode | InheritInitial | AnyString;
    emptyCells?: "show" | "hide" | InheritInitial | AnyString;
    filter?: "none" | "blur(px)" | "brightness(%)" | "contrast(%)" | "drop-shadow(h v blur spread)" | "grayscale(%)" | "hue-rotate(deg)" | "invert(%)" | "opacity(%)" | "saturate(%)" | "sepia(%)" | "url(string)" | InheritInitial | AnyString;
    flex?: "auto" | InheritInitial | AnyString;
    flexBasis?: 0 | "auto" | InheritInitial | AnyString;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | InheritInitial | AnyString;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | InheritInitial | AnyString;
    float?: "none" | "left" | "right" | InheritInitial | AnyString;
    font?: "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | InheritInitial | AnyString;
    fontFeatureSettings?: "normal" | InheritInitial | AnyString;
    fontKerning?: "auto" | "normal" | InheritInitial | AnyString;
    fontSize?: "medium" | "xx-small" | "x-small" | "small" | "large" | "x-large" | "xx-large" | "smaller" | "larger" | InheritInitial | AnyString;
    fontSizeAdjust?: number | "none" | InheritInitial | AnyString;
    fontStretch?: "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "normal" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | InheritInitial | AnyString;
    fontStyle?: "normal" | "italic" | "oblique" | InheritInitial | AnyString;
    fontVariant?: "normal" | "small-caps" | InheritInitial | AnyString;
    fontVariantCaps?: "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | "unset" | InheritInitial | AnyString;
    fontWeight?: number | "normal" | "bold" | "bolder" | "lighter" | InheritInitial | AnyString;
    gap?: 0 | InheritInitial | AnyString;
    grid?: "none" | InheritInitial | AnyString;
    gridArea?: AnyString;
    gridAutoColumns?: "auto" | "max-content" | "min-content" | AnyString;
    gridAutoFlow?: "row" | "column" | "dense" | "row dense" | "column dense" | AnyString;
    gridAutoRows?: "auto" | "max-content" | "min-content" | AnyString;
    gridColumn?: number | AnyString;
    gridColumnEnd?: number | "auto" | AnyString;
    gridColumnStart?: number | "auto" | AnyString;
    gridRow?: AnyString;
    gridRowEnd?: number | "auto" | AnyString;
    /** @deprecated replaced by "rowGap". */
    gridRowGap?: 0 | "normal" | InheritInitial | AnyString;
    gridRowStart?: number | "auto" | AnyString;
    gridTemplate?: "none" | InheritInitial | AnyString;
    gridTemplateAreas?: "none" | AnyString;
    gridTemplateColumns?: "none" | "auto" | "max-content" | "min-content" | InheritInitial | AnyString;
    gridTemplateRows?: "none" | "auto" | "max-content" | "min-content" | InheritInitial | AnyString;
    hangingPunctuation?: "none" | "first" | "last" | "allow-end" | "force-end" | InheritInitial | AnyString;
    height?: number | "auto" | InheritInitial | AnyString;
    hyphens?: "none" | "manual" | "auto" | InheritInitial | AnyString;
    hyphenateCharacter?: "auto" | InheritInitial | AnyString;
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
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | InheritInitial | AnyString;
    justifyItems?: "legacy" | "normal" | "stretch" | "start" | "left" | "center" | "end" | "right" | InheritInitial | AnyString;
    justifySelf?: "auto" | "normal" | "start" | "left" | "end" | "right" | "center" | "stretch" | CSSBaselineAlignment | InheritInitial | AnyString;
    left?: 0 | "auto" | InheritInitial | AnyString;
    letterSpacing?: 0 | "normal" | InheritInitial | AnyString;
    lineHeight?: number | "normal" | InheritInitial | AnyString;
    listStyleImage?: "none" | InheritInitial | AnyString;
    listStylePosition?: "inside" | "outside" | InheritInitial | AnyString;
    listStyleType?: CSSListStyleType | InheritInitial | AnyString;
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
    mixBlendMode?: CSSBlendMode | AnyString;
    objectFit?: "fill" | "contain" | "cover" | "scale-down" | "none" | InheritInitial | AnyString;
    objectPosition?: 0 | InheritInitial | AnyString;
    /** Shorthand for: "offset-anchor" | "offset-distance" | "offset-path" | "offset-position" | "offset-rotate". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/offset) */
    offset?: "auto" | InheritInitial | AnyString;
    offsetAnchor?: "auto" | CSSPositionString | InheritInitial | AnyString;
    offsetDistance?: 0 | "auto" | InheritInitial | AnyString;
    offsetPath?: "none" | "path(svg_path_string)" | "ray(string)" | "url(string)" | InheritInitial | AnyString;
    offsetPosition?: "auto" | "normal" | CSSPositionString | InheritInitial | AnyString;
    offsetRotate?: "auto" | InheritInitial | AnyString;
    /** Not present in FireFox in late 2024. */
    orphans?: number | InheritInitial | AnyString;
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
    quotes?: "none" | InheritInitial | AnyString;
    resize?: "none" | "both" | "horizontal" | "vertical" | InheritInitial | AnyString;
    right?: 0 | "auto" | InheritInitial | AnyString;
    rotate?: "0deg" | "90deg" | "-90deg" | "180deg" | InheritInitial | AnyString;
    rowGap?: 0 | "normal" | InheritInitial | AnyString;
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
    tabSize?: number | InheritInitial | AnyString;
    tableLayout?: "auto" | "fixed" | InheritInitial | AnyString;
    textAlign?: "left" | "right" | "center" | "justify" | InheritInitial | AnyString;
    textAlignLast?: "auto" | "left" | "right" | "center" | "justify" | "start" | "end" | InheritInitial | AnyString;
    /** Shorthand for: "text-decoration-color" | "text-decoration-line" | "text-decoration-style" | "text-decoration-thickness". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) */
    textDecoration?: InheritInitial | AnyString;
    textDecorationLine?: "none" | "underline" | "overline" | "line-through" | InheritInitial | AnyString;
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy" | InheritInitial | AnyString;
    textDecorationThickness?: 0 | "auto" | "from-font" | InheritInitial | AnyString;
    /** Shorthand for: "text-emphasis-color" | "text-emphasis-position" | "text-emphasis-style". [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis) */
    textEmphasis?: "none" | "filled" | "open" | "dot" | "circle" | "double-circle" | "triangle" | "sesame" | InheritInitial | AnyString;
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
    transition?: InheritInitial | AnyString;
    transitionProperty?: "none" | "all" | InheritInitial | AnyString;
    transitionTimingFunction?: CSSTimingFunction | InheritInitial | AnyString;
    translate?: "x-axis y-axis z-axis" | InheritInitial | AnyString;
    unicodeBidi?: "normal" | "embed" | "bidi-override" | "isolate" | "isolate-override" | "plaintext" | InheritInitial | AnyString;
    userSelect?: "auto" | "none" | "text" | "all" | AnyString;
    verticalAlign?: "baseline" | "sub" | "super" | "top" | "text-top" | "middle" | "bottom" | "text-bottom" | InheritInitial | AnyString;
    visibility?: "visible" | "hidden" | "collapse" | InheritInitial | AnyString;
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | InheritInitial | AnyString;
    /** Not present in FireFox in late 2024. */
    widows?: number | InheritInitial | AnyString;
    width?: number | "auto" | InheritInitial | AnyString;
    wordBreak?: "normal" | "break-all" | "keep-all" | "break-word" | InheritInitial | AnyString;
    wordSpacing?: 0 | "normal" | InheritInitial | AnyString;
    wordWrap?: "normal" | "break-word" | InheritInitial | AnyString;
    writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr" | InheritInitial | AnyString;
    zIndex?: number | "auto" | InheritInitial | AnyString;
    zoom?: number | "normal" | "unset" | InheritInitial | AnyString;
}
/** This is just in the ballpark. Hard to get precise info on this. */
type CSSBaselineAlignment = "baseline" | "first baseline" | "last baseline" | "start baseline" | "end baseline" | "center baseline";
/** Common blend modes. */
type CSSBlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
/** Common CSS border styles. Used for all border style related. */
type CSSBorderStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
/** Common CSS break mode. Used for: "breakAfter", "breakBefore", "breakInside". */
type CSSBreakMode = "auto" | "all" | "always" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";
/** There's over 100 color names + PascalCase vs. lowercase. See https://www.w3schools.com/cssref/css_colors.php */
type CSSColorNames = "transparent" | "currentcolor" | "currentColor" | AnyString;
/** All CSS color names in PascalCase in late 2024. There are 133 colors (+ same in lower case). Because of this, not included in the main type. */
type CSSColorNamesAll = "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenRod" | "DarkGray" | "DarkGrey" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkSlateGrey" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DimGrey" | "DodgerBlue" | "FireBrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "GoldenRod" | "Gray" | "Grey" | "Green" | "GreenYellow" | "HoneyDew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenRodYellow" | "LightGray" | "LightGrey" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSlateGrey" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenRod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "RebeccaPurple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "SlateGrey" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen";
/** The CSS display modes. */
type CSSDisplayMode = "inline" | "block" | "contents" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "liste-item" | "run-in" | "table" | "table-caption" | "table-column-group" | "table-header-group" | "table-footer-group" | "table-row-group" | "table-cell" | "table-column" | "table-row" | "none";
/** The common CSS cursors. */
type CSSCursor = "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "ns-resize" | "nw-resize" | "nwse-resize" | "no-drop" | "none" | "not-allowed" | "pointer" | "progress" | "s-resize" | "se-resize" | "se-resize" | "sw-resize" | "text" | "url(string)" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out";
/** The common CSS list style types. Just used for "listStyleType". */
type CSSListStyleType = "disc" | "circle" | "square" | "armenian" | "none" | "cjk-ideographic" | "decimal" | "decimal-leading-zero" | "georgian" | "hebrew" | "hiragana" | "hiragana-iroha" | "katakana" | "katakana-iroha" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "upper-alpha" | "upper-greek" | "upper-latin" | "upper-roman";
/** The common CSS overflow modes. Used for all overflow related. */
type CSSOverflowMode = "visible" | "hidden" | "clip" | "scroll" | "auto";
/** Used for "paintOrder". Defines in which order the rendering happens in micro-scale. */
type CSSPaintOrderString = "stroke" | `stroke ${"fill" | "markers"}` | `stroke ${"fill markers" | "markers fill"}` | "fill" | `fill ${"stroke" | "markers"}` | `fill ${"stroke markers" | "markers stroke"}` | "markers" | `markers ${"stroke" | "fill"}` | `markers ${"stroke fill" | "fill stroke"}`;
/** The horizontal positioning options. */
type CSSPositionX = "left" | "center" | "right";
/** The vertical positioning options. */
type CSSPositionY = "top" | "center" | "bottom";
/** The combined horizontal and vertical options using the common names. The values can also be numbers or percentages. */
type CSSPositionString = CSSPositionX | CSSPositionY | `${CSSPositionX} ${CSSPositionY}`;
/** Commonly used CSS properties that are about colors. */
type CSSPropertyNamesColor = "accentColor" | "backgroundColor" | "borderColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderInlineColor" | "borderInlineEndColor" | "borderInlineStartColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor" | "caretColor" | "color" | "columnRuleColor" | "floodColor" | "lightingColor" | "outlineColor" | "scrollbarColor" | "stopColor" | "textEmphasisColor" | "textDecorationColor" | "webkitTextFillColor" | "webkitTextStrokeColor";
/** Commonly used CSS properties that can receive numeric input natively. */
type CSSPropertyNamesNumeric = "animationIterationCount" | "aspectRatio" | "backgroundSize" | "blockSize" | "borderWidth" | "borderBlockEndWidth" | "borderBlockStartWidth" | "borderBlockWidth" | "borderBottomWidth" | "borderImageOutset" | "borderImageSlice" | "borderImageWidth" | "borderInlineEndWidth" | "borderInlineStartWidth" | "borderInlineWidth" | "borderLeftWidth" | "borderRightWidth" | "borderSpacing" | "borderTopWidth" | "bottom" | "columnCount" | "columnGap" | "columnRuleWidth" | "columnWidth" | "flexBasis" | "flexGrow" | "flexShrink" | "fontSizeAdjust" | "fontWeight" | "gap" | "gridColumn" | "gridColumnEnd" | "gridColumnGap" | "gridColumnStart" | "gridRowEnd" | "gridRowGap" | "gridRowStart" | "height" | "initialLetter" | "inlineSize" | "inset" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "left" | "letterSpacing" | "lineHeight" | "margin" | "marginBlock" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInline" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "maskSize" | "maxBlockSize" | "maxHeight" | "maxInlineSize" | "maxWidth" | "minBlockSize" | "minHeight" | "minInlineSize" | "minWidth" | "objectPosition" | "offsetDistance" | "opacity" | "order" | "orphans" | "outlineOffset" | "outlineWidth" | "padding" | "paddingBottom" | "paddingBlock" | "paddingBlockEnd" | "paddingBlockStart" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "paddingLeft" | "paddingRight" | "paddingTop" | "perspective" | "perspectiveOrigin" | "right" | "rowGap" | "scale" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "stopOpacity" | "strokeWidth" | "strokeOpacity" | "tabIndex" | "tabSize" | "textUnderlineOffset" | "textUnderlinePosition" | "textDecorationThickness" | "textIndent" | "top" | "widows" | "width" | "wordSpacing" | "zIndex" | "zoom";
/** Common string properties. */
type CSSPropertyNamesString = string & keyof Omit<CSSStyleDeclaration, GetMethodKeys<CSSStyleDeclaration> | CSSPropertyNamesNumeric | CSSPropertyNamesColor | number>;
/** CSS timing function. Used for "animationTimingFunction" and "transitionTimingFunction". */
type CSSTimingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | "steps(int,start|end)" | "cubic-bezier(n,n,n,n)";
/** Hints for CSS transforms. */
type CSSTransformHints = "matrix(n,n,n,n,n,n)" | "matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)" | "translate(x,y)" | "translate3d(x,y,z)" | "translateX(x)" | "translateY(y)" | "translateZ(z)" | "scale(x,y)" | "scale3d(x,y,z)" | "scaleX(x)" | "scaleY(y)" | "scaleZ(z)" | "rotate(angle)" | "rotate3d(x,y,z,angle)" | "rotateX(angle)" | "rotateY(angle)" | "rotateZ(angle)" | "skew(x-angle,y-angle)" | "skewX(angle)" | "skewY(angle)" | "perspective(n)";

/** HTML attributes in native case available on all HTML elements. */
interface HTMLGlobalAttributes_core extends Partial<DataAttributes> {
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
    inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | AnyString;
    insert: BoolOrStr;
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
/** All attributes that are specific to tags in native case - excluding HTMLGlobalAttributes. */
interface HTMLCommonAttributes_core {
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
    "data": string;
    "datetime": string;
    "decoding": string;
    "default": BoolOrStr;
    "defer": BoolOrStr;
    "dirname": string;
    "disabled": BoolOrStr;
    "download": string;
    "enctype": "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | AnyString;
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
    "target": "_blank" | "_self" | "_parent" | "_top" | AnyString;
    "type": string;
    "usemap": string;
    "value": string | number;
    "width": string | number;
    "wrap": "hard" | "soft" | "off" | AnyString;
}

/** SVG attributes in native case available on all SVG elements. */
interface SVGGlobalAttributes_core extends DataAttributes {
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
/** SVG animation attributes in native case available on all animation related elements (animate, animateMotion, animateTransform). */
interface SVGAnimationAttributes_core extends AnimationTargetElementAttributes, AnimationAttributeTargetAttributes, AnimationTimingAttributes, AnimationValueAttributes, AnimationAdditionAttributes {
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
/** All attributes that are specific to tags in native case - excluding SVGGlobalAttributes. */
interface SVGCommonAttributes_core {
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
    "requiredFeatures": string;
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
    "to": string | number;
    "transform": string;
    "transform-origin": string;
    "type": "translate" | "scale" | "rotate" | "skewX" | "skewY" | "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha" | "identity" | "table" | "discrete" | "linear" | "gamma" | "fractalNoise" | "turbulence" | AnyString;
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
    "values": string | number;
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

/** False like JS values. */
type FalseLike = "" | 0 | false | null | undefined | void;
/** Split a string into a typed array.
 * - Use with PropType to validate and get deep value types with, say, dotted strings.
 */
type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
/** Split a string array by a string. */
type SplitArr<S extends string[] | readonly string[], D extends string> = Split<S[number] & string, D>;
/** Type for className input.
 * - Represents what can be fed into the classNames or cleanNames methods with (Valid extends string):
 *     1. Single string: `Valid | FalseLike`
 *     2. Array, set or such: `Iterable<Valid | FalseLike>`
 *     3. Dictionary: `Record<Valid, any>`
 *     + If you want to use deeper validation use `ValidateNames<Valid>`
 */
type ClassNameInput<Valid extends string = string, Nulls = FalseLike> = Valid | Nulls | Partial<Record<Valid, any>> | Iterable<Valid | Nulls>;
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
] extends [Iterable<any> | Readonly<Iterable<any>>] ? Input extends Iterable<Valid> ? any : (Input extends Iterable<infer R> ? Split<R & string, " "> : {}) extends Iterable<Valid> ? any : never : [
    Input
] extends [object] ? keyof Input extends Valid ? any : Split<keyof Input & string, " "> extends Valid[] ? any : never : any;
/** Helper to validate class names (paired with a javascript function that actually supports handling: (...params: any[]) => string;
 * 1. First create a type for valid names, eg.: `type ValidNames = "bold" | "italic" | "underline" | "dimmed";
 * 2. Then define a shortcut for the validator with the ValidNames type: `const cleanNames: ValidateNames<ValidNames> = MixDOM.classNames;`.
 *      * You can use either: `classNames` or `cleanNames` as the JS side implementation.
 * 3. Then reuse the function for validation:
 *     a. For strings: `const okName = cleanNames("bold", "underline italic", false, "");` // => "bold underline italic"
 *     b. For iterables: `const okName = cleanNames(["underline", "dimmed italic", false, ""], [], undefined, ["bold"]);` // => "underline dimmed italic bold"
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
 * // const validate = cleanNames as ValidateNames<ValidNames>; // Works too.
 *
 * // Do tests.
 * // .. These should not produce errors in typing.
 * validate(["a"]);
 * validate(["a", "b", ""]);
 * validate(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validate(["a", false, undefined, "b"]);
 * validate(["a", false, undefined, "b"] as const);
 * validate({"a": true, "b a": false});
 * validate({"a": true, "b a": false} as const);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validate("FAIL");
 * validate(["FAIL"]);
 * validate({"FAIL": false});
 * validate(new Set(["a", "b", "FAIL"]));
 * validate("a", "a b", undefined, "FAIL", ["a", false]);
 * validate("a", "a b", undefined, ["a", "FAIL", false]);
 * validate(["a", "b", "a b", "FAIL", false]);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
 * validate("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validate("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 *
 * ```
 */
type ValidateNames<Valid extends string, Nulls = FalseLike> = <T1 extends NameValidator<Valid | Nulls, T1>, T2 extends NameValidator<Valid | Nulls, T2>, T3 extends NameValidator<Valid | Nulls, T3>, T4 extends NameValidator<Valid | Nulls, T4>, T5 extends NameValidator<Valid | Nulls, T5>, T6 extends NameValidator<Valid | Nulls, T6>, T7 extends NameValidator<Valid | Nulls, T7>, T8 extends NameValidator<Valid | Nulls, T8>, T9 extends NameValidator<Valid | Nulls, T9>, T10 extends NameValidator<Valid | Nulls, T10>, Tn extends NameValidator<Valid, Tn>>(t1?: T1 | ClassNameInput<Valid, Nulls>, t2?: T2 | ClassNameInput<Valid, Nulls>, t3?: T3 | ClassNameInput<Valid, Nulls>, t4?: T4 | ClassNameInput<Valid, Nulls>, t5?: T5 | ClassNameInput<Valid, Nulls>, t6?: T6 | ClassNameInput<Valid, Nulls>, t7?: T7 | ClassNameInput<Valid, Nulls>, t8?: T8 | ClassNameInput<Valid, Nulls>, t9?: T9 | ClassNameInput<Valid, Nulls>, t10?: T10 | ClassNameInput<Valid, Nulls>, ...tn: Tn[]) => string;

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
    /** Each value is in stringified form. None should be undefined, but if is, simply don't apply it (= same as if wasn't there at all). */
    attributes?: Partial<Record<string, string | undefined>>;
    /** Each value is a callback. None should be undefined, but if is, simply don't apply. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string | AnyString, GlobalEventHandler | undefined>>;
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
    /** If no className, no changes in class names. The keys are class names: for each, if true class name was added, if false name was removed. */
    className?: Record<string, boolean>;
    /** If no data, no changes in data attribute. If value in the dictionary is undefined means removed: eg. `delete element.dataSet.myKey`. */
    data?: Record<string, any>;
    /** If no attributes, no changes in general attributes. If value in the dictionary is undefined means removed: eg. `element.removeAttribute(attr)`. Otherwise apply: `element.setAttribute(attr, val)`. */
    attributes?: Record<string, any>;
    /** If no listeners, no changes in listeners. If value in the dictionary is undefined means removed: eg. `element.removeEventListener(name, callback)`. Otherwise apply: `element.addEventListener(name, callback)`. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string, GlobalEventHandler | undefined>>;
}

export { ARIARole, AnyString, BoolOrStr, CSSBaselineAlignment, CSSBlendMode, CSSBorderStyle, CSSBreakMode, CSSColorNames, CSSColorNamesAll, CSSCursor, CSSDisplayMode, CSSListStyleType, CSSOverflowMode, CSSPaintOrderString, CSSPositionString, CSSPositionX, CSSPositionY, CSSProperties, CSSPropertyNamesColor, CSSPropertyNamesNumeric, CSSPropertyNamesString, CSSTimingFunction, CSSTransformHints, ClassNameInput, DOMCleanProps, DOMDiffProps, DOMElement, DOMTags, DOMUncleanProps, DataAttributes, FalseLike, GetMethodKeys, GlobalEventHandler, GlobalListeners_core, HTMLCommonAttributes_core, HTMLGlobalAttributes_core, HTMLTags, InheritInitial, IsReadOnlyKey, NameValidator, SVGAnimationAttributes_core, SVGCommonAttributes_core, SVGGlobalAttributes_core, SVGTags, Split, SplitArr, ValidateNames };
