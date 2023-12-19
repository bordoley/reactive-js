/// <reference types="./ObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import { ContinuationContextLike_yield, DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, DispatcherLike_complete, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceMixin_publisher, } from "../../events/__mixins__/LazyInitEventSourceMixin.js";
import { call, none, pipe, returns, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";
const ObserverMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_isCompleted = Symbol("ObserverMixin_isCompleted");
    const ObserverMixin_dispatchSubscription = Symbol("ObserverMixin_dispatchSubscription");
    const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
    const scheduleDrainQueue = (observer) => {
        if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                unsafeCast(observer);
                while (observer[CollectionLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[SinkLike_notify](next);
                    if (observer[CollectionLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[ObserverMixin_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](DispatcherLikeEvent_ready);
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
        [ObserverMixin_isCompleted]: false,
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
            if (!this[ObserverMixin_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(indexedQueueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](DispatcherLikeEvent_capacityExceeded);
                }
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[ObserverMixin_isCompleted];
            this[ObserverMixin_isCompleted] = true;
            if (!isCompleted) {
                this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](DispatcherLikeEvent_completed);
            }
            if (this[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
        [SinkLike_notify](_) { },
    }));
})();
export default ObserverMixin;
