
// - Imports - //

import { BoolOrStr, AnyString } from "./common";


// - Basic attributes - //

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

export interface ARIAAttributes { // extends ARIAMixin {}
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) */
    role: ARIARole | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic) */
    ariaAtomic: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete) */
    ariaAutoComplete: string | null;
    ariaBrailleLabel: string | null;
    ariaBrailleRoleDescription: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy) */
    ariaBusy: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked) */
    ariaChecked: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount) */
    ariaColCount: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex) */
    ariaColIndex: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan) */
    ariaColSpan: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent) */
    ariaCurrent: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription) */
    ariaDescription: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled) */
    ariaDisabled: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded) */
    ariaExpanded: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup) */
    ariaHasPopup: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden) */
    ariaHidden: string | null;
    ariaInvalid: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts) */
    ariaKeyShortcuts: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel) */
    ariaLabel: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel) */
    ariaLevel: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive) */
    ariaLive: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal) */
    ariaModal: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine) */
    ariaMultiLine: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable) */
    ariaMultiSelectable: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation) */
    ariaOrientation: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder) */
    ariaPlaceholder: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet) */
    ariaPosInSet: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed) */
    ariaPressed: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly) */
    ariaReadOnly: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired) */
    ariaRequired: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription) */
    ariaRoleDescription: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount) */
    ariaRowCount: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex) */
    ariaRowIndex: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan) */
    ariaRowSpan: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected) */
    ariaSelected: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize) */
    ariaSetSize: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort) */
    ariaSort: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax) */
    ariaValueMax: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin) */
    ariaValueMin: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow) */
    ariaValueNow: string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText) */
    ariaValueText: string | null;
}

/** Matches somewhere around 95% with ARIAMixin values - this has a couple of more keys. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) */
export interface ARIAAttributes_native {
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) */
    "role": ARIARole | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) */
    "aria-activedescendant": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) */
    "aria-atomic": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) */
    "aria-autocomplete": "none" | "inline" | "list" | "both" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) */
    "aria-braillelabel": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) */
    "aria-brailleroledescription": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) */
    "aria-busy": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) */
    "aria-checked": boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) */
    "aria-colcount": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) */
    "aria-colindex": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) */
    "aria-colspan": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) */
    "aria-controls": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) */
    "aria-current": boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) */
    "aria-description": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) */
    "aria-describedby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) */
    "aria-details": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) */
    "aria-disabled": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) */
    "aria-dropeffect": "none" | "copy" | "execute" | "link" | "move" | "popup" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) */
    "aria-errormessage": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) */
    "aria-expanded": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto) */
    "aria-flowto": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) */
    "aria-grabbed": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) */
    "aria-haspopup": boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) */
    "aria-hidden": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) */
    "aria-invalid": boolean | "false" | "true" | "grammar" | "spelling" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) */
    "aria-keyshortcuts": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) */
    "aria-label": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) */
    "aria-labelledby": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) */
    "aria-level": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) */
    "aria-live": "off" | "assertive" | "polite" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) */
    "aria-modal": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) */
    "aria-multiline": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) */
    "aria-multiselectable": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) */
    "aria-orientation": "horizontal" | "vertical" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) */
    "aria-owns": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) */
    "aria-placeholder": string;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) */
    "aria-posinset": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) */
    "aria-pressed": boolean | "false" | "mixed" | "true" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) */
    "aria-readonly": BoolOrStr;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) */
    "aria-relevant": "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | AnyString;
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
    "aria-sort": "none" | "ascending" | "descending" | "other" | AnyString;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) */
    "aria-valuemax": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) */
    "aria-valuemin": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) */
    "aria-valuenow": number;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) */
    "aria-valuetext": string;
}

