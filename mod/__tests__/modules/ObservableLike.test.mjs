/// <reference types="./ObservableLike.test.d.ts" />
import { throws } from '../../containers/ContainerLike.mjs';
import { toRunnableObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, raise, increment, sum, newInstance } from '../../functions.mjs';
import { combineLatest, generate, takeFirst, toReadonlyArray, onSubscribe, subscribe, concat, fromArray, map, retry, share, zip, forEach, takeUntil, timeout, throttle, toFlowable, withLatestFrom, empty, zipLatest, zipWithLatestFrom } from '../../rx/ObservableLike.mjs';
import { run } from '../../scheduling/ContinuationLike.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule, getCurrentTime } from '../../scheduling/SchedulerLike.mjs';
import { create } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { getError, dispose, isDisposed } from '../../util/DisposableLike.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectToThrow, expectEquals, expectTrue, expectToThrowError, testModule } from '../testing.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(combineLatest(pipe(generate(incrementBy(2), returns(1), { delay: 2 }), takeFirst({ count: 3 })), pipe(generate(incrementBy(2), returns(0), { delay: 3 }), takeFirst({ count: 2 }))), toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
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
    pipe(subscription, getError, expectIsSome);
}));
const retryTests = createDescribe("retry", createTest("repeats the observable n times", pipeLazy(concat(pipe([1, 2, 3], toRunnableObservable()), pipe(raise, throws({
    fromArray,
    map,
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
const withLatestFromTest = createDescribe("withLatestFrom", createTest("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], toRunnableObservable({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], toRunnableObservable({ delay: 2 })), (a, b) => [a, b]), toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), createTest("when latest produces no values", pipeLazy([0], toRunnableObservable({ delay: 1 }), withLatestFrom(empty(), sum), toReadonlyArray(), expectArrayEquals([]))), createTest("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], toRunnableObservable({ delay: 1 }), withLatestFrom(throws({ fromArray, map })(returns(error)), sum), toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], toRunnableObservable({ delay: 2, delayStart: true }))), map(([a, b]) => a + b), toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = createDescribe("zipWithLatestFrom", createTest("when source throws", pipeLazy(pipeLazy(throws({ fromArray, map })(raise), zipWithLatestFrom(pipe([1], toRunnableObservable()), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other throws", pipeLazy(pipeLazy([1, 2, 3], toRunnableObservable({ delay: 1 }), zipWithLatestFrom(throws({ fromArray, map })(raise), (_, b) => b), toReadonlyArray()), expectToThrow)), createTest("when other completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4], toRunnableObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6]))), createTest("when this completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), zipWithLatestFrom(pipe([2, 4, 6, 8], toRunnableObservable({ delay: 1 })), (a, b) => a + b), toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
testModule("ObservableLike", combineLatestTests, onSubscribeTests, retryTests, shareTests, takeUntilTests, throttleTests, timeoutTests, toFlowableTests, withLatestFromTest, zipLatestTests, zipWithLatestTests);
