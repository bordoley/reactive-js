/// <reference types="./PauseableObservable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __PauseableObservable_eventPublisher } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { compose, none, pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(ev => {
            instance[__PauseableObservable_eventPublisher]?.[EventListenerLike_notify](ev ? { type: "paused" } : { type: "resumed" });
            instance[PauseableLike_isPaused] = ev;
        }), op);
        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);
        return instance;
    }, props({
        [__PauseableObservable_eventPublisher]: none,
        [PauseableLike_isPaused]: false,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [EventSourceLike_addEventListener](listener) {
            const publisher = this[__PauseableObservable_eventPublisher] ??
                (() => {
                    const publisher = pipe(EventPublisher_create(), Disposable_addTo(this));
                    this[__PauseableObservable_eventPublisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
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
