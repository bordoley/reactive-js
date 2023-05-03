/// <reference types="./Observer.baseMixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ObserverMixin_dispatchSubscription, __ObserverMixin_isCompleted, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.js";
import { CollectionLike_count } from "../../../containers.js";
import { call, pipe, returns, unsafeCast, } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import { BufferLike_capacity, DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, QueueableLike_backpressureStrategy, QueueableLike_enqueue, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import EventPublisher_lazyInitMixin from "../../../util/EventPublisher/__internal__/EventPublisher.lazyInitMixin.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";
const Observer_baseMixin = /*@__PURE__*/ (() => {
    const completeEvent = { type: "complete" };
    const drainEvent = { type: "drain" };
    const waitEvent = { type: "wait" };
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
                    observer[EventListenerLike_notify](drainEvent);
                }
            };
            observer[__ObserverMixin_dispatchSubscription] = pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
        }
    };
    const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
    return returns(mix(include(Queue_indexedQueueMixin(), EventPublisher_lazyInitMixin()), function ObserverMixin(instance, config) {
        init(
        // FIXME: Change this to take a config
        Queue_indexedQueueMixin(), instance, config[BufferLike_capacity], config[QueueableLike_backpressureStrategy]);
        init(EventPublisher_lazyInitMixin(), instance);
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
                    this[EventListenerLike_notify](waitEvent);
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
                this[EventListenerLike_notify](completeEvent);
            }
            if (this[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default Observer_baseMixin;
