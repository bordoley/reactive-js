/// <reference types="./testing.d.ts" />

import ReadonlyArray_getLength from "../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { arrayEquality, ignore, isNone, isSome, none, raiseWithDebugMessage, strictEquality, } from "../functions.js";
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
        raiseWithDebugMessage("expected function to throw");
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
        raiseWithDebugMessage("expected function to throw");
    }
    else if (errorThrown !== error) {
        raiseWithDebugMessage(`expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(errorThrown)}`);
    }
};
export const expectEquals = (b, valueEquality = strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        raiseWithDebugMessage(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectArrayEquals = (b, valueEquality = strictEquality) => (a) => {
    const equals = arrayEquality(valueEquality);
    if (!equals(a, b)) {
        raiseWithDebugMessage(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
export const expectTrue = (v) => {
    if (!v) {
        raiseWithDebugMessage("expected true");
    }
};
export const expectFalse = (v) => {
    if (v) {
        raiseWithDebugMessage("expected false");
    }
};
export const expectIsNone = (v) => {
    if (isSome(v)) {
        raiseWithDebugMessage(`expected none but recieved ${v}`);
    }
};
export const expectIsSome = (v) => {
    if (isNone(v)) {
        raiseWithDebugMessage(`expected Some(?) but recieved None`);
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
    if (ReadonlyArray_getLength(fn.calls) !== times) {
        raiseWithDebugMessage(`expected fn to be called ${times} times, but was only called ${ReadonlyArray_getLength(fn.calls)} times.`);
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
        raiseWithDebugMessage("expected function to throw");
    }
};
export const __DENO__ = typeof Deno === "object";
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
