
// - Imports - //

// Local.
import { CSSProperties } from "./CSSProperties";
import { GlobalEventHandler } from "./GlobalListeners";
import { DOMAttributes } from "./DOMAttributes";


// - DOM processing props - //

/** The type for unclean DOM props - before processing them to the main categories by functionality: `{ style, className, data, attributes, listeners }`. */
export interface DOMUncleanProps extends Record<string, any> {
    style?: CSSProperties | string;
    class?: string;
    className?: string;
    data?: Record<string, any>;
}

/** Type for clean DOM props.
 * - Represents the _total state_. For example, after creating a new element should apply all features here.
 * - To see type for _changes_ in the states, see `DOMDiffProps` type.
 */
export interface DOMCleanProps {
    /** Style in camelCase keys. Can apply directly with `element.style[prop] = value ?? null`.
     * - When value is null, the style property is removed.
     * - The `element.style[prop]` form supports both naming: eg. "backgroundColor" and "background-color".
     */
    style?: CSSProperties;
    /** Class name as a string. Use `className.split(" ")` to get each name. */
    className?: string;
    /** Data to be set with `element.dataset[prop] = value`. For example: `element.dataset.myKey = true` -> `<... data-my-key="true" />` */
    data?: Record<string, any>;
    /** Each value is in stringified form. None should be undefined, but if is, simply don't apply. */
    attributes?: Partial<Record<keyof DOMAttributes & string, string | undefined>>;
    /** Each value is a callback. None should be undefined, but if is, simply don't apply. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string, GlobalEventHandler | undefined>>;
}

/** Type for differences in the props. Should apply them to the existing element.
 * - All values are dictionaries.
 *      * The dictionaries only contain keys for _changes_ (against the previous state) - not the full state.
 *      * If any sub-value in the dictionary is undefined, should remove the feature, otherwise apply.
 *      * In case of class names, the value is `true` for adding a class, and `false` for removing.
 * - To see type for _total state_, see `DOMCleanProps` type.
 */
export interface DOMDiffProps {
    /** If no style, no changes in styles. If value in the dictionary is undefined means removed. */
    style?: CSSProperties;
    /** If no classNames, no changes in class names. The keys are class names: for each, if true class name was added, if false name was removed. */
    classNames?: Record<string, boolean>;
    /** If no data, no changes in data attribute. If value in the dictionary is undefined means removed: eg. `delete element.dataSet.myKey`. */
    data?: Record<string, any>;
    /** If no attributes, no changes in general attributes. If value in the dictionary is undefined means removed: eg. `element.removeAttribute(attr)`. Otherwise apply: `element.setAttribute(attr, val)`. */
    attributes?: Record<string, any>;
    /** If no listeners, no changes in listeners. If value in the dictionary is undefined means removed: eg. `element.removeEventListener(name, callback)`. Otherwise apply: `element.addEventListener(name, callback)`. */
    listeners?: Partial<Record<keyof GlobalEventHandlersEventMap & string, GlobalEventHandler | undefined>>;
}


// - Abstract DOM tree modelling - //

/** A base type for a definition of a state, that can contain dom information (if the tag is a string). */
export interface DOMDef {
    /** The tag of the thing to render. Typically a string for DOM related features, like "div". For complex, it's likely a function or a class. */
    tag: any;
    /** If wanting to insert simple content, or an external node inside. */
    domContent?: string | number | Node | null;
    /** If wanting to apply props to a foreign element. */
    domElement?: Element | null;
}
/** A base type for a tree hierarchy for DOM-grounded defs.
 * - Each tree node can contain other tree nodes as `children`.
 * - Each tree node should have a "def" referring to DOMDef, `{ tag, domContent?, domElement? }`.
 * - Each tree node can have "domProps" if related to dom.
 */
export interface DOMTreeNode {
    /** Any child DOMTreeNodes. Used to form a clean nested tree structure (no cyclical references - or the tree goes forever). */
    children?: DOMTreeNode[];
    /** Render definition that ultimately produced this tree node. */
    def?: DOMDef;
    /** The applied domProps. Useful for comparing against last state. Should be updated after applying the props to the DOM. */
    domProps?: DOMCleanProps;
}
