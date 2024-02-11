/// <reference types="./ObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ContinuationContextLike_yield, DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, DispatcherLike_complete, DispatcherLike_isCompleted, ObserverLike_notify, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceLike_publisher, } from "../../events/__mixins__/LazyInitEventSourceMixin.js";
import { EventListenerLike_notify } from "../../events.js";
import { call, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
const ObserverMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_dispatchSubscription = Symbol("ObserverMixin_dispatchSubscription");
    const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
    const scheduleDrainQueue = (observer) => {
        if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[DispatcherLike_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_ready);
                }
            };
            observer[ObserverMixin_dispatchSubscription] = pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
        }
    };
    const indexedQueueProtoype = getPrototype(IndexedQueueMixin());
    return returns(mix(include(IndexedQueueMixin(), LazyInitEventSourceMixin()), function ObserverMixin(instance, scheduler, config) {
        init(IndexedQueueMixin(), instance, config);
        init(LazyInitEventSourceMixin(), instance);
        instance[ObserverMixin_scheduler] = scheduler;
        return instance;
    }, props({
        [DispatcherLike_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable.disposed,
        [ObserverMixin_scheduler]: none,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[ObserverMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[ObserverMixin_scheduler][SchedulerLike_schedule](continuation, options), Disposable.addTo(this, { ignoreChildErrors: true }));
        },
        [QueueableLike_enqueue](next) {
            if (!this[DispatcherLike_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(indexedQueueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_capacityExceeded);
                }
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[DispatcherLike_isCompleted];
            this[DispatcherLike_isCompleted] = true;
            if (!isCompleted) {
                this[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_completed);
            }
            if (this[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
        [ObserverLike_notify](_) { },
    }));
})();
export default ObserverMixin;
