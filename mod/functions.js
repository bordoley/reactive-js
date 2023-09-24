/// <reference types="./functions.d.ts" />

import { __DEV__ } from "./__internal__/constants.js";
export const alwaysFalse = () => false;
export const alwaysTrue = () => true;
const arrayStrictEquality = (a, b) => {
    const { length } = a;
    if (a === b) {
        return true;
    }
    if (length !== b.length) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
export const arrayEquality = (valuesEquality = strictEquality) => valuesEquality === strictEquality
    ? arrayStrictEquality
    : (a, b) => a === b ||
        (a.length === b.length && a.every((v, i) => valuesEquality(b[i], v)));
// eslint-disable-next-line @typescript-eslint/ban-types
export const bind = (f, thiz) => f.bind(thiz);
export const bindMethod = (thiz, key) => bind(thiz[key], thiz);
export const call = (f, self, ...args) => f.call(self, ...args);
export const compose = ((op1, op2, op3, op4, op5, op6, op7, ...operators) => source => pipeUnsafe(source, op1, op2, op3, op4, op5, op6, op7, ...operators));
export const composeLazy = ((op1, op2, op3, op4, op5, op6, op7, ...operators) => (source) => () => pipeUnsafe(source, op1, op2, op3, op4, op5, op6, op7, ...operators));
export const decrement = (x) => x - 1;
export const decrementBy = (decr) => (x) => x - decr;
export const identity = (v) => v;
export const identityLazy = () => identity;
export const ignore = (..._args) => { };
export const increment = (x) => x + 1;
export const incrementBy = (incr) => (x) => x + incr;
export const invoke = (method, ...args) => (obj) => obj[method](...args);
export const isReadonlyArray = Array.isArray;
export const isEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyEqualTo = (b) => a => a === b;
    return (b, options = {
        equality: strictEquality,
    }) => {
        const equality = options.equality ?? strictEquality;
        return equality === strictEquality
            ? isStrictlyEqualTo(b)
            : (a) => equality(a, b);
    };
})();
export const isNotEqualTo = /*@__PURE__*/ (() => {
    const isStrictlyNotEqualTo = (b) => a => a !== b;
    return (b, options = {
        equality: strictEquality,
    }) => {
        const equality = options.equality ?? strictEquality;
        return equality === strictEquality
            ? isStrictlyNotEqualTo(b)
            : (a) => !equality(a, b);
    };
})();
export const isEven = (x) => x % 2 === 0;
export const isFalse = (v) => !v;
export const isFunction = (f) => typeof f === "function" || f instanceof Function;
export const isNumber = (n) => typeof n === "number";
export const isObject = (o) => typeof o === "object";
export const isString = (s) => typeof s === "string" || s instanceof String;
export const isOdd = (x) => x % 2 !== 0;
export const isNone = (option) => option === none;
const isPromise = (v) => v instanceof Promise || Promise.resolve(v) === v;
export const isSome = (option) => option !== none;
export const isTrue = (v) => v;
export const greaterThan = (v) => (x) => x > v;
export const lessThan = (v) => (x) => x < v;
export const negate = (v) => !v;
export const newInstance = (Constructor, ...args) => new Constructor(...args);
export const none = undefined;
export const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
export const pickUnsafe = (k1, k2, k3, ...keys) => 
// eslint-disable-next-line @typescript-eslint/ban-types
(value) => {
    let result = value;
    result = result[k1];
    result = k2 !== none ? result[k2] : result;
    result = k3 !== none ? result[k3] : result;
    const length = keys.length;
    if (length > 0) {
        for (const key of keys) {
            result = result[key];
        }
    }
    return result;
};
export const pick = pickUnsafe;
export const pipeUnsafe = ((source, op1, op2, op3, op4, op5, op6, op7, ...operators) => {
    let acc = source;
    const { length } = operators;
    acc = op1 !== none ? op1(acc) : acc;
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
export const pipe = pipeUnsafe;
export const pipeAsync = async (source, ...operators) => {
    let acc = source;
    const { length } = operators;
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
export const pipeLazyAsync = (source, ...operators) => async () => {
    let acc = source;
    const { length } = operators;
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
export const pipeSomeLazy = (source, ...operators) => () => isSome(source) ? pipeUnsafe(source, ...operators) : none;
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
export const errorWithDebugMessage = (message) => error(__DEV__ ? message : none);
export const raiseError = (e) => {
    throw e;
};
export const raiseWithDebugMessage = (message) => raiseError(error(__DEV__ ? message : none));
export const raise = (e) => raiseError(error(e));
export const returns = (v) => () => v;
export const strictEquality = (a, b) => a === b;
export const tuple = ((...v) => v);
