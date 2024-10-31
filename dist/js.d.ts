import { AnyString, CSSProperties, ClassNameInput, DOMCleanProps, DOMDiffProps, DOMTags, DOMUncleanProps, FalseLike } from "./core";
/**
 * - With "-" (default) as delimiter, functions like this:
 *      * "testProp" => "test-prop"
 *      * "TestProp" => "-test-prop"
 *      * "TEST" => "-t-e-s-t"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `dataset.TestProp = true`  =>  `<div data--test-prop="true" />`
 */
export declare function lowerCaseStr(str: string, delimiter?: string): string;
/**
 * - With "-" (default) as splitter, functions like this:
 *      * "test-prop" => "testProp"
 *      * "-test-prop" => "TestProp"
 *      * "--test---prop" => "TestProp"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `<div data--test-prop="true" />`  =>  `dataset.TestProp` // true
 */
export declare function camelCaseStr(str: string, splitter?: string): string;
/** Parse style string to a dictionary with camelCase keys. Value is string or undefined. */
export declare function parseDOMStyle(cssText: string, nullIfEmpty: true): CSSProperties | null;
export declare function parseDOMStyle(cssText: string, nullIfEmpty?: false): CSSProperties;
export declare function parseDOMStyle(cssText: string, nullIfEmpty?: boolean): CSSProperties | null;
/** Returns a clean string without duplicates to be used as class name (with optional nested TypeScript verification).
 * - Note. If you don't care about duplicates, use `classNames` instead.
 *      * For optimal nested processing (eg. in a component structure), it's recommended to use `classNames` on the extending layers and `cleanNames` only at the last step.
 * - Each item in the cleanNames can be:
 *      1. Single string: `Valid | FalseLike`
 *      2. Array or set: `Array<Valid | FalseLike> | Set<Valid | FalseLike>`
 *      3. Dictionary: `Record<Valid, any>`
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *      1. Declare a validator by: `const validNames: ValidateNames<ValidName> = cleanNames;`
 *      2. Then use it like this: `const okName = validNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 *
 * ```
 *
 * // - Basic JS usage - //
 *
 * // Numeric and false-like are cut off ("", false, null, undefined).
 * cleanNames("a", "b", 0, undefined, [false, "c"], { d: true }); // "a b c d"
 * // Each string is splitted by " " and collected to a record, so duplicates are dropped easily.
 * cleanNames("a b", "b", "b b a a", ["b"], new Set(["b"]), { a: true }); // "a b"
 * // Simulate some validation.
 * cleanNames("a", 1 && "b", ["b", 0 && "c"], { "b d": true, "e": null }); // "a b d"
 * // If you input numbers other than 0, they are type guarded - guard stops at first fail.
 * cleanNames(0, 1, -1); // "", though note that 1 nor -1 won't be allowed by TS.
 *
 *
 * // - Simple usage with typing - //
 *
 * // Let's define our valid names.
 * type Names = "a" | "b";
 *
 * // Just try "a" and "b" separately.
 * cleanNames<Names>("a", "b", ["b", "a"], { a: true }); // "a b"
 * cleanNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
 * cleanNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
 * // Let's allow any string, but still use suggestions.
 * cleanNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a b c", won't suggest "c" but allows it.
 * // We could also use this pattern for some very specific cases - though, get type heavy quickly.
 * cleanNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a b", would not allow "a b b"
 *
 *
 * // - For full concatenated validation use ValidateNames type - //
 *
 * // Prepare.
 * const validNames = cleanNames as ValidateNames<Names>;
 *
 * // Do tests. All below output "a b".
 * // .. These should not produce errors in typing.
 * validNames(["a"], { b: true });
 * validNames(["a", "b", ""]);
 * validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validNames(["a", false, undefined, "b"]);
 * validNames(["a", false, undefined, "b"] as const);
 * validNames({"a": true, "b a": false});
 * validNames({"a": true, "b a": false} as const);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validNames("FAIL");
 * validNames(["FAIL"]);
 * validNames({"FAIL": false});
 * validNames(new Set(["a", "b", "FAIL"]));
 * validNames("a", "a b", undefined, "FAIL", ["a", false]);
 * validNames("a", "a b", undefined, ["a", "FAIL", false]);
 * validNames(["a", "b", "a b", "FAIL", false]);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
 * validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 *
 * ```
 */
export declare function cleanNames<ValidNames extends string = string, Inputs extends ClassNameInput<string>[] = [
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?
]>(...names: Inputs): string;
/** Returns a string to be used as class name (with optional nested TypeScript verification) without removing duplicates.
 * - Note. If you want to remove any duplicates, use `cleanNames` instead.
 *      * For optimal nested processing (eg. in a component structure), it's recommended to use `classNames` on the extending layers and `cleanNames` only at the last step.
 * - Each item in the classNames can be:
 *      1. Single string: `Valid | FalseLike`
 *      2. Array or set: `Array<Valid | FalseLike> | Set<Valid | FalseLike>`
 *      3. Dictionary: `Record<Valid, any>`
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *      1. Declare a validator by: `const validNames: ValidateNames<ValidName> = classNames;`
 *      2. Then use it like this: `const okName = validNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 *
 * ```
 *
 * // - Basic usage - //
 *
 * // Simply concats the strings with " " as the joiner.
 * classNames(true && "a", 1 && "b", false && "c", null, undefined, 0); // "a b"
 * classNames("a b", ["c", "d e", false], {"f g": true, h: false});     // "a b c d e f g"
 *
 * // But doesn't remove duplicates.
 * classNames("a b", "a", ["a", "b"], {a: false, "a b": true});         // "a b a a b a b"
 *
 *
 * // - Simple usage with typing - //
 *
 * // Let's define our valid names.
 * type Names = "a" | "b";
 *
 * // Just try "a" and "b" separately.
 * classNames<Names>("a", "b", ["b", "a"], new Set(["b"]), { a: true }); // "a b b a b a"
 * classNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
 * classNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
 * // Let's allow any string, but still use suggestions.
 * classNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a a b a b c", won't suggest "c" but allows it.
 * // We could also use this pattern for some very specific cases - though, get type heavy quickly.
 * classNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a a b a b", would not allow "a b b"
 *
 *
 * // - For full concatenated validation use ValidateNames type - //
 *
 * // Prepare.
 * const validNames = classNames as ValidateNames<Names>;
 *
 * // Do tests. All below output "a b".
 * // .. These should not produce errors in typing.
 * validNames(["a"], { b: true });
 * validNames(["a", "b", ""]);
 * validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validNames(["a", false, undefined, "b"]);
 * validNames(["a", false, undefined, "b"] as const);
 * validNames({"a": true, "b a": false});
 * validNames({"a": true, "b a": false} as const);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validNames("FAIL");
 * validNames(["FAIL"]);
 * validNames({"FAIL": false});
 * validNames(new Set(["a", "b", "FAIL"]));
 * validNames("a", "a b", undefined, "FAIL", ["a", false]);
 * validNames("a", "a b", undefined, ["a", "FAIL", false]);
 * validNames(["a", "b", "a b", "FAIL", false]);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
 * validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 *
 *
 * ```
 */
export declare function classNames<ValidNames extends string = string, Inputs extends ClassNameInput<string>[] = [
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?,
    ClassNameInput<ValidNames>?
]>(...names: Inputs): string;
/** Get diffs in class names in the form of: Record<string, boolean>, where true means added, false removed, otherwise not included.
 * - Note. This process only checks for name changes - it ignores changes in _order_ completely.
 *
 * ```
 *
 * // Common usage with " " as splitter.
 * getNameDiffs("", "a")            // { a: true }
 * getNameDiffs("a", "")            // { a: false }
 * getNameDiffs("a b", "a b c")     // { c: true }
 * getNameDiffs("a b c", "a b")     // { c: false }
 * getNameDiffs("c b a a a", "a b b   b c e"); // { e: true }
 *
 * // Testing other splitters.
 * getNameDiffs("a.b", "a.b.c", ".")    // { c: true }
 * getNameDiffs("a.b", "a.b c", ".")    // { "b c": true }
 * getNameDiffs("a", "b c", "");       // { a: false, "b c": true }
 *
 * ```
 */
export declare function getNameDiffs(origName?: string, newName?: string, splitter?: string): Record<string, boolean> | null;
/** Collects unique names as dictionary keys with value `true` for each found.
 * - The names are assumed to be:
 *      1. String,
 *      2. Iterable of string names, or an iterable of this type itself (recursively).
 *      3. Record where names are keys, values tells whether to include or not.
 * - All three forms use the keySplitter paramter to split the given/resulting string.
 *      * However, if the keySplitter is an empty string ("", default): then uses directly.
 *
 * ```
 *
 * // Prepare a collection.
 * const collection: Record<string, true> = {};
 *
 * // Let's use it with a string splitter for " ".
 * const splitter = " ";
 * collectKeysTo(collection, "a b", splitter);     // Adds { a: true, b: true }
 * collectKeysTo(collection, ["b c"], splitter);   // Adds { c: true }
 * collectKeysTo(collection, {                     // Adds { d: true, e: true }
 *      "c d": true,
 *      e: true,
 *      f: false
 * }, splitter);
 * // .. Testing empty. Won't add anything - regardless of what the keySplitter is.
 * collectKeysTo(collection, "");
 * collectKeysTo(collection, [""], " ");
 * collectKeysTo(collection, {"": true}, "");
 *
 * // Test the claims.
 * collection;  // { a: true, b: true, c: true, d: true, e: true }
 *
 * ```
 */
export declare function collectKeysTo(record: Record<string, true>, keyLikes: Exclude<ClassNameInput, FalseLike>, keySplitter?: string): void;
/** Collect shallow differences in two dictionaries. Assumes first one is original and second are the updates (= the next state) of the dictionary. Returns `null` if no changes detected. */
export declare function getDictionaryDiffs<T extends Record<string, any>>(orig: Partial<T>, update: Partial<T>): Partial<T> | null;
/** Checks if sub dictionaries in both `a` and `b` are equal.
 * - In case a sub dictionary is false-like for one, and empty dictionary for other {}, regards them as equal.
 *      * For example, `equalSubDictionaries({ test: {} }, {}, "test")` returns true.
 *      * But `equalSubDictionaries({ test: { me: true } }, {}, "test")` returns false.
 */
export declare function equalSubDictionaries<Prop extends string>(a: Partial<Record<Prop, any>>, b: Partial<Record<Prop, any>>, ...props: Prop[]): boolean;

/** Creates a new HTML or SVG node - the tag is assumed to be in lowercase, only used to detect for "svg", and otherwise fed to the createElement or createElementNS.
 * - Does not insert it the new node into checkSVGByParentNode, but only uses the parent to help determine whether should be SVG or HTML element.
 *      * If checkSVGByParentNode is a boolean, it directly defines whether to use SVG (true) or HTML (false).
 *      * The answer is already known on the TS side, in case checkSVGByParentNode is a boolean or specifically a HTMLElement or SVGElement.
 * - The namespaceURI defaults to: "http://www.w3.org/2000/svg".
 */
export declare function createDOMElement(tag: "svg", checkSVGByParentNode?: boolean | Node | null | undefined, namespaceURI?: string): SVGSVGElement;
export declare function createDOMElement<Tag extends string>(tag: Tag, checkSVGByParentNode: true | SVGElement, namespaceURI?: string): Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : SVGElement;
export declare function createDOMElement<Tag extends string>(tag: Tag, checkSVGByParentNode?: false | null | undefined | HTMLElement, namespaceURI?: string): Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement;
export declare function createDOMElement(tag: DOMTags | AnyString, checkSVGByParentNode?: boolean | Node | null | undefined, namespaceURI?: string): HTMLElement | SVGElement;
/** Check if a node is SVG using "ownerSVGElement" property on the SVGElement: if undefined, not an SVG (otherwise null or an element).
 * - For simple known cases, the answer is already known on the TS side, in case the node is HTMLElement or SVGElement.
 */
export declare function isNodeSVG(node: HTMLElement): false;
export declare function isNodeSVG(node: SVGElement): true;
export declare function isNodeSVG(node: Node | null | undefined): boolean;

declare const domSkipAttributes: {
    innerHTML: boolean;
    outerHTML: boolean;
    textContent: boolean;
    innerText: boolean;
    outerText: boolean;
};
/** All the self closing tags. */
declare const domSelfClosingTags: DOMTags[];
/** Contains all the attributes that cannot be directly translated.
 * - The key is the camelCase name, the value is the native name.
 * - Note that ones not found in here, are directly the same.
 *      * Note that this also includes capitalized ones from HTML (about a dozen) that could likely work also _without_ lowercasing them, eg. "contentEditable" ~ "contenteditable".
 */
declare const domRenamedAttributes: Partial<Record<string, string>>;
/** Maps native listener attribute names to the event names. For example: `{ "onclick": "click" }`. Assumed usage: `const listenerProp = domListenerProps[attr.toLowerCase()]`. */
declare const domListenerProps: Record<"oncopy" | "oncut" | "onpaste" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextmenu" | "oncuechange" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "onunload" | "onactivate" | "onbeforetoggle" | "onbegin" | "oncontextlost" | "oncontextrestored" | "onfocusin" | "onfocusout" | "onrepeat" | "onscrollend" | "onshow" | "onmousewheel", string>;

/** Read the domProps from a node. Does not read listeners, but returns: `{ className?, style?, data?, attributes? }`. */
export declare function readDOMProps(node: HTMLElement | SVGElement | Node): DOMCleanProps;
/** Clean the given DOM properties. Returns: `{ style?, className?, data?, listeners?, attributes? }`.
 * - Note. Does not clean existing styles dictionary, only converts a string format style to dictionary format.
 * - About parts:
 *      * _className_: Combines "class" and "className" to "className". With both: `props.class + " " + props.className`.
 *      * _style_: Handles "style" separately supporting string vs. dictionary, combines to a dictionary with camelCase names.
 *      * _data_: Converts all "data-*" to a dictionary with camelCase keys (according to the native data attribute convention), and also supports "data" as a stand alone dictionary.
 *      * _listeners_: Converts any known listener props to its listener form, eg. "onClick" or "onclick" both become "click" - with both, the latter value overrides.
 *      * _attributes_: Any other are found in `{ attributes }`. Cleans "aria" related: eg. "ariaAutoComplete" becomes "aria-autocomplete" - with both, the latter value overrides.
 * - You can customize the listenerProps and renamedAttrs. They default to the domListenerProps and domRenamedAttributes constants.
 */
export declare function cleanDOMProps(origProps: DOMUncleanProps, listenerProps?: Partial<Record<string, string>>, renamedAttrs?: Partial<Record<string, string>>): DOMCleanProps;
/** Comparison method specialized into DOMCleanProps (= cleaned up attributes description of a dom element). */
export declare function equalDOMProps(a: DOMCleanProps, b: DOMCleanProps): boolean;
/** Returns the dictionaries for differences.
 * - After the process, the given newProps then represents the appliedProps, so to speak.
 * - If element is null, just returns the diffs without applying anything.
 */
export declare function applyDOMProps(domElement: HTMLElement | SVGElement | Element | null, newProps: DOMCleanProps, oldProps?: DOMCleanProps, logWarnings?: boolean, skipAttrs?: Record<string, any>): DOMDiffProps | null;
/** Helper to write a DOM string for a single tag.
 * - To write a DOM string for a tree of infos, handle the tree externally with recursion and call this with childrenContent for each.
 * @param tag The tag of the DOM element. If "", reads it from readFromNode if given, or assumes it's a text node like situation: just output the textContent.
 * @param domProps The cleaned dom props to apply.
 * @param childrenContent String for the children content to insert inside, or `true` to force a separate opening and closing tag in any case.
 *      - Tip. You can utilize the `domSelfClosingTags` constant to detect against commonly known self closing tags.
 * @param readFromNode If provided, then sets the tag (if not given) and extends the domProps by reading from the element. If a node, then just the textContent.
 * @param skipAttrs Which attributes should always be ignored. Defaults to domSkipAttributes constant.
 *
 * ```
 *
 * // Returns: "<div style='background-color: #fff'><span>some text</span></div>"
 * readDOMString("div", { style: { backgroundColor: "#fff" }, }, "<span>some text</span>");
 *
 * // Returns: "<div></div>", we use `true` as childrenContent to use a closing tag without content.
 * readDOMString("div", null, true);
 *
 * // Returns: "<img src='pics/my_image.jpg' class='image' />"
 * readDOMString("img", { className: "image", attributes: { src: "pics/my_image.jpg" }});
 *
 * ```
 *
 */
export declare function readDOMString(tag: string, domProps?: DOMCleanProps | null, childrenContent?: string | null | boolean, readFromNode?: Node | null, skipAttrs?: Record<string, any>): string;
