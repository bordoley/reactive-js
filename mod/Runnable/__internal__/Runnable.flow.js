/// <reference types="./Runnable.flow.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import PauseableObservable_create from "../../PauseableObservable/__internal__/PauseableObservable.create.js";
import Scheduler_toPausableScheduler from "../../Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, PauseableLike_pause, PauseableLike_resume, } from "../../types.js";
const Runnable_flow = (scheduler, options) => (runnable) => {
    const op = (modeObs) => DeferredObservable_create(observer => {
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
