/// <reference types="./testing.d.ts" />

import { arrayEquality, ignore, isNone, isSome, none, pipeLazy, raise, strictEquality, } from "../functions.js";
import { Array_length, Array_push, globalObject } from "./constants.js";
export const __DENO__ = isSome(globalObject.Deno);
export const DescribeType = 1;
export const TestType = 2;
export const TestAsyncType = 3;
const createDescribe = (name, ...tests) => ({
    type: DescribeType,
    name,
    tests,
});
export { createDescribe as describe };
const createTest = (name, f) => ({
    type: TestType,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
export const testPredicateExpectingTrue = (input, predicate) => createTest(`returns true when input is ${input}`, pipeLazy(input, predicate, expectTrue));
export const testPredicateExpectingFalse = (input, predicate) => createTest(`returns false when input is ${input}`, pipeLazy(input, predicate, expectFalse));
export { createTest as test };
export const testAsync = (name, f) => ({
    type: TestAsyncType,
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
export const expectToThrowAsync = async (f) => {
    let didThrow = false;
    try {
        await f();
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
export const expectArrayEquals = (b, { valuesEquality, } = {
    valuesEquality: strictEquality,
}) => (a) => {
    const equals = arrayEquality(valuesEquality);
    if (!equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectArrayNotEquals = (b, { valuesEquality, } = {
    valuesEquality: strictEquality,
}) => (a) => {
    const equals = arrayEquality(valuesEquality);
    if (equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\n to not equal ${JSON.stringify(a)}`);
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
export const expectIsNone = (v) => {
    if (isSome(v)) {
        raise(`expected none but recieved ${v}`);
    }
};
export const expectIsSome = (v) => {
    if (isNone(v)) {
        raise(`expected Some(?) but recieved None`);
    }
};
export const mockFn = (retval) => {
    const calls = [];
    const cb = (...args) => {
        calls[Array_push](args);
        return retval;
    };
    cb.calls = calls;
    return cb;
};
export const expectToHaveBeenCalledTimes = (times) => (fn) => {
    const length = fn.calls[Array_length];
    if (length !== times) {
        raise(`expected fn to be called ${times} times, but was only called ${length} times.`);
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
const createTests = (testGroup, parents) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === DescribeType) {
        const forEachCreateTests = () => {
            const { tests } = testGroup;
            for (const test of tests) {
                createTests(test, path);
            }
        };
        if (__DENO__) {
            forEachCreateTests();
        }
        else {
            describe(testGroup.name, () => {
                forEachCreateTests();
            });
        }
    }
    else {
        const name = path.join(":");
        if (__DENO__) {
            Deno.test(name, testGroup.f(name));
        }
        else {
            test(testGroup.name, testGroup.f(name));
        }
    }
};
export const testModule = (name, ...testGroups) => {
    createTests(createDescribe(name, ...testGroups), []);
};
