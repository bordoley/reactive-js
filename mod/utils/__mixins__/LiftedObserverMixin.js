/// <reference types="./LiftedObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, bindMethod, call, none, pipe, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isCompleted, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
export const LiftedObserverLike_delegate = Symbol("LiftedObserverLike_delegate");
export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");
export const LiftedObserverLike_complete = Symbol("LiftedObserverLike_complete");
const LiftedObserverMixin = /*@__PURE__*/ (() => {
    const LiftedObserverMixin_scheduler = Symbol("LiftedObserverMixin_scheduler");
    const LiftedObserverMixin_schedulerCallback = Symbol("LiftedObserverMixin_schedulerCallback");
    const scheduleDrainQueue = (observer) => {
        if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    if (!observer[LiftedObserverLike_notify](next)) {
                        observer[SchedulerLike_requestYield]();
                    }
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[QueueableLike_isCompleted]) {
                    observer[LiftedObserverLike_complete]();
                }
            };
            observer[SerialDisposableLike_current] =
                observer[SchedulerLike_schedule](continuation);
        }
    };
    const queueProtoype = getPrototype(QueueMixin());
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function LiftedObserverMixin(delegate, options) {
        init(QueueMixin(), this, {
            backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
            capacity: delegate[QueueableLike_capacity],
            ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
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
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, QueueableLike_complete)));
        return this;
    }, props({
        [SchedulerLike_inContinuation]: false,
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
            return pipe(this[LiftedObserverMixin_scheduler][SchedulerLike_schedule](bind(this[LiftedObserverMixin_schedulerCallback], continuation), options), Disposable.addToContainer(this));
        },
        [QueueableLike_enqueue](next) {
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const shouldIgnore = this[QueueableLike_isCompleted] || this[DisposableLike_isDisposed];
            const shouldNotify = inSchedulerContinuation && !shouldIgnore;
            const shouldEnqueue = !inSchedulerContinuation && !shouldIgnore;
            const result = (shouldNotify && this[LiftedObserverLike_notify](next)) ||
                (shouldEnqueue &&
                    (scheduleDrainQueue(this),
                        call(queueProtoype[QueueableLike_enqueue], this, next)));
            return result && this[QueueableLike_isReady];
        },
        [QueueableLike_complete]() {
            const isCompleted = this[QueueableLike_isCompleted];
            const isDisposed = this[DisposableLike_isDisposed];
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const count = this[QueueLike_count];
            call(queueProtoype[QueueableLike_complete], this);
            if (isCompleted || isDisposed) {
                return;
            }
            if (inSchedulerContinuation && count === 0) {
                this[LiftedObserverLike_complete]();
            }
            else {
                scheduleDrainQueue(this);
            }
        },
        [LiftedObserverLike_complete]() {
            this[LiftedObserverLike_delegate][QueueableLike_complete]();
        },
    })));
})();
export default LiftedObserverMixin;
