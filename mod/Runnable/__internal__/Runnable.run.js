/// <reference types="./Runnable.run.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Scheduler_createVirtualTimeScheduler from "../../Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import { pipe } from "../../functions.js";
import { VirtualTimeSchedulerLike_run, } from "../../types.js";
const Runnable_run = (options) => (observable) => {
    const scheduler = Scheduler_createVirtualTimeScheduler();
    const subscription = pipe(observable, Observable_subscribe(scheduler, options));
    scheduler[VirtualTimeSchedulerLike_run]();
    Disposable_raiseIfDisposedWithError(subscription);
};
export default Runnable_run;
