
// - Exports - //

/** All listener attributes (matching GlobalEventHandlers + couple more) with camelCase keys. Values are event handler types. */
export interface GlobalListeners_core {
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
