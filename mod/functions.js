/// <reference types="./functions.d.ts" />

import { Array, Array_every, Array_length, Error, Function, Number, Promise, String, __DEV__, nullObject, typeofObject, } from "./__internal__/constants.js";
/**
 * A function that always returns `false`.
 */
export const alwaysFalse = () => false;
/**
 * A function that always returns `none`.
 */
export const alwaysNone = () => none;
/**
 * A function that always returns `true`.
 */
export const alwaysTrue = () => true;
const arrayStrictEquality = (a, b) => {
    const length = a[Array_length];
    if (a === b) {
        return true;
    }
    if (length !== b[Array_length]) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
export const arrayEquality = (valuesEquality = strictEquality) => valuesEquality === strictEquality
    ? arrayStrictEquality
    : (a, b) => a === b ||
        (a[Array_length] === b[Array_length] &&
            a[Array_every]((v, i) => valuesEquality(b[i], v)));
/**
 * Creates a new function that, when called, invokes the method
 * `thiz[key]` with the provided arguments.
 */
export const bindMethod = (thiz, key) => bind(thiz[key], thiz);
/**
 * Calls the function `f` with a given self value as this and arguments provided individually.
 */
export const call = (f, self, ...args) => f.call(self, ...args);
/**
 * Composes a series of unary functions.
 */
export const compose = ((op1, op2, op3, op4, op5, op6, op7, ...operators) => source => pipeUnsafe(source, op1, op2, op3, op4, op5, op6, op7, ...operators));
/**
 * Invokes the debugger when compiled in dev mode. In production mode,
 * is a noop.
 */
export const debug = (v) => {
    if (__DEV__) {
        // eslint-disable-next-line no-debugger
        debugger;
    }
    return v;
};
/**
 * The identity function.
 *
 * @returns `v`
 */
export const identity = (v) => v;
export const identityLazy = () => identity;
/**
 * A function that always returns `undefined`.
 */
export const ignore = (..._args) => { };
/**
 * Enables invoking a method on an object as a unary function within
 * a pipeline operation.
 *
 * @param method
 * @param args
 * @returns
 */
export const invoke = (method, ...args) => (obj) => obj[method](...args);
export const isReadonlyArray = Array.isArray;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
export const isEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyEqualTo = (b) => a => a === b;
    return (b, options) => {
        const equality = options?.equality ?? strictEquality;
        return equality === strictEquality
            ? isStrictlyEqualTo(b)
            : (a) => equality(a, b);
    };
})();
export const isNotEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyNotEqualTo = (b) => a => a !== b;
    return (b, options) => {
        const equality = options?.equality ?? strictEquality;
        return equality === strictEquality
            ? isStrictlyNotEqualTo(b)
            : (a) => !equality(a, b);
    };
})();
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
export const isEven = (x) => x % 2 === 0;
export const isFalse = (v) => !v;
export const isFunction = (f) => typeof f === "function" || f instanceof Function;
/**
 * Returns true if `option` is `none`.
 */
export const isNone = (option) => option === none;
export const isNull = (v) => v === nullObject;
export const isNumber = (n) => Number(n) === n || n instanceof Number;
/**
 * Predicate that returns `true` if `x` is an odd number, otherwise `false`.
 */
export const isOdd = (x) => x % 2 !== 0;
export const isObject = (o) => typeof o === typeofObject;
const isPromise = (v) => v instanceof Promise || Promise.resolve(v) === v;
/**
 * Returns true if `option` is not `none`.
 */
export const isSome = (option) => option !== none;
export const isString = (s) => String(s) === s || s instanceof String;
export const isTrue = (v) => v;
export const greaterThan = (v) => (x) => x > v;
export const lessThan = (v) => (x) => x < v;
export const log = (v) => {
    if (__DEV__) {
        console.log(v);
    }
    return v;
};
/**
 * Applies logical negation to the value `v`.
 */
export const negate = (v) => !v;
export const newInstance = (Constructor, ...args) => new Constructor(...args);
/**
 * Creates a new function that, when called, calls `f` with its
 * this keyword set to the provided value.
 */
export const bind = /*@__PURE__*/ (() => {
    const bindCache = newInstance(WeakMap);
    const boundFunctions = newInstance(WeakSet);
    return (f, thiz) => {
        let objectMap = none;
        // ignore functions already bound to a this argument
        return !boundFunctions.has(f)
            ? ((objectMap =
                bindCache.get(f) ??
                    (() => {
                        const objectMap = newInstance(WeakMap);
                        bindCache.set(f, objectMap);
                        return objectMap;
                    })()),
                objectMap.get(thiz) ??
                    (() => {
                        const memoize1dF = f.bind(thiz);
                        boundFunctions.add(memoize1dF);
                        objectMap.set(thiz, memoize1dF);
                        return memoize1dF;
                    })())
            : f;
    };
})();
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
export const returns = (v) => () => v;
export const memoize = (makeFunction) => {
    const cache = newInstance(WeakMap);
    return (m) => cache.get(m) ??
        (() => {
            const f = makeFunction(m);
            cache.set(m, f);
            return f;
        })();
};
/**
 * An alias for undefined.
 */
export const none = undefined;
export const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
/**
 * Type-unsafe variant of `pick`.
 */
export const pickUnsafe = (k1, k2, k3, ...keys) => (value) => {
    let result = value;
    result = result[k1];
    result = k2 !== none ? result[k2] : result;
    result = k3 !== none ? result[k3] : result;
    const length = keys[Array_length];
    if (length > 0) {
        for (const key of keys) {
            result = result[key];
        }
    }
    return result;
};
/**
 * Returns a function that can be used to pick deeply nested properties
 * from an Object.
 */
export const pick = pickUnsafe;
/**
 * Pipes `source` through a series of unary functions.
 */
export const pipeUnsafe = ((source, op1, op2, op3, op4, op5, op6, op7, ...operators) => {
    let acc = source;
    const length = operators[Array_length];
    acc = op1(acc);
    acc = op2 !== none ? op2(acc) : acc;
    acc = op3 !== none ? op3(acc) : acc;
    acc = op4 !== none ? op4(acc) : acc;
    acc = op5 !== none ? op5(acc) : acc;
    acc = op6 !== none ? op6(acc) : acc;
    acc = op7 !== none ? op7(acc) : acc;
    if (length > 0) {
        for (let i = 0; i < length; i++) {
            acc = operators[i](acc);
        }
    }
    return acc;
});
/**
 * Pipes `source` through a series of unary functions.
 */
export const pipe = pipeUnsafe;
/**
 *  Pipes the source through a series of async operators.
 */
export const pipeAsync = async (source, ...operators) => {
    let acc = source;
    const length = operators[Array_length];
    for (let i = 0; i < length; i++) {
        const result = operators[i](acc);
        if (isPromise(result)) {
            acc = await result;
        }
        else {
            acc = result;
        }
    }
    return acc;
};
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export const pipeLazy = (source, ...operators) => () => pipeUnsafe(source, ...operators);
/**
 *  Returns a `Factory` function that pipes the source through
 *  the provided async function operators.
 */
export const pipeLazyAsync = (source, ...operators) => async () => {
    let acc = source;
    const length = operators[Array_length];
    for (let i = 0; i < length; i++) {
        const result = operators[i](acc);
        if (isPromise(result)) {
            acc = await result;
        }
        else {
            acc = result;
        }
    }
    return acc;
};
/**
 * Pipes `source` through a series of unary functions if it is not undefined.
 */
export const pipeSome = (source, ...operators) => isSome(source) ? pipeUnsafe(source, ...operators) : none;
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.
 */
export const pipeSomeLazy = (source, ...operators) => isSome(source) ? () => pipeUnsafe(source, ...operators) : returns(none);
/**
 * Factory for a javascript Error from an unknown object type.
 *
 * Returns the provide object if it is an instance of Error,
 * otherwise a new Error object is created with the provided object as it's cause.
 */
export const error = (message) => {
    const messageIsString = isString(message);
    const messageIsError = message instanceof Error;
    const errorMessage = messageIsString ? message : "";
    const errorCause = !messageIsString && !messageIsError && isSome(message)
        ? {
            cause: message,
        }
        : none;
    return messageIsError
        ? message
        : newInstance(Error, errorMessage, errorCause);
};
/**
 * Throws the provided error.
 */
export const raiseError = (e) => {
    throw e;
};
/**
 * Throws an error, wrapping the provided object in a Javascript Error.
 */
export const raise = (e) => raiseError(error(e));
/**
 * Throws an error with the provided message is the condition is true.
 */
export const raiseIf = (condition, message) => {
    if (condition) {
        raiseError(error(__DEV__ ? message : none));
    }
};
export const raiseIfNone = (v, message) => raiseIf(isNone(v), message);
/**
 * The javascript strict equality function.
 */
export const strictEquality = (a, b) => a === b;
/**
 * Typed function for creating tuple instances.
 */
export const tuple = ((...v) => v);
