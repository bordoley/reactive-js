/// <reference types="./functions.d.ts" />
/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
const callWith = (...args) => (f) => f(...args);
/**
 * The identity function.
 *
 * @returns `v`
 */
const identity = (v) => v;
const isEmpty = (arr) => getLength(arr) === 0;
const getLength = (arr) => arr.length;
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
const returns = (v) => (..._args) => v;
/**
 * A function that always returns `false`.
 */
const alwaysFalse = (..._args) => false;
/**
 * A function that always returns `true`.
 */
const alwaysTrue = (..._args) => true;
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
 * An updater function that returns the result of decrementing `x`.
 */
const decrement = (x) => x - 1;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
const decrementBy = (decr) => (x) => x - decr;
/**
 * The javascript strict equality function.
 */
const strictEquality = (a, b) => a === b;
const isStrictlyEqualTo = (b) => a => a === b;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
const isEqualTo = (b, options = { equality: strictEquality }) => {
    var _a;
    const equality = (_a = options.equality) !== null && _a !== void 0 ? _a : strictEquality;
    return equality === strictEquality
        ? isStrictlyEqualTo(b)
        : (a) => equality(a, b);
};
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
const isEven = (x) => x % 2 === 0;
/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
const isOdd = (x) => x % 2 !== 0;
/**
 * Applies logical negation to the value `v`.
 */
const negate = (v) => !v;
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
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
const arrayEquality = (valuesEquality = strictEquality) => (a, b) => getLength(a) === getLength(b) && a.every((v, i) => valuesEquality(b[i], v));
/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
const updateReducer = (acc, updater) => updater(acc);
/**
 * Pipes `source` through a series of unary functions.
 */
const pipe = (source, ...operators) => {
    return pipeUnsafe(source, ...operators);
};
/**
 * Pipes `source` through a series of unary functions.
 */
const pipeUnsafe = (source, ...operators) => operators.reduce(updateReducer, source);
/**
 * Composes a series of unary functions.
 */
const compose = (...operators) => source => pipeUnsafe(source, ...operators);
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
const pipeLazy = (source, ...operators) => () => pipeUnsafe(source, ...operators);
/**
 * Returns a function that flips the order of arguments passed to `f`.
 */
const flip = (f) => (...args) => {
    args.reverse();
    return f(...args);
};
const { max, min, floor } = Math;
const _newInstance = (Constructor, ...args) => new Constructor(...args);
const newInstance = (Constructor, ...args) => _newInstance(Constructor, ...args);
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
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};

export { alwaysFalse, alwaysTrue, arrayEquality, callWith, compose, decrement, decrementBy, flip, floor, forEach, getLength, identity, ignore, increment, incrementBy, isEmpty, isEqualTo, isEven, isNone, isOdd, isSome, max, min, negate, newInstance, none, pipe, pipeLazy, pipeUnsafe, raise, returns, strictEquality, sum, updateReducer };
