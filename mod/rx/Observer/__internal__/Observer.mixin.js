/// <reference types="./Observer.mixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverMixin_continuation, ObserverMixin_dispatchSubscription, ObserverMixin_isCompleted, } from "../../../__internal__/symbols.js";
import { QueueLike_count, QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { call, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";
const Observer_mixin = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (observer) => {
        var _a;
        if (observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]) {
            const continuation = (_a = observer[ObserverMixin_continuation]) !== null && _a !== void 0 ? _a : ((ctx) => {
                unsafeCast(observer);
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[ObserverMixin_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
            });
            observer[ObserverMixin_continuation] = continuation;
            observer[ObserverMixin_dispatchSubscription] = pipe(observer, Observer_schedule(continuation));
        }
    };
    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
    return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function ObserverMixin(instance, scheduler, maxBufferSize) {
        init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
        instance[DispatcherLike_scheduler] = scheduler;
        return instance;
    }, props({
        [DispatcherLike_scheduler]: none,
        [ObserverMixin_continuation]: none,
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
    }), returns);
})();
export default Observer_mixin;
