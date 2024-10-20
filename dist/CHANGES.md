# CHANGES

## v1.1.1 (2024-10-20)

- Exported a few internal types to allow smoother building process in certain cases.
- Added constant `domSelfClosingTags` (for external use).

---

## v1.1.0

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
