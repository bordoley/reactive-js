import { Option } from "../util.mjs";
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
export { isNone, isSome, none };
