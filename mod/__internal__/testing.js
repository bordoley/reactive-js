/// <reference types="./testing.d.ts" />

import { arrayEquality, ignore, isNone, isSome, none, pipeLazy, raise, strictEquality, } from "../functions.js";
import { Array_length, Array_push, globalObject } from "./constants.js";
export const __DENO__ = isSome(globalObject.Deno);
export const DescribeType = 1;
export const TestType = 2;
export const TestAsyncType = 3;
export const TestDebugType = 4;
export const describe = (name, ...tests) => ({
    type: DescribeType,
    name,
    tests: tests.filter(isSome),
});
export const test = (name, f) => ({
    type: TestType,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
export const testDebug = (name, f) => ({
    type: TestDebugType,
    name,
    f: (ctx) => () => {
        ignore(ctx);
        f();
    },
});
export const testPredicateExpectingTrue = (input, predicate) => test(`returns true when input is ${input}`, pipeLazy(input, predicate, expectTrue("expected predicate to return true")));
export const testPredicateExpectingFalse = (input, predicate) => test(`returns false when input is ${input}`, pipeLazy(input, predicate, expectFalse("expected predicate to return false")));
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
    return f;
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
    return f;
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
    return f;
};
export const expectToThrowErrorAsync = (error) => async (f) => {
    let didThrow = false;
    let errorThrown = none;
    try {
        await f();
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
    return f;
};
export const expectEquals = (b, valueEquality = strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
    return a;
};
export const expectArrayEquals = (b, { valuesEquality, } = {
    valuesEquality: strictEquality,
}) => (a) => {
    const equals = arrayEquality(valuesEquality);
    if (!equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
    return a;
};
export const expectArrayNotEquals = (b, { valuesEquality, } = {
    valuesEquality: strictEquality,
}) => (a) => {
    const equals = arrayEquality(valuesEquality);
    if (equals(a, b)) {
        raise(`expected ${JSON.stringify(b)}\n to not equal ${JSON.stringify(a)}`);
    }
    return a;
};
export const expectTrue = (message) => (v) => {
    if (!v) {
        raise(message ?? "expected true");
    }
    return v;
};
export const expectFalse = (message) => (v) => {
    if (v) {
        raise(message ?? "expected false");
    }
    return v;
};
export const expectIsNone = (v) => {
    if (isSome(v)) {
        raise(`expected none but recieved ${v}`);
    }
    return v;
};
export const expectIsSome = (v) => {
    if (isNone(v)) {
        raise(`expected Some(?) but recieved None`);
    }
    return v;
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
    return fn;
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
    //return promise;
};
const createTests = (testGroup, parents, setup, debug = false) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === DescribeType) {
        const forEachCreateTests = () => {
            const { tests } = testGroup;
            for (const test of tests) {
                createTests(test, path, setup, debug);
            }
        };
        if (__DENO__) {
            forEachCreateTests();
        }
        else {
            globalObject.describe?.(testGroup.name, () => {
                forEachCreateTests();
            });
        }
    }
    else if (!debug || testGroup.type === TestDebugType) {
        const name = path.join(":");
        if (__DENO__ &&
            (testGroup.type === TestType || testGroup.type === TestDebugType)) {
            globalObject.Deno?.test(name, () => {
                setup.beforeEach();
                testGroup.f(name)();
                setup.afterEach();
            });
        }
        else if (__DENO__ && testGroup.type === TestAsyncType) {
            globalObject.Deno?.test(name, async () => {
                setup.beforeEach();
                await testGroup.f(name)();
                setup.afterEach();
            });
        }
        else if (testGroup.type === TestType) {
            globalObject.test?.(testGroup.name, () => {
                setup.beforeEach();
                testGroup.f(name)();
                setup.afterEach();
            });
        }
        else if (testGroup.type === TestAsyncType) {
            globalObject.test?.(testGroup.name, async () => {
                setup.beforeEach();
                await testGroup.f(name)();
                setup.afterEach();
            });
        }
    }
};
export const testModule = (name, ...testGroups) => (options) => {
    createTests(describe(name, ...testGroups), [], {
        beforeEach: options?.beforeEach ?? (() => { }),
        afterEach: options?.afterEach ?? (() => { }),
    });
};
export const testDebugModule = (name, ...testGroups) => (options) => {
    createTests(describe(name, ...testGroups), [], {
        beforeEach: options?.beforeEach ?? (() => { }),
        afterEach: options?.afterEach ?? (() => { }),
    }, true);
};
