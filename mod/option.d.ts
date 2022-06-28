/**
 * Represents an unboxed value of type T or undefined.
 */
declare type Option<T> = T | undefined;
/**
 * An alias for undefined.
 */
declare const none: undefined;
/**
 * Returns true if `option` is not `none`.
 */
declare const isSome: <T>(option: Option<T>) => option is T;
/**
 * Returns true if `option` is `none`.
 */
declare const isNone: <T>(option: Option<T>) => option is undefined;
declare const getOrDefault: <T>(v: T) => (option: Option<T>) => T;
export { Option, getOrDefault, isNone, isSome, none };
