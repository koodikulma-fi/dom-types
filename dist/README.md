
## WHAT

`dom-types` is a light weight library mostly containing typing for HTML & SVG attributes and CSS properties, but also a few related JS methods.

The types are provided in native naming as well as camelCase naming, and the related JS parsers included.

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

A couple of helper methods for reading and applying the type suggested features into/from DOM.
- `readDOMString(tag, domProps?, childrenContent?, readFromNode?) => string`
- `readDOMProps(node) => DOMCleanProps`
- `cleanDOMProps(uncleanProps) => DOMCleanProps`
- `equalDOMProps(aDomProps, bDomProps) => boolean`
- `applyDOMProps(domProps) => void`
- `createDOMElement(tag, checkByParentNode?, namespaceURI?) => HTMLElement | SVGElement | null`
- `isNodeSVG(node) => boolean`

And the core helper methods behind the scenes.
- `getDictionaryDiffs`
- `equalSubDictionaries`

A couple of helpers related to style, class names and the _camelCase -> native_ conversion.
- ...

---

## 1. TS TOOLS (doc)

## 2. JS TOOLS (doc)

### Library: `classNames`

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