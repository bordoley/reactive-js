/// <reference types="./Observable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsSome, expectPromiseToThrow, expectToHaveBeenCalledTimes, mockFn, test, testAsync, testModule, } from "../../__internal__/testing.js";
import { increment, isSome, pipe, raise, returns, } from "../../functions.js";
import * as ReadonlyArray from "../../keyedcontainers/ReadonlyArray.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import * as Streamable from "../../streaming/Streamable.js";
import { DisposableLike_error, QueueableLike_enqueue } from "../../util.js";
import * as Observable from "../Observable.js";
import { __await, __memo } from "../Observable.js";
const onSubscribeTests = describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], ReadonlyArray.toObservable(), Observable.onSubscribe(f), Observable.subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), test("when callback function throws", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const subscription = pipe([1], ReadonlyArray.toObservable(), Observable.onSubscribe(raise), Observable.subscribe(scheduler));
    pipe(subscription[DisposableLike_error], expectIsSome);
}));
const shareTests = describe("share", test("shared observable zipped with itself", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], ReadonlyArray.toObservable({ delay: 1 }), Observable.share(scheduler, { replay: 1 }));
    let result = [];
    pipe(Observable.zip(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([2, 4, 6]));
}));
const computeTests = describe("compute", test("batch mode", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const fromValueWithDelay = (delay, value) => pipe([value], Observable.fromReadonlyArray({ delay }));
    let result = -1;
    pipe(Observable.compute(() => {
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
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectEquals(22));
}), test("combined-latest mode", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const oneTwoThreeDelayed = pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }));
    const createOneTwoThree = (_) => pipe([1, 2, 3], Observable.fromReadonlyArray());
    const result = [];
    pipe(Observable.compute(() => {
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Observable.keepType(isSome), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("conditional hooks", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const src = pipe([0, 1, 2, 3, 4, 5], Observable.fromReadonlyArray({ delay: 5 }));
    const src2 = Observable.generate(increment, returns(100), {
        delay: 2,
        delayStart: false,
    });
    const result = [];
    pipe(Observable.compute(() => {
        const v = __await(src);
        if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
        }
        return v;
    }), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]));
}), testAsync("__stream", async () => {
    const result = await pipe(Observable.compute(() => {
        const stream = Observable.__stream(Streamable.identity());
        const push = Observable.__bindMethod(stream, QueueableLike_enqueue);
        const result = Observable.__observe(stream) ?? 0;
        Observable.__do(push, result + 1);
        return result;
    }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync());
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
}));
const fromAsyncFactoryTests = describe("fromAsyncFactory", testAsync("when promise resolves", async () => {
    const result = await pipe(Observable.fromAsyncFactory(async () => {
        await Promise.resolve(1);
        return 2;
    }), Observable.lastAsync());
    pipe(result, expectEquals(2));
}), testAsync("when promise fails with an exception", async () => {
    await pipe(Observable.fromAsyncFactory(async () => {
        await Promise.resolve(1);
        raise();
    }), Observable.lastAsync(), expectPromiseToThrow);
}), testAsync("when factory throws an exception", async () => {
    await pipe(Observable.fromAsyncFactory(async () => {
        raise();
    }), Observable.lastAsync(), expectPromiseToThrow);
}));
testModule("Observable", computeTests, fromAsyncFactoryTests, onSubscribeTests, shareTests);
