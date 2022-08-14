/// <reference types="./ObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectEquals, expectTrue, testAsync, expectPromiseToThrow, expectToThrowError, testModule } from '../../__internal__/__internal__testing.mjs';
import { throws, concatMap } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, raise, identity, increment, sum, newInstance } from '../../functions.mjs';
import { toReadonlyArray as toReadonlyArray$1 } from '../../ix/EnumerableLike.mjs';
import { generateObservable, emptyObservable, deferRunnableObservableT } from '../../rx.mjs';
import { combineLatest, takeFirst, toReadonlyArray, merge, onSubscribe, subscribe, concat, retry, share, zip, map, forEach, takeUntil, timeout, throttle, toEnumerable, toFlowable, toPromise, withLatestFrom, zipLatest, zipWithLatestFrom } from '../../rx/ObservableLike.mjs';
import { exhaust, mapT, switchAll, switchAllT, zipT, toReadonlyArrayT, bufferT, catchErrorT, concatT, decodeWithCharsetT, distinctUntilChangedT, everySatisfyT, forEachT, keepT, pairwiseT, reduceT, scanT, scanAsyncT, skipFirstT, someSatisfyT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT } from '../../rx/RunnableObservableLike.mjs';
import { createVirtualTimeScheduler, createHostScheduler } from '../../scheduling.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule, getCurrentTime } from '../../scheduling/SchedulerLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import { getException, dispose, isDisposed } from '../../util/DisposableLike.mjs';
import { zipTests as zipTests$1, bufferTests, catchErrorTests, concatTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(combineLatest(pipe(generateObservable(incrementBy(2), returns(1), { delay: 2 }), takeFirst({ count: 3 })), pipe(generateObservable(incrementBy(2), returns(0), { delay: 3 }), takeFirst({ count: 2 }))), toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], toObservable({ delay: 3 })),
    pipe([4, 5, 6], toObservable()),
    pipe([7, 8, 9], toObservable({ delay: 2 })),
], toObservable({ delay: 5 }), exhaust(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], toObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], toObservable({ delay: 2, delayStart: true }))), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(merge(pipe([1, 4, 7], toObservable({ delay: 2 })), throws({ fromArray: toObservable, ...mapT }, { delay: 5 })(raise)), toReadonlyArray()), expectToThrow)));
const onSubscribeTests = createDescribe("onSubscribe", createTest("when subscribe function returns a teardown function", () => {
    const scheduler = createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], toObservable(), onSubscribe(f), subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    run(scheduler);
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), createTest("when callback function throws", () => {
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe([1], toObservable(), onSubscribe(raise), subscribe(scheduler));
    pipe(subscription, getException, expectIsSome);
}));
const retryTests = createDescribe("retry", createTest("repeats the observable n times", pipeLazy(concat(pipe([1, 2, 3], toObservable()), pipe(raise, throws({
    fromArray: toObservable,
    ...mapT,
}))), retry(), takeFirst({ count: 6 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const shareTests = createDescribe("share", createTest("shared observable zipped with itself", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], toObservable({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip(shared, shared), map(([a, b]) => a + b), forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
}));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(emptyObservable({ delay: 1 }), switchAll(), toReadonlyArray(), expectArrayEquals([]))), createTest("when source throw", pipeLazy(pipeLazy(raise, throws({
    fromArray: toObservable,
    ...mapT,
}), switchAll(), toReadonlyArray()), expectToThrow, identity)), createTest("concating arrays", pipeLazy([1, 2, 3], toObservable({ delay: 1 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toObservable({ delay: 0 }))), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("overlapping notification", pipeLazy([1, 2, 3], toObservable({ delay: 4 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toObservable({ delay: 2 }))), toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const takeUntilTests = createDescribe("takeUntil", createTest("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))), toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const timeoutTests = createDescribe("timeout", createTest("throws when a timeout occurs", pipeLazy(pipeLazy([1], toObservable({ delay: 2, delayStart: true }), timeout(1), toReadonlyArray()), expectToThrow)), createTest("when timeout is greater than observed time", pipeLazy([1], toObservable({ delay: 2, delayStart: true }), timeout(3), toReadonlyArray(), expectArrayEquals([1]))));
const throttleTests = createDescribe("throttle", createTest("first", pipeLazy(generateObservable(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 100 }), throttle(50, { mode: "first" }), toReadonlyArray(), expectArrayEquals([0, 49, 99]))), createTest("last", pipeLazy(generateObservable(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 200 }), throttle(50, { mode: "last" }), toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), createTest("interval", pipeLazy(generateObservable(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 200 }), throttle(75, { mode: "interval" }), toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))));
const toEnumerableTests = createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], toObservable(), toEnumerable(), toReadonlyArray$1(), expectArrayEquals([1, 2, 3, 4]))));
const toFlowableTests = createDescribe("toFlowable", createTest("flow a generating source", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generateObservable(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), toFlowable(), stream(scheduler));
    pipe(generateStream, dispatch("resume"));
    pipe(scheduler, schedule(pipeLazy("pause", dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(pipeLazy("resume", dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(pipeLazy(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, forEach(x => {
        f(getCurrentTime(scheduler), x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, isDisposed, expectTrue);
}));
const toPromiseTests = createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
        await pipe(pipe(emptyObservable(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
}));
const withLatestFromTest = createDescribe("withLatestFrom", createTest("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], toObservable({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], toObservable({ delay: 2 })), (a, b) => [
    a,
    b,
]), toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), createTest("when latest produces no values", pipeLazy([0], toObservable({ delay: 1 }), withLatestFrom(emptyObservable(), sum), toReadonlyArray(), expectArrayEquals([]))), createTest("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], toObservable({ delay: 1 }), withLatestFrom(throws({ fromArray: toObservable, ...mapT })(returns(error)), sum), toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipTests = createDescribe("zip", ...zipTests$1({
    fromArray: toObservable,
    ...zipT,
    ...toReadonlyArrayT,
}).tests, createTest("with synchronous and non-synchronous sources", pipeLazy(zip(pipe([1, 2], toObservable({ delay: 1 })), pipe([2, 3], toObservable()), pipe([3, 4, 5], toObservable({ delay: 1 }))), toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(zip(pipe([1, 2, 3], toObservable({ delay: 1 })), pipe([1, 2, 3], toObservable({ delay: 5 }))), toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(zip(pipe(raise, throws({ fromArray: toObservable, ...mapT })), pipe([1, 2, 3], toObservable())), map(([, b]) => b), toReadonlyArray()), expectToThrow)));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], toObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], toObservable({ delay: 2, delayStart: true }))), map(([a, b]) => a + b), toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = createDescribe("zipWithLatestFrom", createTest("when source throws", pipeLazy(pipeLazy(throws({ fromArray: toObservable, ...mapT })(raise), zipWithLatestFrom(pipe([1], toObservable()), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other throws", pipeLazy(pipeLazy([1, 2, 3], toObservable({ delay: 1 }), zipWithLatestFrom(throws({ fromArray: toObservable, ...mapT })(raise), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other completes first", pipeLazy([1, 2, 3], toObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4], toObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6]))), createTest("when this completes first", pipeLazy([1, 2, 3], toObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4, 6, 8], toObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
testModule("ObservableLike", bufferTests({
    fromArray: toObservable,
    ...bufferT,
    ...toReadonlyArrayT,
}), catchErrorTests({
    fromArray: toObservable,
    ...catchErrorT,
    ...mapT,
    ...toReadonlyArrayT,
}), combineLatestTests, concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toObservable,
    ...deferRunnableObservableT,
    ...decodeWithCharsetT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), everySatisfyTests({
    fromArray: toObservable,
    ...everySatisfyT,
    ...toReadonlyArrayT,
}), exhaustTests, forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toObservable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
}), mergeTests, onSubscribeTests, pairwiseTests({
    fromArray: toObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), reduceTests({
    fromArray: toObservable,
    ...reduceT,
    ...toReadonlyArrayT,
}), retryTests, scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
}), scanAsyncTests({
    fromArray: toObservable,
    ...scanAsyncT,
    ...toReadonlyArrayT,
}, {
    fromArray: toObservable,
}), shareTests, skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), someSatisfyTests({
    fromArray: toObservable,
    ...someSatisfyT,
    ...toReadonlyArrayT,
}), switchAllTests, takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeUntilTests, takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throttleTests, throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), timeoutTests, toEnumerableTests, toFlowableTests, toPromiseTests, withLatestFromTest, zipTests, zipLatestTests, zipWithLatestTests);
