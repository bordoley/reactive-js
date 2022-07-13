/// <reference types="./Option.d.ts" />
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

export { isNone, isSome, none };
