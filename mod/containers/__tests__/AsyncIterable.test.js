/// <reference types="./AsyncIterable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, testAsync, testModule, } from "../../__tests__/testing.js";
import { error, pipe } from "../../functions.js";
import * as AsyncEnumerable from "../../ix/AsyncEnumerable.js";
import * as Observable from "../../rx/Observable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import * as Flowable from "../../streaming/Flowable.js";
import * as Disposable from "../../util/Disposable.js";
import * as AsyncIterable from "../AsyncIterable.js";
testModule("AsyncIterable", describe("toAsyncEnumerable", testAsync("infinite immediately resolving iterable", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    };
    const result = await pipe(src(), AsyncIterable.toAsyncEnumerable(), AsyncEnumerable.toObservable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that completes", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    };
    const result = await pipe(src(), AsyncIterable.toAsyncEnumerable(), AsyncEnumerable.toObservable(), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([1, 2, 3]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that throws", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const e = error();
    const src = async function* foo() {
        throw e;
    };
    const result = await pipe(src(), AsyncIterable.toAsyncEnumerable(), AsyncEnumerable.toObservable(), Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.toPromise(scheduler));
    pipe(result, expectEquals(e));
})), describe("toFlowable", testAsync("infinite immediately resolving iterable", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    };
    const result = await pipe(src(), AsyncIterable.toFlowable({ maxBuffer: 5 }), Flowable.toObservable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that completes", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    };
    const result = await pipe(src(), AsyncIterable.toFlowable({ maxBuffer: 5 }), Flowable.toObservable(), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([1, 2, 3]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that throws", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const e = error();
    const src = async function* foo() {
        throw e;
    };
    const result = await pipe(src(), AsyncIterable.toFlowable({ maxBuffer: 5 }), Flowable.toObservable(), Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.toPromise(scheduler));
    pipe(result, expectEquals(e));
})), describe("toObservable", testAsync("infinite immediately resolving iterable", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    };
    const result = await pipe(src(), AsyncIterable.toObservable({ maxBuffer: 5 }), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that completes", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const src = async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    };
    const result = await pipe(src(), AsyncIterable.toObservable({ maxBuffer: 1 }), Observable.buffer(), Observable.toPromise(scheduler));
    pipe(result, expectArrayEquals([1, 2, 3]));
    pipe(scheduler, Disposable.dispose());
}), testAsync("iterable that throws", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const e = error();
    const src = async function* foo() {
        throw e;
    };
    const result = await pipe(src(), AsyncIterable.toObservable({ maxBuffer: 1 }), Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.toPromise(scheduler));
    pipe(result, expectEquals(e));
})));
