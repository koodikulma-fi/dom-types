
// - Imports - //

// Typing.
import { CSSProperties, PreClassName } from "../ts";


// - Local constants - //

const complexDomProps = {
    style: true,
    data: true
} as const;


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

/** Inlined comparison method specialized into domProps (attributes of a dom element). */
export function equalDOMProps(a: Record<string, any>, b: Record<string, any>): boolean {
    // Handle complex properties.
    for (const prop in complexDomProps) {
        // .. At least a has the complex prop.
        if (a[prop]) {
            // But b has no the complex prop.
            if (!b[prop])
                return false;
            // Compare complex data (as shallow dictionaries).
            const aData = a[prop];
            const bData = b[prop];
            // .. Added or changed.
            if (aData !== bData) {
                for (const prop in bData) {
                    if (aData[prop] !== bData[prop])
                        return false;
                }
                // .. Deleted.
                for (const prop in aData) {
                    if (bData[prop] === undefined && aData[prop] !== undefined)
                        return false;
                }
            }
        }
        // .. Only b has style.
        else if (b[prop])
            return false;
    }
    // All else.
    // .. Added or changed.
    for (const prop in b) {
        if (a[prop] !== b[prop] && !complexDomProps[prop])
            return false;
    }
    // .. Deleted.
    for (const prop in a) {
        if (b[prop] === undefined && a[prop] !== undefined && !complexDomProps[prop])
            return false;
    }
    return true;
}


// - HTML props - //

/** Clean the given DOM properties.
 * - Handles "style" separately supporting string vs. dictionary, combines to a dictionary with camelCase names. (Does not clean existing styles dictionary.)
 * - Combines "class" and "className" to "className".
 * - Cleans "aria" related: eg. "ariaAutoComplete" becomes "aria-autocomplete".
 * - However, does _not_ rename listeners - since they are anyway detected separately in the flow.
 */
export function cleanDOMProps<Props extends Record<string, any> & { class?: string; className?: string; style?: string | CSSProperties; } = {}>(origProps: Props, copy?: boolean): Omit<Props, "class" | "style"> & (Props["style"] extends {} | string ? { style: CSSProperties; } : { style?: CSSProperties; }) {
    // Copy.
    const props = copy ? { ...origProps } : origProps;
    // Class.
    if (props.class)
        props.className = props.className ? props.class + " " + props.className : props.class;
    delete props.class;
    // Style.
    if (typeof props.style === "string")
        props.style = parseDOMStyle(props.style);
    // Attributes.
    for (const prop in props) {
        if (prop.startsWith("aria") && !prop.startsWith("aria-")) {
            // It's okay to mutate the dictionary while looping it - at least with not-natural-number like keys.
            (props as Record<string, any>)["aria-" + prop.slice(4).toLowerCase()] = props[prop];
            delete props[prop];
        }
    }
    // Return cleaned.
    return props as any;
}

// Help from: https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object
/** Parse style string to a dictionary with camelCase keys. Value is string or undefined. */
export function parseDOMStyle(cssText: string): CSSProperties {
    // Clean extra empty chars.
    const text = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ").trim();
    if (!text)
        return {};
    // Parse into statements by ";", and convert each to a tuple: [prop: string, val?: string].
    const pairs = text.split(";").map(o => {
        const i = o.indexOf(":");
        return i === -1 ? [o.trim()] : [o.slice(0, i).trim(), o.slice(i + 1).trim()];
    });
    // Loop the pairs to create a dictionary with camelCase keys.
    const style: CSSProperties = {};
    for (const [prop, val] of pairs)
        if (prop)
            style[prop.replace(/\W+\w/g, match => match.slice(-1).toUpperCase())] = val; // Convert key to camelCase, value is a string or undefined.
    return style;
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
 * - Note. This process only checks for changes - it ignores changes in order completely. */
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
