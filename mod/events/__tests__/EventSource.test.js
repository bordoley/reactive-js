/// <reference types="./EventSource.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsSome, test, testAsync, testModule, } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import PureComputationModuleTests from "../../computations/__tests__/fixtures/PureComputationModuleTests.js";
import { VirtualTimeSchedulerLike_run } from "../../concurrent.js";
import * as Observable from "../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../concurrent/VirtualTimeScheduler.js";
import { bind, compose, ignore, isSome, newInstance, none, pick, pipe, pipeLazy, raise, } from "../../functions.js";
import { DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";
testModule("EventSource", PureComputationModuleTests(EventSource, () => (eventSource) => {
    const result = [];
    const subscription = pipe(eventSource, EventSource.addEventHandler(bind(Array.prototype.push, result)));
    if (isSome(subscription[DisposableLike_error])) {
        throw subscription[DisposableLike_error];
    }
    return result;
}), describe("create", test("when the setup function throws", pipeLazy(EventSource.create(_ => raise()), EventSource.addEventHandler(ignore), pick(DisposableLike_error), expectIsSome))), describe("fromPromise", testAsync("when the promise resolves", async () => {
    const promise = Promise.resolve(1);
    let result = none;
    pipe(promise, EventSource.fromPromise(), EventSource.addEventHandler(e => {
        result = e;
    }));
    await promise;
    pipe(result, expectEquals(1));
}), testAsync("when the promise reject", async () => {
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    const subscription = pipe(promise, EventSource.fromPromise(), EventSource.addEventHandler(ignore));
    try {
        await promise;
    }
    catch (e) { }
    pipe(subscription[DisposableLike_error], expectEquals(error));
})), describe("merge", test("with source that have different delays", () => {
    const vts = VirtualTimeScheduler.create();
    const result = [];
    const [ev1, ev2, ev3] = pipe([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), Observable.toEventSource(vts))));
    pipe(EventSource.merge(ev1, ev2, ev3), EventSource.addEventHandler(bind(Array.prototype.push, result)));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
})), describe("mergeWith", test("with source that have different delays", () => {
    const vts = VirtualTimeScheduler.create();
    const result = [];
    const [ev1, ev2] = pipe([
        [1, 3, 5],
        [2, 4, 6],
    ], ReadonlyArray.map(compose(Observable.fromReadonlyArray({ delay: 3 }), Observable.toEventSource(vts))));
    pipe(ev1, EventSource.mergeWith(ev2), EventSource.addEventHandler(bind(Array.prototype.push, result)));
    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
})));
((_) => { })(EventSource);
