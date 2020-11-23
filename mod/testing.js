'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var env = require('./env.js');

const toJestTest = (testGroup, parents) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === 1 /* Describe */) {
        describe(testGroup.name, () => {
            const tests = testGroup.tests;
            for (const testGroup of tests) {
                toJestTest(testGroup, path);
            }
        });
    }
    else {
        const name = path.join(":");
        test(testGroup.name, testGroup.f(name));
    }
};
const runTestsWithJest = (testGroups) => {
    for (const test of testGroups) {
        toJestTest(test, []);
    }
};
const toDenoTest = (testGroup, parents) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === 1 /* Describe */) {
        const { tests } = testGroup;
        for (const test of tests) {
            toDenoTest(test, path);
        }
    }
    else {
        const name = path.join(":");
        Deno.test(name, testGroup.f(name));
    }
};
const runTestsWithDeno = (testGroups) => {
    for (const test of testGroups) {
        toDenoTest(test, []);
    }
};
const runTests = (testGroups) => {
    if (env.isDeno) {
        runTestsWithDeno(testGroups);
    }
    else {
        runTestsWithJest(testGroups);
    }
};

const describe$1 = (name, ...tests) => ({
    type: 1 /* Describe */,
    name,
    tests,
});
const test$1 = (name, f) => ({
    type: 2 /* Test */,
    name,
    f: (ctx) => () => {
        functions.ignore(ctx);
        f();
    },
});
const testAsync = (name, f) => ({
    type: 3 /* TestAsync */,
    name,
    f: (ctx) => async () => {
        functions.ignore(ctx);
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
        functions.raise("expected function to throw");
    }
};
const expectToThrowError = (error) => (f) => {
    let didThrow = false;
    let errorThrown = option.none;
    try {
        f();
    }
    catch (e) {
        didThrow = true;
        errorThrown = e;
    }
    if (!didThrow) {
        functions.raise("expected function to throw");
    }
    else if (errorThrown !== error) {
        functions.raise(`expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(errorThrown)}`);
    }
};
const expectEquals = (b, valueEquality = functions.strictEquality) => (a) => {
    if (!valueEquality(a, b)) {
        functions.raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectArrayEquals = (b, valueEquality = functions.strictEquality) => (a) => {
    const equals = functions.arrayEquality(valueEquality);
    if (!equals(a, b)) {
        functions.raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
};
const expectTrue = (v) => {
    if (!v) {
        functions.raise("expected true");
    }
};
const expectFalse = (v) => {
    if (v) {
        functions.raise("expected false");
    }
};
const expectNone = (v) => {
    if (option.isSome(v)) {
        functions.raise(`expected none but recieved ${v}`);
    }
};
const expectSome = (v) => {
    if (option.isNone(v)) {
        functions.raise(`expected Some(?) but recieved None`);
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
        functions.raise(`expected fn to be called ${times} times, but was only called ${fn.calls.length} times.`);
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
        functions.raise("expected function to throw");
    }
};

exports.describe = describe$1;
exports.expectArrayEquals = expectArrayEquals;
exports.expectEquals = expectEquals;
exports.expectFalse = expectFalse;
exports.expectNone = expectNone;
exports.expectPromiseToThrow = expectPromiseToThrow;
exports.expectSome = expectSome;
exports.expectToHaveBeenCalledTimes = expectToHaveBeenCalledTimes;
exports.expectToThrow = expectToThrow;
exports.expectToThrowError = expectToThrowError;
exports.expectTrue = expectTrue;
exports.mockFn = mockFn;
exports.runTests = runTests;
exports.test = test$1;
exports.testAsync = testAsync;
