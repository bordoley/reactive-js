/// <reference types="./RunnableTypeClassTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import * as Scheduler from "../../Scheduler.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectToHaveBeenCalledTimes, expectTrue, mockFn, test, } from "../../__internal__/testing.js";
import { alwaysFalse, alwaysTrue, arrayEquality, greaterThan, pipe, pipeLazy, returns, } from "../../functions.js";
import { DisposableLike_isDisposed, PauseableLike_resume, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../types.js";
import DeferredTypeClassTests from "./DeferredTypeClassTests.js";
const RunnableTypeClassTests = (m) => [
    ...DeferredTypeClassTests(m, () => (c) => m.toReadonlyArray()(c)),
    describe("RunnableTypeClass", describe("contains", describe("strict equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1), expectEquals(false)))), describe("custom equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))))), describe("everySatisfy", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(true))), test("source values pass predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysTrue), expectEquals(true))), test("source values fail predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(false)))), describe("flow", test("flow a generating source", () => {
        const scheduler = Scheduler.createVirtualTimeScheduler();
        const flowed = pipe([0, 1, 2], m.fromReadonlyArray(), m.flow(scheduler), Disposable.addTo(scheduler));
        scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), { delay: 2 });
        const f = mockFn();
        const subscription = pipe(flowed, Observable.withCurrentTime((time, v) => [time, v]), Observable.forEach(([time, v]) => {
            f(time, v);
        }), Observable.subscribe(scheduler), Disposable.addTo(scheduler));
        scheduler[VirtualTimeSchedulerLike_run]();
        pipe(f, expectToHaveBeenCalledTimes(3));
        pipe(f.calls, expectArrayEquals([
            [2, 0],
            [2, 1],
            [2, 2],
        ], arrayEquality()));
        pipe(subscription[DisposableLike_isDisposed], expectTrue);
    })), describe("m.fromReadonlyArray", test("negative count with start index", () => {
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
    })), describe("last", test("empty source", () => {
        const result = pipe([], m.fromReadonlyArray(), m.last());
        pipe(result, expectIsNone);
    }), test("it returns the last value", () => {
        const result = pipe([1, 2, 3], m.fromReadonlyArray(), m.last());
        pipe(result, expectEquals(3));
    })), describe("noneSatisfy", test("no values satisfy the predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("empty input", pipeLazy([], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("some satisfy", pipeLazy([1, 2, 30, 4, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectFalse))), describe("reduce", test("summing all values", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("someSatisfy", test("some satisfies predicate", pipeLazy([1, 2, 30, 4], m.fromReadonlyArray(), m.someSatisfy(greaterThan(5)), expectTrue)))),
];
export default RunnableTypeClassTests;
