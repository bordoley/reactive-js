/// <reference types="./Consumer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, FlowControllerLike_capacity, FlowControllerLike_isReady, FlowControllerQueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControlledQueueMixin from "../__mixins__/FlowControlledQueueMixin.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_consumer, ObserverMixinLike_notify, } from "../__mixins__/ObserverMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin, FlowControlledQueueMixin()), function ConsumerQueue(options) {
        init(DisposableMixin, this);
        init(FlowControlledQueueMixin(), this, options);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[FlowControllerQueueLike_enqueue](item);
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
})();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer()))();
export const createDropOldestWithoutBackpressure = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin, FlowControlledQueueMixin()), function ConsumerQueueDropOldestWithoutBackpressur(capacity) {
        init(DisposableMixin, this);
        init(FlowControlledQueueMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity,
        });
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            const isCompleted = this[SinkLike_isCompleted];
            return !isCompleted;
        },
        get [FlowControllerLike_capacity]() {
            return MAX_SAFE_INTEGER;
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[FlowControllerQueueLike_enqueue](item);
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
})();
export const toObserver = /*@__PURE__*/ (() => {
    const createConsumerToObserver = mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin()), function ConsumerToObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(ObserverMixin(), this, consumer, scheduler, none);
        return this;
    }, props(), proto({
        [ObserverMixinLike_notify](next) {
            this[ObserverMixinLike_consumer][EventListenerLike_notify](next);
        },
        [ObserverMixinLike_complete]() {
            this[ObserverMixinLike_consumer][SinkLike_complete]();
        },
    }));
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
