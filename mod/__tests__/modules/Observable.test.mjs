/// <reference types="./Observable.test.d.ts" />
import Container from '../../containers/Container.mjs';
import { toRunnableObservable } from '../../containers/ReadonlyArray.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, raise, increment, sum, newInstance, isSome } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import { __memo, __await } from '../../rx/Observable/effects.mjs';
import { run } from '../../scheduling/Continuation.mjs';
import { dispatch, dispatchTo } from '../../scheduling/Dispatcher.mjs';
import { schedule, getCurrentTime } from '../../scheduling/Scheduler.mjs';
import { create } from '../../scheduling/VirtualTimeScheduler.mjs';
import { FlowMode_resume, FlowMode_pause } from '../../streaming.mjs';
import { stream } from '../../streaming/Streamable.mjs';
import { getError, dispose, isDisposed } from '../../util/Disposable.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectToThrow, expectEquals, expectTrue, expectToThrowError, testModule } from '../testing.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(Observable.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 })), pipe(Observable.generate(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }))), Observable.toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const onSubscribeTests = createDescribe("onSubscribe", createTest("when subscribe function returns a teardown function", () => {
    const scheduler = create();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], toRunnableObservable(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    run(scheduler);
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), createTest("when callback function throws", () => {
    const scheduler = create();
    const subscription = pipe([1], toRunnableObservable(), Observable.onSubscribe(raise), Observable.subscribe(scheduler));
    pipe(subscription, getError, expectIsSome);
}));
const retryTests = createDescribe("retry", createTest("repeats the observable n times", pipeLazy(Observable.concat(pipe([1, 2, 3], toRunnableObservable()), pipe(raise, Container.throws(Observable))), Observable.retry(), Observable.takeFirst({ count: 6 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const shareTests = createDescribe("share", createTest("shared observable zipped with itself", () => {
    const scheduler = create();
    const shared = pipe([1, 2, 3], toRunnableObservable({ delay: 1 }), Observable.share(scheduler, { replay: 1 }));
    let result = [];
    pipe(Observable.zip(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
}));
const takeUntilTests = createDescribe("takeUntil", createTest("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], toRunnableObservable({ delay: 1 }), Observable.takeUntil(pipe([1], toRunnableObservable({ delay: 3, delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const timeoutTests = createDescribe("timeout", createTest("throws when a timeout occurs", pipeLazy(pipeLazy([1], toRunnableObservable({ delay: 2, delayStart: true }), Observable.timeout(1), Observable.toReadonlyArray()), expectToThrow)), createTest("when timeout is greater than observed time", pipeLazy([1], toRunnableObservable({ delay: 2, delayStart: true }), Observable.timeout(3), Observable.toReadonlyArray(), expectArrayEquals([1]))));
const throttleTests = createDescribe("throttle", createTest("first", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 100 }), Observable.throttle(50, { mode: "first" }), Observable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), createTest("last", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Observable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), createTest("interval", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Observable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199]))));
const toFlowableTests = createDescribe("toFlowable", createTest("flow a generating source", () => {
    const scheduler = create();
    const generateStream = pipe(Observable.generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), Observable.toFlowable(), stream(scheduler));
    pipe(generateStream, dispatch(FlowMode_resume));
    pipe(scheduler, schedule(pipeLazy(FlowMode_pause, dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(pipeLazy(FlowMode_resume, dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(pipeLazy(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, Observable.forEach(x => {
        f(getCurrentTime(scheduler), x);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, isDisposed, expectTrue);
}));
const withLatestFromTest = createDescribe("withLatestFrom", createTest("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], toRunnableObservable({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], toRunnableObservable({ delay: 2 })), (a, b) => [a, b]), Observable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), createTest("when latest produces no values", pipeLazy([0], toRunnableObservable({ delay: 1 }), Observable.withLatestFrom(Observable.empty(), sum), Observable.toReadonlyArray(), expectArrayEquals([]))), createTest("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], toRunnableObservable({ delay: 1 }), Observable.withLatestFrom(Container.throws(Observable)(returns(error)), sum), Observable.toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
}));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], toRunnableObservable({ delay: 2, delayStart: true }))), Observable.map(([a, b]) => a + b), Observable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
const zipWithLatestTests = createDescribe("zipWithLatestFrom", createTest("when source throws", pipeLazy(pipeLazy(Container.throws(Observable)(raise), Observable.zipWithLatestFrom(pipe([1], toRunnableObservable()), (_, b) => b), Observable.toReadonlyArray()), expectToThrow)), createTest("when other throws", pipeLazy(pipeLazy([1, 2, 3], toRunnableObservable({ delay: 1 }), Observable.zipWithLatestFrom(Container.throws(Observable)(raise), (_, b) => b), Observable.toReadonlyArray()), expectToThrow)), createTest("when other completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), Observable.zipWithLatestFrom(pipe([2, 4], toRunnableObservable({ delay: 1 })), (a, b) => a + b), Observable.toReadonlyArray(), expectArrayEquals([3, 6]))), createTest("when this completes first", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 2 }), Observable.zipWithLatestFrom(pipe([2, 4, 6, 8], toRunnableObservable({ delay: 1 })), (a, b) => a + b), Observable.toReadonlyArray(), expectArrayEquals([3, 6, 11]))));
const asyncTests = createDescribe("async", createTest("batch mode", () => {
    const scheduler = create();
    const fromValueWithDelay = (delay, value) => pipe([value], Observable.fromArray({ delay }));
    let result = -1;
    pipe(Observable.async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), Observable.takeLast(), Observable.forEach(v => {
        result = v;
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectEquals(22));
}), createTest("combined-latest mode", () => {
    const scheduler = create();
    const oneTwoThreeDelayed = pipe([1, 2, 3], Observable.fromArray({ delay: 1 }));
    const createOneTwoThree = (_) => pipe([1, 2, 3], Observable.fromArray());
    const result = [];
    pipe(Observable.async(() => {
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Container.keepType(Observable, isSome), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), createTest("conditional hooks", () => {
    const scheduler = create();
    const src = pipe([0, 1, 2, 3, 4, 5], Observable.fromArray({ delay: 5 }));
    const src2 = Observable.generate(increment, returns(100), {
        delay: 2,
        delayStart: false,
    });
    const result = [];
    pipe(Observable.async(() => {
        const v = __await(src);
        if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
        }
        return v;
    }), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]));
}));
testModule("Observable", asyncTests, combineLatestTests, onSubscribeTests, retryTests, shareTests, takeUntilTests, throttleTests, timeoutTests, toFlowableTests, withLatestFromTest, zipLatestTests, zipWithLatestTests);
