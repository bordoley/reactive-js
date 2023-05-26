/// <reference types="./Observer.baseMixin.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import EventSource_lazyInitPublisherMixin, { LazyInitEventMixin_eventPublisher, } from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import Queue_indexedQueueMixin from "../../Queue/__internal__/Queue.indexedQueueMixin.js";
import { getPrototype, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __ObserverMixin_dispatchSubscription, __ObserverMixin_isCompleted, } from "../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../__internal__/types.js";
import { call, pipe, returns, unsafeCast } from "../../functions.js";
import { CollectionLike_count, DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, SchedulerLike_schedule, SchedulerLike_yield, SinkLike_notify, } from "../../types.js";
const Observer_baseMixin = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (observer) => {
        if (observer[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (scheduler) => {
                unsafeCast(observer);
                while (observer[CollectionLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[SinkLike_notify](next);
                    if (observer[CollectionLike_count] > 0) {
                        scheduler[SchedulerLike_yield]();
                    }
                }
                if (observer[__ObserverMixin_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](DispatcherLikeEvent_ready);
                }
            };
            observer[__ObserverMixin_dispatchSubscription] = pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
        }
    };
    const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
    return returns(mix(include(Queue_indexedQueueMixin(), EventSource_lazyInitPublisherMixin()), function ObserverMixin(instance, config) {
        init(
        // FIXME: Change this to take a config
        Queue_indexedQueueMixin(), instance, config[QueueableLike_capacity], config[QueueableLike_backpressureStrategy]);
        init(EventSource_lazyInitPublisherMixin(), instance);
        return instance;
    }, props({
        [__ObserverMixin_isCompleted]: false,
        [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
    }), {
        [QueueableLike_enqueue](next) {
            if (!this[__ObserverMixin_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(indexedQueueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](DispatcherLikeEvent_capacityExceeded);
                }
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[__ObserverMixin_isCompleted];
            this[__ObserverMixin_isCompleted] = true;
            if (!isCompleted) {
                this[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](DispatcherLikeEvent_completed);
            }
            if (this[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default Observer_baseMixin;
