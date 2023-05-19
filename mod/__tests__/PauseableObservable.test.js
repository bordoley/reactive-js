/// <reference types="./PauseableObservable.test.d.ts" />

import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import ReadonlyArray_flow from "../ReadonlyArray/__internal__/ReadonlyArray.flow.js";
import * as Scheduler from "../Scheduler.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe, raiseError } from "../functions.js";
import { DisposableLike_error, PauseableLike_resume, VirtualTimeSchedulerLike_run, } from "../types.js";
import ContainerTypeClassTests from "./fixtures/ContainerTypeClassTests.js";
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
testModule("PauseableObservable", ContainerTypeClassTests(PauseableObservable, Scheduler.createVirtualTimeScheduler, fromReadonlyArray, toReadonlyArray));
((_) => { })(PauseableObservable);
