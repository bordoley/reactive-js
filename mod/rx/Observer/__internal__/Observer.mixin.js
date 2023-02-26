/// <reference types="./Observer.mixin.d.ts" />

import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { call, isNone, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { ObserverLike_dispatcher, ObserverLike_scheduler, SinkLike_notify, } from "../../../rx.js";
import { DispatcherLike_scheduler, } from "../../../scheduling.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { DisposableLike_error, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import PullableQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/PullableQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observer_getsScheduler from "./Observer.getScheduler.js";
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
    const fifoQueueProtoype = getPrototype(PullableQueue_fifoQueueMixin());
    return createInstanceFactory(mix(include(Disposable_mixin, PullableQueue_fifoQueueMixin()), function ObserverDispatcher(instance, observer) {
        init(Disposable_mixin, instance);
        init(PullableQueue_fifoQueueMixin(), instance);
        instance[ObserverDispatcher_observer] = observer;
        instance[ObserverDispatcher_continuation] = () => {
            const { [ObserverDispatcher_observer]: observer } = instance;
            while (instance[QueueLike_count] > 0) {
                const next = instance[PullableQueueLike_pull]();
                observer[SinkLike_notify](next);
                Continuation__yield();
            }
        };
        instance[ObserverDispatcher_onContinuationDispose] = () => {
            if (Disposable_isDisposed(instance)) {
                pipe(observer, Disposable_dispose(instance[DisposableLike_error]));
            }
        };
        pipe(instance, Disposable_onDisposed(e => {
            if (instance[QueueLike_count] === 0) {
                pipe(observer, Disposable_dispose(e));
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
            return Observer_getsScheduler(this[ObserverDispatcher_observer]);
        },
        [QueueLike_push](next) {
            if (!Disposable_isDisposed(this)) {
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
