/// <reference types="./Observable.run.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Scheduler_createVirtualTimeScheduler from "../../Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import { pipe } from "../../functions.js";
import { VirtualTimeSchedulerLike_run, } from "../../types.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_run = (options) => (observable) => {
    const scheduler = Scheduler_createVirtualTimeScheduler();
    const subscription = pipe(observable, Observable_subscribe(scheduler, options));
    scheduler[VirtualTimeSchedulerLike_run]();
    Disposable_raiseIfDisposedWithError(subscription);
};
export default Observable_run;
