/// <reference types="./ObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { bind, call, memoize, none, pipe, pipeLazy, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, FlowControllerQueueLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
export const ObserverMixinLike_notify = Symbol("ObserverMixinLike_notify");
export const ObserverMixinLike_complete = Symbol("ObserverMixinLike_complete");
export const ObserverMixinLike_consumer = Symbol("ObserverMixinLike_consumer");
const ObserverMixin = /*@__PURE__*/ (() => {
    function observerSchedulerContinuation(ctx) {
        // This is the ultimate downstream consumer of events.
        const consumer = this[ObserverMixinLike_consumer];
        while (this[FlowControllerEnumeratorLike_isDataAvailable] &&
            !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!consumer[FlowControllerLike_isReady]) {
                // Set up the onReady sink
                call(scheduleDrainQueue, this);
                break;
            }
            this[EnumeratorLike_moveNext]();
            const next = this[EnumeratorLike_current];
            this[ObserverMixinLike_notify](next);
            if (this[FlowControllerEnumeratorLike_isDataAvailable]) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        if (this[SinkLike_isCompleted]) {
            this[ObserverMixinLike_complete]();
        }
    }
    // memoize to avoid adding a local proper to track if
    // we already have a consumer lister setup. Not that performant.
    const setUpOnConsumerReadySinkMemoized = memoize((observer) => {
        const consumer = observer[ObserverMixinLike_consumer];
        return pipe(consumer[FlowControllerLike_addOnReadyListener](pipeLazy(observer, scheduleDrainQueue)), Disposable.addTo(observer));
    });
    function scheduleDrainQueue() {
        const consumer = this[ObserverMixinLike_consumer];
        const isConsumerReady = consumer[FlowControllerLike_isReady];
        const isConsumerDisposed = consumer[DisposableLike_isDisposed];
        const isDrainScheduled = !this[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];
        if (!isDrainScheduled && isConsumerReady) {
            this[ObserverMixin_schedulerSubscription] = this[SchedulerLike_schedule](bind(observerSchedulerContinuation, this));
        }
        else if (!isConsumerReady && !isConsumerDisposed) {
            setUpOnConsumerReadySinkMemoized(this);
        }
    }
    const ObserverMixin_schedulerSubscription = Symbol("ObserverMixin_schedulerSubscription");
    return returns(mix(include(FlowControllerQueueMixin(), DelegatingSchedulerMixin), function ObserverMixin(consumer, scheduler, options) {
        init(FlowControllerQueueMixin(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);
        this[ObserverMixinLike_consumer] = consumer;
        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](bind(scheduleDrainQueue, this));
        return this;
    }, props({
        [ObserverMixinLike_consumer]: none,
        [SinkLike_isCompleted]: false,
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            // Make queueing decisions based upon whether the root non-lifted observer
            // wants to apply back pressure, as lifted observers just pass through
            // notifications and never queue in practice.
            const consumer = this[ObserverMixinLike_consumer];
            const isDelegateReady = consumer[FlowControllerLike_isReady];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            const shouldNotify = inSchedulerContinuation &&
                !isCompleted &&
                isDelegateReady &&
                !hasQueuedEvents;
            if (shouldNotify) {
                this[ObserverMixinLike_notify](next);
            }
            else if (!isCompleted) {
                this[FlowControllerQueueLike_enqueue](next);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkLike_isCompleted] = true;
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            if (isCompleted) {
                return;
            }
            if (inSchedulerContinuation && !hasQueuedEvents) {
                this[ObserverMixinLike_complete]();
            }
            else {
                call(scheduleDrainQueue, this);
            }
        },
        [ObserverMixinLike_notify](_next) { },
        [ObserverMixinLike_complete]() { },
    })));
})();
export default ObserverMixin;
