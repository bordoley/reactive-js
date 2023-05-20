/// <reference types="./PauseableObservable.test.d.ts" />

import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import ReadonlyArray_flow from "../ReadonlyArray/__internal__/ReadonlyArray.flow.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { increment, isSome, pipe, raiseError, returns } from "../functions.js";
import { DisposableLike_error, PauseableLike_resume, StreamableLike_stream, VirtualTimeSchedulerLike_run, } from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";
const fromReadonlyArray = (scheduler) => (arr) => pipe(arr, ReadonlyArray_flow(scheduler));
const toReadonlyArray = (scheduler) => (obs) => {
    const result = [];
    const subscription = pipe(obs, Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    obs[PauseableLike_resume]();
    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];
    if (isSome(error)) {
        raiseError(error);
    }
    return result;
};
testModule("PauseableObservable", ContainerModuleTests(PauseableObservable, Scheduler.createVirtualTimeScheduler, fromReadonlyArray, toReadonlyArray), describe("sinkInto", test("sinking a pauseable observable into a stream with backpressure", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const src = pipe(Observable.generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), Runnable.flow(scheduler), PauseableObservable.takeFirst({ count: 5 }));
    const dest = Streamable.identity()[StreamableLike_stream](scheduler, {
        backpressureStrategy: "throw",
        capacity: 1,
    });
    pipe(src, PauseableObservable.sinkInto(dest), Observable.subscribe(scheduler));
    const result = [];
    pipe(dest, Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
})));
((_) => { })(PauseableObservable);
