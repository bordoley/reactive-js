/// <reference types="./DeferredObservable.test.d.ts" />

import * as DeferredObservable from "../DeferredObservable.js";
import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Scheduler from "../Scheduler.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { identityLazy, pipe } from "../functions.js";
import { VirtualTimeSchedulerLike_run } from "../types.js";
import HigherOrderObservableBaseTypeClassTests from "./fixtures/HigherOrderObservableBaseTypeClassTests.js";
testModule("DeferredObservable", HigherOrderObservableBaseTypeClassTests(DeferredObservable, identityLazy), describe("share", test("shared observable zipped with itself", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], ReadonlyArray.toObservable({ delay: 1 }), DeferredObservable.share(scheduler, { replay: 1 }));
    let result = [];
    pipe(Observable.zip(shared, shared), Observable.map(([a, b]) => a + b), Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([2, 4, 6]));
})));
((_) => { })(DeferredObservable);
