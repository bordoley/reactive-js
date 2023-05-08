/// <reference types="./Runnable.flow.d.ts" />

import { ObservableLike_observe, PauseableLike_pause, PauseableLike_resume, } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../core/Disposable/__internal__/Disposable.bindTo.js";
import PauseableObservable_create from "../../../core/PauseableObservable/__internal__/PauseableObservable.create.js";
import Scheduler_toPausableScheduler from "../../../core/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
const Runnable_flow = (scheduler, options) => (runnable) => {
    const op = (modeObs) => Observable_create(observer => {
        const pauseableScheduler = pipe(observer, Scheduler_toPausableScheduler, Disposable_addTo(observer));
        pipe(runnable, Observable_subscribeOn(pauseableScheduler), invoke(ObservableLike_observe, observer));
        pipe(modeObs, Observable_forEach(isPaused => {
            if (isPaused) {
                pauseableScheduler[PauseableLike_pause]();
            }
            else {
                pauseableScheduler[PauseableLike_resume]();
            }
        }), Observable_subscribeWithConfig(observer, observer), Disposable_bindTo(pauseableScheduler));
    });
    return PauseableObservable_create(op, scheduler, options);
};
export default Runnable_flow;
