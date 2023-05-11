/// <reference types="./PauseableObservable.create.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventPublisher_lazyInitMixin from "../../EventPublisher/__internal__/EventPublisher.lazyInitMixin.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import Store_createMutable from "../../Store/__internal__/Store.createMutable.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { compose, none, pipe } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, StoreLike_value, } from "../../types.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin(), EventPublisher_lazyInitMixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toRunnable())), Observable_distinctUntilChanged(), Observable_forEach((isPaused) => {
            instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
        }), op);
        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);
        init(EventPublisher_lazyInitMixin(), instance);
        instance[PauseableLike_isPaused] = Store_createMutable(true);
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
