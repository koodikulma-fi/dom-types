
// - Imports - //

// Typing.
import { CSSProperties, PreClassName } from "../ts";


// - String - //

// Thanks to: https://stackoverflow.com/questions/24758284/how-to-change-camelcase-to-slug-case-or-kabob-case-via-regex-in-javascript
/**
 * - With "-" as replaceBy, functions like this: "testProp" => "test-prop", and "TestProp" => "-test-prop".
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `data.TestProp = true`   =>   `<div data--test-prop="true" />`
 */
export function decapitalizeString(str: string, replaceBy: string = ""): string {
    return str.replace(/([A-Z])/g, replaceBy + "$1").toLowerCase();
}
/**
 * - With "-" as splitter, functions like this: "test-prop" => "testProp", and "-test-prop" => "TestProp".
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `data.TestProp = true`   =>   `<div data--test-prop="true" />`
 */
export function recapitalizeString(str: string, splitter: string = ""): string {
    return str.split(splitter).map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join("");
}


// - HTML props - //

// Help from: https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object
/** Parse style string to a dictionary with camelCase keys. Value is string or undefined. */
export function parseDOMStyle(cssText: string, nullIfEmpty: true): CSSProperties | null;
export function parseDOMStyle(cssText: string, nullIfEmpty?: false): CSSProperties;
export function parseDOMStyle(cssText: string, nullIfEmpty?: boolean): CSSProperties | null;
export function parseDOMStyle(cssText: string, nullIfEmpty: boolean = false): CSSProperties | null {
    // Clean extra empty chars.
    const text = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ").trim();
    if (!text)
        return nullIfEmpty ? null : {};
    // Parse into statements by ";", and convert each to a tuple: [prop: string, val?: string].
    const pairs = text.split(";").map(o => {
        const i = o.indexOf(":");
        return i === -1 ? [o.trim()] : [o.slice(0, i).trim(), o.slice(i + 1).trim()];
    });
    // Loop the pairs to create a dictionary with camelCase keys.
    const style: CSSProperties = {};
    for (const [prop, val] of pairs)
        if (prop && val)
            style[prop.replace(/\W+\w/g, match => match.slice(-1).toUpperCase())] = (nullIfEmpty = false) || val; // Convert key to camelCase.
    return nullIfEmpty ? null : style;
}


// - Class names - //

/** Returns a string to be used as class name (with no duplicates and optional nested TypeScript verification).
 * - Each item in the classNames can be:
 *     1. ValidName (single className string),
 *     2. Array<ValidName>,
 *     3. Record<ValidName, any>.
 *     + If you want to use the validation only for Arrays and Records but not Strings, add 2nd parameter `string` to the type: `classNames<ValidName, string>`
 * - Unfortunately, the name validation inputted here only works for Array and Record types, and single strings.
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *     1. Declare a validator by: `const classNames: ValidateNames<ValidName> = classNames;`
 *     2. Then use it like this: `const okName = classNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 * 
 * ```
 * 
 * // - Basic JS usage - //
 * 
 * // Simple addition with duplication prevention and cutting false-like ("", 0, false, null, undefined).
 * classNames("a", "b", 0, undefined, [false, "b", "c"]); // "a b c"
 * // With long strings, duplicates can happen within - simply checks the new ones to be added.
 * classNames("a b", "b"); // "a b b"
 * // Simulate some validation.
 * classNames("a", 1 && "b", ["b", 0 && "c"], { "d": true, "e": null }); // "a b d"
 * 
 * 
 * // - Simple usage with typing - //
 * 
 * // Let's say only "a" and "b" are valid.
 * type Names = "a" | "b";
 * 
 * // Just try "a" and "b" separately.
 * classNames<Names>("a", "b", ["b", "a"]); // "a b"
 * classNames<Names>("a", "a b", ["a b"]); // This fails for "a b" since not valid.
 * // Let's allow anything as simple strings, so we can do "a b".
 * classNames<Names, string>("a", "a b", ["a b"]); // "a a b"
 * // We could use this pattern, if only has like 2 or 3 names. But not recommended.
 * classNames<Names, Names | `${Names} ${Names}`>("a", "a b"); // "a b"
 * 
 * 
 * // - For full validation use ValidateNames type - //
 * 
 * // Prepare.
 * type Names = "a" | "b";
 * const validate = classNames as ValidateNames<Names>;
 * 
 * // Do tests.
 * // .. These should not produce errors in typing.
 * validate(["a"]);
 * validate(["a", "b", ""]);
 * validate(["a", "b", "a b", "b a"]);
 * validate(["a", false, undefined, "b"]);
 * validate(["a", false, undefined, "b"] as const);
 * validate({"a": true, "b a": false});
 * validate({"a": true, "b a": false} as const);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validate("FAIL");
 * validate(["FAIL"]);
 * validate({"FAIL": false});
 * validate("a", "a b", undefined, "FAIL", ["a", false]);
 * validate("a", "a b", undefined, ["a", "FAIL", false]);
 * validate(["a", "b", "a b", "FAIL", false]);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false, "FAIL": true});
 * validate("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validate("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 * 
 * ```
 */
export function classNames<ValidNames extends string = string, SingleName extends string = ValidNames>(...classNames: Array<PreClassName<ValidNames, SingleName> | "" | false | 0 | null | undefined>): string {
    // Collect all to a dictionary.
    const record: Record<string, true> = {};
    for (const name of classNames)
        if (name)
            collectNamesTo(name, record, " ");
    // Return the valid keys joined by space - the collectNamesTo makes sure there's no duplicates nor empties.
    return Object.keys(record).join(" ");
}

/** Collects unique names as dictionary keys with value `true` for each found.
 * - The names are assumed to be:
 *      1. String (use stringSplitter),
 *      2. Iterable of string names, or an iterable of this type itself (recursively).
 *      3. Record where names are keys, values tells whether to include or not.
 */
export function collectNamesTo(names: PreClassName, record: Record<string, true>, stringSplitter: string = ""): void {
    // Note, this assumes names is not empty (especially not null or "").
    switch(typeof names) {
        // String, split by empty spaces.
        case "string": {
            if (stringSplitter) {
                for (const name of names.split(stringSplitter))
                    if (name)
                        record[name] = true;
            }
            else
                record[names] = true;
            break;
        }
        case "object": {
            // Dictionary like.
            if (names.constructor === Object) {
                for (const name in names as Record<string, any>)
                    if (name && names[name])
                        record[name] = true;
            }
            // Array like.
            else {
                // It's just a simple array - not recursive anymore, because the typing didn't work that nicely with deep stuff / recursion.
                // .. So we just iterate each, split by " " and collect.
                for (const cName of names as Iterable<string>) {
                    if (cName && typeof cName === "string") {
                        if (stringSplitter) {
                            for (const name of cName.split(stringSplitter))
                                if (name)
                                    record[name] = true;
                        }
                        else
                            record[cName] = true;
                    }
                }
                // for (const preName of names as Iterable<PreClassName>)
                //     if (preName)
                //         collectNamesTo(preName, record, stringSplitter);
            }
            break;
        }
    }
}

/** Get diffs in class names in the form of: Record<string, boolean>, where true means added, false removed, otherwise not included.
 * - Note. This process only checks for changes - it ignores changes in order completely.
 */
export function getClassNameDiffs(origName?: string, newName?: string): Record<string, boolean> | null {
    // Quick check.
    origName = origName || "";
    newName = newName || "";
    if (origName === newName)
        return null;
    // Prepare outcome.
    const origNames = origName.split(" ");
    const newNames = newName.split(" ");
    const diffs = {};
    // Removed.
    let did: null | boolean = null;
    if (origNames)
        for (const name of origNames) {
            if (name && (!newNames || newNames.indexOf(name) === -1))
                diffs[name] = did = false;
        }
    // Added.
    if (newNames)
        for (const name of newNames) {
            if (name && (!origNames || origNames.indexOf(name) === -1))
                diffs[name] = did = true;
        }
    // Return diffs if has any.
    return did !== null ? diffs : null;
}


// - Comparison helpers - //

/** Collect shallow differences in two dictionaries. Assumes first one is original and second are the updates (= the next state) of the dictionary. Returns `null` if no changes detected. */
export function getDictionaryDiffs<T extends Record<string, any>>(orig: Partial<T>, update: Partial<T>): Partial<T> | null {
    // Collect.
    const diffs: Partial<T> = {};
    let hasDiffs = false;
    // .. Deleted.
    for (const prop in orig) {
        const origValue = orig[prop];
        if (origValue !== undefined && update[prop] === undefined) {
            diffs[prop] = undefined;
            hasDiffs = true;
        }
    }
    // .. Added or changed.
    for (const prop in update) {
        const newValue = update[prop];
        if (orig[prop] !== newValue) {
            diffs[prop] = newValue;
            hasDiffs = true;
        }
    }
    return hasDiffs ? diffs : null;
}

/** Checks if both `a` and `b` contains the same property, which is presumably a dictionary, and if so whether the dictionaries are equal in the shallow sense. If not, returns false. */
export function equalSubDictionaries<Prop extends string>(a: Partial<Record<Prop, any>>, b: Partial<Record<Prop, any>>, prop: Prop): boolean {
    // At least `a` has the complex prop.
    if (a[prop]) {
        // But `b` doesn't have the complex prop.
        if (!b[prop])
            return false;
        // Compare complex data (as shallow dictionaries).
        const aData = a[prop];
        const bData = b[prop];
        // .. Added or changed.
        if (aData !== bData) {
            for (const p in bData) {
                if (aData[p] !== bData[p])
                    return false;
            }
            // .. Deleted.
            for (const p in aData) {
                if (bData[p] === undefined && aData[p] !== undefined)
                    return false;
            }
        }
    }
    // Only `b` has the prop.
    else if (b[prop])
        return false;
    // Are equal - neither had it, or both had it and were equal for shallow comparison.
    return true;
}


// - DOM - //

/** Creates a new HTML or SVG node - the tag should be in lowercase.
 * - Does not insert it the new node into parent, but only uses the parent to help determine whether should be SVG or HTML element.
 * - The namespaceURI defaults to: "http://www.w3.org/2000/svg".
 */
export function createElement(tag: string, checkByParentNode?: Node | null | undefined, namespaceURI?: string) {
    return tag === "svg" || checkByParentNode && checkByParentNode["ownerSVGElement"] !== undefined ?
        document.createElementNS(namespaceURI || "http://www.w3.org/2000/svg", tag) :
        document.createElement(tag);
}

/** Check if a node is SVG (using ownerSVGElement property on the SVGElement, not present for HTMLElement or basic Node). */
export function isNodeSVG(node: Node | null | undefined): boolean {
    return node && node["ownerSVGElement"] !== undefined || false;
}


// // - Imports - //
//
// // Typing.
// import { CSSProperties, PreClassName } from "../ts";
//
//
// // - Local constants - //
//
// const svgTags = {
//     a: "maybe", // It's almost like in HTML, but has that "xlink:href".
//     animate: true,
//     animateMotion: true,
//     animateTransform: true,
//     circle: true,
//     clipPath: true,
//     defs: true,
//     desc: true,
//     ellipse: true,
//     feBlend: true,
//     feColorMatrix: true,
//     feComponentTransfer: true,
//     feComposite: true,
//     feConvolveMatrix: true,
//     feDiffuseLighting: true,
//     feDisplacementMap: true,
//     feDistantLight: true,
//     feDropShadow: true,
//     feFlood: true,
//     feFuncA: true,
//     feFuncB: true,
//     feFuncG: true,
//     feFuncR: true,
//     feGaussianBlur: true,
//     feImage: true,
//     feMergeNode: true,
//     feMorphology: true,
//     feOffset: true,
//     fePointLight: true,
//     feSpecularLighting: true,
//     feSpotLight: true,
//     feTile: true,
//     feTurbulunece: true,
//     filter: true,
//     foreignObject: true,
//     g: true,
//     image: true,
//     line: true,
//     linearGradient: true,
//     marker: true,
//     mask: true,
//     metadata: true,
//     mpath: true,
//     path: true,
//     pattern: true,
//     polygon: true,
//     polyline: true,
//     radialGradient: true,
//     rect: true,
//     script: true,
//     set: true,
//     stop: true,
//     style: true,
//     svg: true,
//     switch: true,
//     symbol: true,
//     text: true,
//     textPath: true,
//     title: true,
//     tspan: true,
//     use: true,
//     view: true,
// } as const;
//
//
// // - Helpers - //
//
// /** Creates a new HTML or SVG node - the tag should be in lowercase.
//  * - Does not insert it the new node into parent, but only uses the parent to help determine whether should be SVG or HTML element.
//  * - The SVGNamespaceURI defaults to: "http://www.w3.org/2000/svg".
//  */
// export function createElement(tag: string, checkByParentNode?: Node | null | undefined, SVGNamespaceURI?: string) {
//     return tag === "svg" || checkByParentNode && checkByParentNode["ownerSVGElement"] !== undefined ?
//         document.createElementNS(SVGNamespaceURI || "http://www.w3.org/2000/svg", tag) :
//         document.createElement(tag);
// }
//
// /** Determine by tag and/or parentNode, whether should create an SVG or HTML element. Checks the explicitly always SVG tags, or otherwise parentNode's ownerSVGElement. */
// export function shouldBeSVG(kidTag: string, parentNode?: Node | null | undefined): boolean {
//     return svgTags[kidTag] === true || parentNode && parentNode["ownerSVGElement"] !== undefined || false;
//     // return kidTag === "svg" || parentNode && parentNode["ownerSVGElement"] !== undefined || false;
// }
//
// /** Check if a node is SVG. */
// export function isNodeSVG(node: Node | null | undefined): boolean {
//     return node && node["ownerSVGElement"] !== undefined || false;
// }
//
// /** The tag should be in lowercase. In case for "a" element, the answer depends on the given defaultAnswer, as it can reside on either side. */
// export function isTagSVG(tag: string, defaultAnswer: boolean = false): boolean {
//     return defaultAnswer ? !!svgTags[tag] : svgTags[tag] === true;
// }
//
// /** Check if is running in browser or not. Checks by document object. */
// export function isInBrowser(): boolean {
//     return document && typeof document === "object" || false;
// }
