/// <reference types="./Stream.mixin.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatchedObservable_observer, StreamMixin_dispatcher, } from "../../../__internal__/symbols.js";
import { QueueLike_count, } from "../../../__internal__/util.internal.js";
import { isNone, isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { SchedulerLike_inContinuation, } from "../../../scheduling.js";
import { DisposableLike_isDisposed, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function DispatchedObservable(instance) {
        return instance;
    }, props({
        [DispatchedObservable_observer]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            const observer = this[DispatchedObservable_observer];
            return observer[QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[QueueableLike_capacity];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[DispatcherLike_scheduler];
        },
        [QueueableLike_enqueue](next) {
            const observer = this[DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            const scheduler = observer[DispatcherLike_scheduler];
            const inContinuation = scheduler[SchedulerLike_inContinuation];
            // Observer only implement Queueable publicly so cast to the implementation interface
            // to enable bypassing the queue
            const observerQueueIsEmpty = observer[QueueLike_count] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];
            if (inContinuation && observerQueueIsEmpty && !isDisposed) {
                observer[ObserverLike_notify](next);
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
            const observer = this[DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            observer[DispatcherLike_complete]();
        },
        [ObservableLike_observe](observer) {
            if (isSome(this[DispatchedObservable_observer])) {
                raiseWithDebugMessage("DispatchedObservable already subscribed to");
            }
            this[DispatchedObservable_observer] = observer;
        },
    }));
})();
const Stream_mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin()), function StreamMixin(instance, op, scheduler, replay, capacity) {
        instance[DispatcherLike_scheduler] = scheduler;
        const dispatchedObservable = DispatchedObservable_create();
        instance[StreamMixin_dispatcher] = dispatchedObservable;
        const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, { replay, capacity }));
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({
        [StreamMixin_dispatcher]: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[StreamMixin_dispatcher][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[StreamMixin_dispatcher][QueueableLike_capacity];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [QueueableLike_enqueue](req) {
            return this[StreamMixin_dispatcher][QueueableLike_enqueue](req);
        },
        [DispatcherLike_complete]() {
            this[StreamMixin_dispatcher][DispatcherLike_complete]();
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default Stream_mixin;
