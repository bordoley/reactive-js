/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
function callWith(...args) {
    return f => f(...args);
}
/**
 * The identity function.
 *
 * @returns `v`
 */
const identity = (v) => v;
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
const isEqualTo = (b, equality = strictEquality) => equality === strictEquality ? isStrictlyEqualTo(b) : (a) => equality(a, b);
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
    throw new Error(message);
};
/**
 * A function that returns the result of summing
 * it's arguments.
 */
const sum = (...args) => {
    let acc = 0;
    for (let i = 0; i < args.length; i++) {
        acc += args[i];
    }
    return acc;
};
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
const arrayEquality = (valuesEquality = strictEquality) => (a, b) => a.length === b.length && a.every((v, i) => valuesEquality(b[i], v));
/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
const updaterReducer = (acc, updater) => updater(acc);
/**
 * Pipes `source` through a series of unary functions.
 */
function pipe(source, ...operators) {
    return operators.reduce(updaterReducer, source);
}
/**
 * Composes a series of unary functions.
 */
function compose(...operators) {
    return source => pipe(source, ...operators);
}
/**
 * Returns a function that composes its operator with `op2`.
 */
const composeWith = (op2) => op1 => compose(op1, op2);
/**
 * Returns a `Factory` function that defers the evaluation of piping
 * `source` through the provided operators.
 */
function defer(source, ...operators) {
    return () => pipe(source, ...operators);
}
/**
 * Returns a function that flips the order of arguments passed to `f`.
 */
function flip(f) {
    return (...args) => {
        args.reverse();
        return f(...args);
    };
}

export { alwaysFalse, alwaysTrue, arrayEquality, callWith, compose, composeWith, decrement, decrementBy, defer, flip, identity, ignore, increment, incrementBy, isEqualTo, isEven, isOdd, negate, pipe, raise, returns, strictEquality, sum, updaterReducer };
