/// <reference types="./Observable.run.d.ts" />

import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run, } from "../../../utils.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_run = (options) => (observable) => {
    const scheduler = VirtualTimeScheduler.create(options);
    const subscription = pipe(observable, Observable_subscribe(scheduler, options));
    scheduler[VirtualTimeSchedulerLike_run]();
    Disposable.raiseIfDisposedWithError(subscription);
};
export default Observable_run;
