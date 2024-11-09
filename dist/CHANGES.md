# CHANGES

---

## v1.1.2 (2024-11-10)

- Removed the extra arguments referring to the constants in the methods (for clarity and simplicity).
- Fixed `readDOMString` to read attributes correctly when using the optional 4th arg `readFromNode`.
- Refined support for special attributes with two constants: `domDirectAttributes` and `domFalseStrAttributes`.
    * Refined support for boolean like attributes (eg. "disabled", "hidden"): Any false or empty like values or strings result in removing the attribute, while anything else is applied normally.
    * Refined that `value` attribute is always applied directly, not through `element.setAttribute`.
    * The constants are added as extra arguments on the `applyDOMProps` method.

---

## v1.1.1 (2024-10-31)

- Exported a few internal types to allow smoother building process in certain cases.
- Added constant `domSelfClosingTags` (for external use).
- Added a couple more listeners and refines listener typing.

---

## v1.1.0 (2024-10-15)

### Reorganized bundling
- The library now contains sub modules, that are useful two reasons:
    1. If only wants to import typing, not JS side.
    2. To unify and shorten the type naming: instead of `import { HTMLAttributes_native } from "dom-types"`, use `import { HTMLAttributes } from "dom-types/native"`.
- The available sub modules are:
    - `"core"`: The common core attributes. Only contains typing (no JS) - used in all modules.
    - `"camelCase"`: All types using camelCase naming. Includes attributes, listeners, CSSProperties and such - but no JS side.
    - `"native"`: All types using native naming. Like camelCase, includes all types but no JS side (nor JS func declarations).
    - `"js"`: If only wanting to import the JS side with core typing. Not caring about types for `HTMLAttributes`, `SVGAttributes`, `DOMAttributes` and their variants.
- The main module (`"dom-types"`) is changed in that the camelCase related types now have "_camelCase" ending, just like the native attributes.
    - In other words, "dom-types" main module no longer exports `HTMLAttributes` (and its variants) as the camelCase default, but instead exports `HTMLAttributes_camelCase`. Same for SVG and DOM.
