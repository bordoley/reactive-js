/// <reference types="./Flowable.test.d.ts" />

import { describe, expectArrayEquals, expectToThrowAsync, testAsync, testModule, } from "../../__internal__/testing.js";
import { FlowableLike_flow, PauseableLike_resume, } from "../../concurrent.js";
import { error, invoke, pipe, pipeLazy } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Flowable from "../Flowable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
testModule("Flowable", describe("fromAsyncIterable", testAsync("infinite immediately resolving iterable", Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const stream = pipe((async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
    stream[PauseableLike_resume]();
    const result = await pipe(stream, Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync(scheduler));
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
})), testAsync("iterable that completes", Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const stream = pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
    stream[PauseableLike_resume]();
    const result = await pipe(stream, Observable.buffer(), Observable.lastAsync(scheduler));
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
})), testAsync("iterable that throws", pipeLazy(Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const e = error();
    const stream = pipe((async function* foo() {
        throw e;
    })(), Flowable.fromAsyncIterable(), invoke(FlowableLike_flow, scheduler, { capacity: 1 }));
    stream[PauseableLike_resume]();
    await pipe(stream, Observable.lastAsync(scheduler));
}), expectToThrowAsync))));
((_) => { })(Flowable);
