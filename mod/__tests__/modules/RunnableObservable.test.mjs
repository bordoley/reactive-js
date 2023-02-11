/// <reference types="./RunnableObservable.test.d.ts" />
import Container from '../../containers/Container.mjs';
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, identity, increment, sum, newInstance } from '../../functions.mjs';
import RunnableObservable from '../../rx/RunnableObservable.mjs';
import Scheduler from '../../scheduling/Scheduler.mjs';
import Disposable from '../../util/Disposable.mjs';
import { zipTests as zipTests$1, bufferTests, catchErrorTests, concatTests, concatAllTests, concatMapTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, fromArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, retryTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipWithTests } from '../operators.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, testAsync, expectPromiseToThrow, expectToThrowError, testModule } from '../testing.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(RunnableObservable.combineLatest(pipe(RunnableObservable.generate(incrementBy(2), returns(1), { delay: 2 }), RunnableObservable.takeFirst({ count: 3 })), pipe(RunnableObservable.generate(incrementBy(2), returns(0), { delay: 3 }), RunnableObservable.takeFirst({ count: 2 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 3 })),
    pipe([4, 5, 6], ReadonlyArray.toRunnableObservable()),
    pipe([7, 8, 9], ReadonlyArray.toRunnableObservable({ delay: 2 })),
], ReadonlyArray.toRunnableObservable({ delay: 5 }), RunnableObservable.exhaust(), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(RunnableObservable.merge(pipe([0, 2, 3, 5, 6], ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(RunnableObservable.merge(pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2 })), Container.throws(RunnableObservable, { delay: 5 })), RunnableObservable.toReadonlyArray()), expectToThrow)));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(RunnableObservable.empty({ delay: 1 }), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray(), expectArrayEquals([]))), createTest("when source throw", pipeLazy(pipeLazy(Container.throws(RunnableObservable), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray()), expectToThrow, identity)), createTest("concating arrays", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), Container.concatMap({
    concatAll: RunnableObservable.switchAll,
    map: RunnableObservable.map,
}, _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 0 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("overlapping notification", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 4 }), Container.concatMap({
    concatAll: RunnableObservable.switchAll,
    map: RunnableObservable.map,
}, _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const takeUntilTests = createDescribe("takeUntil", createTest("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.takeUntil(pipe([1], ReadonlyArray.toRunnableObservable({ delay: 3, delayStart: true }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const throttleTests = createDescribe("throttle", createTest("first", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 100 }), RunnableObservable.throttle(50, { mode: "first" }), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), createTest("last", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 200 }), RunnableObservable.throttle(50, { mode: "last" }), RunnableObservable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), createTest("interval", pipeLazy(RunnableObservable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), RunnableObservable.takeFirst({ count: 200 }), RunnableObservable.throttle(75, { mode: "interval" }), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))));
const timeoutTests = createDescribe("timeout", createTest("throws when a timeout occurs", pipeLazy(pipeLazy([1], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }), RunnableObservable.timeout(1), RunnableObservable.toReadonlyArray()), expectToThrow)), createTest("when timeout is greater than observed time", pipeLazy([1], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }), RunnableObservable.timeout(3), RunnableObservable.toReadonlyArray(), expectArrayEquals([1]))));
const toPromiseTests = createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = Scheduler.createHostScheduler();
    try {
        await pipe(pipe(RunnableObservable.empty(), RunnableObservable.toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
}));
const withLatestFromTest = createDescribe("withLatestFrom", createTest("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(pipe([0, 1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 })), (a, b) => [a, b]), RunnableObservable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), createTest("when latest produces no values", pipeLazy([0], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(RunnableObservable.empty(), sum), RunnableObservable.toReadonlyArray(), expectArrayEquals([]))), createTest("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.withLatestFrom(Container.throws(RunnableObservable, { raise: returns(error) }), sum), RunnableObservable.toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipTests = createDescribe("zip", zipTests$1(RunnableObservable), createTest("with synchronous and non-synchronous sources", pipeLazy(RunnableObservable.zip(pipe([1, 2], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([2, 3], ReadonlyArray.toRunnableObservable()), pipe([3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(RunnableObservable.zip(pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 5 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(RunnableObservable.zip(Container.throws(RunnableObservable), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable())), RunnableObservable.map(([, b]) => b), RunnableObservable.toReadonlyArray()), expectToThrow)));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(RunnableObservable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }))), RunnableObservable.map(([a, b]) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = createDescribe("zipWithLatestFrom", createTest("when source throws", pipeLazy(pipeLazy(Container.throws(RunnableObservable), RunnableObservable.zipWithLatestFrom(pipe([1], ReadonlyArray.toRunnableObservable()), (_, b) => b), RunnableObservable.toReadonlyArray()), expectToThrow)), createTest("when other throws", pipeLazy(pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.zipWithLatestFrom(Container.throws(RunnableObservable), (_, b) => b), RunnableObservable.toReadonlyArray()), expectToThrow)), createTest("when other completes first", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }), RunnableObservable.zipWithLatestFrom(pipe([2, 4], ReadonlyArray.toRunnableObservable({ delay: 1 })), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([3, 6]))), createTest("when this completes first", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }), RunnableObservable.zipWithLatestFrom(pipe([2, 4, 6, 8], ReadonlyArray.toRunnableObservable({ delay: 1 })), (a, b) => a + b), RunnableObservable.toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
testModule("RunnableObservable", bufferTests(RunnableObservable), catchErrorTests(RunnableObservable), combineLatestTests, concatTests(RunnableObservable), concatAllTests(RunnableObservable), concatMapTests(RunnableObservable), concatWithTests(RunnableObservable), decodeWithCharsetTests(RunnableObservable), distinctUntilChangedTests(RunnableObservable), endWithTests(RunnableObservable), everySatisfyTests(RunnableObservable), exhaustTests, forEachTests(RunnableObservable), fromArrayTests(RunnableObservable), ignoreElementsTests(RunnableObservable), keepTests(RunnableObservable), mapTests(RunnableObservable), mapToTests(RunnableObservable), mergeTests, pairwiseTests(RunnableObservable), reduceTests(RunnableObservable), retryTests(RunnableObservable), scanTests(RunnableObservable), scanAsyncTests(RunnableObservable, RunnableObservable), skipFirstTests(RunnableObservable), someSatisfyTests(RunnableObservable), startWithTests(RunnableObservable), switchAllTests, takeFirstTests(RunnableObservable), takeLastTests(RunnableObservable), takeUntilTests, takeWhileTests(RunnableObservable), throttleTests, throwIfEmptyTests(RunnableObservable), timeoutTests, withLatestFromTest, zipWithTests(RunnableObservable), toPromiseTests, zipTests, zipLatestTests, zipWithLatestTests);
