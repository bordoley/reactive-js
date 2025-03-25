/// <reference types="./ObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { bind, memoize, none, pipe, pipeLazy, returns, } from "../../functions.js";
import { CollectionEnumeratorLike_count, ContinuationContextLike_yield, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, QueueLike_enqueue, QueueableLike_addOnReadyListener, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_schedule, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import QueueMixin from "./QueueMixin.js";
export const ObserverMixinLike_notify = Symbol("ObserverMixinLike_notify");
export const ObserverMixinLike_complete = Symbol("ObserverMixinLike_complete");
export const ObserverMixinLike_consumer = Symbol("ObserverMixinLike_consumer");
const ObserverMixin = /*@__PURE__*/ (() => {
    function observerSchedulerContinuation(ctx) {
        // This is the ultimate downstream consumer of events.
        const consumer = this[ObserverMixinLike_consumer];
        while (this[CollectionEnumeratorLike_count] > 0 &&
            !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!consumer[QueueableLike_isReady]) {
                // Set up the onReady sink
                scheduleDrainQueue(this);
                break;
            }
            this[EnumeratorLike_moveNext]();
            const next = this[EnumeratorLike_current];
            this[ObserverMixinLike_notify](next);
            if (this[CollectionEnumeratorLike_count] > 0) {
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
        return pipe(consumer[QueueableLike_addOnReadyListener](pipeLazy(observer, scheduleDrainQueue)), Disposable.addTo(observer));
    });
    const scheduleDrainQueue = (observer) => {
        const consumer = observer[ObserverMixinLike_consumer];
        const isConsumerReady = consumer[QueueableLike_isReady];
        const isConsumerDisposed = consumer[DisposableLike_isDisposed];
        const isDrainScheduled = !observer[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];
        if (!isDrainScheduled && isConsumerReady) {
            observer[ObserverMixin_schedulerSubscription] = observer[SchedulerLike_schedule](bind(observerSchedulerContinuation, observer));
        }
        else if (!isConsumerReady && !isConsumerDisposed) {
            setUpOnConsumerReadySinkMemoized(observer);
        }
    };
    const ObserverMixin_schedulerSubscription = Symbol("ObserverMixin_schedulerSubscription");
    return returns(mix(include(QueueMixin(), DelegatingSchedulerMixin), function ObserverMixin(consumer, scheduler, options) {
        init(QueueMixin(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);
        this[ObserverMixinLike_consumer] = consumer;
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
            const isDelegateReady = consumer[QueueableLike_isReady];
            const count = this[CollectionEnumeratorLike_count];
            const shouldNotify = inSchedulerContinuation &&
                !isCompleted &&
                isDelegateReady &&
                count == 0;
            if (shouldNotify) {
                this[ObserverMixinLike_notify](next);
            }
            else if (!isCompleted) {
                this[QueueLike_enqueue](next);
                scheduleDrainQueue(this);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkLike_isCompleted] = true;
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const count = this[CollectionEnumeratorLike_count];
            if (isCompleted) {
                return;
            }
            if (inSchedulerContinuation && count == 0) {
                this[ObserverMixinLike_complete]();
            }
            else {
                scheduleDrainQueue(this);
            }
        },
        [ObserverMixinLike_notify](_next) { },
        [ObserverMixinLike_complete]() { },
    })));
})();
export default ObserverMixin;
