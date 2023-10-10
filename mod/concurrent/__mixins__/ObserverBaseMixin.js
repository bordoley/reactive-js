/// <reference types="./ObserverBaseMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import { DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, DispatcherLike_complete, SchedulerLike_schedule, SchedulerLike_yield, } from "../../concurrent.js";
import { call, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, SinkLike_notify, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";
import LazyInitEventSourceMixin, { LazyInitEventSourceMixin_publisher, } from "../../utils/__mixins__/LazyInitEventSourceMixin.js";
const ObserverBaseMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_isCompleted = Symbol("ObserverMixin_isCompleted");
    const ObserverMixin_dispatchSubscription = Symbol("ObserverMixin_dispatchSubscription");
    const scheduleDrainQueue = (observer) => {
        if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (scheduler) => {
                unsafeCast(observer);
                while (observer[CollectionLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[SinkLike_notify](next);
                    if (observer[CollectionLike_count] > 0) {
                        scheduler[SchedulerLike_yield]();
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
    return returns(mix(include(IndexedQueueMixin(), LazyInitEventSourceMixin()), function ObserverMixin(instance, config) {
        init(
        // FIXME: Change this to take a config
        IndexedQueueMixin(), instance, config[QueueableLike_capacity], config[QueueableLike_backpressureStrategy]);
        init(LazyInitEventSourceMixin(), instance);
        return instance;
    }, props({
        [ObserverMixin_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable.disposed,
    }), {
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
    }));
})();
export default ObserverBaseMixin;
