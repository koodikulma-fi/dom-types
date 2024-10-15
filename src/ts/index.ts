
// - Export common - //

// Standalone.
export * from "./index_core";


// - Export native and camelCase - //

// Requires commonDOM.
export { GlobalListeners as GlobalListeners_camelCase } from "./index_camelCase";
export { GlobalListeners as GlobalListeners_native } from "./index_native";

// Requires ARIAAttributes, GlobalListeners, core/HTMLAttributes.
export { HTMLAttributes as HTMLAttributes_camelCase, HTMLAttributesAny as HTMLAttributesAny_camelCase, HTMLAttributesBy as HTMLAttributesBy_camelCase, HTMLGlobalAttributes as HTMLGlobalAttributes_camelCase } from "./index_camelCase";
export { HTMLAttributes as HTMLAttributes_native, HTMLAttributesAny as HTMLAttributesAny_native, HTMLAttributesBy as HTMLAttributesBy_native, HTMLGlobalAttributes as HTMLGlobalAttributes_native } from "./index_native";

// Requires ARIAAttributes, GlobalListeners, core/SVGAttributes (+ HTMLAttributes for "a").
export { SVGAttributes as SVGAttributes_camelCase, SVGAttributesAny as SVGAttributesAny_camelCase, SVGAttributesBy as SVGAttributesBy_camelCase, SVGGlobalAttributes as SVGGlobalAttributes_camelCase } from "./index_camelCase";
export { SVGAttributes as SVGAttributes_native, SVGAttributesAny as SVGAttributesAny_native, SVGAttributesBy as SVGAttributesBy_native, SVGGlobalAttributes as SVGGlobalAttributes_native } from "./index_native";

// Requires HTMLAttributes, SVGAttributes.
export { DOMAttributes as DOMAttributes_camelCase, DOMAttributesAny as DOMAttributesAny_camelCase, DOMAttributesBy as DOMAttributesBy_camelCase } from "./index_camelCase";
export { DOMAttributes as DOMAttributes_native, DOMAttributesAny as DOMAttributesAny_native, DOMAttributesBy as DOMAttributesBy_native } from "./index_native";
