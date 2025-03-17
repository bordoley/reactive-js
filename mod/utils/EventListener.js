/// <reference types="./EventListener.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, mixInstanceFactory, props, proto, } from "../__internal__/mixins.js";
import { none, pipe, returns } from "../functions.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_dispose, EventListenerLike_notify, OverflowBackpressureStrategy, SinkLike_complete, SinkLike_isCompleted, } from "../utils.js";
import * as Disposable from "./Disposable.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";
const EventListenerToConsumerMixin = /*@__PURE__*/ (() => {
    const EventListenerToConsumer_delegate = Symbol("EventListenerToConsumer_delegate");
    return returns(mix(include(DelegatingDisposableMixin), function EventListenerToConsumer(listener) {
        init(DelegatingDisposableMixin, this, listener);
        this[EventListenerToConsumer_delegate] = listener;
        return this;
    }, props({
        [EventListenerToConsumer_delegate]: none,
        [SinkLike_isCompleted]: false,
    }), proto({
        [ConsumerLike_isReady]: true,
        [ConsumerLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [ConsumerLike_capacity]: MAX_SAFE_INTEGER,
        [ConsumerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
        [EventListenerLike_notify](next) {
            if (!this[SinkLike_isCompleted]) {
                this[EventListenerToConsumer_delegate][EventListenerLike_notify](next);
            }
        },
        [SinkLike_complete]() {
            this[SinkLike_isCompleted] = true;
            this[DisposableLike_dispose]();
        },
    })));
})();
export const toConsumer = /*@__PURE__*/ (() => {
    const createSinkObserver = createInstanceFactory(EventListenerToConsumerMixin());
    return returns(createSinkObserver);
})();
export const toObserver = /*@__PURE__*/ (() => {
    const createSinkObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, EventListenerToConsumerMixin()), function EventListenerToObserver(listener, scheduler) {
        init(DelegatingDisposableMixin, this, listener);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(EventListenerToConsumerMixin(), this, listener);
        return this;
    });
    return (scheduler) => (sink) => pipe(createSinkObserver(sink, scheduler), Disposable.addToContainer(scheduler));
})();
