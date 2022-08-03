/// <reference types="./functions.d.ts" />
/**
 * A function that always returns `false`.
 */
const alwaysFalse = (..._args) => false;
/**
 * A function that always returns `true`.
 */
const alwaysTrue = (..._args) => true;
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
const arrayEquality = (valuesEquality = strictEquality) => (a, b) => getLength(a) === getLength(b) && a.every((v, i) => valuesEquality(b[i], v));
/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
const callWith = (...args) => (f) => f(...args);
const composeUnsafe = (...operators) => source => pipeUnsafe(source, ...operators);
/**
 * Composes a series of unary functions.
 */
const compose = composeUnsafe;
/**
 * An updater function that returns the result of decrementing `x`.
 */
const decrement = (x) => x - 1;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
const decrementBy = (decr) => (x) => x - decr;
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};
const getLength = (arr) => arr.length;
const getOrRaise = () => (v) => isSome(v) ? v : raise();
/**
 * The identity function.
 *
 * @returns `v`
 */
const identity = (v) => v;
/**
 * A function that always returns `undefined`.
 */
const ignore = (..._args) => {
    return undefined;
};
/**
 * An updater function that returns the result of incrementing `x`.
 */
const increment = (x) => x + 1;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
const incrementBy = (incr) => (x) => x + incr;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
const isEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyEqualTo = (b) => a => a === b;
    return (b, options = { equality: strictEquality }) => {
        var _a;
        const equality = (_a = options.equality) !== null && _a !== void 0 ? _a : strictEquality;
        return equality === strictEquality
            ? isStrictlyEqualTo(b)
            : (a) => equality(a, b);
    };
})();
const isEmpty = (arr) => getLength(arr) === 0;
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
const isEven = (x) => x % 2 === 0;
/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
const isOdd = (x) => x % 2 !== 0;
/**
 * Returns true if `option` is `none`.
 */
const isNone = (option) => option === none;
/**
 * Returns true if `option` is not `none`.
 */
const isSome = (option) => option !== none;
/**
 * Applies logical negation to the value `v`.
 */
const negate = (v) => !v;
const newInstance = (Constructor, ...args) => new Constructor(...args);
/**
 * An alias for undefined.
 */
const none = undefined;
const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
/**
 * Pipes `source` through a series of unary functions.
 */
const pipeUnsafe = (source, ...operators) => operators.reduce(updateReducer, source);
/**
 * Pipes `source` through a series of unary functions.
 */
const pipe = pipeUnsafe;
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
const pipeLazy = (source, ...operators) => () => pipeUnsafe(source, ...operators);
/**
 * Throws a javascript error using the provided message.
 */
const raise = (message) => {
    if (message === undefined || typeof message === "string") {
        throw newInstance(Error, message);
    }
    else {
        throw message;
    }
};
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
const returns = (v) => (..._args) => v;
/**
 * The javascript strict equality function.
 */
const strictEquality = (a, b) => a === b;
/**
 * A function that returns the result of summing
 * it's arguments.
 */
const sum = (...args) => {
    let acc = 0;
    for (let i = 0; i < getLength(args); i++) {
        acc += args[i];
    }
    return acc;
};
/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
const updateReducer = (acc, updater) => updater(acc);
const { floor, max, min } = Math;

export { alwaysFalse, alwaysTrue, arrayEquality, callWith, compose, composeUnsafe, decrement, decrementBy, floor, forEach, getLength, getOrRaise, identity, ignore, increment, incrementBy, isEmpty, isEqualTo, isEven, isNone, isOdd, isSome, max, min, negate, newInstance, none, partial, pipe, pipeLazy, pipeUnsafe, raise, returns, strictEquality, sum, updateReducer };
