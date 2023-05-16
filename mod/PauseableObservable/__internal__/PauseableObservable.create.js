/// <reference types="./PauseableObservable.create.d.ts" />

import DeferredObservable_multicast from "../../DeferredObservable/__internal__/DeferredObservable.multicast.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lazyInitPublisherMixin from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import Scheduler_createPausableScheduler from "../../Scheduler/__internal__/Scheduler.createPausableScheduler.js";
import Store_create from "../../Store/__internal__/Store.create.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { invoke, none, pipe } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, StoreLike_value, } from "../../types.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin(), EventSource_lazyInitPublisherMixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = (mode) => Observable_create(observer => {
            const pauseableScheduler = pipe(observer, Scheduler_createPausableScheduler, Disposable_addTo(observer));
            const multicastedMode = pipe(mode, Observable_mergeWith(
            // Initialize to paused state
            pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), DeferredObservable_multicast(observer, {
                replay: 1,
                capacity: 1,
                backpressureStrategy: "drop-oldest",
            }), Disposable_addTo(observer));
            pipe(multicastedMode, Observable_forEach((isPaused) => {
                instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
                if (isPaused) {
                    pauseableScheduler[PauseableLike_pause]();
                }
                else {
                    pauseableScheduler[PauseableLike_resume]();
                }
            }), Observable_subscribe(observer), Disposable_addTo(observer));
            pipe(multicastedMode, op, Observable_subscribeOn(pauseableScheduler), invoke(ObservableLike_observe, observer));
        });
        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);
        init(EventSource_lazyInitPublisherMixin(), instance);
        instance[PauseableLike_isPaused] = Store_create(true);
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
        [PauseableLike_pause]() {
            this[DelegatingLike_delegate][QueueableLike_enqueue](true);
        },
        [PauseableLike_resume]() {
            this[DelegatingLike_delegate][QueueableLike_enqueue](false);
        },
    }));
})();
export default PauseableObservable_create;
