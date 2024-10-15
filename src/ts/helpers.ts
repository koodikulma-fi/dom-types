
// - Common helpers - //

// Used for many attributes.
export type BoolOrStr = boolean | "true" | "false";
export type AnyString = string & {};
export type InheritInitial = "inherit" | "initial";
// export type InheritInitialRevUnset = InheritInitial | "revert" | "revert-layer" | "unset";

// Unused.
// Thanks to: https://stackoverflow.com/questions/69159902/get-non-readonly-keys-of-object
/** See if the Key is readonly. */
export type IsReadOnlyKey<T, Key extends keyof T> = (<G>() => G extends Pick<T, Key> ? true : false) extends (<G>() => G extends Record<Key, T[Key]> ? true : false) ? false : true;

// Helpers.
/** Exclude methods and property functions from an object like. */
export type GetMethodKeys<T> = {[Key in keyof T]: T[Key] extends Function ? Key : never; }[keyof T];
