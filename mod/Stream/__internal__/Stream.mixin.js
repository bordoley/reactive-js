/// <reference types="./Stream.mixin.d.ts" />

import Dispatcher_delegatingMixin from "../../Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Observable_multicast from "../../Observable/__internal__/Observable.multicast.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
import { __DEV__ } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DispatchedObservable_observer } from "../../__internal__/symbols.js";
import { isNone, isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../functions.js";
import { BufferLike_capacity, CollectionLike_count, DispatcherLike_complete, DisposableLike_isDisposed, EventSourceLike_addEventListener, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, QueueableLike_backpressureStrategy, QueueableLike_enqueue, SchedulerLike_inContinuation, SinkLike_notify, StreamLike_scheduler, } from "../../types.js";
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function DispatchedObservable(instance) {
        return instance;
    }, props({
        [__DispatchedObservable_observer]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            const observer = this[__DispatchedObservable_observer];
            return observer[QueueableLike_backpressureStrategy];
        },
        get [BufferLike_capacity]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[__DispatchedObservable_observer];
            return observer[BufferLike_capacity];
        },
        [QueueableLike_enqueue](next) {
            const observer = this[__DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            const inContinuation = observer[SchedulerLike_inContinuation];
            // Observer only implement Queueable publicly so cast to the implementation interface
            // to enable bypassing the queue
            const observerQueueIsEmpty = observer[CollectionLike_count] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];
            if (inContinuation && observerQueueIsEmpty && !isDisposed) {
                observer[SinkLike_notify](next);
                return true;
            }
            else if (!isDisposed) {
                return observer[QueueableLike_enqueue](next);
            }
            else {
                return true;
            }
        },
        [DispatcherLike_complete]() {
            const observer = this[__DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            observer[DispatcherLike_complete]();
        },
        [ObservableLike_observe](observer) {
            if (isSome(this[__DispatchedObservable_observer])) {
                raiseWithDebugMessage("DispatchedObservable already subscribed to");
            }
            this[__DispatchedObservable_observer] = observer;
        },
        [EventSourceLike_addEventListener](listener) {
            const observer = this[__DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            observer[EventSourceLike_addEventListener](listener);
        },
    }));
})();
const Stream_mixin = /*@__PURE__*/ (() => returns(mix(include(Dispatcher_delegatingMixin(), ReplayObservable_delegatingMixin(), Disposable_delegatingMixin), function StreamMixin(instance, op, scheduler, multicastOptions) {
    instance[StreamLike_scheduler] = scheduler;
    const dispatchedObservable = DispatchedObservable_create();
    const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, multicastOptions));
    init(Disposable_delegatingMixin, instance, delegate);
    init(Dispatcher_delegatingMixin(), instance, dispatchedObservable);
    init(ReplayObservable_delegatingMixin(), instance, delegate);
    return instance;
}, props({
    [StreamLike_scheduler]: none,
}), {})))();
export default Stream_mixin;
