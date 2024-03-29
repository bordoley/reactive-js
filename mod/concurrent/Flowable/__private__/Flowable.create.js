/// <reference types="./Flowable.create.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { FlowableLike_flow, ObservableLike_observe, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, StreamableLike_stream, } from "../../../concurrent.js";
import * as WritableStore from "../../../events/WritableStore.js";
import { StoreLike_value } from "../../../events.js";
import { invoke, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DropOldestBackpressureStrategy, QueueableLike_enqueue, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import * as Streamable from "../../Streamable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = (mode) => Observable.create(observer => {
            const pauseableScheduler = pipe(observer, PauseableScheduler.create, Disposable.addTo(observer));
            const multicastedMode = pipe(mode, Observable.mergeWith(
            // Initialize to paused state
            pipe(true, Observable.fromValue())), Observable.distinctUntilChanged(), Observable.multicast(observer, {
                replay: 1,
                capacity: 1,
                backpressureStrategy: DropOldestBackpressureStrategy,
            }), Disposable.addTo(observer));
            pipe(multicastedMode, Observable.forEach((isPaused) => {
                instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
                if (isPaused) {
                    pauseableScheduler[PauseableLike_pause]();
                }
                else {
                    pauseableScheduler[PauseableLike_resume]();
                }
            }), Observable.subscribe(observer), Disposable.addTo(observer));
            pipe(multicastedMode, op, Observable.subscribeOn(pauseableScheduler), invoke(ObservableLike_observe, observer));
        });
        const stream = Streamable.create(liftedOp)[StreamableLike_stream](scheduler, multicastOptions);
        init(DelegatingDisposableMixin(), instance, stream);
        init(DelegatingMulticastObservableMixin(), instance, stream);
        instance[PauseableLike_isPaused] = WritableStore.create(true);
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [PauseableLike_pause]() {
            this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](true);
        },
        [PauseableLike_resume]() {
            this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](false);
        },
    });
})();
const Flowable_create = (op) => ({
    [FlowableLike_flow]: (scheduler, options) => PauseableObservable_create(op, scheduler, options),
});
export default Flowable_create;
