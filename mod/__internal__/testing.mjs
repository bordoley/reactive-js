/// <reference types="./testing.d.ts" />
import { none, isSome, isNone } from '../util/Option.mjs';
import { ignore, raise, strictEquality, arrayEquality, getLength } from '../util/functions.mjs';
import { __DENO__ } from './env.mjs';

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
    if (getLength(fn.calls) !== times) {
        raise(`expected fn to be called ${times} times, but was only called ${getLength(fn.calls)} times.`);
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
const runTests = (testGroups) => {
    for (const test of testGroups) {
        createTests(test, []);
    }
};

export { DescribeType, TestAsyncType, TestType, createDescribe as describe, expectArrayEquals, expectEquals, expectFalse, expectNone, expectPromiseToThrow, expectSome, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, runTests, createTest as test, testAsync };
