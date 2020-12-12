import { Function1, Factory } from './functions';

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
declare const map: <TA, TB>(f: Function1<TA, TB>) => Function1<Option<TA>, Option<TB>>;
/**
 * Returns a function that takes an `Option<T>`, returning it's value
 * if not `none`, otherwise returns the result of invoking the function `compute`.
 */
declare const orCompute: <T>(compute: Factory<T>) => Function1<Option<T>, T>;

export { Option, isNone, isSome, map, none, orCompute };
