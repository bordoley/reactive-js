/// <reference types="./ObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, bindMethod, call, none, pipe, returns, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isCompleted, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
export const ObserverMixinBaseLike_notify = Symbol("ObserverLike_notify");
const ObserverMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
    const ObserverMixin_rootScheduler = Symbol("ObserverMixin_rootScheduler");
    const ObserverMixin_schedulerCallback = Symbol("ObserverMixin_schedulerCallback");
    const scheduleDrainQueue = (observer) => {
        if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverMixinBaseLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[QueueableLike_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
            };
            observer[SerialDisposableLike_current] =
                observer[SchedulerLike_schedule](continuation);
        }
    };
    const queueProtoype = getPrototype(QueueMixin());
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function ObserverMixin(scheduler, config) {
        init(QueueMixin(), this, {
            backpressureStrategy: config[QueueableLike_backpressureStrategy],
            capacity: config[QueueableLike_capacity],
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        this[ObserverMixin_scheduler] = scheduler;
        this[ObserverMixin_rootScheduler] =
            scheduler[ObserverMixin_rootScheduler] ??
                scheduler;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[ObserverMixin_schedulerCallback] =
            function ObserverMixinSchedulerCallback(ctx) {
                instance[SchedulerLike_inContinuation] = true;
                this(ctx);
                instance[SchedulerLike_inContinuation] = false;
            };
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, QueueableLike_complete)));
        return this;
    }, props({
        [ObserverMixin_scheduler]: none,
        [SchedulerLike_inContinuation]: false,
        [ObserverMixin_rootScheduler]: none,
        [ObserverMixin_schedulerCallback]: none,
    }), {
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[ObserverMixin_rootScheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[ObserverMixin_rootScheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ObserverMixin_rootScheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[ObserverMixin_rootScheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[ObserverMixin_scheduler][SchedulerLike_schedule](bind(this[ObserverMixin_schedulerCallback], continuation), options), Disposable.addToContainer(this));
        },
        [QueueableLike_enqueue](next) {
            const isCompleted = this[QueueableLike_isCompleted];
            const isDisposed = this[DisposableLike_isDisposed];
            const inSchedulerContinuation = this[SchedulerLike_inContinuation];
            const shouldIgnore = isCompleted || isDisposed;
            const shouldNotify = inSchedulerContinuation && !shouldIgnore;
            const shouldEnqueue = !inSchedulerContinuation && !shouldIgnore;
            return ((shouldNotify && this[ObserverMixinBaseLike_notify](next)) ||
                (shouldEnqueue &&
                    (scheduleDrainQueue(this),
                        call(queueProtoype[QueueableLike_enqueue], this, next))) ||
                shouldIgnore);
        },
        [QueueableLike_complete]() {
            const isCompleted = this[QueueableLike_isCompleted];
            const isDisposed = this[DisposableLike_isDisposed];
            call(queueProtoype[QueueableLike_complete], this);
            if (!isCompleted && this[QueueLike_count] > 0 && !isDisposed) {
                scheduleDrainQueue(this);
            }
            else {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default ObserverMixin;
