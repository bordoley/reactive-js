/// <reference types="./functions.test.d.ts" />

import { describe, expectArrayEquals, expectArrayNotEquals, expectEquals, expectTrue, test, testModule, testPredicateExpectingFalse, testPredicateExpectingTrue, } from "../__internal__/testing.js";
import { alwaysFalse, alwaysTrue, arrayEquality, bind, bindMethod, call, decrement, decrementBy, greaterThan, identity, increment, incrementBy, invoke, isEqualTo, isEven, isFalse, isFunction, isNone, isNotEqualTo, isNumber, isObject, isOdd, isSome, isString, isTrue, lessThan, negate, newInstance, none, pick, pipe, pipeLazy, returns, tuple, } from "../functions.js";
testModule("functions", describe("alwaysFalse", testPredicateExpectingFalse(false, alwaysFalse), testPredicateExpectingFalse(true, alwaysFalse)), describe("alwaysTrue", testPredicateExpectingTrue(false, alwaysTrue), testPredicateExpectingTrue(true, alwaysTrue)), describe("arrayEquality", describe("strict equality", test("when arrays are empty", pipeLazy([], expectArrayEquals([]))), test("when arrays have identical values", pipeLazy([1, 2, 3], expectArrayEquals([1, 2, 3]))), test("when arrays are the same reference", () => {
    const arr = [1, 2, 3];
    pipe(arr, expectArrayEquals(arr));
}), test("when arrays are different length", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    pipe(arr1, expectArrayNotEquals(arr2));
}), test("when arrays are the same length but not equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 3, 2];
    pipe(arr1, expectArrayNotEquals(arr2));
})), describe("with values equality function", test("when arrays are empty", pipeLazy([], expectArrayEquals([], { valuesEquality: arrayEquality() }))), test("when arrays have identical values", pipeLazy([[1], [2], [3]], expectArrayEquals([[1], [2], [3]], {
    valuesEquality: arrayEquality(),
}))))), describe("bind", test("binds the function to this", () => {
    const thiz = {};
    const f = function () {
        pipe(this, expectEquals(thiz));
    };
    const bound = bind(f, thiz);
    bound();
}), test("fails to bind lambda functions", () => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const f = () => {
        pipe(this, expectEquals(self));
    };
    const thiz = {};
    const bound = bind(f, thiz);
    bound();
})), describe("bindMethod", test("binds a class method to an arbitary this arg", () => {
    class ClassWithMethod {
        testMethod() {
            pipe(this, expectEquals(classInstance));
        }
    }
    const classInstance = newInstance(ClassWithMethod);
    const boundMethod = bindMethod(classInstance, "testMethod");
    boundMethod();
})), describe("call", test("invokes a function with the given this and functions arguments", () => {
    const thiz = {};
    const f = function (a) {
        pipe(this, expectEquals(thiz));
        pipe(a, expectEquals(1));
    };
    call(f, thiz, 1);
})), describe("decrement", test("decrements an integer by 1", pipeLazy(decrement(100), expectEquals(99)))), describe("decrementBy", test("decrements an integer by the specified value", pipeLazy(100, decrementBy(10), expectEquals(90)))), describe("greaterThan", testPredicateExpectingTrue(10, greaterThan(5)), testPredicateExpectingFalse(10, greaterThan(100))), describe("identity", test("returns the provided function", () => {
    const thiz = {};
    pipe(identity(thiz), expectEquals(thiz));
})), describe("increment", test("increments an integer by 1", pipeLazy(increment(100), expectEquals(101)))), describe("incrementBy", test("increments an integer by the specified value", pipeLazy(100, incrementBy(10), expectEquals(110)))), describe("invoke", test("invokes a method by name on an object", () => {
    let called = false;
    class TestClass {
        testMethod() {
            called = true;
        }
    }
    const instance = newInstance(TestClass);
    pipe(instance, invoke("testMethod"));
    pipe(called, expectTrue);
})), describe("isEqualTo", describe("strictEquality", testPredicateExpectingTrue(1, isEqualTo(1)), testPredicateExpectingTrue(true, isEqualTo(true)), testPredicateExpectingFalse(true, isEqualTo(false))), describe("withEqualityFunction", testPredicateExpectingTrue([1], isEqualTo([1], { equality: arrayEquality() })), testPredicateExpectingFalse([2], isEqualTo([1], { equality: arrayEquality() })))), describe("isEven", testPredicateExpectingTrue(0, isEven), testPredicateExpectingTrue(6, isEven), testPredicateExpectingTrue(-6, isEven), testPredicateExpectingFalse(3, isEven)), describe("isFalse", testPredicateExpectingTrue(false, isFalse), testPredicateExpectingFalse(true, isFalse)), describe("isFunction", testPredicateExpectingTrue(() => { }, isFunction), testPredicateExpectingTrue(function () { }, isFunction), testPredicateExpectingFalse({}, isFunction), testPredicateExpectingFalse("", isFunction), testPredicateExpectingFalse(1, isFunction)), describe("isNone", testPredicateExpectingFalse(() => { }, isNone), testPredicateExpectingFalse(function () { }, isNone), testPredicateExpectingFalse({}, isNone), testPredicateExpectingFalse("", isNone), testPredicateExpectingFalse(1, isNone), testPredicateExpectingFalse(null, isNone), testPredicateExpectingTrue(none, isNone)), describe("isNotEqualTo", describe("strictEquality", testPredicateExpectingTrue(1, isNotEqualTo(2)), testPredicateExpectingFalse(1, isNotEqualTo(1))), describe("withEqualityFunction", testPredicateExpectingFalse([1], isNotEqualTo([1], { equality: arrayEquality() })), testPredicateExpectingTrue([2], isNotEqualTo([1], { equality: arrayEquality() })))), describe("isNumber", testPredicateExpectingTrue(3, isNumber), testPredicateExpectingFalse({}, isNumber), testPredicateExpectingFalse("", isNumber), testPredicateExpectingFalse(() => { }, isNumber)), describe("isObject", testPredicateExpectingFalse(3, isObject), testPredicateExpectingTrue({}, isObject), testPredicateExpectingFalse("", isObject), testPredicateExpectingTrue(newInstance(String), isObject), testPredicateExpectingFalse(() => { }, isObject)), describe("isOdd", testPredicateExpectingFalse(0, isOdd), testPredicateExpectingTrue(3, isOdd), testPredicateExpectingTrue(-3, isOdd), testPredicateExpectingFalse(2, isOdd)), describe("isSome", testPredicateExpectingTrue(() => { }, isSome), testPredicateExpectingTrue(function () { }, isSome), testPredicateExpectingTrue({}, isSome), testPredicateExpectingTrue("", isSome), testPredicateExpectingTrue(1, isSome), testPredicateExpectingTrue(null, isSome), testPredicateExpectingFalse(none, isSome)), describe("isString", testPredicateExpectingFalse(3, isString), testPredicateExpectingFalse({}, isString), testPredicateExpectingTrue("", isString), testPredicateExpectingTrue(newInstance(String), isString), testPredicateExpectingFalse(() => { }, isString)), describe("isTrue", testPredicateExpectingFalse(false, isTrue), testPredicateExpectingTrue(true, isTrue)), describe("lessThan", testPredicateExpectingFalse(10, lessThan(5)), testPredicateExpectingTrue(10, lessThan(100))), describe("negate", testPredicateExpectingTrue(false, negate), testPredicateExpectingFalse(true, negate)), describe("pick", test("with deeply nested object", () => {
    const expected = "abc";
    pipe({
        a: {
            b: {
                c: {
                    d: "abc",
                },
            },
        },
    }, pick("a", "b", "c", "d"), expectEquals(expected));
})), describe("returns", test("allocated function always returns the input value", () => {
    const result = {};
    const f = returns(result);
    pipe(f(), expectEquals(result));
    pipe(f(1, 2, 3, 4, 5, 6), expectEquals(result));
})), describe("tuple", test("returns a tuple of the provided values", pipeLazy(tuple(1, 2, 3), expectArrayEquals([1, 2, 3])))));
