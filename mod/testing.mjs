import { ignore, raise, strictEquality, arrayEquality } from './functions.mjs';
import { none, isSome, isNone } from './option.mjs';

const describe = (name, ...tests) => ({
    type: 1 /* Describe */,
    name,
    tests,
});
const test = (name, f) => ({
    type: 2 /* Test */,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
const testAsync = (name, f) => ({
    type: 3 /* TestAsync */,
    name,
    f: (ctx) => async () => {
        ignore(ctx);
        await f();
    },
});
const expectToThrow = (f) => {
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
const expectToThrowError = (error) => (f) => {
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
const expectEquals = (b, valueEquality = strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectArrayEquals = (b, valueEquality = strictEquality) => (a) => {
    const equals = arrayEquality(valueEquality);
    if (!equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectTrue = (v) => {
    if (!v) {
        raise("expected true");
    }
};
const expectFalse = (v) => {
    if (v) {
        raise("expected false");
    }
};
const expectNone = (v) => {
    if (isSome(v)) {
        raise(`expected none but recieved ${v}`);
    }
};
const expectSome = (v) => {
    if (isNone(v)) {
        raise(`expected Some(?) but recieved None`);
    }
};
const mockFn = (retval) => {
    const calls = [];
    const cb = (...args) => {
        calls.push(args);
        return retval;
    };
    cb.calls = calls;
    return cb;
};
const expectToHaveBeenCalledTimes = (times) => (fn) => {
    if (fn.calls.length !== times) {
        raise(`expected fn to be called ${times} times, but was only called ${fn.calls.length} times.`);
    }
};
const expectPromiseToThrow = async (promise) => {
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

export { describe, expectArrayEquals, expectEquals, expectFalse, expectNone, expectPromiseToThrow, expectSome, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, test, testAsync };
