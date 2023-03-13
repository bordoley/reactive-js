/// <reference types="./Runnable.toFlowable.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, } from "../../../rx.js";
import { PauseableSchedulerLike_pause, PauseableSchedulerLike_resume, } from "../../../scheduling.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { FlowableState_paused, FlowableState_running, } from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Runnable_toFlowable = () => observable => Flowable_createLifted((modeObs) => Observable_create(observer => {
    const pauseableScheduler = Scheduler_toPausableScheduler(observer[DispatcherLike_scheduler]);
    pipe(observer, Observer_sourceFrom(pipe(observable, Observable_subscribeOn(pauseableScheduler), Observable_takeUntil(pipe(pauseableScheduler, Disposable_toObservable())))), Disposable_add(pipe(modeObs, Observable_forEach(mode => {
        switch (mode) {
            case FlowableState_paused:
                pauseableScheduler[PauseableSchedulerLike_pause]();
                break;
            case FlowableState_running:
                pauseableScheduler[PauseableSchedulerLike_resume]();
                break;
        }
    }), Observable_subscribe(observer[DispatcherLike_scheduler]), Disposable_bindTo(pauseableScheduler))), Disposable_add(pauseableScheduler));
}), true);
export default Runnable_toFlowable;
