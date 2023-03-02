/// <reference types="./operators.d.ts" />

import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import { alwaysFalse, alwaysTrue, arrayEquality, increment, none, pipe, pipeLazy, returns, } from "../functions.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Runnable from "../rx/Runnable.js";
import { __now } from "../scheduling/Continuation.js";
import * as Scheduler from "../scheduling/Scheduler.js";
import * as Disposable from "../util/Disposable.js";
import { describe, expectArrayEquals, expectEquals, expectToThrowError, test, testAsync, } from "./testing.js";
export const bufferTests = (m) => describe("buffer", test("with multiple sub buffers", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], arrayEquality()))), test("last buffer is short", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8], m.fromReadonlyArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], arrayEquality()))));
export const catchErrorTests = (m) => describe("catchError", test("when source throws", () => {
    const e = {};
    pipe(m.throws({ raise: returns(e) }), m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
}), test("when source does not throw", pipeLazy([4, 5, 6], m.fromReadonlyArray(), m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([4, 5, 6]))));
export const concatTests = (m) => describe("concat", test("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))));
export const concatAllTests = (m) => describe("concatAll", test("concats the input containers in order", pipeLazy([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
], m.fromReadonlyArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("when an inner enumerator throw", () => {
    // FIXME: Implement me
}));
export const concatMapTests = (m) => describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
export const concatWithTests = (m) => describe("concatWith", test("concats two containers together", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
export const decodeWithCharsetTests = (m) => describe("decodeWithCharset", test("decoding ascii", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], m.fromReadonlyArray(), m.encodeUtf8(), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], m.fromReadonlyArray(), m.encodeUtf8(), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}));
export const distinctUntilChangedTests = (m) => describe("distinctUntilChanged", test("when source has duplicates in order", pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromReadonlyArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), test("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([]))), test("when equality operator throws", () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.distinctUntilChanged({ equality }), m.toReadonlyArray()), expectToThrowError(err));
}));
export const endWithTests = (m) => describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.endWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
export const everySatisfyTests = (m) => describe("everySatisfy", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([true]))), test("source values pass predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([true]))), test("source values fail predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([false]))));
export const forEachTests = (m) => describe("forEach", test("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], m.fromReadonlyArray(), m.forEach(x => {
        result.push(x + 10);
    }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe(result, expectArrayEquals([11, 12, 13]));
}), test("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
export const fromReadonlyArrayTests = (m) => describe("fromReadonlyArray", test("negative count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3, start: 4 }), m.toReadonlyArray(), expectArrayEquals([5, 4, 3]));
}), test("positive count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3, start: 4 }), m.toReadonlyArray(), expectArrayEquals([5, 6, 7]));
}), test("negative count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -100, start: 3 }), m.toReadonlyArray(), expectArrayEquals([4, 3, 2, 1]));
}), test("positive count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 100, start: 7 }), m.toReadonlyArray(), expectArrayEquals([8, 9]));
}), test("negative count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3 }), m.toReadonlyArray(), expectArrayEquals([9, 8, 7]));
}), test("positive count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
}));
export const flatMapIterableTests = (m) => describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], m.fromReadonlyArray(), m.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
export const ignoreElementsTests = (m) => describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.ignoreElements(), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()))));
export const keepTests = (m) => describe("keep", test("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], m.fromReadonlyArray(), m.keep(x => x > 5), m.toReadonlyArray(), expectArrayEquals([8, 10, 7]))), test("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.keep(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
export const mapTests = (m) => describe("map", test("maps every value", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), test("when mapper throws", () => {
    const err = new Error();
    const mapper = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(mapper), m.toReadonlyArray()), expectToThrowError(err));
}));
export const mapToTests = (m) => describe("mapTo", test("maps every value in the source to v", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.mapTo(2), m.toReadonlyArray(), expectArrayEquals([2, 2, 2]))));
export const pairwiseTests = (m) => describe("pairwise", test("when there are more than one input value", pipeLazy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
], arrayEquality()))), test("when the input only provides 1 value", pipeLazy([0], m.fromReadonlyArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([], arrayEquality()))));
export const reduceTests = (m) => describe("reduce", test("summing all values", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), m.toReadonlyArray(), expectArrayEquals([6]))));
export const repeatTests = (m) => describe("repeat", test("when always repeating", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(x => x < 1), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
export const retryTests = (m) => describe("retry", test("retrys the container on an exception", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), m.throws()), m.retry(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
export const scanTests = (m) => describe("scan", test("sums all the values in the array emitting intermediate values.", pipeLazy([1, 1, 1], m.fromReadonlyArray(), m.scan((a, b) => a + b, returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("throws when the scan function throws", () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan(scanner, returns(0)), m.toReadonlyArray()), expectToThrowError(err));
}), test("throws when the initial value function throws", () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan((a, b) => a + b, initialValue), m.toReadonlyArray()), expectToThrowError(err));
}));
export const scanAsyncTests = (m, mInner) => describe("scanAsync", test("fast lib, slow acc", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, fast acc", pipeLazy([1, 2, 3], m.fromReadonlyArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, slow acc", pipeLazy([1, 2, 3], m.fromReadonlyArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), test("fast lib, fast acc", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray()), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))));
export const skipFirstTests = (m) => describe("skipFirst", test("when skipped source has additional elements", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.skipFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([3]))), test("when all elements are skipped", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.skipFirst({ count: 4 }), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()))));
export const containsTests = (m) => describe("contains", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1), m.toReadonlyArray(), expectArrayEquals([false]))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1), m.toReadonlyArray(), expectArrayEquals([true]))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1), m.toReadonlyArray(), expectArrayEquals([false]))));
export const startWithTests = (m) => describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.startWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1]))));
export const takeFirstTests = (m) => describe("takeFirst", test("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), test("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), test("with default count", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), test("when count is 0", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst({ count: 0 }), m.toReadonlyArray(), expectArrayEquals([]))));
export const takeLastTests = (m) => describe("takeLast", test("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([3, 4, 5]))), test("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast(), m.toReadonlyArray(), expectArrayEquals([5]))));
export const takeWhileTests = (m) => describe("takeWhile", test("exclusive", () => {
    pipe([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeWhile(x => x < 4), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()));
}), test("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromReadonlyArray(), m.takeWhile(x => x < 4, { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), test("when predicate throws", () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
export const throwIfEmptyTests = (m) => describe("throwIfEmpty", test("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
}), test("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => {
        throw error;
    }), m.toReadonlyArray()), expectToThrowError(error));
}), test("when source is not empty", pipeLazy([1], m.fromReadonlyArray(), m.throwIfEmpty(() => undefined), m.toReadonlyArray(), expectArrayEquals([1]))));
export const toEnumerableTests = (m) => describe("toEnumerable", test("with an enumerable observable", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray(), m.toEnumerable(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))));
export const toObservableTests = (m) => testAsync("toObservable", async () => {
    const scheduler = Scheduler.createHostScheduler();
    // FIXME: This should be a generic test
    try {
        const result = await pipe([0, 1, 2, 3, 4], m.fromReadonlyArray(), m.toObservable(), Observable.buffer(), Observable.toPromise(scheduler));
        pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
});
export const toRunnableTests = (m) => describe("toRunnable", test("without delay", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("with delay", pipeLazy([9, 9, 9, 9], m.fromReadonlyArray(), m.toRunnable({ delay: 1 }), Runnable.map(_ => __now()), Runnable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3]))));
export const zipTests = (m) => describe("zip", test("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
], arrayEquality()))), test("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()), pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5, 1],
    [2, 4, 2],
    [3, 3, 3],
], arrayEquality()))));
export const zipWithTests = (m) => describe("zipWith", test("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))));
