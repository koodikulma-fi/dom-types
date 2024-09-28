
// - Common values - //

// Used for many attributes.
export type BoolOrStr = boolean | "true" | "false";
export type OrString = string & {};

// Unused.
// Thanks to: https://stackoverflow.com/questions/69159902/get-non-readonly-keys-of-object
/** See if the Key is readonly. */
export type IsReadOnlyKey<T, Key extends keyof T> = (<G>() => G extends Pick<T, Key> ? true : false) extends (<G>() => G extends Record<Key, T[Key]> ? true : false) ? false : true;

// Helpers.
export interface DataAttributes { [dataKey: `data-${string}`]: Record<string, any> | any[] | string | number | boolean | null | undefined; }
