/// <reference types="./Observer.baseMixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, ObserverMixin_dispatchSubscription, ObserverMixin_isCompleted, SchedulerLike_schedule, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { call, pipe, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, ObserverLike_notify, } from "../../../rx.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
const Observer_baseMixin = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (observer) => {
        if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                unsafeCast(observer);
                while (observer[CollectionLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[CollectionLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[ObserverMixin_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
            };
            observer[ObserverMixin_dispatchSubscription] = pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
        }
    };
    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
    return returns(mix(include(IndexedQueue_fifoQueueMixin()), function ObserverMixin(instance, config) {
        init(
        // FIXME: Change this to take a config
        IndexedQueue_fifoQueueMixin(), instance, config[BufferLike_capacity], config[QueueableLike_backpressureStrategy]);
        return instance;
    }, props({
        [ObserverMixin_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable_disposed,
    }), {
        [QueueableLike_enqueue](next) {
            if (!this[ObserverMixin_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(fifoQueueProtoype[QueueableLike_enqueue], this, next);
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[ObserverMixin_isCompleted];
            this[ObserverMixin_isCompleted] = true;
            if (this[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default Observer_baseMixin;
