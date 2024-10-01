
## WHAT

`dom-types` is a light weight library containing typing for HTML & SVG attributes and CSS properties, and a few related JS methods.

The types are provided in native naming as well as camelCase naming, and the related JS methods included.

The npm package can be found with: [dom-types](https://www.npmjs.com/package/dom-types). Contribute in GitHub: [koodikulma-fi/dom-types.git](https://github.com/koodikulma-fi/dom-types.git)

---

## CONTENTS

There are 2 kinds of tools available.

### [1. TS TOOLS](#1-ts-tools-doc)

Tag based SVG and HTML attributes.
- With matching typing, allowing string for any but providing suggestions for many.
- Provided in native as well as camelCase format. (JS side hss converters.)
- More allowing string suggestions might be added later, especially for CSS properties.


### [2. JS TOOLS](#2-js-tools-doc)

A couple of (mutable) constants for enforcing the naming:
- `domSkipAttributes`: Always skips these attributes (eg. "innerHTML" and such).
- `domRenamedAttributes`: To convert from clean camelCase to native attributes.
- `domListenerProps`: The known listener properties - applied as event listeners.

A couple of helper methods for reading and applying the type suggested features into/from DOM:
- `readDOMString(tag, domProps?, childrenContent?, readFromNode?) => string`
- `readDOMProps(node) => DOMCleanProps`
- `cleanDOMProps(uncleanProps) => DOMCleanProps`
- `equalDOMProps(aDomProps, bDomProps) => boolean`
- `applyDOMProps(domProps) => void`

Other general DOM helpers:
- `classNames(...namesStrArrOrDictionary)`
- `parseDOMStyle(styleString) => CSSProperties`
- `createDOMElement(tag, checkByParentNode?, namespaceURI?) => HTMLElement | SVGElement | null`
- `isNodeSVG(node) => boolean`

Core methods behind the scenes:
- `getDictionaryDiffs(orig, updated)`
- `equalSubDictionaries(a, b, ...props)`
- `collectKeysTo(record, keyLikes, splitter = "")`
- `lowerCaseStr(str, replaceBy = "-")`
- `camelCaseStr(str, splitter = "-")`

---

## 1. TS TOOLS (doc)

## 2. JS TOOLS (doc)

### 2.1. Constants
- The usage of constants can be overridden on the methods that use them (as the last arguments):
    * For example, `cleanDOMProps`, `applyDOMProps` and `readDOMString` use the constants.

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

// This is just an example, not the full list.
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
}

```

#### library - constant: `domListenerProps`

### 2.2. Props
readDOMProps(node: HTMLElement | SVGElement | Node): DOMCleanProps

### 2.3. General
- `createDOMElement(tag, checkByParentNode?, namespaceURI?): HTMLElement | SVGElement | null`
- `isNodeSVG(node): boolean`
- `classNames(...namesStrArrOrDictionary): string`
- `parseDOMStyle(styleString): CSSProperties`

#### library - method: `createDOMElement`
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
const circle_NONO = createDOMElement("circle");         // HTMLElement - in JS, too
const circle_OKAY = createDOMElement("circle", true);   // SVGCircleElement - in JS, too

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
const a_html = createDOMElement("a", div); // On the HTML side.

// Test for SVG.
isNodeSVG(div);     // false
isNodeSVG(svg);     // true
isNodeSVG(group);   // true
isNodeSVG(circle);  // true
isNodeSVG(a_svg);   // true
isNodeSVG(a_html);  // false

```

#### library - method: `classNames`

```typescript

// - Basic JS usage - //

// Numeric and false-like are cut off ("", false, null, undefined).
classNames("a", "b", 0, undefined, [false, "c"], { d: true }); // "a b c d"
// Each string is splitted by " " and collected to a record, so duplicates are dropped easily.
classNames("a b", "b", "b b a a", ["b"], { a: true }); // "a b"
// Simulate some validation.
classNames("a", 1 && "b", ["b", 0 && "c"], { "d": true, "e": null }); // "a b d"
// If you input numbers other than 0, they are type guarded - guard stops at first fail.
classNames(0, 1, -1); // 1 nor -1 won't be allowed here.


// - Simple usage with typing - //

// Let's define our valid names.
type Names = "a" | "b";

// Just try "a" and "b" separately.
classNames<Names>("a", "b", ["b", "a"], { a: true }); // "a b"
classNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
classNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
// Let's allow any string, but still use suggestions.
classNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a b c", won't suggest "c" but allows it.
// We could also use this pattern for some very specific cases - though, get type heavy quickly.
classNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a b", would not allow "a b b"


// - For full concatenated validation use ValidateNames type - //

// Prepare.
const validNames = classNames as ValidateNames<Names>;

// Do tests. All below output "a b".
// .. These should not produce errors in typing.
validNames(["a"], { b: true });
validNames(["a", "b", ""]);
validNames(["a", "b", "a b", "b a"]);
validNames(["a", false, undefined, "b"]);
validNames(["a", false, undefined, "b"] as const);
validNames({"a": true, "b a": false});
validNames({"a": true, "b a": false} as const);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
// .. These should fail each in typing, since "FAIL" is not part of ValidNames.
validNames("FAIL");
validNames(["FAIL"]);
validNames({"FAIL": false});
validNames("a", "a b", undefined, "FAIL", ["a", false]);
validNames("a", "a b", undefined, ["a", "FAIL", false]);
validNames(["a", "b", "a b", "FAIL", false]);
validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});

```

#### library - method: `parseDOMStyle`
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

### 2.4. Core
- `getDictionaryDiffs(orig, updated)`
- `equalSubDictionaries(a, b, ...props)`
- `collectKeysTo(record, keyLikes, splitter = "")`
- `lowerCaseStr(str, replaceBy = "-")`
- `camelCaseStr(str, splitter = "-")`

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

#### library - method: `equalSubDictionaries(orig, updated, ...props)`
- Compares the given objects by sub properties, assuming the sub values (if found) are dictionaries to be shallow compared.

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
equalSubDictionaries(a, b, "other");        // false, a.other.more is undefined.
equalSubDictionaries(a, b, "another");      // false, a.another is undefined.
equalSubDictionaries(a, b, "set1", "set2"); // false, because "set1" returns false.

```

#### library - method: `collectKeysTo(record, keyLikes, stringSplitter = "")`
- Helper to collect found keys from a string, array or dictionary using a string splitter.
- This is the core method for the `classNames` method.

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

#### library - method: `lowerCaseStr(str, replaceBy = "-")`
- Helper to convert a camelCase or PascalCase string to dash-case (by default).
- This method is useful with the native Element's `dataset` feature.

```typescript

// Simple tests.
lowerCaseStr("myLife") // "my-life"
lowerCaseStr("MyLife") // "-my-life"
lowerCaseStr("TEST") // "-t-e-s-t"

```

#### library - method: `camelCaseStr(str, splitter = "-")`
- Helper to convert a dash-case (by default) to a camelCase or PascalCase string.
- This method is useful with the native Element's `dataset` feature.

```typescript

// Simple tests.
camelCaseStr("my-life") // "myLife"
camelCaseStr("-my-life") // "MyLife"
camelCaseStr("-t-e-s-t") // "TEST"
camelCaseStr("---what---") // "What"

```
