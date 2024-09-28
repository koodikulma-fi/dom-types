
// - Imports - //

// Local.
import { HTMLAttributes, HTMLAttributes_native, HTMLTags } from "./HTMLAttributes";
import { SVGAttributes, SVGAttributes_native, SVGTags } from "./SVGAttributes";


// - DOM - //

// DOM types: combining HTML and SVG.
export type DOMTags = HTMLTags | SVGTags;
export type DOMElement<Tag extends DOMTags = DOMTags> = Tag extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tag] : Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement | SVGElement;
export type DOMAttributes<Tag extends DOMTags = DOMTags, Other = never> = [Tag] extends [HTMLTags] ? HTMLAttributes<Tag> : [Tag] extends [SVGTags] ? SVGAttributes<Tag> : Other;
export type DOMAttributes_native<Tag extends DOMTags = DOMTags, Other = never> = [Tag] extends [HTMLTags] ? HTMLAttributes_native<Tag> : [Tag] extends [SVGTags] ? SVGAttributes_native<Tag> : Other;
export type DOMAttributesBy = { [Tag in DOMTags]: DOMAttributes<Tag>; };
export type DOMAttributesBy_native = { [Tag in DOMTags]: DOMAttributes_native<Tag>; };
