import { strictEquality, arrayEquality, ignore, raise, } from "../functions.js";
import { isSome, isNone, none } from "../option.js";
export const describe = (name, ...tests) => ({
    type: 1,
    name,
    tests,
});
export const test = (name, f) => ({
    type: 2,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
export const testAsync = (name, f) => ({
    type: 3,
    name,
    f: (ctx) => async () => {
        ignore(ctx);
        await f();
    },
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
        raise("expected function to throw");
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
        raise("expected function to throw");
    }
    else if (errorThrown !== error) {
        raise(`expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(errorThrown)}`);
    }
};
export const expectEquals = (b, valueEquality = strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectArrayEquals = (b, valueEquality = strictEquality) => (a) => {
    const equals = arrayEquality(valueEquality);
    if (!equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectTrue = (v) => {
    if (!v) {
        raise("expected true");
    }
};
export const expectFalse = (v) => {
    if (v) {
        raise("expected false");
    }
};
export const expectNone = (v) => {
    if (isSome(v)) {
        raise(`expected none but recieved ${v}`);
    }
};
export const expectSome = (v) => {
    if (isNone(v)) {
        raise(`expected Some(?) but recieved None`);
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
        raise(`expected fn to be called ${times} times, but was only called ${fn.calls.length} times.`);
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
        raise("expected function to throw");
    }
};
