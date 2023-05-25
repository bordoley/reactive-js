/// <reference types="./EnumerableContainerModuleTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import * as Scheduler from "../../Scheduler.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectToHaveBeenCalledTimes, expectToThrowError, expectTrue, mockFn, test, } from "../../__internal__/testing.js";
import { alwaysFalse, alwaysTrue, arrayEquality, greaterThan, lessThan, none, pipe, pipeLazy, returns, } from "../../functions.js";
import { DisposableLike_error, DisposableLike_isDisposed, EnumeratorLike_hasCurrent, EnumeratorLike_move, ObservableLike_isDeferred, PauseableLike_resume, SchedulerLike_schedule, VirtualTimeSchedulerLike_run, } from "../../types.js";
import ContainerModuleTests from "./ContainerModuleTests.js";
const EnumerableContainerModuleTests = (m) => [
    ContainerModuleTests(m, () => Disposable.disposed, () => m.fromReadonlyArray(), () => m.toReadonlyArray()),
    describe("EnumerableContainerModule", describe("concat", test("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatAll", test("concats the input containers in order", pipeLazy([
        pipe([1, 2, 3], m.fromReadonlyArray()),
        pipe([4, 5, 6], m.fromReadonlyArray()),
    ], m.fromReadonlyArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("contains", describe("strict equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1), expectEquals(false)))), describe("custom equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))))), describe("empty", test("returns an empty enumerator", () => {
        const enumerator = pipe(m.empty(), m.enumerate());
        expectFalse(enumerator[EnumeratorLike_move]());
        expectTrue(enumerator[DisposableLike_isDisposed]);
    })), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.endWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("enumerate", test("with higher order observable and no delay", pipeLazy(Observable.generate(_ => pipe(1, m.fromValue()), returns(m.empty())), Observable.takeFirst({ count: 100 }), m.fromEnumerable(), m.concatAll(), m.takeFirst({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))), test("calling move on a completed Enumerator", () => {
        const enumerator = pipe([1, 2, 3], m.fromReadonlyArray(), m.enumerate());
        while (enumerator[EnumeratorLike_move]()) { }
        expectFalse(enumerator[EnumeratorLike_hasCurrent]);
        expectTrue(enumerator[DisposableLike_isDisposed]);
        expectIsNone(enumerator[DisposableLike_error]);
        expectFalse(enumerator[EnumeratorLike_move]());
    })), describe("everySatisfy", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(true))), test("source values pass predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysTrue), expectEquals(true))), test("source values fail predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(false)))), describe("first", test("returns the first item in the src", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.first(), expectEquals(1)))), describe("flow", test("flow a generating source", () => {
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
    })), describe("fromFactory", test("it produces the factory result", pipeLazy(() => 1, m.fromFactory(), m.toReadonlyArray(), expectArrayEquals([1])))), describe("fromOptional", test("when none", pipeLazy(none, m.fromOptional(), m.toReadonlyArray(), expectArrayEquals([]))), test("when some", pipeLazy(1, m.fromOptional(), m.toReadonlyArray(), expectArrayEquals([1])))), describe("fromReadonlyArray", test("negative count with start index", () => {
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
    })), describe("fromValue", test("it produces the value", pipeLazy(none, m.fromValue(), m.toReadonlyArray(), expectArrayEquals([none])))), describe("last", test("empty source", () => {
        const result = pipe([], m.fromReadonlyArray(), m.last());
        pipe(result, expectIsNone);
    }), test("it returns the last value", () => {
        const result = pipe([1, 2, 3], m.fromReadonlyArray(), m.last());
        pipe(result, expectEquals(3));
    })), describe("noneSatisfy", test("no values satisfy the predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("empty input", pipeLazy([], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("some satisfy", pipeLazy([1, 2, 30, 4, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectFalse))), describe("reduce", test("summing all values", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("repeat", test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(lessThan(1)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
        const err = new Error();
        pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
            throw err;
        }), m.toReadonlyArray()), expectToThrowError(err));
    })), describe("someSatisfy", test("some satisfies predicate", pipeLazy([1, 2, 30, 4], m.fromReadonlyArray(), m.someSatisfy(greaterThan(5)), expectTrue))), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.startWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("toIterable", test("when the source completes without error", () => {
        const iter = pipe([0, 1, 2], m.fromReadonlyArray(), m.toIterable());
        pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
    })), describe("toObservable", test("returns a  deferred observable", () => {
        const obs = pipe([1, 2, 3], m.fromReadonlyArray(), m.toObservable());
        expectTrue(obs[ObservableLike_isDeferred]);
        pipe(obs, Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    })), describe("zip", test("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 5],
        [2, 4],
        [3, 3],
        [4, 2],
        [5, 1],
    ], arrayEquality()))), test("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()), pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 5, 1],
        [2, 4, 2],
        [3, 3, 3],
    ], arrayEquality())))), describe("zipWith", test("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 1],
        [2, 2],
        [3, 3],
    ], arrayEquality()))))),
];
export default EnumerableContainerModuleTests;
