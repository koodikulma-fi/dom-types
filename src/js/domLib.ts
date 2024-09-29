
// - Imports - //

// Typing.
import { CSSProperties, FalseLike, ClassNameInput } from "../ts";


// - String - //

// Thanks to: https://stackoverflow.com/questions/24758284/how-to-change-camelcase-to-slug-case-or-kabob-case-via-regex-in-javascript
/**
 * - With "-" (default) as replaceBy, functions like this:
 *      * "testProp" => "test-prop"
 *      * "TestProp" => "-test-prop"
 *      * "TEST" => "-t-e-s-t"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `dataset.TestProp = true`  =>  `<div data--test-prop="true" />`
 */
export function decapitalizeString(str: string, replaceBy: string = "-"): string {
    return str.replace(/([A-Z])/g, replaceBy + "$1").toLowerCase();
}
/**
 * - With "-" (default) as splitter, functions like this:
 *      * "test-prop" => "testProp"
 *      * "-test-prop" => "TestProp"
 *      * "--test---prop" => "TestProp"
 * - This behaviour mirrors how element.dataset[prop] = value works. For example: `<div data--test-prop="true" />`  =>  `dataset.TestProp` // true
 */
export function recapitalizeString(str: string, splitter: string = "-"): string {
    return str.split(splitter).map((s, i) => s ? i ? s[0].toUpperCase() + s.slice(1) : s : "").join("");
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
 *      1. Single string: `Valid | FalseLike`
 *      2. Array or set: `Array<Valid | FalseLike> | Set<Valid | FalseLike>`
 *      3. Dictionary: `Record<Valid, any>`
 * - To use concatenated class name strings (eg. "bold italic"), you should:
 *      1. Declare a validator by: `const classNames: ValidateNames<ValidName> = classNames;`
 *      2. Then use it like this: `const okName = classNames("bold italic", ["bold"], {"italic": false, "bold": true})`;
 * 
 * ```

// - Basic JS usage - //

// Numeric and false-like are cut off ("", false, null, undefined).
classNames("a", "b", 0, undefined, [false, "c"], { d: true }); // "a b c d"
// Each string is splitted by " " and collected to a record, so duplicates are dropped easily.
classNames("a b", "b", "b b a a", ["b"], { a: true }); // "a b"
// Simulate some validation.
classNames("a", 1 && "b", ["b", 0 && "c"], { "d": true, "e": null }); // "a b d"
// If you input numbers other than 0, they are type guarded - guard stops at first fail.
classNames(0, 1, -1); // "", though note that 1 nor -1 won't be allowed by TS.


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
>(...classNames: Inputs): string {
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
export function collectNamesTo(names: Exclude<ClassNameInput, FalseLike>, record: Record<string, true>, stringSplitter: string = ""): void {
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


// - Comparison helpers - //

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
