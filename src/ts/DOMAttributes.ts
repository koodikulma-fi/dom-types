
// - Imports - //

// Local.
import { HTMLAttributes, HTMLAttributes_native, HTMLAttributesAny, HTMLAttributesAny_native, HTMLTags } from "./HTMLAttributes";
import { SVGAttributes, SVGAttributes_native, SVGAttributesAny, SVGAttributesAny_native, SVGTags } from "./SVGAttributes";


// - DOM tags and attributes - //

// Element.
export type DOMElement<Tag extends DOMTags = DOMTags> = DOMTags extends Tag ? HTMLElement | SVGElement : Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement | SVGElement;

// Tags.
export type DOMTags = HTMLTags | SVGTags;

// Attributes.
export type DOMAttributes<Tag extends string, Fallback = DOMAttributesAny> = [Tag] extends [HTMLTags] ? HTMLAttributes<Tag> : [Tag] extends [SVGTags] ? SVGAttributes<Tag> : Fallback;
export type DOMAttributes_native<Tag extends string, Fallback = DOMAttributesAny_native> = [Tag] extends [HTMLTags] ? HTMLAttributes_native<Tag> : [Tag] extends [SVGTags] ? SVGAttributes_native<Tag> : Fallback;
export type DOMAttributesBy = { [Tag in DOMTags]: DOMAttributes<Tag>; };
export type DOMAttributesBy_native = { [Tag in DOMTags]: DOMAttributes_native<Tag>; };

// Attributes without tag.
/** All the possible attributes that DOM elements (HTML or SVG) can have - in camelCase. */
export type DOMAttributesAny = HTMLAttributesAny & SVGAttributesAny;
/** All the possible attributes that DOM elements (HTML or SVG) can have - in native case. */
export type DOMAttributesAny_native = HTMLAttributesAny_native & SVGAttributesAny_native;
