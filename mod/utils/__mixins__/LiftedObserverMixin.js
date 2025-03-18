/// <reference types="./LiftedObserverMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, super_, } from "../../__internal__/mixins.js";
import { bind, isSome, memoize, none, pipe, pipeLazy, raiseIf, returns, } from "../../functions.js";
import { CollectionEnumeratorLike_count, ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, ContinuationContextLike_yield, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, SchedulerLike_inContinuation, SchedulerLike_schedule, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import LiftedConsumerMixin, { LiftedConsumerLike_consumer, } from "./LiftedConsumerMixin.js";
import { LiftedEventListenerLike_delegate, LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "./LiftedEventListenerMixin.js";
import { LiftedSinkLike_complete, } from "./LiftedSinkMixin.js";
import QueueingConsumerMixin from "./QueueingConsumerMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
const LiftedObserverMixin = /*@__PURE__*/ (() => {
    function liftedObserverSchedulerContinuation(ctx) {
        // This is the ultimate downstream consumer of events.
        const consumer = this[LiftedConsumerLike_consumer];
        while (this[CollectionEnumeratorLike_count] > 0 &&
            !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!consumer[ConsumerLike_isReady]) {
                // Set up the onReady listener
                scheduleDrainQueue(this);
                break;
            }
            this[EnumeratorLike_moveNext]();
            const next = this[EnumeratorLike_current];
            this[LiftedEventListenerLike_notify](next);
            if (this[CollectionEnumeratorLike_count] > 0) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        if (this[SinkLike_isCompleted]) {
            this[LiftedSinkLike_complete]();
        }
    }
    // memoize to avoid adding a local proper to track if
    // we already have a consumer lister setup. Not that performant.
    const setUpOnConsumerReadyListenerMemoized = memoize((observer) => {
        const consumer = observer[LiftedConsumerLike_consumer];
        return pipe(consumer[ConsumerLike_addOnReadyListener](pipeLazy(observer, scheduleDrainQueue)), Disposable.addTo(observer));
    });
    const scheduleDrainQueue = (observer) => {
        const consumer = observer[LiftedConsumerLike_consumer];
        const isConsumerReady = consumer[ConsumerLike_isReady];
        const isConumerDisposed = consumer[DisposableLike_isDisposed];
        const isDrainScheduled = !observer[SerialDisposableLike_current][DisposableLike_isDisposed];
        if (!isDrainScheduled && isConsumerReady) {
            observer[SerialDisposableLike_current] = observer[SchedulerLike_schedule](bind(liftedObserverSchedulerContinuation, observer));
        }
        else if (!isConsumerReady && !isConumerDisposed) {
            setUpOnConsumerReadyListenerMemoized(observer);
        }
    };
    function notifyLiftedDelegate(next) {
        const delegate = this[LiftedEventListenerLike_delegate];
        if (__DEV__) {
            raiseIf(!delegate[SchedulerLike_inContinuation], "Observer can only be notified from within a Scheduler continuation");
            raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
            raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
        }
        delegate[LiftedEventListenerLike_notify](next);
    }
    function pushDelegate(next) {
        this[LiftedEventListenerLike_delegate][EventListenerLike_notify](next);
    }
    return returns(mix(include(LiftedConsumerMixin(), QueueingConsumerMixin(), SerialDisposableMixin(), DelegatingSchedulerMixin), function LiftedObserverMixin(delegate, options) {
        init(LiftedConsumerMixin(), this, delegate);
        init(QueueingConsumerMixin(), this, {
            backpressureStrategy: delegate[ConsumerLike_backpressureStrategy],
            capacity: delegate[ConsumerLike_capacity],
            ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(DelegatingSchedulerMixin, this, delegate);
        const delegateIsLifted = isSome(delegate[LiftedEventListenerLike_notify]);
        this[LiftedEventListenerLike_notifyDelegate] = delegateIsLifted
            ? notifyLiftedDelegate
            : pushDelegate;
        return this;
    }, props({
        [LiftedEventListenerLike_notifyDelegate]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            const shouldIgnore = isCompleted || this[DisposableLike_isDisposed];
            // Make queueing decisions based upon whether the root non-lifted observer
            // wants to apply back pressure, as lifted observers just pass through
            // notifications and never queue in practice.
            const scheduler = this[LiftedConsumerLike_consumer];
            const isDelegateReady = scheduler[ConsumerLike_isReady];
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[ConsumerLike_capacity];
            const shouldNotify = inSchedulerContinuation &&
                !shouldIgnore &&
                isDelegateReady &&
                count == 0 &&
                capacity > 0;
            if (shouldNotify) {
                this[LiftedEventListenerLike_notify](next);
            }
            else if (!shouldIgnore) {
                super_(QueueingConsumerMixin(), this, EventListenerLike_notify, next);
                scheduleDrainQueue(this);
            }
        },
        [SinkLike_complete]() {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            const count = this[CollectionEnumeratorLike_count];
            if (isCompleted) {
                return;
            }
            // Note, QueueingConsumerMixin overrides all the ConsumerLike methods
            // that are implemented by LiftedConsumerMixin so its
            // only necessary to call its complete function to tag
            // the observer complete
            super_(QueueingConsumerMixin(), this, SinkLike_complete);
            if (inSchedulerContinuation && count == 0) {
                this[LiftedSinkLike_complete]();
            }
            else {
                scheduleDrainQueue(this);
            }
        },
    })));
})();
export default LiftedObserverMixin;
