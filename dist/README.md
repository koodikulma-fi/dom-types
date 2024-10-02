
## WHAT

`dom-types` is a light weight library containing typing for HTML & SVG attributes and CSS properties, and a few related JS methods.

The types are provided in native naming as well as camelCase naming, the JS side works for both.

The npm package can be found with: [dom-types](https://www.npmjs.com/package/dom-types). Contribute in GitHub: [koodikulma-fi/dom-types.git](https://github.com/koodikulma-fi/dom-types.git)

---

## CONTENTS

There are 2 kinds of tools available.

### [1. TS DECLARATIONS](#1-ts-declarations-doc)

Declarations for common attributes:
- Tag based (and tagless) SVG and HTML attributes (combined as DOM) in native and camelCase naming.
    * The attributes include global listeners and ARIA attributes.
- The global listeners and ARIA attributes (also in HTML/SVG attributes) in native and camelCase naming.
- CSS properties as an interface with camelCase keys. For example: `{ "backgroundColor": "#000" }`
    * Some properties support `number` or `0` values, eg. `{ width: 50, opacity: .5, inset: 0 }`.
    * All properties have typing suggestions while always allowing any string value.
    * In addition a bunch of value names for some common CSS features, eg. `CSSBorderStyle`.

### [2. JS TOOLS](#2-js-tools-doc)

A couple of (mutable) constants for enforcing the naming:
- `domSkipAttributes`: Always skips these attributes (eg. "innerHTML" and such).
- `domRenamedAttributes`: To convert from clean camelCase to native attributes.
- `domListenerProps`: The known listener properties - applied as event listeners.

A couple of helper methods for reading and applying the type suggested features into/from DOM:
- `readDOMString(tag, domProps?, childrenContent?, readFromNode?, skipAttrs?): string`
- `readDOMProps(node): DOMCleanProps`
- `cleanDOMProps(uncleanProps, listenerProps?, renamedAttrs?): DOMCleanProps`
- `equalDOMProps(aDomProps, bDomProps): boolean`
- `applyDOMProps(element, newProps, oldProps = {}, logWarnings = true, skipAttrs?): DOMDiffProps | null`

Other general DOM helpers:
- `createDOMElement(tag, checkSVGByParentNode?, namespaceURI?): HTMLElement | SVGElement`
- `isNodeSVG(node): boolean`
- `classNames(...namesStrArrOrDictionary)`
- `cleanNames(...namesStrArrOrDictionary)`
- `parseDOMStyle(styleString): CSSProperties`

Core methods behind the scenes:
- `getDictionaryDiffs(orig, updated): Record<string, any>`
- `equalSubDictionaries(a, b, ...props): boolean`
- `getNameDiffs(origName, newName): Record<string, boolean> | null`
- `collectKeysTo(record, keyLikes, splitter = ""): Record<string, true>`
- `lowerCaseStr(str, delimiter = "-"): string`
- `camelCaseStr(str, splitter = "-"): string`

---

## 1. TS DECLARATIONS (doc)

---

### 1.1. Attribute declarations

- There are 3 similar collections: HTML, SVG and DOM (combining HTML & SVG).
- The collections follow similar typing and naming to each other. For example:
    * `HTMLAttributes<Tag extends string, Fallback = HTMLAttributesAny>`: Only HTML attributes.
    * `SVGAttributes<Tag extends string, Fallback = HTMLAttributesAny>`: Only SVG attributes.
    * `DOMAttributes<Tag extends string, Fallback = HTMLAttributesAny>`: Combines HTML & SVG.
- The available forms are the following, shown with DOM prefix here:
    * `DOMAttributes<Tag extends string, Fallback = DOMAttributesAny>`: Tag based attributes.
    * `DOMAttributesAny`: All possible attributes for any tag. As it's DOM, includes HTML and SVG.
    * `DOMAttributesBy: Record<Tag, DOMAttributes<Tag>>`: Tag based attributes as a dictionary.
- In addition, the same ones are available in native case using `_native` suffix. For example:
    * `HTMLAttributes_native<Tag, Fallback = HTMLAttributesAny>`: HTML tag based in native case.
    * `DOMAttributesAny_native`: All possible attributes (for any tag) in native case.
    * `SVGAttributesBy_native: Record<Tag, SVGAttributes<Tag>>`: SVG dictionary in native case.

#### 1.1.1. HTML examples

```typescript

// HTMLAttributes for "div" in camelCase.
type MyDiv = HTMLAttributes<"div">;
type MyDivTests = [
    // Correct.
    MyDiv["onClick"],   // ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined
    MyDiv["style"],     // string | CSSProperties | undefined
    MyDiv["class"],     // string | undefined
    MyDiv["className"], // string | undefined
    // Failures.
    MyDiv["onclick"],   // Type guard says it doesn't exist - as intended.
    MyDiv["disabled"],  // Type guard says it doesn't exist - as intended.
];

// HTMLAttributes for any element in camelCase.
type MyAny = HTMLAttributesAny;
type MyAnyTests = [
    // Correct.
    MyInput["disabled"],    // BoolOrStr | undefined  =  "true" | "false" | boolean | string & {} | undefined
    // Failures.
    MyAny["onclick"],       // Type guard says it doesn't exist - as intended.
];

// HTMLAttributes for "input" in camelCase.
type MyInput = HTMLAttributesBy["input"]; // Let's test the dictionary form.
type MyInputTests = [
    // Correct.
    MyInput["onFocus"],     // ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined
    MyInput["style"],       // string | CSSProperties | undefined
    MyInput["disabled"],    // BoolOrStr | undefined  =  "true" | "false" | boolean | string & {} | undefined
    MyInput["virtualKeyboardPolicy"], // AnyString | "auto" | "manual" | undefined
];

// HTMLAttributes for "input" in native case.
type MyInput_native = HTMLAttributes_native<"input">;
type MyInputTests_native = [
    // Correct.
    MyInput_native["onfocus"],  // ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined
    MyInput_native["class"],    // string | undefined
    MyInput_native["style"],    // string | CSSProperties | undefined
    MyInput_native["disabled"], // BoolOrStr | undefined  =  "true" | "false" | boolean | string & {} | undefined
    MyInput_native["virtualkeyboardpolicy"], // AnyString | "auto" | "manual" | undefined
    // Failures.
    MyInput_native["className"], // string | undefined
];

```

#### 1.1.2. SVG examples

```typescript

// SVGAttributes for "circle" in camelCase.
type MyCircle = SVGAttributes<"circle">;
type MyCircleTests = [
    // Correct.
    MyCircle["onFocus"],    // ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined
    MyCircle["style"],      // string | CSSProperties | undefined
    MyCircle["fill"],       // CSSColorNames | undefined
    MyCircle["strokeDashArray"], // string | number | number[] | undefined
    MyCircle["ariaBrailleRoleDescription"], // string | null | undefined
];

// SVGAttributes for "circle" in native case.
type MyCircle_native = SVGAttributesBy_native["circle"]; // Let's test the dictionary form.
type MyCircleTests_native = [
    // Correct.
    MyCircle_native["onfocus"], // ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined
    MyCircle_native["style"],   // string | CSSProperties | undefined
    MyCircle_native["fill"],    // CSSColorNames | undefined
    MyCircle_native["stroke-dasharray"], // string | number | number[] | undefined
    MyCircle_native["aria-brailleroledescription"], // string | null | undefined
];

```

#### 1.1.3. DOM examples and tag unions

- You can also define a union of tags for `DOMAttributes<Tag>` (or HTML or SVG).
    * However, it's typically not recommended, and just easier to use the Any type variant.
- In any case, it works except for one caveat specifically for the DOM type:
    * If you mix HTML and SVG the result will just be the intersection of the Any type for both sides.
    * For example: `DOMAttributes<"div" | "svg">` results in `HTMLAttributesAny & SVGAttributesAny`.

```typescript

// DOMAttributes.
type MySVGPathOrSVG = DOMAttributes<"path" | "svg">;    // Same as `SVGAttributes<"path" | "svg">`
type MySVGPathAndSVG = DOMAttributes<"path"> & SVGAttributes<"svg">; // Manual intersection.
type MySVGPathOrGroup = DOMAttributes<"path" | "group">;// Same as `SVGAttributes<"path" | "group">`
type MyHTMLDivOrSpan = DOMAttributes<"div" | "span">;   // Same as `HTMLAttributes<"div" | "span">`
type MyMixHTMLAndSVG = DOMAttributes<"div" | "svg">;    // Same as `HTMLAttributesAny & SVGAttributesAny`
type MySpecialAnchor = DOMAttributes<"a">;              // Same as `HTMLAttributes<"a"> & SVGAttributes<"a">`

// Test.
type MyTests = [
    // SVG presentational attributes.
    MySVGPathOrSVG["fill"],     // Error - not found since it's a union, not intersection.
    MySVGPathAndSVG["fill"],    // Found, since it's an intersection.
    MySVGPathOrGroup["fill"],   // Found, since present in both.
    // HTML basics.
    MyHTMLDivOrSpan["tabIndex"], // Found. Actually "div" and "span" have nothing special.
    MyHTMLDivOrSpan["disabled"], // Error - not found, since "disabled" is for "input", "button" and such.
    // Mixed outcome.
    MyMixHTMLAndSVG["strokeDashArray"],  // Anything for HTML or SVG is allowed. Tags won't matter.
    MyMixHTMLAndSVG["disabled"],         // Like said, all possible allowed.
    // Special case - tag belonging to both sides.
    MySpecialAnchor["href"],        // Found, correct.
    MySpecialAnchor["disabled"],    // Error - not found, correct.
    MySpecialAnchor["xmlBase"],     // Found, because found on the SVG side attributes.
];

```

---

### 1.2. Global listeners and ARIA attributes

- The global listeners and ARIA attributes are included in the main declarations, but can be used separately.
- Accordingly, the global listeners are provided as native and camelCase interfaces:
    * `GlobalListeners` and `GlobalListeners_native`.
    * For example: `GlobalListeners["onAbort"]`, or `GlobalListeners_native["onclick"]`.
- And likewise, the ARIA attributes are provided as native and camelCase interfaces:
    * `ARIAAttributes` (= global `ARIAMixin`) and `ARIAAttributes_native`.
    * In addition, there's a string type for `ARIARole`.

```typescript

// Just showcasing.
type MyTests = [
    // Correctly found.
    GlobalListeners["onClick"],
    GlobalListeners_native["onclick"],
    ARIAAttributes["ariaAtomic"],
    ARIAAttributes["ariaValueMin"],
    ARIAAttributes_native["aria-atomic"],
    ARIAAttributes_native["aria-valuemin"],
    // Failures - mismatching cases.
    GlobalListeners["onclick"],
    GlobalListeners_native["onClick"],
    ARIAAttributes["aria-atomic"],
    ARIAAttributes["aria-valuemin"],
    ARIAAttributes_native["ariaAtomic"],
    ARIAAttributes_native["ariaValueMin"],
];

```

---

### 1.3. CSS properties

- The CSS properties are available as a camelCase interface, for example: `{ "backgroundColor": "#000" }`
- This form works nicely with the Element's style, eg. `el.style["backgroundColor"] = "#000"`.
    * Actually both cases are supported by browsers through the syle: `el.style["background-color"] = "#000"`.
* All values are `string` in type, though some also support `number` or just `0` reflecting what the major browsers support.
    - For example: `{ width: 50 }` -> `el.style.width = 50` -> `50` = `50px`.
    - Supporting only `0` is relative common, eg. `{ inset: 0, gap: 0, margin: 0 }`.
        * Basically, it's supported for all values that could take number with a unit, eg. `{ margin: "5px" }`.

```typescript

// All properties have some suggestions.
const myStyles: CSSProperties = {
    // Some common ones.
    display: "flex",
    flexDirection: "column-reverse",
    overflow: "auto",
    overflowBehavior: "contain",
    position: "sticky",
    // For colors, type suggests "currentcolor" | "currentColor" | "transparent" | "inherit" | "initial" and allows any string.
    backgroundColor: "currentColor",
    color: "inherit",
    textEmphasisColor: "transparent",
    // Test numeric.
    animationIterationCount: 5,
    flexGrow: .1,
    flexShrink: 100,
    opacity: .5,
    width: 100,
    // Test half-numeric: only supports 0. Any other number fails.
    borderBlockEndWidth: 0,
    columnWidth: 0,
    gap: 0,
    inset: 0,
    left: 0,
    maxInlineSize: 0,
    rowGap: 0,
};


```

---

## 2. JS TOOLS (doc)

---

### 2.1. DOM constants
- The usage of constants can be overridden on the methods that use them (as the last arguments):
    * For example, `cleanDOMProps`, `applyDOMProps` and `readDOMString` use the constants.
    * An alternative way to customize is by _mutating_ the constants - though it'll affect your whole project.
- The constants are `domSkipAttributes`, `domRenamedAttrs`, and `domListenerProps`.

#### library - constant: `domSkipAttributes`

- Simply defines a set of attributes that will be totally ignored from the processing.
- Note that this is used in applyDOMProps and readDOMString as an overrideable default.

```typescript

const domSkipAttributes = {
    innerHTML: true,
    outerHTML: true,
    textContent: true,
    innerText: true,
    outerText: true,
};

```

#### library - constant: `domRenamedAttributes`

- A dictionary with all the renamed attributes as keys and their native name as value.

```typescript

// This is just an example, not the whole dictionary.
const domRenamedAttributes = {
    // HTML side has 2 non-optional ones.
    acceptCharset: "accept-charset", // Not optional.
    httpEquiv: "http-equiv", // Not optional.
    // The rest are optional.
    autoComplete: "autocomplete",
    // ... any some more ... 

    // SVG side native naming is quite diverse and inherits some from HTML.
    // .. The list is relatively long, so here only a couple of examples.
    accentHeight: "accent-height",
    referrerPolicy: "referrerpolicy", // Used for HTML and SVG.
    xlinkHref: "xlink:href",
    xmlBase: "xml:base",
    // ... any many more ... 
};

```

#### library - constant: `domListenerProps`

- A dictionary whose keys are lowercase listener attributes and values the event names.
- It's used by checking if the attribute (converted to lowercase) is found in the dictionary.
    * Can then use the value for adding / removing a listener: `el.addEventListener(eName, listener)`

```typescript

// This is just an example, not the whole dictionary.
const domListenerAttributes = {
    onabort: "abort",
    onclick: "click",
    ondblclick: "dblclick",
    // ... and many more ...
};

```

---

### 2.2. DOM props helpers
- The helpers are designed to meet practical needs and to enforce the naming convention:
    * `readDOMString(tag, domProps?, childrenContent?, readFromNode?, skipAttrs?): string`
    * `readDOMProps(node): DOMCleanProps`
    * `cleanDOMProps(uncleanProps, listenerProps?, renamedAttrs?): DOMCleanProps`
    * `equalDOMProps(aDomProps, bDomProps): boolean`
    * `applyDOMProps(element, newProps, oldProps = {}, logWarnings = true, skipAttrs?): DOMDiffProps | null`

#### library - method: `readDOMString(tag, domProps?, childrenContent?, readFromNode?, skipAttrs?)`

- The methods converts the tag, domProps and childrenContent to a string.
- Also supports reading tag and domProps from the readFromNode.
- Skips any listener attributes.

```typescript

// Returns: "<div style='background-color: #fff'><span>some text</span></div>"
readDOMString("div", { style: { backgroundColor: "#fff" }, }, "<span>some text</span>");

// Returns: "<div></div>", we use `true` as childrenContent to use a closing tag without content.
readDOMString("div", null, true);

// Returns: "<img src='pics/my_image.jpg' class='image' />"
readDOMString("img", { className: "image", attributes: { src: "pics/my_image.jpg" }});

```

#### library - method: `readDOMProps(node)`

- The methods reads the `DOMCleanProps` type information from the given node.

```typescript

// Create an element and set it up.
const input = document.createElement("input");
input.className = "my test";
input.style.cssText = "border-color: #000"; // Might become, say, "rgb(0,0,0)"
input.disabled = true;

// Read info.
readDOMProps(input);
// Returns: {
//      className: "my test",
//      style: { borderColor: "rgb(0,0,0)" }, // Or whatever browser used.
//      attributes: { disabled: "" }
// }

```

#### library - method: `cleanDOMProps(uncleanProps, listenerProps?, renamedAttrs?)`

- Helps to clean unorganized properties into `DOMCleanProps` form.

```typescript

// - Do some test - //

// Returns: { className: "test me" }
cleanDOMProps({ class: "test", className: "me" });

// Returns: { style: { borderColor: "#fff" }, attributes: { src: "pics/my-gif.gif" } }
cleanDOMProps({ style: "border-color: #fff", src: "pics/my-gif.gif" });

// Returns: { listeners: { click: () => {}, abort: (e) => {} } }
cleanDOMProps({ onclick: () => {}, onAbort: (e) => {} });

// Returns: { attributes: { unknownThing: 5 } }
cleanDOMProps({ unknownThing: 5 });


```

#### library - method: `equalDOMProps(aDomProps, bDomProps)`

- Compares two sets of DOMCleanProps to determine whether they are equal or not.
    * Technically, they allow some tolerance over the cleaniness, if the structure is in place.
- The method is useful to determine whether needs to apply anything to the DOM or not.

```typescript

// True like tests.
equalDOMProps({ className: undefined }, {}); // true
equalDOMProps(
    { attributes: {}, className: "" },
    { listeners: {}, data: {} }
); // true
equalDOMProps(
    { style: { backgroundColor: "#fff" } },
    { style: { backgroundColor: "#fff" } }
); // true

// False like tests are more obvious.
equalDOMProps({ className: "active" }, {}); // false
equalDOMProps(
    { attributes: {}, className: "" },
    { listeners: {}, data: { myName: "me" } }
); // false
equalDOMProps(
    { style: { backgroundColor: "#000" } },
    { style: { backgroundColor: "#fff" } }
); // false


```

#### library - method: `applyDOMProps(element, newProps, oldProps = {}, logWarnings = true, skipAttrs?)`

- Apply the cleaned DOM props to an element, optionally comparing against oldProps.
- Returns info for changes (`DOMDiffProps`), or `null` if didn't apply any.

```typescript

// Create an element and apply props.
const el = createDOMElement("div");
const props1 = cleanDOMProps({ style: "background: #fff", class: "test", className: "me" });
applyDOMProps(el, props1); // Applies style and class: <div style="background:#fff" class="test me" />
// .. Returns: { className: { test: true, me: true }, style: { background: "#fff" } }

// Apply another set of props, extending earlier props.
const props2 = { ...props1, data: { myName: "me" } };
applyDOMProps(el, props2, props1); // Applies data: <div ... data-my-name="me" />
// .. Returns: { data: { myName: "me" } }

// Reuse data from props2, but otherwise clean.
const props3 = { data: props2.data };
applyDOMProps(el, props3, props2); // Removes style and class: <div data-my-name="me" />
// .. Returns: { className: { test: false, me: false }, style: { background: undefined } }

// Test empty update.
applyDOMProps(el, {...props3}, props3);
// .. Returns: null

```

---

### 2.3. General DOM helpers
- DOM helpers that are independent from the attribute naming.
    * `createDOMElement(tag, checkSVGByParentNode?, namespaceURI?): HTMLElement | SVGElement`
    * `isNodeSVG(node): boolean`
    * `classNames(...namesStrArrOrDictionary): string`
    * `cleanNames(...namesStrArrOrDictionary): string`
    * `parseDOMStyle(styleString): CSSProperties`

#### library - method: `createDOMElement(tag, checkSVGByParentNode?, namespaceURI?)`
- Create a new HTML or SVG element with tag suggestions.
- Use lowercase tag names to stay consistent all around.

```typescript

// By default all are HTML, except "svg" tag.
const div = createDOMElement("div");        // HTMLDivElement
const input = createDOMElement("input");    // HTMLInputElement
const funky = createDOMElement("funky");    // HTMLElement - doesn't suggest, but is allowed.
const a_html = createDOMElement("a");       // HTMLAnchorElement
const svg = createDOMElement("svg");        // SVGSVGElement - using createElementNS.

// Use the parent element to _detect_ SVG vs. HTML.
const group = createDOMElement("group", svg);       // SVGElement
const circle = createDOMElement("circle", group);   // SVGCircleElement
const a_svg = createDOMElement("a", group);         // SVGAElement

// The default namespaceURI for svg is: "http://www.w3.org/2000/svg"
const circle_ALT = createDOMElement("circle", group, "http://www.w3.org/2000/svg");

// Don't create SVG elements without the parent check, unless "svg" tag or saying it's SVG.
const circle_NONO = createDOMElement("circle");         // HTMLElement - in JS, too.
const circle_OKAY = createDOMElement("circle", true);   // SVGCircleElement - in JS, too.

// Insert accordingly.
document.body.appendChild(div);
div.appendChild(input);
div.appendChild(funky);
div.appendChild(a_html);
div.appendChild(svg);
svg.appendChild(group);
group.appendChild(circle);
group.appendChild(a_svg);

```

#### library - method: `isNodeSVG(node: Node | null | undefined): boolean`
- The same check that is used in createDOMElement using "ownerSVGElement" property internally.

```typescript

// Create some elements.
const div = createDOMElement("div");
const svg = createDOMElement("svg");
const group = createDOMElement("group", svg);
const circle = createDOMElement("circle", group);
const a_svg = createDOMElement("a", group); // On the SVG side.
const a_html = createDOMElement("a", div);  // On the HTML side.

// Test for SVG.
isNodeSVG(div);     // false
isNodeSVG(svg);     // true
isNodeSVG(group);   // true
isNodeSVG(circle);  // true
isNodeSVG(a_svg);   // true
isNodeSVG(a_html);  // false

```

#### library - method: `classNames(...strLikes)`
- Simply concats non-false like strings from string, array or dictionary input.
- Does not remove any duplicates - to do that use `cleanNames` instead.
- Note. For optimal nested processing (eg. in a component structure), it's recommended to use `classNames` on the extending layers and `cleanNames` only at the last step.

```typescript

// - Basic usage - //

// Simply concats the strings with " " as the joiner.
classNames(true && "a", 1 && "b", false && "c", null, undefined, 0); // "a b"
classNames("a b", ["c", "d e", false], {"f g": true, h: false});     // "a b c d e f g"

// But doesn't remove duplicates.
classNames("a b", "a", ["a", "b"], {a: false, "a b": true});         // "a b a a b a b"


// - Simple usage with typing - //

// Let's define our valid names.
type Names = "a" | "b";

// Just try "a" and "b" separately.
classNames<Names>("a", "b", ["b", "a"], new Set(["b"]), { a: true }); // "a b b a b a"
classNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
classNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
// Let's allow any string, but still use suggestions.
classNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a a b a b c", won't suggest "c" but allows it.
// We could also use this pattern for some very specific cases - though, get type heavy quickly.
classNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a a b a b", would not allow "a b b"


// - For full concatenated validation use ValidateNames type - //

// Prepare.
const validNames = classNames as ValidateNames<Names>;

// Do tests. All below output "a b".
// .. These should not produce errors in typing.
validNames(["a"], { b: true });
validNames(["a", "b", ""]);
validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
validNames(["a", false, undefined, "b"]);
validNames(["a", false, undefined, "b"] as const);
validNames({"a": true, "b a": false});
validNames({"a": true, "b a": false} as const);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
// .. These should fail each in typing, since "FAIL" is not part of ValidNames.
validNames("FAIL");
validNames(["FAIL"]);
validNames({"FAIL": false});
validNames(new Set(["a", "b", "FAIL"]));
validNames("a", "a b", undefined, "FAIL", ["a", false]);
validNames("a", "a b", undefined, ["a", "FAIL", false]);
validNames(["a", "b", "a b", "FAIL", false]);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});

```

#### library - method: `cleanNames(...strLikes)`
- Like `classNames` but removes any duplicates in the outcome.
- Typically used right before applying to DOM (to keep DOM clean).

```typescript

// - Basic JS usage - //

// Numeric and false-like are cut off ("", false, null, undefined).
cleanNames("a", "b", 0, undefined, [false, "c"], { d: true }); // "a b c d"
// Each string is splitted by " " and collected to a record, so duplicates are dropped easily.
cleanNames("a b", "b", "b b a a", ["b"], new Set(["b"]), { a: true }); // "a b"
// Simulate some validation.
cleanNames("a", 1 && "b", ["b", 0 && "c"], { "b d": true, "e": null }); // "a b d"
// If you input numbers other than 0, they are type guarded - guard stops at first fail.
cleanNames(0, 1, -1); // 1 nor -1 won't be allowed here.


// - Simple usage with typing - //

// Let's define our valid names.
type Names = "a" | "b";

// Just try "a" and "b" separately.
cleanNames<Names>("a", "b", ["b", "a"], { a: true }); // "a b"
cleanNames<Names>("a", "b", ["b", "a"], new Set(["b"]), { a: true }, "c"); // Type guards against "c"
cleanNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
// Let's allow any string, but still use suggestions.
cleanNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a b c", won't suggest "c" but allows it.
// We could also use this pattern for some very specific cases - though, get type heavy quickly.
cleanNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a b", would not allow "a b b"


// - For full concatenated validation use ValidateNames type - //

// Prepare.
const validNames = cleanNames as ValidateNames<Names>;

// Do tests. All below output "a b".
// .. These should not produce errors in typing.
validNames(["a"], { b: true });
validNames(["a", "b", ""]);
validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
validNames(["a", false, undefined, "b"]);
validNames(["a", false, undefined, "b"] as const);
validNames({"a": true, "b a": false});
validNames({"a": true, "b a": false} as const);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
// .. These should fail each in typing, since "FAIL" is not part of ValidNames.
validNames("FAIL");
validNames(["FAIL"]);
validNames({"FAIL": false});
validNames(new Set(["a", "b", "FAIL"]));
validNames("a", "a b", undefined, "FAIL", ["a", false]);
validNames("a", "a b", undefined, ["a", "FAIL", false]);
validNames(["a", "b", "a b", "FAIL", false]);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});

```

#### library - method: `parseDOMStyle(str)`
- Split the style string and return a dictionary with camelCase keys with respective values.
- Note that both keys are compatible with `element.style[styleProp] = value` usage.
    * For example, `element.style["border-color"] = "#000"` and `element.style["borderColor"] = "#000"` work the same.

```typescript

// Returns: { borderColor: "#ccc", width: "50px" }
parseDOMStyle("border-color: #ccc; width: 50px");

// Returns: { backgroundImage: "url('https://somedomain.com/some_picture.jpg')" }
parseDOMStyle("background-image: url('https://somedomain.com/some_picture.jpg')");

// Let's test parsing and applying to DOM.
const cssProps = parseDOMStyle("background-color: #000; font-size: 12px;");
const el = document.createElement("div");
for (const prop in cssProps)
    el.style[prop] = cssProps[prop];

// Test results.
el                          // <div style="background-color: #000; font-size: 12px" />
el.style.backgroundColor    // "rgb(0, 0, 0)" or "#000000" or such.
el.style.fontSize           // "12px"
el.style["font-size"]       // "12px"

```

---

### 2.4. Core methods
- `getDictionaryDiffs(orig, updated): Record<string, any>`
- `equalSubDictionaries(a, b, ...props): boolean`
- `getNameDiffs(origName, newName): Record<string, boolean> | null`
- `collectKeysTo(record, keyLikes, splitter = ""): Record<string, true>`
- `lowerCaseStr(str, delimiter = "-"): string`
- `camelCaseStr(str, splitter = "-"): string`

#### library - method: `getDictionaryDiffs(orig, updated)`
- If unchanged, returns null, otherwise a new dictionary with keys only for changed, and value of each the new value or `undefined` if removed.

```typescript

// Returns: { a: true, c: undefined }
const myDiffs = getDictionaryDiffs({ a: true, b: "test", c: 0 }, { a: false, b: "test" });

// Returns: null.
const myDiffs = getDictionaryDiffs({ a: true }, { a: true });

// Note that for the purposes of getDictionaryDiffs, `undefined` is the same as not found.
const myDiffs = getDictionaryDiffs({ a: undefined }, {}); // Returns null.

```

#### library - method: `equalSubDictionaries(a, b, ...props)`
- Checks if sub dictionaries in both `a` and `b` are equal in shallow comparison for given properties.
- In case one has an empty dictionary and the other nothing (or false-like), then regards them as equal.

```typescript

// Prepare type.
interface MyObj {
    set1?: { test: boolean; deep: Record<string, any>; };
    set2?: { test: boolean; deep: Record<string, any>; };
    other?: { more: boolean; }
    another?: Record<string, any>;
}
// Prepare two somewhat similar objects.
const a: MyObj = {
    set1: { test: true, deep: { state: true } },
    set2: { test: true, deep: { state: true } },
    other: {}
};
const b: MyObj = {
    set1: { test: true, deep: { state: true } },
    set2: { test: true, deep: a.set2.deep },
    other: { more: true },
    another: {}
};

// Test.
equalSubDictionaries(a, b, "set1");         // false, a.set1.deep !== a.set2.deep
equalSubDictionaries(a, b, "set2");         // true
equalSubDictionaries(a, b, "other");        // false, b.other.more !== a.other.more.
equalSubDictionaries(a, b, "another");      // true, b.another is just {}, so undefined is fine.
equalSubDictionaries(a, b, "set1", "set2"); // false, because "set1" returns false.

```

#### library - method: `getNameDiffs(origName, newName)`

- Get diffs in class names in the form of: Record<string, boolean>, where true means added, false removed, otherwise not included.
- Note that the method does not care about the order, just whether the names are present or not. Skips empty "".

```typescript

// Common usage.
getNameDiffs("", "a") // { a: true }
getNameDiffs("a", "") // { a: false }
getNameDiffs("a b", "a b c") // { c: true }
getNameDiffs("a b c", "a b") // { c: false }
getNameDiffs("c b a a a", "a b b   b c e"); // { e: true }

```

#### library - method: `collectKeysTo(record, keyLikes, stringSplitter = "")`
- Helper to collect found keys from a string, array or dictionary using a string splitter.
- This is the core method for the `cleanNames` method.

```typescript

// Prepare a collection.
const collection: Record<string, true> = {};

// Use it with a string splitter for " ".
// .. Adds to collection: { a: true, b: true, c: true, d: true, e: true }
collectKeysTo(collection, "a b", ["b c"], { "c d": true, e: true, f: false}, " ");
// .. Testing empty. Won't add anything - regardless of what the stringSplitter is.
collectKeysTo(collection, "", [""], { "": true });

// Test the claims.
collection // { a: true, b: true, c: true, d: true, e: true }


```

#### library - method: `lowerCaseStr(str, delimiter = "-")`
- Helper to convert a camelCase or PascalCase string to dash-case (by default).
- This method is useful with the native Element's `dataset` feature.

```typescript

// Simple tests.
lowerCaseStr("myLife");     // "my-life"
lowerCaseStr("MyLife");     // "-my-life"
lowerCaseStr("TEST");       // "-t-e-s-t"
lowerCaseStr("TEST", "_");  // "_t_e_s_t"
lowerCaseStr("TEST", "");   // "test"

```

#### library - method: `camelCaseStr(str, splitter = "-")`
- Helper to convert a dash-case (by default) to a camelCase or PascalCase string.
- This method is useful with the native Element's `dataset` feature.

```typescript

// Simple tests.
camelCaseStr("my-life");        // "myLife"
camelCaseStr("-my-life");       // "MyLife"
camelCaseStr("-t-e-s-t");       // "TEST"
camelCaseStr("---what---");     // "What"
camelCaseStr("__what__", "_");  // "What"

```

---

[Back to top](#what)
