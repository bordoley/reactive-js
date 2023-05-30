/// <reference types="./ReactiveContainerModuleTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import { describe, expectArrayEquals, expectToThrowError, test, } from "../../__internal__/testing.js";
import { alwaysTrue, arrayEquality, lessThan, pipe, returns, } from "../../functions.js";
import ContainerModuleTests from "./ContainerModuleTests.js";
const ReactiveContainerModuleTests = (m, createCtx, fromReadonlyArray, toReadonlyArray) => [
    ContainerModuleTests(m, createCtx, fromReadonlyArray, toReadonlyArray),
    describe("ReactiveContainerModule", describe("buffer", test("with multiple sub buffers", Disposable.usingLazy(createCtx)(ctx => pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], fromReadonlyArray(ctx), m.buffer({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ], arrayEquality())))), test("last buffer is short", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5, 6, 7, 8], fromReadonlyArray(ctx), m.buffer({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
    ], arrayEquality()))))), describe("distinctUntilChanged", test("when source has duplicates in order", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 2, 2, 2, 3, 3, 3, 4], fromReadonlyArray(ctx), m.distinctUntilChanged(), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3, 4])))), test("when source is empty", Disposable.usingLazy(createCtx)((ctx) => pipe([], fromReadonlyArray(ctx), m.distinctUntilChanged(), toReadonlyArray(ctx), expectArrayEquals([])))), test("when equality operator throws", () => {
        const err = new Error();
        const equality = (_a, _b) => {
            throw err;
        };
        pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.distinctUntilChanged({ equality }), toReadonlyArray(ctx))), expectToThrowError(err));
    })), describe("pairwise", test("when there are more than one input value", Disposable.usingLazy(createCtx)((ctx) => pipe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], fromReadonlyArray(ctx), m.pairwise(), toReadonlyArray(ctx), expectArrayEquals([
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
        [8, 9],
    ], arrayEquality())))), test("when the input only provides 1 value", Disposable.usingLazy(createCtx)((ctx) => pipe([0], fromReadonlyArray(ctx), m.pairwise(), toReadonlyArray(ctx), expectArrayEquals([], arrayEquality()))))), describe("scan", test("sums all the values in the array emitting intermediate values.", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1, 1], fromReadonlyArray(ctx), m.scan((a, b) => a + b, returns(0)), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3])))), test("throws when the scan function throws", () => {
        const err = new Error();
        const scanner = (_acc, _next) => {
            throw err;
        };
        pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.scan(scanner, returns(0)), toReadonlyArray(ctx))), expectToThrowError(err));
    }), test("throws when the initial value function throws", () => {
        const err = new Error();
        const initialValue = () => {
            throw err;
        };
        pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.scan((a, b) => a + b, initialValue), toReadonlyArray(ctx))), expectToThrowError(err));
    })), describe("skipFirst", test("with default count", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.skipFirst(), toReadonlyArray(ctx), expectArrayEquals([2, 3])))), test("when skipped source has additional elements", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.skipFirst({ count: 2 }), toReadonlyArray(ctx), expectArrayEquals([3])))), test("when all elements are skipped", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.skipFirst({ count: 4 }), toReadonlyArray(ctx), expectArrayEquals([]))))), describe("takeFirst", test("with default count", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeFirst(), toReadonlyArray(ctx), expectArrayEquals([1])))), test("when taking fewer than the total number of elements in the source", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeFirst({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3])))), test("when taking more than all the items produced by the source", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2], fromReadonlyArray(ctx), m.takeFirst({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([1, 2])))), test("when source is empty", Disposable.usingLazy(createCtx)((ctx) => pipe([], fromReadonlyArray(ctx), m.takeFirst({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([])))), test("with default count", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.takeFirst(), toReadonlyArray(ctx), expectArrayEquals([1])))), test("when count is 0", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.takeFirst({ count: 0 }), toReadonlyArray(ctx), expectArrayEquals([]))))), describe("takeLast", test("with default count", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeLast(), toReadonlyArray(ctx), expectArrayEquals([5])))), test("when count is 0", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), 
    // Some implementations special case this
    m.takeLast({ count: 0 }), toReadonlyArray(ctx), expectArrayEquals([])))), test("when count is less than the total number of elements", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeLast({ count: 3 }), toReadonlyArray(ctx), expectArrayEquals([3, 4, 5])))), test("when count is greater than the total number of elements", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeLast({ count: 10 }), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3, 4, 5])))), test("with default count", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeLast(), toReadonlyArray(ctx), expectArrayEquals([5]))))), describe("takeWhile", test("exclusive", () => {
        Disposable.using(createCtx)((ctx) => pipe([1, 2, 3, 4, 5], fromReadonlyArray(ctx), m.takeWhile(lessThan(4)), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3])));
        Disposable.using(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.takeWhile(alwaysTrue), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3])));
        Disposable.using(createCtx)((ctx) => pipe([], fromReadonlyArray(ctx), m.takeWhile(alwaysTrue), toReadonlyArray(ctx), expectArrayEquals([])));
    }), test("inclusive", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3, 4, 5, 6], fromReadonlyArray(ctx), m.takeWhile(lessThan(4), { inclusive: true }), toReadonlyArray(ctx), expectArrayEquals([1, 2, 3, 4])))), test("when predicate throws", () => {
        const err = new Error();
        const predicate = (_) => {
            throw err;
        };
        pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.takeWhile(predicate), toReadonlyArray(ctx))), expectToThrowError(err));
    }))),
];
export default ReactiveContainerModuleTests;
