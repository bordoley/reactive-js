/// <reference types="./Runnable.run.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { isSome, pipe, raiseError, raiseWithDebugMessage, } from "../../../functions.js";
import { ObservableLike_isRunnable } from "../../../rx.js";
import { DisposableLike_error, VirtualTimeSchedulerLike_run, } from "../../../util.js";
import Scheduler_createVirtualTimeScheduler from "../../../util/Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const Runnable_run = (options) => (observable) => {
    if (__DEV__ && !observable[ObservableLike_isRunnable]) {
        raiseWithDebugMessage("Runnable.run() invoked with a non-runnable ObservableLike");
    }
    const scheduler = Scheduler_createVirtualTimeScheduler();
    const subscription = pipe(observable, Observable_subscribe(scheduler, options));
    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];
    if (isSome(error)) {
        raiseError(error);
    }
};
export default Runnable_run;
