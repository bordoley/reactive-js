/// <reference types="./RunnableObservable.test.d.ts" />

import { bufferTests, catchErrorTests, concatAllTests, concatMapTests, concatTests, concatWithTests, containsTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, retryTests, scanAsyncTests, scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toRunnableTests, zipTests as zipOperatorTests, zipWithTests, } from "../../__tests__/operators.js";
import { describe, expectArrayEquals, expectEquals, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, test, testModule, } from "../../__tests__/testing.js";
import * as ReadonlyArray from "../../containers/ReadonlyArray.js";
import { arrayEquality, identity, increment, incrementBy, newInstance, pipe, pipeLazy, returns, } from "../../functions.js";
import { ThrottleMode_first, ThrottleMode_interval, ThrottleMode_last, } from "../../rx.js";
import * as Pauseable from "../../scheduling/Pauseable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import * as VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import * as Streamable from "../../streaming/Streamable.js";
import * as Disposable from "../../util/Disposable.js";
import * as Observable from "../Observable.js";
import * as RunnableObservable from "../RunnableObservable.js";
const combineLatestTests = describe("combineLatest", test("combineLatest", pipeLazy(RunnableObservable.combineLatest(pipe(RunnableObservable.generate(incrementBy(2), returns(1), { delay: 2 }), RunnableObservable.takeFirst({ count: 3 })), pipe(RunnableObservable.generate(incrementBy(2), returns(0), { delay: 3 }), RunnableObservable.takeFirst({ count: 2 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const exhaustTests = describe("exhaust", test("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 3 })),
    pipe([4, 5, 6], ReadonlyArray.toRunnableObservable()),
    pipe([7, 8, 9], ReadonlyArray.toRunnableObservable({ delay: 2 })),
], ReadonlyArray.toRunnableObservable({ delay: 5 }), RunnableObservable.exhaust(), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = describe("merge", test("two arrays", pipeLazy(RunnableObservable.merge(pipe([0, 2, 3, 5, 6], ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", pipeLazy(pipeLazy(RunnableObservable.merge(pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2 })), RunnableObservable.throws({ delay: 5 })), RunnableObservable.toReadonlyArray()), expectToThrow)));
const switchAllTests = describe("switchAll", test("with empty source", pipeLazy(RunnableObservable.empty({ delay: 1 }), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray(), expectArrayEquals([]))), test("when source throw", pipeLazy(pipeLazy(RunnableObservable.throws(), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray()), expectToThrow, identity)), test("concating arrays", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.switchMap(_ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 0 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("overlapping notification", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 4 }), RunnableObservable.switchMap(_ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const takeUntilTests = describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.takeUntil(pipe([1], ReadonlyArray.toRunnableObservable({ delay: 3, delayStart: true }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const throttleTests = describe("throttle", test("first", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 100 }), RunnableObservable.throttle(50, { mode: ThrottleMode_first }), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 200 }), RunnableObservable.throttle(50, { mode: ThrottleMode_last }), RunnableObservable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 200 }), RunnableObservable.throttle(75, { mode: ThrottleMode_interval }), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))));
const timeoutTests = describe("timeout", test("throws when a timeout occurs", pipeLazy(pipeLazy([1], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }), RunnableObservable.timeout(1), RunnableObservable.toReadonlyArray()), expectToThrow)), test("when timeout is greater than observed time", pipeLazy([1], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }), RunnableObservable.timeout(3), RunnableObservable.toReadonlyArray(), expectArrayEquals([1]))));
// FIXME Move these tests into container?
const toFlowableTests = describe("toFlowable", test("flow a generating source", () => {
    const scheduler = VirtualTimeScheduler.create();
    const generateStream = pipe(RunnableObservable.generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), RunnableObservable.toFlowable(), Streamable.stream(scheduler));
    Pauseable.resume(generateStream);
    pipe(scheduler, Scheduler.schedule(pipeLazy(generateStream, Pauseable.pause), {
        delay: 2,
    }));
    pipe(scheduler, Scheduler.schedule(pipeLazy(generateStream, Pauseable.resume), {
        delay: 4,
    }));
    pipe(scheduler, Scheduler.schedule(pipeLazy(generateStream, Disposable.dispose()), {
        delay: 6,
    }));
    const f = mockFn();
    const subscription = pipe(generateStream, Observable.forEach(x => {
        f(Scheduler.getCurrentTime(scheduler), x);
    }), Observable.subscribe(scheduler));
    VirtualTimeScheduler.run(scheduler);
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, Disposable.isDisposed, expectTrue);
}));
const withLatestFromTest = describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(pipe([0, 1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 })), (a, b) => [a, b]), RunnableObservable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", pipeLazy([0], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(RunnableObservable.empty(), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(RunnableObservable.throws({ raise: returns(error) }), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipTests = describe("zip", zipOperatorTests(RunnableObservable), test("with synchronous and non-synchronous sources", pipeLazy(RunnableObservable.zip(pipe([1, 2], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([2, 3], ReadonlyArray.toRunnableObservable()), pipe([3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), test("fast with slow", pipeLazy(RunnableObservable.zip(pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 5 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), test("when source throws", pipeLazy(pipeLazy(RunnableObservable.zip(RunnableObservable.throws(), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable())), RunnableObservable.map(([, b]) => b), RunnableObservable.toReadonlyArray()), expectToThrow)));
const zipLatestTests = describe("zipLatest", test("zipLatestWith", pipeLazy(RunnableObservable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }))), RunnableObservable.map(([a, b]) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = describe("zipWithLatestFrom", test("when source throws", pipeLazy(pipeLazy(RunnableObservable.throws(), RunnableObservable.zipWithLatestFrom(pipe([1], ReadonlyArray.toRunnableObservable()), (_, b) => b), RunnableObservable.toReadonlyArray()), expectToThrow)), test("when other throws", pipeLazy(pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.zipWithLatestFrom(RunnableObservable.throws(), (_, b) => b), RunnableObservable.toReadonlyArray()), expectToThrow)), test("when other completes first", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }), RunnableObservable.zipWithLatestFrom(pipe([2, 4], ReadonlyArray.toRunnableObservable({ delay: 1 })), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([3, 6]))), test("when this completes first", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }), RunnableObservable.zipWithLatestFrom(pipe([2, 4, 6, 8], ReadonlyArray.toRunnableObservable({ delay: 1 })), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
testModule("RunnableObservable", bufferTests(RunnableObservable), catchErrorTests(RunnableObservable), combineLatestTests, concatTests(RunnableObservable), concatAllTests(RunnableObservable), concatMapTests(RunnableObservable), concatWithTests(RunnableObservable), containsTests(RunnableObservable), decodeWithCharsetTests(RunnableObservable), distinctUntilChangedTests(RunnableObservable), endWithTests(RunnableObservable), everySatisfyTests(RunnableObservable), exhaustTests, forEachTests(RunnableObservable), fromReadonlyArrayTests(RunnableObservable), ignoreElementsTests(RunnableObservable), keepTests(RunnableObservable), mapTests(RunnableObservable), mapToTests(RunnableObservable), mergeTests, pairwiseTests(RunnableObservable), reduceTests(RunnableObservable), retryTests(RunnableObservable), scanTests(RunnableObservable), scanAsyncTests(RunnableObservable, RunnableObservable), skipFirstTests(RunnableObservable), startWithTests(RunnableObservable), switchAllTests, takeFirstTests(RunnableObservable), takeLastTests(RunnableObservable), takeUntilTests, takeWhileTests(RunnableObservable), throttleTests, throwIfEmptyTests(RunnableObservable), timeoutTests, toFlowableTests, toRunnableTests(RunnableObservable), withLatestFromTest, zipWithTests(RunnableObservable), zipTests, zipLatestTests, zipWithLatestTests);
