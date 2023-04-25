/// <reference types="./Runnable.toFlowable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { PauseableSchedulerLike_pause, PauseableSchedulerLike_resume, } from "../../../scheduling.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import FlowableStream_create from "../../../streaming/Flowable/__internal__/FlowableStream.create.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
const Runnable_toFlowable = (() => returns(createInstanceFactory(mix(include(Delegating_mixin()), function RunnableFlowable(instance, delegate) {
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({}), {
    get [ObservableLike_isEnumerable]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
    },
    get [ObservableLike_isRunnable]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][ObservableLike_isRunnable];
    },
    [ObservableLike_observe](observer) {
        this[DelegatingLike_delegate][ObservableLike_observe](observer);
    },
    [StreamableLike_stream](scheduler, options) {
        const op = (modeObs) => Observable_create(observer => {
            const pauseableScheduler = pipe(observer, Scheduler_toPausableScheduler, Disposable_addTo(observer));
            pipe(observer, Observer_sourceFrom(pipe(this[DelegatingLike_delegate], Observable_subscribeOn(pauseableScheduler))), Disposable_add(pipe(modeObs, Observable_forEach(isPaused => {
                if (isPaused) {
                    pauseableScheduler[PauseableSchedulerLike_pause]();
                }
                else {
                    pauseableScheduler[PauseableSchedulerLike_resume]();
                }
            }), Observable_subscribeWithConfig(observer, observer), Disposable_bindTo(pauseableScheduler))), Disposable_add(pauseableScheduler));
        });
        return FlowableStream_create(op, scheduler, options);
    },
}))))();
export default Runnable_toFlowable;
