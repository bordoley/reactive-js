/// <reference types="./Observer.baseMixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ObserverMixin_dispatchSubscription, __ObserverMixin_isCompleted, __ObserverMixin_queuePublisher, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.js";
import { call, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import { SchedulerLike_schedule, SchedulerLike_yield, } from "../../../scheduling.js";
import { BufferLike_capacity, CollectionLike_count, DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, EventEmitterLike_addListener, EventListenerLike_notify, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";
const Observer_baseMixin = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (observer) => {
        if (observer[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (scheduler) => {
                unsafeCast(observer);
                while (observer[CollectionLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[CollectionLike_count] > 0) {
                        scheduler[SchedulerLike_yield]();
                    }
                }
                if (observer[__ObserverMixin_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify]("drain");
                }
            };
            observer[__ObserverMixin_dispatchSubscription] = pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
        }
    };
    const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
    return returns(mix(include(Queue_indexedQueueMixin()), function ObserverMixin(instance, config) {
        init(
        // FIXME: Change this to take a config
        Queue_indexedQueueMixin(), instance, config[BufferLike_capacity], config[QueueableLike_backpressureStrategy]);
        return instance;
    }, props({
        [__ObserverMixin_isCompleted]: false,
        [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
        [__ObserverMixin_queuePublisher]: none,
    }), {
        [QueueableLike_enqueue](next) {
            if (!this[__ObserverMixin_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(indexedQueueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify]("wait");
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
                this[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify]("complete");
            }
            if (this[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
        [EventEmitterLike_addListener](listener) {
            const publisher = this[__ObserverMixin_queuePublisher] ??
                (() => {
                    const publisher = EventPublisher_create();
                    this[__ObserverMixin_queuePublisher] = publisher;
                    return pipe(publisher, Disposable_addTo(this));
                })();
            publisher[EventEmitterLike_addListener](listener);
        },
    }));
})();
export default Observer_baseMixin;
