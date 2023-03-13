/// <reference types="./Observer.mixin.d.ts" />

import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { QueueLike_pull, } from "../../../__internal__/util.internal.js";
import { call, isNone, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, ObserverLike_dispatcher, ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_count, QueueableLike_push, } from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";
const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (dispatcher[QueueableLike_count] === 1) {
            const { [ObserverDispatcher_observer]: observer } = dispatcher;
            pipe(observer, Observer_schedule(dispatcher[ObserverDispatcher_continuation]), Disposable_onComplete(dispatcher[ObserverDispatcher_onContinuationDispose]));
        }
    };
    const ObserverDispatcher_continuation = Symbol("ObserverDispatcher_continuation");
    const ObserverDispatcher_isCompleted = Symbol("ObserverDispatcher_observer");
    const ObserverDispatcher_observer = Symbol("ObserverDispatcher_observer");
    const ObserverDispatcher_onContinuationDispose = Symbol("ObserverDispatcher_onContinuationDispose");
    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
    return createInstanceFactory(mix(include(IndexedQueue_fifoQueueMixin()), function ObserverDispatcher(instance, observer) {
        init(IndexedQueue_fifoQueueMixin(), instance);
        instance[ObserverDispatcher_observer] = observer;
        instance[ObserverDispatcher_continuation] = (ctx) => {
            const { [ObserverDispatcher_observer]: observer } = instance;
            while (instance[QueueableLike_count] > 0) {
                const next = instance[QueueLike_pull]();
                observer[ObserverLike_notify](next);
                if (instance[QueueableLike_count] > 0) {
                    ctx[ContinuationContextLike_yield]();
                }
            }
        };
        instance[ObserverDispatcher_onContinuationDispose] = () => {
            if (instance[ObserverDispatcher_isCompleted]) {
                observer[DisposableLike_dispose]();
            }
        };
        return instance;
    }, props({
        [ObserverDispatcher_continuation]: none,
        [ObserverDispatcher_observer]: none,
        [ObserverDispatcher_onContinuationDispose]: none,
        [ObserverDispatcher_isCompleted]: false,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[ObserverDispatcher_observer][ObserverLike_scheduler];
        },
        [QueueableLike_push](next) {
            if (!this[ObserverDispatcher_isCompleted] &&
                !this[ObserverDispatcher_observer][DisposableLike_isDisposed]) {
                call(fifoQueueProtoype[QueueableLike_push], this, next);
                scheduleDrainQueue(this);
            }
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[ObserverDispatcher_isCompleted];
            this[ObserverDispatcher_isCompleted] = true;
            if (this[QueueableLike_count] === 0 && !isCompleted) {
                this[ObserverDispatcher_observer][DisposableLike_dispose]();
            }
        },
    }));
})();
const Observer_mixin = 
/*@__PURE__*/ (() => {
    const ObserverMixin_dispatcher = Symbol("ObserverMixin_dispatcher");
    return pipe(mix(function ObserverMixin(instance, scheduler) {
        instance[ObserverLike_scheduler] = scheduler;
        return instance;
    }, props({
        [ObserverLike_scheduler]: none,
        [ObserverMixin_dispatcher]: none,
    }), {
        get [ObserverLike_dispatcher]() {
            unsafeCast(this);
            let { [ObserverMixin_dispatcher]: dispatcher } = this;
            if (isNone(dispatcher)) {
                dispatcher = createObserverDispatcher(this);
                this[ObserverMixin_dispatcher] = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();
export default Observer_mixin;
