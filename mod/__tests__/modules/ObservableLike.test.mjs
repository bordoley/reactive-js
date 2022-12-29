/// <reference types="./ObservableLike.test.d.ts" />
import { throws, concatMap } from '../../containers/ContainerLike.mjs';
import { toRunnableObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, raise, identity, increment, sum, newInstance } from '../../functions.mjs';
import { toReadonlyArray as toReadonlyArray$1 } from '../../ix/EnumerableLike.mjs';
import { c as combineLatest, g as generate, b as takeFirst, a as toReadonlyArray, m as merge, o as onSubscribe, s as subscribe, d as concat, r as retry, e as share, z as zip, h as map, f as forEach, i as empty, j as takeUntil, k as timeout, l as throttle, n as toEnumerable, t as toFlowable, p as toPromise, w as withLatestFrom, q as zipLatest, u as zipWithLatestFrom } from '../../ObservableLike-0a1b87fb.mjs';
import { exhaust, mapT, switchAll, switchAllT, zipT, toReadonlyArrayT, bufferT, catchErrorT, concatT, deferT, decodeWithCharsetT, distinctUntilChangedT, everySatisfyT, forEachT, keepT, pairwiseT, reduceT, scanT, scanAsyncT, skipFirstT, someSatisfyT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT } from '../../rx/RunnableObservableLike.mjs';
import { run } from '../../scheduling/ContinuationLike.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule, getCurrentTime, createHostScheduler } from '../../scheduling/SchedulerLike.mjs';
import { create } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { getException, dispose, isDisposed } from '../../util/DisposableLike.mjs';
import { zipTests as zipTests$1, bufferTests, catchErrorTests, concatTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectEquals, expectTrue, testAsync, expectPromiseToThrow, expectToThrowError, testModule } from '../testing.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(combineLatest(pipe(generate(incrementBy(2), returns(1), { delay: 2 }), takeFirst({ count: 3 })), pipe(generate(incrementBy(2), returns(0), { delay: 3 }), takeFirst({ count: 2 }))), toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], toRunnableObservable({ delay: 3 })),
    pipe([4, 5, 6], toRunnableObservable()),
    pipe([7, 8, 9], toRunnableObservable({ delay: 2 })),
], toRunnableObservable({ delay: 5 }), exhaust(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], toRunnableObservable({ delay: 2, delayStart: true }))), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(merge(pipe([1, 4, 7], toRunnableObservable({ delay: 2 })), throws({ fromArray: toRunnableObservable, ...mapT }, { delay: 5 })(raise)), toReadonlyArray()), expectToThrow)));
const onSubscribeTests = createDescribe("onSubscribe", createTest("when subscribe function returns a teardown function", () => {
    const scheduler = create();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], toRunnableObservable(), onSubscribe(f), subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    run(scheduler);
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), createTest("when callback function throws", () => {
    const scheduler = create();
    const subscription = pipe([1], toRunnableObservable(), onSubscribe(raise), subscribe(scheduler));
    pipe(subscription, getException, expectIsSome);
}));
const retryTests = createDescribe("retry", createTest("repeats the observable n times", pipeLazy(concat(pipe([1, 2, 3], toRunnableObservable()), pipe(raise, throws({
    fromArray: toRunnableObservable,
    ...mapT,
}))), retry(), takeFirst({ count: 6 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const shareTests = createDescribe("share", createTest("shared observable zipped with itself", () => {
    const scheduler = create();
    const shared = pipe([1, 2, 3], toRunnableObservable({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip(shared, shared), map(([a, b]) => a + b), forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
}));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(empty({ delay: 1 }), switchAll(), toReadonlyArray(), expectArrayEquals([]))), createTest("when source throw", pipeLazy(pipeLazy(raise, throws({
    fromArray: toRunnableObservable,
    ...mapT,
}), switchAll(), toReadonlyArray()), expectToThrow, identity)), createTest("concating arrays", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 1 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toRunnableObservable({ delay: 0 }))), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("overlapping notification", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 4 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toRunnableObservable({ delay: 2 }))), toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const takeUntilTests = createDescribe("takeUntil", createTest("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], toRunnableObservable({ delay: 1 }), takeUntil(pipe([1], toRunnableObservable({ delay: 3, delayStart: true }))), toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const timeoutTests = createDescribe("timeout", createTest("throws when a timeout occurs", pipeLazy(pipeLazy([1], toRunnableObservable({ delay: 2, delayStart: true }), timeout(1), toReadonlyArray()), expectToThrow)), createTest("when timeout is greater than observed time", pipeLazy([1], toRunnableObservable({ delay: 2, delayStart: true }), timeout(3), toReadonlyArray(), expectArrayEquals([1]))));
const throttleTests = createDescribe("throttle", createTest("first", pipeLazy(generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 100 }), throttle(50, { mode: "first" }), toReadonlyArray(), expectArrayEquals([0, 49, 99]))), createTest("last", pipeLazy(generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 200 }), throttle(50, { mode: "last" }), toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), createTest("interval", pipeLazy(generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), takeFirst({ count: 200 }), throttle(75, { mode: "interval" }), toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))));
const toEnumerableTests = createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], toRunnableObservable(), toEnumerable(), toReadonlyArray$1(), expectArrayEquals([1, 2, 3, 4]))));
const toFlowableTests = createDescribe("toFlowable", createTest("flow a generating source", () => {
    const scheduler = create();
    const generateStream = pipe(generate(increment, returns(-1), {
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
        await pipe(pipe(empty(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
}));
const withLatestFromTest = createDescribe("withLatestFrom", createTest("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], toRunnableObservable({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], toRunnableObservable({ delay: 2 })), (a, b) => [a, b]), toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), createTest("when latest produces no values", pipeLazy([0], toRunnableObservable({ delay: 1 }), withLatestFrom(empty(), sum), toReadonlyArray(), expectArrayEquals([]))), createTest("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], toRunnableObservable({ delay: 1 }), withLatestFrom(throws({ fromArray: toRunnableObservable, ...mapT })(returns(error)), sum), toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipTests = createDescribe("zip", ...zipTests$1({
    fromArray: toRunnableObservable,
    ...zipT,
    ...toReadonlyArrayT,
}).tests, createTest("with synchronous and non-synchronous sources", pipeLazy(zip(pipe([1, 2], toRunnableObservable({ delay: 1 })), pipe([2, 3], toRunnableObservable()), pipe([3, 4, 5], toRunnableObservable({ delay: 1 }))), toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(zip(pipe([1, 2, 3], toRunnableObservable({ delay: 1 })), pipe([1, 2, 3], toRunnableObservable({ delay: 5 }))), toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(zip(pipe(raise, throws({ fromArray: toRunnableObservable, ...mapT })), pipe([1, 2, 3], toRunnableObservable())), map(([, b]) => b), toReadonlyArray()), expectToThrow)));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], toRunnableObservable({ delay: 2, delayStart: true }))), map(([a, b]) => a + b), toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = createDescribe("zipWithLatestFrom", createTest("when source throws", pipeLazy(pipeLazy(throws({ fromArray: toRunnableObservable, ...mapT })(raise), zipWithLatestFrom(pipe([1], toRunnableObservable()), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other throws", pipeLazy(pipeLazy([1, 2, 3], toRunnableObservable({ delay: 1 }), zipWithLatestFrom(throws({ fromArray: toRunnableObservable, ...mapT })(raise), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4], toRunnableObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6]))), createTest("when this completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4, 6, 8], toRunnableObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
testModule("ObservableLike", bufferTests({
    fromArray: toRunnableObservable,
    ...bufferT,
    ...toReadonlyArrayT,
}), catchErrorTests({
    fromArray: toRunnableObservable,
    ...catchErrorT,
    ...mapT,
    ...toReadonlyArrayT,
}), combineLatestTests, concatTests({
    fromArray: toRunnableObservable,
    ...concatT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toRunnableObservable,
    ...deferT,
    ...decodeWithCharsetT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toRunnableObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), everySatisfyTests({
    fromArray: toRunnableObservable,
    ...everySatisfyT,
    ...toReadonlyArrayT,
}), exhaustTests, forEachTests({
    fromArray: toRunnableObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toRunnableObservable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toRunnableObservable,
    ...mapT,
    ...toReadonlyArrayT,
}), mergeTests, onSubscribeTests, pairwiseTests({
    fromArray: toRunnableObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), reduceTests({
    fromArray: toRunnableObservable,
    ...reduceT,
    ...toReadonlyArrayT,
}), retryTests, scanTests({
    fromArray: toRunnableObservable,
    ...scanT,
    ...toReadonlyArrayT,
}), scanAsyncTests({
    fromArray: toRunnableObservable,
    ...scanAsyncT,
    ...toReadonlyArrayT,
}, {
    fromArray: toRunnableObservable,
}), shareTests, skipFirstTests({
    fromArray: toRunnableObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), someSatisfyTests({
    fromArray: toRunnableObservable,
    ...someSatisfyT,
    ...toReadonlyArrayT,
}), switchAllTests, takeFirstTests({
    fromArray: toRunnableObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toRunnableObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeUntilTests, takeWhileTests({
    fromArray: toRunnableObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throttleTests, throwIfEmptyTests({
    fromArray: toRunnableObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), timeoutTests, toEnumerableTests, toFlowableTests, toPromiseTests, withLatestFromTest, zipTests, zipLatestTests, zipWithLatestTests);
