// Common typing.
export * from "./core";     // Excluding methods.
export * from "./js";       // Only methods.
// Global listeners in both cases.
export { GlobalListeners as GlobalListeners_native } from "./native";
export { GlobalListeners as GlobalListeners_camelCase } from "./camelCase";
// Global listeners in both cases.
export { ARIAAttributes as ARIAAttributes_native } from "./native";
export { ARIAAttributes as ARIAAttributes_camelCase } from "./camelCase";
// HTML attributes in both cases.
export { HTMLAttributes as HTMLAttributes_native, HTMLAttributesAny as HTMLAttributesAny_native, HTMLAttributesBy as HTMLAttributesBy_native, HTMLGlobalAttributes as HTMLGlobalAttributes_native } from "./native";
export { HTMLAttributes as HTMLAttributes_camelCase, HTMLAttributesAny as HTMLAttributesAny_camelCase, HTMLAttributesBy as HTMLAttributesBy_camelCase, HTMLGlobalAttributes as HTMLGlobalAttributes_camelCase } from "./camelCase";
// SVG attributes in both cases.
export { SVGAttributes as SVGAttributes_native, SVGAttributesAny as SVGAttributesAny_native, SVGAttributesBy as SVGAttributesBy_native, SVGGlobalAttributes as SVGGlobalAttributes_native } from "./native";
export { SVGAttributes as SVGAttributes_camelCase, SVGAttributesAny as SVGAttributesAny_camelCase, SVGAttributesBy as SVGAttributesBy_camelCase, SVGGlobalAttributes as SVGGlobalAttributes_camelCase } from "./camelCase";
// DOM attributes in both cases.
export { DOMAttributes as DOMAttributes_native, DOMAttributesAny as DOMAttributesAny_native, DOMAttributesBy as DOMAttributesBy_native } from "./native";
export { DOMAttributes as DOMAttributes_camelCase, DOMAttributesAny as DOMAttributesAny_camelCase, DOMAttributesBy as DOMAttributesBy_camelCase } from "./camelCase";
