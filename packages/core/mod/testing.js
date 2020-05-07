import { isSome, isNone, none } from "./option.js";
import { referenceEquals, arrayEquals } from "./functions.js";
export const describe = (name, ...tests) => ({
    type: 1,
    name,
    tests,
});
export const test = (name, f) => ({
    type: 2,
    name,
    f,
});
export const testAsync = (name, f) => ({
    type: 3,
    name,
    f,
});
export const expectToThrow = (f) => {
    let didThrow = false;
    try {
        f();
    }
    catch (_e) {
        didThrow = true;
    }
    if (!didThrow) {
        throw new Error("expected function to throw");
    }
};
export const expectToThrowError = (error) => (f) => {
    let didThrow = false;
    let errorThrown = none;
    try {
        f();
    }
    catch (e) {
        didThrow = true;
        errorThrown = e;
    }
    if (!didThrow) {
        throw new Error("expected function to throw");
    }
    else if (errorThrown !== error) {
        throw new Error(`expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(errorThrown)}`);
    }
};
export const expectEquals = (b, valuesAreEqual = referenceEquals) => (a) => {
    if (!valuesAreEqual(a, b)) {
        throw new Error(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const arrayReferenceEquals = arrayEquals(referenceEquals);
export const expectArrayEquals = (b, valuesAreEqual) => (a) => {
    const equals = isNone(valuesAreEqual)
        ? arrayReferenceEquals
        : arrayEquals(valuesAreEqual);
    if (!equals(a, b)) {
        throw new Error(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectTrue = (v) => {
    if (!v) {
        throw new Error("expected true");
    }
};
export const expectFalse = (v) => {
    if (v) {
        throw new Error("expected false");
    }
};
export const expectNone = (v) => {
    if (isSome(v)) {
        throw new Error(`expected none but recieved ${v}`);
    }
};
export const expectSome = (v) => {
    if (isNone(v)) {
        throw new Error(`expected Some(?) but recieved None`);
    }
};
export const mockFn = (retval) => {
    const calls = [];
    const cb = (...args) => {
        calls.push(args);
        return retval;
    };
    cb.calls = calls;
    return cb;
};
export const expectToHaveBeenCalledTimes = (times) => (fn) => {
    if (fn.calls.length !== times) {
        throw new Error(`expected fn to be called ${times} times, but was only called ${fn.calls.length} times.`);
    }
};
export const expectPromiseToThrow = async (promise) => {
    let didThrow = false;
    try {
        await promise;
    }
    catch (_) {
        didThrow = true;
    }
    if (!didThrow) {
        throw new Error("expected function to throw");
    }
};
