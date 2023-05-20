/// <reference types="./AsyncIterable.test.d.ts" />

import * as AsyncIterable from "../AsyncIterable.js";
import * as DeferredObservable from "../DeferredObservable.js";
import * as Disposable from "../Disposable.js";
import * as MulticastObservable from "../MulticastObservable.js";
import * as Observable from "../Observable.js";
import * as Scheduler from "../Scheduler.js";
import { describe, expectArrayEquals, expectEquals, testAsync, testModule, } from "../__internal__/testing.js";
import { error, pipe } from "../functions.js";
import { PauseableLike_resume } from "../types.js";
testModule("AsyncIterable", describe("flow", testAsync("infinite immediately resolving iterable", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const stream = pipe((async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    })(), AsyncIterable.flow(scheduler, { capacity: 1 }));
    stream[PauseableLike_resume]();
    const result = await pipe(stream, Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler));
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
})), testAsync("iterable that completes", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const stream = pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), AsyncIterable.flow(scheduler));
    stream[PauseableLike_resume]();
    const result = await pipe(stream, Observable.buffer(), Observable.lastAsync(scheduler));
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
})), testAsync("iterable that throws", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const e = error();
    const stream = pipe((async function* foo() {
        throw e;
    })(), AsyncIterable.flow(scheduler));
    stream[PauseableLike_resume]();
    const result = await pipe(stream, MulticastObservable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.lastAsync(scheduler));
    pipe(result, expectEquals(e));
}))), describe("toObservable", testAsync("infinite immediately resolving iterable", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const result = await pipe((async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    })(), AsyncIterable.toObservable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler, { capacity: 5 }));
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
})), testAsync("iterable that completes", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const result = await pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), AsyncIterable.toObservable(), Observable.buffer(), Observable.lastAsync(scheduler, { capacity: 1 }));
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
})), testAsync("iterable that throws", Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(async (scheduler) => {
    const e = error();
    const result = await pipe((async function* foo() {
        throw e;
    })(), AsyncIterable.toObservable(), DeferredObservable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.lastAsync(scheduler, { capacity: 1 }));
    pipe(result, expectEquals(e));
}))));
((_) => { })(AsyncIterable);
