
// - Helpers - //

/** False like JS values. */
export type FalseLike = "" | 0 | false | null | undefined | void;
/** Collect values of an iterable. */
export type IterableValues<T, Fallback = never> = T extends Iterable<infer R> ? R : Fallback;
// Thanks to: https://github.com/microsoft/TypeScript/pull/40336
/** Split a string into a typed array.
 * - Use with PropType to validate and get deep value types with, say, dotted strings.
 */
export type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
/** Split a string array by a string. */
export type SplitArr<S extends string[] | readonly string[], D extends string> = Split<S[number] & string, D>;


// - Simple validation - //

/** Type for className input.
 * - Represents what can be fed into the classNames or cleanNames methods with (Valid extends string):
 *     1. Single string: `Valid | FalseLike`
 *     2. Array, set or such: `Iterable<Valid | FalseLike>`
 *     3. Dictionary: `Record<Valid, any>`
 *     + If you want to use deeper validation use `ValidateNames<Valid>`
 */
export type ClassNameInput<Valid extends string = string, Nulls = FalseLike> = Valid | Nulls | Partial<Record<Valid, any>> | Iterable<Valid | Nulls>;


// - Algoritm: Class name validation - //

/** Typing tool for class name validation. The input can be:
 *    1. A string, either single or concatenated: "bold", "bold italic".
 *    2. An array of strings, similarly either single or concatenated: ["bold", "bold italic"].
 *    3. A record of string keys (where values are non-important for typing). Similarly short or long: { "bold": false, "bold italic": true }
 *    4. Anything else is accepted including "". This is to allow usage like: doHighlight && "highlight" (for strings or arrays). For objects used like: { "highlight": doHighlight }.
 * - Note that this returns either `string` (for valid strings), `Valid[]` or `any` (for valid objects & arrays), or `never` type (for failure).
 *   .. This is mostly because of whatever happens to work in practice in all the required scenarios.
 *   .. It's also because more detail is not required, and can then support mangling more flexible (while avoiding problems like circular constraints).
 * - Note that this functionality is paired with a javascript function's inner workings. (It will collect a valid class name out of the same input.)
 */
export type NameValidator<Valid extends any, Input> =
    // String - split with " " and check if the collection extends Valid[].
    [Input] extends [string] ? Split<Input, " "> extends Valid[] ? string : never :
    // Array - check each STRING VALUE inside and split it and check if extends Valid[]. (Other types are ignored.)
    [Input] extends [Array<any> | Readonly<Array<any>>] ? Input extends Valid[] ? Valid[] : SplitArr<Input, " "> extends Valid[] ? any : never :
    // Other iterables.
    [Input] extends [Iterable<any> | Readonly<Iterable<any>>] ? Input extends Iterable<Valid> ? Iterable<Valid> : Split<IterableValues<Input> & string, " "> extends Iterable<Valid> ? any : never :
    // Object - check each STRING KEY inside and split it and check if extends Valid[].
    [Input] extends [object] ? keyof Input extends Valid ? any : Split<keyof Input & string, " "> extends Valid[] ? any : never :
    // Otherwise allow anything.
    any;

/** Helper to validate class names (paired with a javascript function that actually supports handling: (...params: any[]) => string;
 * 1. First create a type for valid names, eg.: `type ValidNames = "bold" | "italic" | "underline" | "dimmed";
 * 2. Then define a shortcut for the validator with the ValidNames type: `const cleanNames: ValidateNames<ValidNames> = MixDOM.classNames;`.
 *      * You can use either: `classNames` or `cleanNames` as the JS side implementation.
 * 3. Then reuse the function for validation:
 *     a. For strings: `const okName = cleanNames("bold", "underline italic", false, "");` // => "bold underline italic"
 *     b. For iterables: `const okName = cleanNames(["underline", "dimmed italic", false, ""], [], undefined, ["bold"]);` // => "underline dimmed italic bold"
 *     c. For objects: `const okName = cleanNames({"bold": false, "dimmed italic": true}, null, {"underline": true });` // => "dimmed italic underline"
 * - You can also mix these freely: `const okName = cleanNames("bold", ["italic"], {"underline": false});`
 * - Note however, that the typing support is made for 10 arguments max. Anything after that uses a common type ...T[], so it will get buggy in various ways.
 * 
 * ```
 * 
 * // - Testing - //
 * 
 * // Prepare.
 * type ValidNames = "a" | "b";
 * const validate = classNames as ValidateNames<ValidNames>;
 * // const validate = cleanNames as ValidateNames<ValidNames>; // Works too.
 * 
 * // Do tests.
 * // .. These should not produce errors in typing.
 * validate(["a"]);
 * validate(["a", "b", ""]);
 * validate(["a", "b", "a b", "b a"], new Set(["a", "b a"]));
 * validate(["a", false, undefined, "b"]);
 * validate(["a", false, undefined, "b"] as const);
 * validate({"a": true, "b a": false});
 * validate({"a": true, "b a": false} as const);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * // .. These should fail each in typing, since "FAIL" is not part of ValidNames.
 * validate("FAIL");
 * validate(["FAIL"]);
 * validate({"FAIL": false});
 * validate(new Set(["a", "b", "FAIL"]));
 * validate("a", "a b", undefined, "FAIL", ["a", false]);
 * validate("a", "a b", undefined, ["a", "FAIL", false]);
 * validate(["a", "b", "a b", "FAIL", false]);
 * validate("a", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false, "FAIL": true});
 * validate("a", "FAIL", "a b", false, ["a"], ["b a", ""], undefined, {"a": true, "b a": false});
 * validate("a", "a b", false, ["a", "FAIL"], ["b a", ""], undefined, {"a": true, "b a": false});
 * 
 * ```
 */
export type ValidateNames<Valid extends string, Nulls = FalseLike> = <
    T1 extends NameValidator<Valid | Nulls, T1>,
    T2 extends NameValidator<Valid | Nulls, T2>,
    T3 extends NameValidator<Valid | Nulls, T3>,
    T4 extends NameValidator<Valid | Nulls, T4>,
    T5 extends NameValidator<Valid | Nulls, T5>,
    T6 extends NameValidator<Valid | Nulls, T6>,
    T7 extends NameValidator<Valid | Nulls, T7>,
    T8 extends NameValidator<Valid | Nulls, T8>,
    T9 extends NameValidator<Valid | Nulls, T9>,
    T10 extends NameValidator<Valid | Nulls, T10>,
    Tn extends NameValidator<Valid, Tn>
>(
    // Let's also provide suggestions with ClassNameInput.
    t1?: T1 | ClassNameInput<Valid, Nulls>,
    t2?: T2 | ClassNameInput<Valid, Nulls>,
    t3?: T3 | ClassNameInput<Valid, Nulls>,
    t4?: T4 | ClassNameInput<Valid, Nulls>,
    t5?: T5 | ClassNameInput<Valid, Nulls>,
    t6?: T6 | ClassNameInput<Valid, Nulls>,
    t7?: T7 | ClassNameInput<Valid, Nulls>,
    t8?: T8 | ClassNameInput<Valid, Nulls>,
    t9?: T9 | ClassNameInput<Valid, Nulls>,
    t10?: T10 | ClassNameInput<Valid, Nulls>,
    ...tn: Tn[]
) => string;
