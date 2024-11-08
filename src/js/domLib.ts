
// - Imports - //

// Typing.
import type { CSSProperties, FalseLike, ClassNameInput } from "../ts";


// - String helpers - //

// Thanks to: https://stackoverflow.com/questions/24758284/how-to-change-camelcase-to-slug-case-or-kabob-case-via-regex-in-javascript
/**
 * - With "-" (default) as delimiter, functions like this:
 *      * "testProp" => "test-prop"
 *      * "TestProp" => "-test-prop"
 *      * "TEST" => "-t-e-s-t"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `dataset.TestProp = true`  =>  `<div data--test-prop="true" />`
 */
export function lowerCaseStr(str: string, delimiter: string = "-"): string {
    return str.replace(/([A-Z])/g, delimiter + "$1").toLowerCase();
}
/**
 * - With "-" (default) as splitter, functions like this:
 *      * "test-prop" => "testProp"
 *      * "-test-prop" => "TestProp"
 *      * "--test---prop" => "TestProp"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `<div data--test-prop="true" />`  =>  `dataset.TestProp` // true
 */
export function camelCaseStr(str: string, splitter: string = "-"): string {
    return str.split(splitter).map((s, i) => s ? i ? s[0].toUpperCase() + s.slice(1) : s : "").join("");
}

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

// /** Escapes `&`, `<` and `>` characters with `&amp;`, `&lt;` and `&gt;` respectively. Only escapes `&` once. */
// export function escapeAmpTags(htmlStr: string): string {
//     return htmlStr.replace(/\&(?!(\w+;))/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// }
//
// /** Escapes `"` and `'` characters with `&quot;` and `&#39;` respectively. Useful for escaping strings inside HTML attributes. */
// export function escapeQuotes(attrStr: string): string {
//     return attrStr.replace(/"/g, "&quot").replace(/'/g, "&#39");
// }


// - Class names - //

/** Returns a clean string without duplicates to be used as class name (with optional nested TypeScript verification).
 * - Note. If you don't care about duplicates, use `classNames` instead.
 *      * For optimal nested processing (eg. in a component structure), it's recommended to use `classNames` on the extending layers and `cleanNames` only at the last step.
 * - Each item in the cleanNames can be:
 *      1. Single string: `Valid | FalseLike`
 *      2. Array or set: `Array<Valid | FalseLike> | Set<Valid | FalseLike>`
 *      3. Dictionary: `Record<Valid, any>`
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *      1. Declare a validator by: `const validNames: ValidateNames<ValidName> = cleanNames;`
 *      2. Then use it like this: `const okName = validNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 * 
 * ```
 * 
 * // - Basic JS usage - //
 * 
 * // Numeric and false-like are cut off ("", false, null, undefined).
 * cleanNames("a", "b", 0, undefined, [false, "c"], { d: true }); // "a b c d"
 * // Each string is splitted by " " and collected to a record, so duplicates are dropped easily.
 * cleanNames("a b", "b", "b b a a", ["b"], new Set(["b"]), { a: true }); // "a b"
 * // Simulate some validation.
 * cleanNames("a", 1 && "b", ["b", 0 && "c"], { "b d": true, "e": null }); // "a b d"
 * // If you input numbers other than 0, they are type guarded - guard stops at first fail.
 * cleanNames(0, 1, -1); // "", though note that 1 nor -1 won't be allowed by TS.
 * 
 * 
 * // - Simple usage with typing - //
 * 
 * // Let's define our valid names.
 * type Names = "a" | "b";
 * 
 * // Just try "a" and "b" separately.
 * cleanNames<Names>("a", "b", ["b", "a"], { a: true }); // "a b"
 * cleanNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
 * cleanNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
 * // Let's allow any string, but still use suggestions.
 * cleanNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a b c", won't suggest "c" but allows it.
 * // We could also use this pattern for some very specific cases - though, get type heavy quickly.
 * cleanNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a b", would not allow "a b b"
 * 
 * 
 * // - For full concatenated validation use ValidateNames type - //
 * 
 * // Prepare.
 * const validNames = cleanNames as ValidateNames<Names>;
 * 
 * // Do tests. All below output "a b".
 * // .. These should not produce errors in typing.
 * validNames(["a"], { b: true });
 * validNames(["a", "b", ""]);
 * validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validNames(["a", false, undefined, "b"]);
 * validNames(["a", false, undefined, "b"] as const);
 * validNames({"a": true, "b a": false});
 * validNames({"a": true, "b a": false} as const);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validNames("FAIL");
 * validNames(["FAIL"]);
 * validNames({"FAIL": false});
 * validNames(new Set(["a", "b", "FAIL"]));
 * validNames("a", "a b", undefined, "FAIL", ["a", false]);
 * validNames("a", "a b", undefined, ["a", "FAIL", false]);
 * validNames(["a", "b", "a b", "FAIL", false]);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
 * validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 * 
 * ```
 */
export function cleanNames<
    // Type argument.
    ValidNames extends string = string,
    // Local variable - let's allow 20 name args.
    Inputs extends ClassNameInput<string>[] = [
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
    ]
>(...names: Inputs): string {
    // Collect all to a dictionary.
    const record: Record<string, true> = {};
    for (const name of names)
        if (name)
            collectKeysTo(record, name, " ");
    // Return the valid keys joined by space - the collectKeysTo makes sure there's no duplicates nor empties.
    return Object.keys(record).join(" ");
}

/** Returns a string to be used as class name (with optional nested TypeScript verification) without removing duplicates.
 * - Note. If you want to remove any duplicates, use `cleanNames` instead.
 *      * For optimal nested processing (eg. in a component structure), it's recommended to use `classNames` on the extending layers and `cleanNames` only at the last step.
 * - Each item in the classNames can be:
 *      1. Single string: `Valid | FalseLike`
 *      2. Array or set: `Array<Valid | FalseLike> | Set<Valid | FalseLike>`
 *      3. Dictionary: `Record<Valid, any>`
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *      1. Declare a validator by: `const validNames: ValidateNames<ValidName> = classNames;`
 *      2. Then use it like this: `const okName = validNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 * 
 * ```
 * 
 * // - Basic usage - //
 * 
 * // Simply concats the strings with " " as the joiner.
 * classNames(true && "a", 1 && "b", false && "c", null, undefined, 0); // "a b"
 * classNames("a b", ["c", "d e", false], {"f g": true, h: false});     // "a b c d e f g"
 * 
 * // But doesn't remove duplicates.
 * classNames("a b", "a", ["a", "b"], {a: false, "a b": true});         // "a b a a b a b"
 * 
 * 
 * // - Simple usage with typing - //
 * 
 * // Let's define our valid names.
 * type Names = "a" | "b";
 * 
 * // Just try "a" and "b" separately.
 * classNames<Names>("a", "b", ["b", "a"], new Set(["b"]), { a: true }); // "a b b a b a"
 * classNames<Names>("a", "b", ["b", "a"], { a: true }, "c"); // Type guards against "c"
 * classNames<Names>("a", "a b", "b", ["a b"]); // Type guards against "a b".
 * // Let's allow any string, but still use suggestions.
 * classNames<Names | string & {}>("a", "a b", ["a b"], "c"); // "a a b a b c", won't suggest "c" but allows it.
 * // We could also use this pattern for some very specific cases - though, get type heavy quickly.
 * classNames<Names | `${Names} ${Names}`>("a", "a b", ["a b"]); // "a a b a b", would not allow "a b b"
 * 
 * 
 * // - For full concatenated validation use ValidateNames type - //
 * 
 * // Prepare.
 * const validNames = classNames as ValidateNames<Names>;
 * 
 * // Do tests. All below output "a b".
 * // .. These should not produce errors in typing.
 * validNames(["a"], { b: true });
 * validNames(["a", "b", ""]);
 * validNames(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validNames(["a", false, undefined, "b"]);
 * validNames(["a", false, undefined, "b"] as const);
 * validNames({"a": true, "b a": false});
 * validNames({"a": true, "b a": false} as const);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, { "a": true, "b a": false });
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validNames("FAIL");
 * validNames(["FAIL"]);
 * validNames({"FAIL": false});
 * validNames(new Set(["a", "b", "FAIL"]));
 * validNames("a", "a b", undefined, "FAIL", ["a", false]);
 * validNames("a", "a b", undefined, ["a", "FAIL", false]);
 * validNames(["a", "b", "a b", "FAIL", false]);
 * validNames("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "FAIL": true, "b a": false});
 * validNames("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validNames("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 * 
 * 
 * ```
 */
export function classNames<
    // Type argument.
    ValidNames extends string = string,
    // Local variable - let's allow 20 name args.
    Inputs extends ClassNameInput<string>[] = [
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
        ClassNameInput<ValidNames>?,
    ]
>(...names: Inputs): string {
    // Just concat all.
    let str = "";
    for (const name of names) {
        if (!name)
            continue;
        if (typeof name === "string")
            str += " " + name;
        else if (name[Symbol.iterator] && typeof name[Symbol.iterator] === "function")
            str += " " + [...name as Iterable<any>].filter(n => n).join(" ");
        else if (name && typeof name === "object")
            str += " " + Object.keys(name).filter(n => name[n]).join(" ");
    }
    // Remove the initial empty and remove any double spaces.
    return str.trimStart().replace(/\s+/g, " ");
}

/** Get diffs in class names in the form of: Record<string, boolean>, where true means added, false removed, otherwise not included.
 * - Note. This process only checks for name changes - it ignores changes in _order_ completely.
 * 
 * ```
 * 
 * // Common usage with " " as splitter.
 * getNameDiffs("", "a")            // { a: true }
 * getNameDiffs("a", "")            // { a: false }
 * getNameDiffs("a b", "a b c")     // { c: true }
 * getNameDiffs("a b c", "a b")     // { c: false }
 * getNameDiffs("c b a a a", "a b b   b c e"); // { e: true }
 * 
 * // Testing other splitters.
 * getNameDiffs("a.b", "a.b.c", ".")    // { c: true }
 * getNameDiffs("a.b", "a.b c", ".")    // { "b c": true }
 * getNameDiffs("a", "b c", "");       // { a: false, "b c": true }
 * 
 * ```
 */
export function getNameDiffs(origName?: string, newName?: string, splitter: string = " "): Record<string, boolean> | null {
    // Quick check.
    origName = origName || "";
    newName = newName || "";
    if (origName === newName)
        return null;
    // Prepare outcome.
    const origNames = splitter ? origName.split(splitter) : [origName];
    const newNames = splitter ? newName.split(splitter) : [newName];
    const diffs = {};
    // Removed.
    let did: null | boolean = null;
    if (origNames)
        for (const name of origNames) {
            if (name && (!newNames || !newNames.includes(name)))
                diffs[name] = did = false;
        }
    // Added.
    if (newNames)
        for (const name of newNames) {
            if (name && (!origNames || !origNames.includes(name)))
                diffs[name] = did = true;
        }
    // Return diffs if has any.
    return did !== null ? diffs : null;
}

/** Collects unique names as dictionary keys with value `true` for each found.
 * - The names are assumed to be:
 *      1. String,
 *      2. Iterable of string names, or an iterable of this type itself (recursively).
 *      3. Record where names are keys, values tells whether to include or not.
 * - All three forms use the keySplitter paramter to split the given/resulting string.
 *      * However, if the keySplitter is an empty string ("", default): then uses directly.
 * 
 * ```
 * 
 * // Prepare a collection.
 * const collection: Record<string, true> = {};
 * 
 * // Let's use it with a string splitter for " ".
 * const splitter = " ";
 * collectKeysTo(collection, "a b", splitter);     // Adds { a: true, b: true }
 * collectKeysTo(collection, ["b c"], splitter);   // Adds { c: true }
 * collectKeysTo(collection, {                     // Adds { d: true, e: true }
 *      "c d": true,
 *      e: true,
 *      f: false
 * }, splitter);
 * // .. Testing empty. Won't add anything - regardless of what the keySplitter is.
 * collectKeysTo(collection, "");
 * collectKeysTo(collection, [""], " ");
 * collectKeysTo(collection, {"": true}, "");
 * 
 * // Test the claims.
 * collection;  // { a: true, b: true, c: true, d: true, e: true }
 * 
 * ```
 */
export function collectKeysTo(record: Record<string, true>, keyLikes: Exclude<ClassNameInput, FalseLike>, keySplitter: string = ""): void {
    // Note, this assumes names is not empty (especially not null or "").
    switch(typeof keyLikes) {
        // String, split by empty spaces.
        case "string": {
            for (const k of (keySplitter ? keyLikes.split(keySplitter) : [keyLikes]))
                if (k)
                    record[k] = true;
            break;
        }
        case "object": {
            // Array like.
            if (keyLikes[Symbol.iterator] && typeof keyLikes[Symbol.iterator] === "function") {
                // It's just a simple array - not recursive anymore, because the typing didn't work that nicely with deep stuff / recursion.
                // .. So we just iterate each, split by " " and collect.
                for (const key of keyLikes as Iterable<string>) {
                    if (key && typeof key === "string") {
                        for (const k of (keySplitter ? key.split(keySplitter) : [key]))
                            if (k)
                                record[k] = true;
                    }
                }
            }
            // Dictionary like.
            else {
                for (const key in keyLikes as Record<string, any>)
                    if (key && keyLikes[key]) {
                        for (const k of (keySplitter ? key.split(keySplitter) : [key]))
                            if (k)
                                record[k] = true;
                    }
            }
            break;
        }
    }
}


// - Dictionary comparison helpers - //

/** Collect shallow differences in two dictionaries. Assumes first one is original and second are the updates (= the next state) of the dictionary. Returns `null` if no changes detected. */
export function getDictionaryDiffs<T extends Record<string, any>>(orig: Partial<T>, update: Partial<T>): Partial<T> | null {
    // Collect.
    const diffs: Partial<T> = {};
    let hasDiffs = false;
    // .. Deleted.
    for (const prop in orig) {
        const origValue = orig[prop];
        if (origValue !== undefined && update[prop] === undefined)
            diffs[prop] = (hasDiffs = true) && undefined;
    }
    // .. Added or changed.
    for (const prop in update) {
        const newValue = update[prop];
        if (orig[prop] !== newValue)
            diffs[prop] = (hasDiffs = true) && newValue;
    }
    return hasDiffs ? diffs : null;
}

/** Checks if sub dictionaries in both `a` and `b` are equal.
 * - In case a sub dictionary is false-like for one, and empty dictionary for other {}, regards them as equal.
 *      * For example, `equalSubDictionaries({ test: {} }, {}, "test")` returns true.
 *      * But `equalSubDictionaries({ test: { me: true } }, {}, "test")` returns false.
 */
export function equalSubDictionaries<Prop extends string>(a: Partial<Record<Prop, any>>, b: Partial<Record<Prop, any>>, ...props: Prop[]): boolean {
    // Loop given props.
    for (const prop of props) {
        // Neither has.
        if (!a[prop] && !b[prop])
            continue;
        // Either or both have.
        const aData = a[prop] || {} as Object;
        const bData = b[prop] || {} as Object;
        if (aData === bData)
            continue;
        // Check that each property in aData that is identical to those in bData.
        // .. In case aData[p] is undefined, we don't care if bData actually has the property or not.
        for (const p in aData) {
            if (bData[p] !== aData[p])
                return false;
        }
        // Check the same for bData.
        for (const p in bData) {
            if (aData[p] !== bData[p])
                return false;
        }
    }
    // Equal for all given props.
    return true;
}
