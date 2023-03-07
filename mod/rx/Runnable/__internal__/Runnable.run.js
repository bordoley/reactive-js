/// <reference types="./Runnable.run.d.ts" />

import { isSome, pipe, raiseError } from "../../../functions.js";
import { VirtualTimeSchedulerLike_run } from "../../../scheduling.js";
import Scheduler_createVirtualTimeScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import { DisposableLike_error } from "../../../util.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const Runnable_run = () => (observable) => {
    const scheduler = Scheduler_createVirtualTimeScheduler();
    const subscription = pipe(observable, Observable_subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];
    if (isSome(error)) {
        raiseError(error);
    }
};
export default Runnable_run;
