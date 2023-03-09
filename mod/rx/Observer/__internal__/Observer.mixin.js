/// <reference types="./Observer.mixin.d.ts" />

import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { call, isNone, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { ObserverLike_dispatcher, ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DispatcherLike_scheduler, } from "../../../scheduling.js";
import { Continuation__yield } from "../../../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observer_schedule from "./Observer.schedule.js";
const createObserverDispatcher = /*@__PURE__*/ (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (dispatcher[QueueLike_count] === 1) {
            const { [ObserverDispatcher_observer]: observer } = dispatcher;
            pipe(observer, Observer_schedule(dispatcher[ObserverDispatcher_continuation]), Disposable_onComplete(dispatcher[ObserverDispatcher_onContinuationDispose]));
        }
    };
    const ObserverDispatcher_continuation = Symbol("ObserverDispatcher_continuation");
    const ObserverDispatcher_observer = Symbol("ObserverDispatcher_observer");
    const ObserverDispatcher_onContinuationDispose = Symbol("ObserverDispatcher_onContinuationDispose");
    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin());
    return createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function ObserverDispatcher(instance, observer) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        instance[ObserverDispatcher_observer] = observer;
        instance[ObserverDispatcher_continuation] = () => {
            const { [ObserverDispatcher_observer]: observer } = instance;
            while (instance[QueueLike_count] > 0) {
                const next = instance[PullableQueueLike_pull]();
                observer[ObserverLike_notify](next);
                if (instance[QueueLike_count] > 0) {
                    Continuation__yield();
                }
            }
        };
        instance[ObserverDispatcher_onContinuationDispose] = () => {
            if (instance[DisposableLike_isDisposed]) {
                observer[DisposableLike_dispose](instance[DisposableLike_error]);
            }
        };
        pipe(instance, Disposable_onDisposed(e => {
            if (instance[QueueLike_count] === 0) {
                observer[DisposableLike_dispose](e);
            }
        }));
        return instance;
    }, props({
        [ObserverDispatcher_continuation]: none,
        [ObserverDispatcher_observer]: none,
        [ObserverDispatcher_onContinuationDispose]: none,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[ObserverDispatcher_observer][ObserverLike_scheduler];
        },
        [QueueLike_push](next) {
            if (!this[DisposableLike_isDisposed]) {
                call(fifoQueueProtoype[QueueLike_push], this, next);
                scheduleDrainQueue(this);
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
                dispatcher = pipe(createObserverDispatcher(this), Disposable_addToIgnoringChildErrors(this));
                this[ObserverMixin_dispatcher] = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();
export default Observer_mixin;
