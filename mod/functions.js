/// <reference types="./functions.d.ts" />

import { __DEV__ } from "./__internal__/constants.js";
import ReadonlyArray_getLength from "./containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
/**
 * A function that always returns `false`.
 */
export const alwaysFalse = (..._args) => false;
/**
 * A function that always returns `true`.
 */
export const alwaysTrue = (..._args) => true;
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
export const arrayEquality = (valuesEquality = strictEquality) => (a, b) => ReadonlyArray_getLength(a) === ReadonlyArray_getLength(b) &&
    a.every((v, i) => valuesEquality(b[i], v));
export const call = (f, self, ...args) => f.call(self, ...args);
/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
export const callWith = (...args) => (f) => f(...args);
export const composeUnsafe = (...operators) => source => pipeUnsafe(source, ...operators);
/**
 * Composes a series of unary functions.
 */
export const compose = composeUnsafe;
/**
 * An updater function that returns the result of decrementing `x`.
 */
export const decrement = (x) => x - 1;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export const decrementBy = (decr) => (x) => x - decr;
/**
 * The identity function.
 *
 * @returns `v`
 */
export const identity = (v) => v;
/**
 * A function that always returns `undefined`.
 */
export const ignore = (..._args) => { };
/**
 * An updater function that returns the result of incrementing `x`.
 */
export const increment = (x) => x + 1;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export const incrementBy = (incr) => (x) => x + incr;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
export const isEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyEqualTo = (b) => a => a === b;
    return (b, options = { equality: strictEquality }) => {
        var _a;
        const equality = (_a = options.equality) !== null && _a !== void 0 ? _a : strictEquality;
        return equality === strictEquality
            ? isStrictlyEqualTo(b)
            : (a) => equality(a, b);
    };
})();
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
export const isEven = (x) => x % 2 === 0;
export const isFalse = (v) => !v;
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (f) => typeof f === "function" || f instanceof Function;
export const isNumber = (n) => typeof n === "number";
export const isObject = (o) => typeof o === "object";
export const isString = (s) => typeof s === "string" || s instanceof String;
/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
export const isOdd = (x) => x % 2 !== 0;
/**
 * Returns true if `option` is `none`.
 */
export const isNone = (option) => option === none;
/**
 * Returns true if `option` is not `none`.
 */
export const isSome = (option) => option !== none;
export const isTrue = (v) => v;
/**
 * Applies logical negation to the value `v`.
 */
export const negate = (v) => !v;
export const newInstance = (Constructor, ...args) => new Constructor(...args);
/**
 * An alias for undefined.
 */
export const none = undefined;
export const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
/**
 * Pipes `source` through a series of unary functions.
 */
export const pipeUnsafe = (source, ...operators) => {
    let acc = source;
    const length = ReadonlyArray_getLength(operators);
    for (let i = 0; i < length; i++) {
        acc = operators[i](acc);
    }
    return acc;
};
/**
 * Pipes `source` through a series of unary functions.
 */
export const pipe = pipeUnsafe;
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export const pipeLazy = (source, ...operators) => () => pipeUnsafe(source, ...operators);
export const error = (message) => {
    const messageIsString = isString(message);
    const messageIsError = message instanceof Error;
    const errorMessage = messageIsString ? message : "";
    const errorCause = messageIsString && !messageIsError && isSome(message)
        ? {
            cause: message,
        }
        : none;
    return messageIsError
        ? message
        : newInstance(Error, errorMessage, errorCause);
};
export const errorWithWithDebugMessage = (message) => error(__DEV__ ? message : none);
export const raiseError = (e) => {
    throw e;
};
/**
 * Throws a javascript error using the provided message.
 */
export const raiseWithDebugMessage = (message) => raiseError(error(__DEV__ ? message : none));
export const raise = (e) => raiseError(error(e));
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
export const returns = (v) => (..._args) => v;
/**
 * The javascript strict equality function.
 */
export const strictEquality = (a, b) => a === b;
export function unsafeCast(_v) { }
