/// <reference types="./LiftedObserverMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, super_, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, bindMethod, isSome, memoize, none, pipe, pipeLazy, raiseIf, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, EventListenerLike_notify, QueueLike_count, QueueLike_dequeue, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_schedule, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");
export const LiftedObserverLike_notifyDelegate = Symbol("LiftedObserverLike_notifyDelegate");
export const LiftedObserverLike_complete = Symbol("LiftedObserverLike_complete");
export const LiftedObserverLike_completeDelegate = Symbol("LiftedObserverLike_complete");
export const LiftedObserverLike_delegate = Symbol("LiftedObserverLike_delegate");
export const LiftedObserverLike_isReady = Symbol("LiftedObserverLike_isReady");
const LiftedObserverMixin = /*@__PURE__*/ (() => {
    const LiftedObserverMixin_consumer = Symbol("LiftedObserverMixin_consumer");
    function liftedObserverSchedulerContinuation(ctx) {
        // This is the ultimate downstream consumer of events.
        const consumer = this[LiftedObserverMixin_consumer];
        while (this[QueueLike_count] > 0 && !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!consumer[QueueableLike_isReady]) {
                // Set up the onReady listener
                scheduleDrainQueue(this);
                break;
            }
            const next = this[QueueLike_dequeue]();
            this[LiftedObserverLike_notify](next);
            if (this[QueueLike_count] > 0) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        if (this[SinkLike_isCompleted]) {
            this[LiftedObserverLike_complete]();
        }
    }
    // memoize to avoid adding a local proper to track if
    // we already have a consumer lister setup. Not that performant.
    const setUpOnConsumerReadyListenerMemoized = memoize((observer) => {
        const consumer = observer[LiftedObserverMixin_consumer];
        return pipe(consumer[QueueableLike_addOnReadyListener](pipeLazy(observer, scheduleDrainQueue)), Disposable.addTo(observer));
    });
    const scheduleDrainQueue = (observer) => {
        const consumer = observer[LiftedObserverMixin_consumer];
        const isConsumerReady = consumer[QueueableLike_isReady];
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
        const delegate = this[LiftedObserverLike_delegate];
        if (__DEV__) {
            raiseIf(!delegate[SchedulerLike_inContinuation], "Observer can only be notified from within a Scheduler continuation");
            raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
            raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
        }
        delegate[LiftedObserverLike_notify](next);
    }
    function pushDelegate(next) {
        this[LiftedObserverLike_delegate][EventListenerLike_notify](next);
    }
    return returns(mix(include(QueueMixin(), SerialDisposableMixin(), DelegatingSchedulerMixin), function LiftedObserverMixin(delegate, options) {
        init(QueueMixin(), this, {
            backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
            capacity: delegate[QueueableLike_capacity],
            ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(DelegatingSchedulerMixin, this, delegate);
        const delegateIsLifted = isSome(delegate[LiftedObserverLike_notify]);
        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
            ? notifyLiftedDelegate
            : pushDelegate;
        this[LiftedObserverLike_delegate] = delegate;
        this[LiftedObserverMixin_consumer] =
            delegate[LiftedObserverMixin_consumer] ??
                delegate;
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)));
        return this;
    }, props({
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_consumer]: none,
        [LiftedObserverLike_notifyDelegate]: none,
    }), proto({
        get [LiftedObserverLike_isReady]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_consumer][QueueableLike_isReady];
        },
        [EventListenerLike_notify](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            const shouldIgnore = isCompleted || this[DisposableLike_isDisposed];
            // Make queueing decisions based upon whether the root non-lifted observer
            // wants to apply back pressure, as lifted observers just pass through
            // notifications and never queue in practice.
            const scheduler = this[LiftedObserverMixin_consumer];
            const isDelegateReady = scheduler[QueueableLike_isReady];
            const count = this[QueueLike_count];
            const capacity = this[QueueableLike_capacity];
            const shouldNotify = inSchedulerContinuation &&
                !shouldIgnore &&
                isDelegateReady &&
                count == 0 &&
                capacity > 0;
            if (shouldNotify) {
                this[LiftedObserverLike_notify](next);
            }
            else if (!shouldIgnore) {
                super_(QueueMixin(), this, EventListenerLike_notify, next);
                scheduleDrainQueue(this);
            }
        },
        [SinkLike_complete]() {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            const count = this[QueueLike_count];
            if (isCompleted) {
                return;
            }
            super_(QueueMixin(), this, SinkLike_complete);
            if (inSchedulerContinuation && count == 0) {
                this[LiftedObserverLike_complete]();
            }
            else {
                scheduleDrainQueue(this);
            }
        },
        [LiftedObserverLike_completeDelegate]() {
            // We always want to call SinkLike_complete to ensure
            // cleanup code is invoked.
            this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
        [LiftedObserverLike_notify](next) {
            this[LiftedObserverLike_notifyDelegate](next);
        },
        [LiftedObserverLike_complete]() {
            this[LiftedObserverLike_completeDelegate]();
        },
    })));
})();
export default LiftedObserverMixin;
