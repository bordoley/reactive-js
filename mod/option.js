'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
/**
 * Returns a function that takes an `Option<T>`, returning it's value
 * if not `none`, otherwise returns the result of invoking the function `compute`.
 */
const orCompute = (compute) => (value) => value !== null && value !== void 0 ? value : compute();

exports.isNone = isNone;
exports.isSome = isSome;
exports.none = none;
exports.orCompute = orCompute;
