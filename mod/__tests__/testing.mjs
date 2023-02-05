/// <reference types="./testing.d.ts" />
import { ignore, raiseWithDebugMessage, none, strictEquality, arrayEquality, isSome, isNone, getLength } from '../functions.mjs';

const DescribeType = 1;
const TestType = 2;
const TestAsyncType = 3;
const createDescribe = (name, ...tests) => ({
    type: DescribeType,
    name,
    tests,
});
const createTest = (name, f) => ({
    type: TestType,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
const testAsync = (name, f) => ({
    type: TestAsyncType,
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
        raiseWithDebugMessage("expected function to throw");
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
        raiseWithDebugMessage("expected function to throw");
    }
    else if (errorThrown !== error) {
        raiseWithDebugMessage(`expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(errorThrown)}`);
    }
};
const expectEquals = (b, valueEquality = strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        raiseWithDebugMessage(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectArrayEquals = (b, valueEquality = strictEquality) => (a) => {
    const equals = arrayEquality(valueEquality);
    if (!equals(a, b)) {
        raiseWithDebugMessage(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectTrue = (v) => {
    if (!v) {
        raiseWithDebugMessage("expected true");
    }
};
const expectFalse = (v) => {
    if (v) {
        raiseWithDebugMessage("expected false");
    }
};
const expectIsNone = (v) => {
    if (isSome(v)) {
        raiseWithDebugMessage(`expected none but recieved ${v}`);
    }
};
const expectIsSome = (v) => {
    if (isNone(v)) {
        raiseWithDebugMessage(`expected Some(?) but recieved None`);
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
    if (getLength(fn.calls) !== times) {
        raiseWithDebugMessage(`expected fn to be called ${times} times, but was only called ${getLength(fn.calls)} times.`);
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
        raiseWithDebugMessage("expected function to throw");
    }
};
const __DENO__ = typeof Deno === "object";
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
const testModule = (name, ...testGroups) => {
    createTests(createDescribe(name, ...testGroups), []);
};

export { DescribeType, TestAsyncType, TestType, __DENO__, createDescribe as describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectIsSome, expectPromiseToThrow, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, createTest as test, testAsync, testModule };
