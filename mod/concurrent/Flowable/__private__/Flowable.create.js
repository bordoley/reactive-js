/// <reference types="./Flowable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { FlowableLike_flow, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import { StoreLike_value } from "../../../events.js";
import * as WritableStore from "../../../events/WritableStore.js";
import { invoke, none, pipe } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observable_create from "../../Observable/__private__/Observable.create.js";
import Observable_distinctUntilChanged from "../../Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_fromIterable from "../../Observable/__private__/Observable.fromIterable.js";
import Observable_mergeWith from "../../Observable/__private__/Observable.mergeWith.js";
import Observable_multicast from "../../Observable/__private__/Observable.multicast.js";
import Observable_subscribe from "../../Observable/__private__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__private__/Observable.subscribeOn.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import Streamable_create from "../../Streamable/__private__/Streamable.create.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DelegatingDisposableMixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = (mode) => Observable_create(observer => {
            const pauseableScheduler = pipe(observer, PauseableScheduler.create, Disposable.addTo(observer));
            const multicastedMode = pipe(mode, Observable_mergeWith(
            // Initialize to paused state
            pipe([true], Observable_fromIterable())), Observable_distinctUntilChanged(), Observable_multicast(observer, {
                replay: 1,
                capacity: 1,
                backpressureStrategy: "drop-oldest",
            }), Disposable.addTo(observer));
            pipe(multicastedMode, Observable_forEach((isPaused) => {
                instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
                if (isPaused) {
                    pauseableScheduler[PauseableLike_pause]();
                }
                else {
                    pauseableScheduler[PauseableLike_resume]();
                }
            }), Observable_subscribe(observer), Disposable.addTo(observer));
            pipe(multicastedMode, op, Observable_subscribeOn(pauseableScheduler), invoke(ObservableLike_observe, observer));
        });
        const stream = Streamable_create(liftedOp)[StreamableLike_stream](scheduler, multicastOptions);
        init(DelegatingDisposableMixin(), instance, stream);
        instance[PauseableLike_isPaused] = WritableStore.create(true);
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingDisposableLike_delegate][ObservableLike_observe](observer);
        },
        [PauseableLike_pause]() {
            this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](true);
        },
        [PauseableLike_resume]() {
            this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](false);
        },
    }));
})();
const Flowable_create = (op) => ({
    [FlowableLike_flow]: (scheduler, options) => PauseableObservable_create(op, scheduler, options),
});
export default Flowable_create;
