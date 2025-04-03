/// <reference types="./ObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { bind, call, pipe, returns } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
import SinkMixin, { SinkMixinLike_delegate, SinkMixinLike_doComplete, SinkMixinLike_doNotify, SinkMixinLike_isCompleted, } from "./SinkMixin.js";
const ObserverMixin = /*@__PURE__*/ (() => {
    function* observerSchedulerContinuation() {
        // This is the ultimate downstream consumer of events.
        const consumer = this[SinkMixinLike_delegate];
        let isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
        let isDisposed = this[DisposableLike_isDisposed];
        let consumerIsCompleted = consumer[SinkLike_isCompleted];
        let consumerIsReady = consumer[FlowControllerLike_isReady];
        while (consumerIsReady &&
            isDataAvailable &&
            !consumerIsCompleted &&
            !isDisposed) {
            this[EnumeratorLike_moveNext]();
            const next = this[EnumeratorLike_current];
            this[SinkMixinLike_doNotify](next);
            const shouldYield = this[SchedulerLike_shouldYield];
            isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
            if (shouldYield && isDataAvailable) {
                yield;
            }
            // Need to reassign after the yield if the caller rescheduled
            isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
            isDisposed = this[DisposableLike_isDisposed];
            consumerIsCompleted = consumer[SinkLike_isCompleted];
            consumerIsReady = consumer[FlowControllerLike_isReady];
        }
        // Only complete when we've exhausted our data. Prevents
        // completing if the loop was exited due to backpressure.
        if (!isDataAvailable && this[SinkLike_isCompleted]) {
            this[SinkMixinLike_doComplete]();
        }
    }
    function scheduleDrainQueue() {
        const consumer = this[SinkMixinLike_delegate];
        const isConsumerReady = consumer[FlowControllerLike_isReady];
        const isDrainScheduled = !this[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];
        if (isDrainScheduled || !isConsumerReady) {
            return;
        }
        this[ObserverMixin_schedulerSubscription] = this[SchedulerLike_schedule](bind(observerSchedulerContinuation, this));
    }
    const ObserverMixin_schedulerSubscription = Symbol("ObserverMixin_schedulerSubscription");
    return returns(mix(include(FlowControllerQueueMixin(), DelegatingSchedulerMixin, SinkMixin()), function ObserverMixin(consumer, scheduler, options) {
        init(FlowControllerQueueMixin(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(SinkMixin(), this, consumer);
        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](bind(scheduleDrainQueue, this));
        pipe(this, Disposable.add(consumer[FlowControllerLike_addOnReadyListener](bind(scheduleDrainQueue, this))));
        return this;
    }, props({
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            // Make queueing decisions based upon whether the root non-lifted observer
            // wants to apply back pressure, as lifted observers just pass through
            // notifications and never queue in practice.
            const consumer = this[SinkMixinLike_delegate];
            const isDelegateReady = consumer[FlowControllerLike_isReady];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            const shouldNotify = inSchedulerContinuation &&
                !isCompleted &&
                isDelegateReady &&
                !hasQueuedEvents;
            if (shouldNotify) {
                this[SinkMixinLike_doNotify](next);
            }
            else if (!isCompleted) {
                this[QueueLike_enqueue](next);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkMixinLike_isCompleted] = true;
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            if (isCompleted) {
                return;
            }
            if (inSchedulerContinuation && !hasQueuedEvents) {
                this[SinkMixinLike_doComplete]();
            }
            else {
                call(scheduleDrainQueue, this);
            }
        },
    })));
})();
export default ObserverMixin;
