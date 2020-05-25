import { Factory, Function1 } from "./functions.ts";

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

/**
 * Returns a function that takes an `Option<T>`, returning it's value
 * if not `none`, otherwise returns the result of invoking the function `compute`.
 */
export const orCompute = <T>(compute: Factory<T>): Function1<Option<T>, T> => (
  value: Option<T>,
) => value ?? compute();
