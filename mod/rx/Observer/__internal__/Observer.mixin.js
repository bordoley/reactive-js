/// <reference types="./Observer.mixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverMixin_continuation, ObserverMixin_isCompleted, ObserverMixin_onContinuationDispose, } from "../../../__internal__/symbols.js";
import { QueueLike_count, QueueLike_pull, } from "../../../__internal__/util.internal.js";
import { call, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_push, } from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";
const Observer_mixin = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (observer) => {
        if (observer[QueueLike_count] === 1) {
            pipe(observer, Observer_schedule(observer[ObserverMixin_continuation]), Disposable_onComplete(observer[ObserverMixin_onContinuationDispose]));
        }
    };
    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
    return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function ObserverMixin(instance, scheduler, maxBufferSize) {
        init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
        instance[DispatcherLike_scheduler] = scheduler;
        instance[ObserverMixin_continuation] = (ctx) => {
            unsafeCast(instance);
            while (instance[QueueLike_count] > 0) {
                const next = instance[QueueLike_pull]();
                instance[ObserverLike_notify](next);
                if (instance[QueueLike_count] > 0) {
                    ctx[ContinuationContextLike_yield]();
                }
            }
        };
        instance[ObserverMixin_onContinuationDispose] = () => {
            unsafeCast(instance);
            if (instance[ObserverMixin_isCompleted]) {
                instance[DisposableLike_dispose]();
            }
        };
        return instance;
    }, props({
        [DispatcherLike_scheduler]: none,
        [ObserverMixin_continuation]: none,
        [ObserverMixin_onContinuationDispose]: none,
        [ObserverMixin_isCompleted]: false,
    }), {
        [QueueableLike_push](next) {
            if (!this[ObserverMixin_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(fifoQueueProtoype[QueueableLike_push], this, next);
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[ObserverMixin_isCompleted];
            this[ObserverMixin_isCompleted] = true;
            if (this[QueueLike_count] === 0 && !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
    }), returns);
})();
export default Observer_mixin;
