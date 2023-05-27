/// <reference types="./ConcreteContainerModuleTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import { describe, expectArrayEquals, test, } from "../../__internal__/testing.js";
import { increment, none, pipe, returns } from "../../functions.js";
import ContainerModuleTests from "./ContainerModuleTests.js";
const ConcreteContainerModuleTests = (m, createCtx, toReadonlyArray) => [
    ContainerModuleTests(m, createCtx, () => m.fromReadonlyArray(), toReadonlyArray),
    describe("ConcreteContainerModule", describe("empty", test("returns an empty enumerator", Disposable.usingLazy(createCtx)(ctx => {
        pipe(m.empty(), toReadonlyArray(ctx), expectArrayEquals([]));
    }))), describe("fromEnumerable", test("from generating enumerable", Disposable.usingLazy(createCtx)(ctx => {
        pipe(Observable.generate(increment, returns(-1)), Observable.takeFirst({ count: 5 }), m.fromEnumerable(), toReadonlyArray(ctx), expectArrayEquals([0, 1, 2, 3, 4]));
    }))), describe("fromFactory", test("it produces the factory result", Disposable.usingLazy(createCtx)(ctx => {
        pipe(() => 1, m.fromFactory(), toReadonlyArray(ctx), expectArrayEquals([1]));
    }))), describe("fromOptional", test("when none", Disposable.usingLazy(createCtx)(ctx => {
        pipe(none, m.fromOptional(), toReadonlyArray(ctx), expectArrayEquals([]));
    })), test("when some", Disposable.usingLazy(createCtx)(ctx => {
        pipe(1, m.fromOptional(), toReadonlyArray(ctx), expectArrayEquals([1]));
    }))), describe("fromReadonlyArray", test("negative count with start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3, start: 4 }), toReadonlyArray(ctx), expectArrayEquals([5, 4, 3]));
    })), test("positive count with start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3, start: 4 }), toReadonlyArray(ctx), expectArrayEquals([5, 6, 7]));
    })), test("negative count exceeding bounds with start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -100, start: 3 }), toReadonlyArray(ctx), expectArrayEquals([4, 3, 2, 1]));
    })), test("positive count exceeding bounds with start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 100, start: 7 }), toReadonlyArray(ctx), expectArrayEquals([8, 9]));
    })), test("negative count without start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3 }), toReadonlyArray(ctx), expectArrayEquals([9, 8, 7]));
    })), test("positive count without start index", Disposable.usingLazy(createCtx)(ctx => {
        pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3]));
    }))), describe("fromValue", test("it produces the value", Disposable.usingLazy(createCtx)(ctx => {
        pipe(none, m.fromValue(), toReadonlyArray(ctx), expectArrayEquals([none]));
    })))),
];
export default ConcreteContainerModuleTests;
