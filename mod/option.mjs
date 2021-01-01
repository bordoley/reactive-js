/// <reference types="./option.d.ts" />
/**
 * An alias for undefined.
 */
const none = undefined;
/**
 * Returns true if `option` is not `none`.
 */
const isSome = (option) => option !== none;
/**
 * Returns true if `option` is `none`.
 */
const isNone = (option) => option === none;
const map = (f) => value => isSome(value) ? f(value) : none;
/**
 * Returns a function that takes an `Option<T>`, returning it's value
 * if not `none`, otherwise returns the result of invoking the function `compute`.
 */
const orCompute = (compute) => (value) => value !== null && value !== void 0 ? value : compute();

export { isNone, isSome, map, none, orCompute };
