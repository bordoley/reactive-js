/// <reference types="./Observable.test.d.ts" />

import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import { describe, expectArrayEquals, expectEquals, expectIsNone, expectToThrow, expectToThrowError, test, testAsync, testModule, } from "../__internal__/testing.js";
import { arrayEquality, bindMethod, increment, incrementBy, newInstance, pipe, pipeLazy, returns, } from "../functions.js";
import { DisposableLike_dispose, PublisherLike_observerCount, SinkLike_notify, VirtualTimeSchedulerLike_run, } from "../types.js";
testModule("Observable", describe("combineLatest", test("combineLatest", pipeLazy(Observable.combineLatest(pipe(Observable.generate(incrementBy(2), returns(1), { delay: 2 }), Observable.takeFirst({ count: 3 })), pipe(Observable.generate(incrementBy(2), returns(0), { delay: 3 }), Observable.takeFirst({ count: 2 }))), Runnable.toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality())))), describe("createPublisher", test("with replay", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher({ replay: 2 });
    pipe([1, 2, 3, 4], ReadonlyArray.forEach(bindMethod(publisher, SinkLike_notify)));
    publisher[DisposableLike_dispose]();
    const result = [];
    pipe(publisher, Observable.forEach((x) => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const publisher = Observable.createPublisher();
    pipe(publisher[PublisherLike_observerCount], expectEquals(0));
    const sub1 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[PublisherLike_observerCount], expectEquals(1));
    const sub2 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[PublisherLike_observerCount], expectEquals(2));
    sub1[DisposableLike_dispose]();
    pipe(publisher[PublisherLike_observerCount], expectEquals(1));
    sub2[DisposableLike_dispose]();
    pipe(publisher[PublisherLike_observerCount], expectEquals(0));
})), describe("decodeWithCharset", test("decoding ascii", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Runnable.toReadonlyArray(), x => x.join(), expectEquals(str));
}), test("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.decodeWithCharset(), Runnable.toReadonlyArray(), x => x.join(), expectEquals(str));
})), describe("firstAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the first value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.firstAsync());
    pipe(result, expectEquals(1));
})), describe("lastAsync", testAsync("empty source", async () => {
    const result = await pipe([], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectIsNone);
}), testAsync("it returns the last value", async () => {
    const result = await pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.lastAsync());
    pipe(result, expectEquals(3));
})), describe("takeUntil", test("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], ReadonlyArray.toObservable({ delay: 1 }), Observable.takeUntil(pipe([1], ReadonlyArray.toObservable({ delay: 3, delayStart: true }))), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("throttle", test("first", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 100 }), Observable.throttle(50, { mode: "first" }), Runnable.toReadonlyArray(), expectArrayEquals([0, 49, 99]))), test("last", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(50, { mode: "last" }), Runnable.toReadonlyArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(Observable.generate(increment, returns(-1), {
    delay: 1,
    delayStart: true,
}), Observable.takeFirst({ count: 200 }), Observable.throttle(75, { mode: "interval" }), Runnable.toReadonlyArray(), expectArrayEquals([0, 74, 149, 199])))), describe("throwIfEmpty", test("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => error), Runnable.toReadonlyArray()), expectToThrowError(error));
}), test("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], Runnable.fromReadonlyArray(), Observable.throwIfEmpty(() => {
        throw error;
    }), Runnable.toReadonlyArray()), expectToThrowError(error));
}), test("when source is not empty", pipeLazy([1], Observable.fromReadonlyArray(), Observable.throwIfEmpty(() => undefined), Runnable.toReadonlyArray(), expectArrayEquals([1])))), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })), (a, b) => [a, b]), Runnable.toReadonlyArray(), expectArrayEquals([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Runnable.empty(), (a, b) => a + b), Runnable.toReadonlyArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], Observable.fromReadonlyArray({ delay: 1 }), Observable.withLatestFrom(Observable.throws({ raise: returns(error) }), (a, b) => a + b), Runnable.toReadonlyArray(), expectArrayEquals([])), expectToThrowError(error));
})), describe("zip", test("with synchronous and non-synchronous sources", pipeLazy(Runnable.zip(pipe([1, 2], Observable.fromReadonlyArray({ delay: 1 })), pipe([2, 3], Observable.fromReadonlyArray()), pipe([3, 4, 5], Observable.fromReadonlyArray({ delay: 1 }))), Runnable.toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), test("fast with slow", pipeLazy(Runnable.zip(pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })), pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 5 }))), Runnable.toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), test("when source throws", pipeLazy(pipeLazy(Runnable.zip(Observable.throws(), pipe([1, 2, 3], Observable.fromReadonlyArray())), Runnable.map(([, b]) => b), Runnable.toReadonlyArray()), expectToThrow))), describe("zipLatest", test("zip two delayed observable", pipeLazy(Observable.zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], Observable.fromReadonlyArray({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], Observable.fromReadonlyArray({ delay: 2, delayStart: true }))), Observable.map(([a, b]) => a + b), Runnable.toReadonlyArray(), expectArrayEquals([2, 5, 8, 11])))), describe("zipWithLatestFrom", test("when source throws", pipeLazy(pipeLazy(Observable.throws(), Observable.zipWithLatestFrom(pipe([1], ReadonlyArray.toObservable()), (_, b) => b), Runnable.toReadonlyArray()), expectToThrow)), test("when other throws", pipeLazy(pipeLazy([1, 2, 3], ReadonlyArray.toObservable({ delay: 1 }), Observable.zipWithLatestFrom(Runnable.throws(), (_, b) => b), Runnable.toReadonlyArray()), expectToThrow)), test("when other completes first", pipeLazy([1, 2, 3], ReadonlyArray.toObservable({ delay: 2 }), Observable.zipWithLatestFrom(pipe([2, 4], ReadonlyArray.toObservable({ delay: 1 })), (a, b) => a + b), Runnable.toReadonlyArray(), expectArrayEquals([3, 6]))), test("when this completes first", pipeLazy([1, 2, 3], ReadonlyArray.toObservable({ delay: 2 }), Observable.zipWithLatestFrom(pipe([2, 4, 6, 8], ReadonlyArray.toObservable({ delay: 1 })), (a, b) => a + b), Runnable.toReadonlyArray(), expectArrayEquals([3, 6, 11])))));
((_) => { })(Observable);
