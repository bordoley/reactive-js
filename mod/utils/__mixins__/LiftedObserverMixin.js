/// <reference types="./LiftedObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, bindMethod, call, isSome, none, pipe, raise, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
export const LiftedObserverLike_delegate = Symbol("LiftedObserverLike_delegate");
export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");
export const LiftedObserverLike_notifyDelegate = Symbol("LiftedObserverLike_notifyDelegate");
export const LiftedObserverLike_complete = Symbol("LiftedObserverLike_complete");
const LiftedObserverMixin = /*@__PURE__*/ (() => {
    const LiftedObserverMixin_scheduler = Symbol("LiftedObserverMixin_scheduler");
    const LiftedObserverMixin_schedulerCallback = Symbol("LiftedObserverMixin_schedulerCallback");
    const scheduleDrainQueue = (observer) => {
        if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                const delegate = observer[LiftedObserverLike_delegate];
                while (observer[QueueLike_count] > 0 &&
                    !observer[DisposableLike_isDisposed]) {
                    if (!delegate[QueueableLike_isReady]) {
                        observer[SchedulerLike_requestYield]();
                        ctx[ContinuationContextLike_yield]();
                    }
                    const next = observer[QueueLike_dequeue]();
                    observer[LiftedObserverLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[SinkLike_isCompleted]) {
                    observer[LiftedObserverLike_complete]();
                }
            };
            observer[SerialDisposableLike_current] =
                observer[SchedulerLike_schedule](continuation);
        }
    };
    const queueProtoype = getPrototype(QueueMixin());
    function notifyLiftedDelegate(next) {
        this[LiftedObserverLike_delegate][LiftedObserverLike_notify](next);
    }
    function enqueueDelegate(next) {
        this[LiftedObserverLike_delegate][SinkLike_next](next);
    }
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function LiftedObserverMixin(delegate, options) {
        init(QueueMixin(), this, {
            backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
            capacity: delegate[QueueableLike_capacity],
            ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        const delegateIsLifted = isSome(delegate[LiftedObserverLike_notify]);
        // FIXME: We should add some inSchedulerContinuation checks
        // for the case when the delegate is lifted and notified
        // in dev
        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
            ? notifyLiftedDelegate
            : enqueueDelegate;
        this[LiftedObserverLike_delegate] = delegate;
        this[LiftedObserverMixin_scheduler] =
            delegate[LiftedObserverMixin_scheduler] ??
                delegate;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[LiftedObserverMixin_schedulerCallback] =
            function ObserverMixinSchedulerCallback(ctx) {
                instance[SchedulerLike_inContinuation] = true;
                this(ctx);
                instance[SchedulerLike_inContinuation] = false;
            };
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)));
        return this;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [LiftedObserverLike_notifyDelegate]: none,
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_scheduler]: none,
        [LiftedObserverMixin_schedulerCallback]: none,
    }), proto({
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_scheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[LiftedObserverMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[LiftedObserverMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[LiftedObserverLike_delegate][SchedulerLike_schedule](bind(this[LiftedObserverMixin_schedulerCallback], continuation), options), Disposable.addToContainer(this));
        },
        [SinkLike_next](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const isCompleted = this[SinkLike_isCompleted];
            // FIXME: Put this in a dev check
            if (isCompleted) {
                raise("observer is completed");
            }
            const shouldIgnore = isCompleted || this[DisposableLike_isDisposed];
            const delegate = this[LiftedObserverLike_delegate];
            const isDelegateReady = delegate[QueueableLike_isReady];
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
                call(queueProtoype[SinkLike_next], this, next);
            }
            return this[QueueableLike_isReady];
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            call(queueProtoype[SinkLike_complete], this);
            if (isCompleted) {
                return;
            }
            scheduleDrainQueue(this);
        },
        [LiftedObserverLike_complete]() {
            this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
    })));
})();
export default LiftedObserverMixin;
