/**
 * Represents an unboxed value of type T or undefined.
 */
export type Option<T> = T | undefined;

/**
 * An alias for undefined.
 */
export const none = undefined;

/**
 * Returns true if `option` is not `none`.
 */
export const isSome = <T>(option: Option<T>): option is T => option !== none;

/**
 * Returns true if `option` is `none`.
 */
export const isNone = <T>(option: Option<T>): option is undefined =>
  option === none;

export const getOrDefault =
  <T>(v: T) =>
  (option: Option<T>): T =>
    isSome(option) ? option : v;
