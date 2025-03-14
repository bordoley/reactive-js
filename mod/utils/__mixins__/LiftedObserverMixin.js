/// <reference types="./LiftedObserverMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, super_, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, bindMethod, isSome, memoize, none, pipe, pipeLazy, raiseIf, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, EventListenerLike_notify, QueueLike_count, QueueLike_dequeue, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
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
    const LiftedObserverMixin_consumerCallback = Symbol("LiftedObserverMixin_consumerCallback");
    function liftedObserverSchedulerContinuation(ctx) {
        // This is the ultimate downstream consumer of events.
        const scheduler = this[LiftedObserverMixin_consumer];
        while (this[QueueLike_count] > 0 && !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!scheduler[QueueableLike_isReady]) {
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
    function completeLiftedDelegate() {
        const delegate = this[LiftedObserverLike_delegate];
        if (__DEV__) {
            raiseIf(!delegate[SchedulerLike_inContinuation], "Observer can only be notified from within a Scheduler continuation");
            raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
            raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
        }
        delegate[LiftedObserverLike_complete]();
    }
    function pushDelegate(next) {
        this[LiftedObserverLike_delegate][EventListenerLike_notify](next);
    }
    function sinkCompleteDelegate() {
        this[LiftedObserverLike_delegate][SinkLike_complete]();
    }
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function LiftedObserverMixin(delegate, options) {
        init(QueueMixin(), this, {
            backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
            capacity: delegate[QueueableLike_capacity],
            ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        const delegateIsLifted = isSome(delegate[LiftedObserverLike_notify]);
        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
            ? notifyLiftedDelegate
            : pushDelegate;
        this[LiftedObserverLike_completeDelegate] = delegateIsLifted
            ? completeLiftedDelegate
            : sinkCompleteDelegate;
        this[LiftedObserverLike_delegate] = delegate;
        this[LiftedObserverMixin_consumer] =
            delegate[LiftedObserverMixin_consumer] ??
                delegate;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[LiftedObserverMixin_consumerCallback] =
            function ObserverMixinSchedulerCallback(ctx) {
                instance[SchedulerLike_inContinuation] = true;
                this(ctx);
                instance[SchedulerLike_inContinuation] = false;
            };
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)));
        return this;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_consumer]: none,
        [LiftedObserverMixin_consumerCallback]: none,
        [LiftedObserverLike_notifyDelegate]: none,
        [LiftedObserverLike_completeDelegate]: none,
    }), proto({
        get [LiftedObserverLike_isReady]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_consumer][QueueableLike_isReady];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_consumer][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_consumer][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_consumer][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[LiftedObserverMixin_consumer][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[LiftedObserverLike_delegate][SchedulerLike_schedule](bind(this[LiftedObserverMixin_consumerCallback], continuation), options), Disposable.addToContainer(this));
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
            const shouldNotify = inSchedulerContinuation &&
                !shouldIgnore &&
                isDelegateReady &&
                count == 0;
            if (shouldNotify) {
                this[LiftedObserverLike_notify](next);
            }
            else if (!shouldIgnore) {
                scheduleDrainQueue(this);
                super_(QueueMixin(), this, EventListenerLike_notify, next);
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
        [LiftedObserverLike_notify](next) {
            this[LiftedObserverLike_notifyDelegate](next);
        },
        [LiftedObserverLike_complete]() {
            this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
    })));
})();
export default LiftedObserverMixin;
