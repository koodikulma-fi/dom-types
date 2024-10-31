import { AnyString, BoolOrStr, ARIARole, GlobalEventHandler, HTMLTags, SVGTags, DOMTags, HTMLCommonAttributes_core, HTMLGlobalAttributes_core, SVGAnimationAttributes_core, SVGCommonAttributes_core, SVGGlobalAttributes_core, GlobalListeners_core } from "./core";
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
    /** Fires when the user aborts the download.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
     */
    onAbort: GlobalListeners_core["onabort"];
    /** @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/DOMActivate_event) */
    onActivate: GlobalListeners_core["onactivate"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event) */
    onAnimationCancel: GlobalListeners_core["onanimationcancel"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event) */
    onAnimationEnd: GlobalListeners_core["onanimationend"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
    onAnimationIteration: GlobalListeners_core["onanimationiteration"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
    onAnimationStart: GlobalListeners_core["onanimationstart"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event) */
    onAuxClick: GlobalListeners_core["onauxclick"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event) */
    onBeforeInput: GlobalListeners_core["onbeforeinput"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event) */
    onBeforeToggle: GlobalListeners_core["onbeforetoggle"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginEvent_event) */
    onBegin: GlobalListeners_core["onbegin"];
    /** Fires when the object loses the input focus.
     * @param ev The focus event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
     */
    onBlur: GlobalListeners_core["onblur"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event) */
    onCancel: GlobalListeners_core["oncancel"];
    /** Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
     */
    onCanPlay: GlobalListeners_core["oncanplay"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event) */
    onCanPlayThrough: GlobalListeners_core["oncanplaythrough"];
    /** Fires when the contents of the object or selection have changed.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
     */
    onChange: GlobalListeners_core["onchange"];
    /** Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
     */
    onClick: GlobalListeners_core["onclick"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event) */
    onClose: GlobalListeners_core["onclose"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) */
    onContextLost: GlobalListeners_core["oncontextlost"];
    /** Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
     */
    onContextMenu: GlobalListeners_core["oncontextmenu"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event) */
    onContextRestored: GlobalListeners_core["oncontextrestored"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event) */
    onCopy: GlobalListeners_core["oncopy"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event) */
    onCueChange: GlobalListeners_core["oncuechange"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event) */
    onCut: GlobalListeners_core["oncut"];
    /** Fires when the user double-clicks the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
     */
    onDblClick: GlobalListeners_core["ondblclick"];
    /** Fires on the source object continuously during a drag operation.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
     */
    onDrag: GlobalListeners_core["ondrag"];
    /** Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
     */
    onDragEnd: GlobalListeners_core["ondragend"];
    /** Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
     */
    onDragEnter: GlobalListeners_core["ondragenter"];
    /** Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
     */
    onDragLeave: GlobalListeners_core["ondragleave"];
    /** Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
     */
    onDragOver: GlobalListeners_core["ondragover"];
    /** Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
     */
    onDragStart: GlobalListeners_core["ondragstart"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event) */
    onDrop: GlobalListeners_core["ondrop"];
    /** Occurs when the duration attribute is updated.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
     */
    onDurationChange: GlobalListeners_core["ondurationchange"];
    /** Occurs when the media element is reset to its initial state.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
     */
    onEmptied: GlobalListeners_core["onemptied"];
    /** Occurs when the end of playback is reached.
     * @param ev The event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
     */
    onEnded: GlobalListeners_core["onended"];
    /** Fires when an error occurs during object loading.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
     */
    onError: GlobalListeners_core["onerror"];
    /** Fires when the object receives focus.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
     */
    onFocus: GlobalListeners_core["onfocus"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusin_event) */
    onFocusIn: GlobalListeners_core["onfocusin"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focusout_event) */
    onFocusOut: GlobalListeners_core["onfocusout"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event) */
    onFormData: GlobalListeners_core["onformdata"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event) */
    onGotPointerCapture: GlobalListeners_core["ongotpointercapture"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event) */
    onInput: GlobalListeners_core["oninput"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event) */
    onInvalid: GlobalListeners_core["oninvalid"];
    /** Fires when the user presses a key.
     * @param ev The keyboard event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
     */
    onKeyDown: GlobalListeners_core["onkeydown"];
    /** Fires when the user presses an alphanumeric key.
     * @param ev The event.
     * @deprecated
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
     */
    onKeyPress: GlobalListeners_core["onkeypress"];
    /** Fires when the user releases a key.
     * @param ev The keyboard event
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
     */
    onKeyUp: GlobalListeners_core["onkeyup"];
    /** Fires immediately after the browser loads the object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
     */
    onLoad: GlobalListeners_core["onload"];
    /** Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
     */
    onLoadedData: GlobalListeners_core["onloadeddata"];
    /** Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
     */
    onLoadedMetaData: GlobalListeners_core["onloadedmetadata"];
    /** Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
     */
    onLoadStart: GlobalListeners_core["onloadstart"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event) */
    onLostPointerCapture: GlobalListeners_core["onlostpointercapture"];
    /** Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
     */
    onMouseDown: GlobalListeners_core["onmousedown"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event) */
    onMouseEnter: GlobalListeners_core["onmouseenter"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event) */
    onMouseLeave: GlobalListeners_core["onmouseleave"];
    /** Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
     */
    onMouseMove: GlobalListeners_core["onmousemove"];
    /** Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
     */
    onMouseOut: GlobalListeners_core["onmouseout"];
    /** Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
     */
    onMouseOver: GlobalListeners_core["onmouseover"];
    /** Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
     */
    onMouseUp: GlobalListeners_core["onmouseup"];
    /** @deprecated [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousewheel_event) */
    onMouseWheel: GlobalEventHandler;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event) */
    onPaste: GlobalListeners_core["onpaste"];
    /** Occurs when playback is paused.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
     */
    onPause: GlobalListeners_core["onpause"];
    /** Occurs when the play method is requested.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
     */
    onPlay: GlobalListeners_core["onplay"];
    /** Occurs when the audio or video has started playing.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
     */
    onPlaying: GlobalListeners_core["onplaying"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event) */
    onPointerCancel: GlobalListeners_core["onpointercancel"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event) */
    onPointerDown: GlobalListeners_core["onpointerdown"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event) */
    onPointerEnter: GlobalListeners_core["onpointerenter"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event) */
    onPointerLeave: GlobalListeners_core["onpointerleave"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event) */
    onPointerMove: GlobalListeners_core["onpointermove"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event) */
    onPointerOut: GlobalListeners_core["onpointerout"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event) */
    onPointerOver: GlobalListeners_core["onpointerover"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event) */
    onPointerUp: GlobalListeners_core["onpointerup"];
    /** Occurs to indicate progress while downloading media data.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
     */
    onProgress: GlobalListeners_core["onprogress"];
    /** Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
     */
    onRateChange: GlobalListeners_core["onratechange"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/repeatEvent_event) */
    onRepeat: GlobalListeners_core["onrepeat"];
    /** Fires when the user resets a form.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
     */
    onReset: GlobalListeners_core["onreset"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event) */
    onResize: GlobalListeners_core["onresize"];
    /** Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
     */
    onScroll: GlobalListeners_core["onscroll"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event) */
    onScrollEnd: GlobalListeners_core["onscrollend"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event) */
    onSecurityPolicyViolation: GlobalListeners_core["onsecuritypolicyviolation"];
    /** Occurs when the seek operation ends.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
     */
    onSeeked: GlobalListeners_core["onseeked"];
    /** Occurs when the current playback position is moved.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
     */
    onSeeking: GlobalListeners_core["onseeking"];
    /** Fires when the current selection changes.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
     */
    onSelect: GlobalListeners_core["onselect"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event) */
    onSelectionChange: GlobalListeners_core["onselectionchange"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event) */
    onSelectStart: GlobalListeners_core["onselectstart"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event) */
    onShow: GlobalListeners_core["onshow"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event) */
    onSlotChange: GlobalListeners_core["onslotchange"];
    /** Occurs when the download has stopped.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
     */
    onStalled: GlobalListeners_core["onstalled"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event) */
    onSubmit: GlobalListeners_core["onsubmit"];
    /** Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
     */
    onSuspend: GlobalListeners_core["onsuspend"];
    /** Occurs to indicate the current playback position.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
     */
    onTimeUpdate: GlobalListeners_core["ontimeupdate"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event) */
    onToggle: GlobalListeners_core["ontoggle"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event) */
    onTouchCancel: GlobalListeners_core["ontouchcancel"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event) */
    onTouchEnd: GlobalListeners_core["ontouchend"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event) */
    onTouchMove: GlobalListeners_core["ontouchmove"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event) */
    onTouchStart: GlobalListeners_core["ontouchstart"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event) */
    onTransitionCancel: GlobalListeners_core["ontransitioncancel"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
    onTransitionEnd: GlobalListeners_core["ontransitionend"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event) */
    onTransitionRun: GlobalListeners_core["ontransitionrun"];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event) */
    onTransitionStart: GlobalListeners_core["ontransitionstart"];
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) */
    onUnload: GlobalListeners_core["onunload"];
    /** Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
     */
    onVolumeChange: GlobalListeners_core["onvolumechange"];
    /** Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
     */
    onWaiting: GlobalListeners_core["onwaiting"];
    /** @deprecated This is a legacy alias of `onanimationend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)*/
    onWebkitAnimationEnd: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `onanimationiteration`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
    onWebkitAnimationIteration: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `onanimationstart`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
    onWebkitAnimationStart: (ev: Event) => void;
    /** @deprecated This is a legacy alias of `ontransitionend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
    onWebkitTransitionEnd: (ev: Event) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event) */
    onWheel: GlobalListeners_core["onwheel"];
}
/** HTML element attributes by tag name with camelCase listener and aria attributes. */
export type HTMLAttributes<Tag extends string, Fallback = HTMLAttributesAny> = Tag extends HTMLTags ? Partial<HTMLOwnAttributesBy[Tag] & HTMLGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;
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
export interface HTMLCommonAttributes extends Omit<HTMLCommonAttributes_core, "accept-charset" | "autocomplete" | "bgcolor" | "colspan" | "crossorigin" | "datetime" | "dirname" | "enctype" | "enterkeyhint" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "hreflang" | "http-equiv" | "ismap" | "maxlength" | "minlength" | "novalidate" | "playsinline" | "readonly" | "referrerpolicy" | "rowspan" | "srcdoc" | "srclang" | "srcset" | "usemap"> {
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
/** HTML attributes by tags in camelCase - without global attributes, listeners nor aria. */
export interface HTMLOwnAttributesBy {
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
export type SVGAttributes<Tag extends string, Fallback = SVGAttributesAny> = Tag extends SVGTags ? Partial<SVGOwnAttributesBy[Tag] & SVGGlobalAttributes & GlobalListeners & ARIAAttributes> : Fallback;
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
export interface SVGPresentationAttributes extends Pick<SVGCommonAttributes, "alignmentBaseline" | "baselineShift" | "clip" | "clipPath" | "clipRule" | "color" | "colorInterpolation" | "colorInterpolationFilters" | "colorRendering" | "cursor" | "d" | "direction" | "display" | "dominantBaseline" | "fill" | "fillOpacity" | "fillRule" | "filter" | "floodColor" | "floodOpacity" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "imageRendering" | "letterSpacing" | "letterSpacing" | "markerEnd" | "markerMid" | "markerStart" | "opacity" | "overflow" | "pointerEvents" | "shapeRendering" | "stopColor" | "stopColor" | "stroke" | "strokeDashArray" | "strokeDashOffset" | "strokeLineCap" | "strokeLineJoin" | "strokeMiterLimit" | "strokeOpacity" | "strokeWidth" | "textAnchor" | "textDecoration" | "textRendering" | "transform" | "transformOrigin" | "unicodeBidi" | "vectorEffect" | "visibility" | "wordSpacing" | "writingMode"> {
}
/** All attributes that are specific to tags in camelCase - excluding SVGGlobalAttributes. */
export interface SVGCommonAttributes extends Omit<SVGCommonAttributes_core, "accent-height" | "alignment-baseline" | "allow-reorder" | "arabic-form" | "baseline-shift" | "color-interpolation" | "color-interpolation-filters" | "color-rendering" | "crossorigin" | "dominant-baseline" | "fill-opacity" | "fill-rule" | "flood-color" | "flood-opacity" | "font-family" | "font-size" | "font-size-adjust" | "font-style" | "font-variant" | "font-weight" | "glyph-name" | "glyph-orientation-horizontal" | "glyph-orientation-vertical" | "horiz-adv-x" | "horiz-origin-x" | "horiz-origin-y" | "image-rendering" | "letter-spacing" | "lighting-color" | "marker-end" | "marker-mid" | "marker-start" | "overline-position" | "overline-thickness" | "paint-order" | "pointer-events" | "shape-rendering" | "stop-color" | "stop-opacity" | "stroke-dasharray" | "stroke-dashoffset" | "stroke-linecap" | "stroke-linejoin" | "stroke-miterlimit" | "stroke-opacity" | "stroke-width" | "text-anchor" | "text-decoration" | "text-rendering" | "transform-origin" | "underline-position" | "underline-thickness" | "unicode-bidi" | "unicode-range" | "units-per-em" | "v-alphabetic" | "v-hanging" | "v-ideographic" | "v-mathematical" | "vector-effect" | "vert-adv-y" | "vert-origin-x" | "vert-origin-y" | "word-spacing" | "writing-mode" | "xlink:actuate" | "xlink:arcrole" | "xlink:href" | "xlink:role" | "xlink:show" | "xlink:title" | "xlink:type"> {
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
/** SVG attributes by tags in camelCase - without global attributes, listeners nor aria. Might allow some more than should. */
export interface SVGOwnAttributesBy {
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
export type DOMAttributes<Tag extends string, Fallback = DOMAttributesAny> = Tag extends HTMLTags ? Tag extends SVGTags ? SVGAttributes<Tag> & HTMLAttributes<Tag> : HTMLAttributes<Tag> : Tag extends SVGTags ? SVGAttributes<Tag> : Fallback;
/** All the possible attributes that DOM elements (HTML or SVG) can have - in camelCase. */
export type DOMAttributesAny = HTMLAttributesAny & SVGAttributesAny;
/** Dictionary of DOM attributes by tag in camelCase. */
export type DOMAttributesBy = {
    [Tag in DOMTags]: DOMAttributes<Tag>;
};
