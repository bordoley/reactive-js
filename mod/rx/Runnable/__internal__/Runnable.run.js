/// <reference types="./Runnable.run.d.ts" />

import { isSome, pipe, raiseError } from "../../../functions.js";
import { VirtualTimeSchedulerLike_run } from "../../../scheduling.js";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.js";
import { DisposableLike_error } from "../../../util.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const Runnable_run = () => (observable) => {
    const scheduler = VirtualTimeScheduler_create();
    const subscription = pipe(observable, Observable_subscribe(scheduler));
    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];
    if (isSome(error)) {
        raiseError(error);
    }
};
export default Runnable_run;
