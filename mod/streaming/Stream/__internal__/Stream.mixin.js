/// <reference types="./Stream.mixin.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isNone, isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { SchedulerLike_inContinuation, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_count, QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    const DispatchedObservable_observer = Symbol("DispatchedObservable_observer");
    return createInstanceFactory(mix(include(Disposable_mixin), function DispatchedObservable(instance) {
        init(Disposable_mixin, instance);
        return instance;
    }, props({
        [DispatchedObservable_observer]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [QueueableLike_maxBufferSize]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[QueueableLike_maxBufferSize];
        },
        get [QueueableLike_count]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[QueueableLike_count];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[DispatcherLike_scheduler];
        },
        [QueueableLike_push](next) {
            const observer = this[DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses lazy subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
                raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
            }
            const scheduler = observer[DispatcherLike_scheduler];
            const inContinuation = scheduler[SchedulerLike_inContinuation];
            const observerQueueIsEmpty = observer[QueueableLike_count] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];
            if (inContinuation && observerQueueIsEmpty && !isDisposed) {
                observer[ObserverLike_notify](next);
                return true;
            }
            else if (!isDisposed) {
                return observer[QueueableLike_push](next);
            }
            else {
                return true;
            }
        },
        [DispatcherLike_complete]() {
            const observer = this[DispatchedObservable_observer];
            // Practically the observer can never be none,
            // unless the stream operator uses lazy subscriptions
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
            pipe(this, Disposable_onDisposed(e => {
                if (isSome(e)) {
                    observer[DisposableLike_dispose](e);
                }
                else {
                    observer[DispatcherLike_complete]();
                }
            }));
        },
    }));
})();
const Stream_mixin = /*@__PURE__*/ (() => {
    const StreamMixin_observable = Symbol("StreamMixin_observable");
    return returns(mix(include(Disposable_delegatingMixin()), function StreamMixin(instance, op, scheduler, replay) {
        const dispatchedObservable = DispatchedObservable_create();
        init(Disposable_delegatingMixin(), instance, dispatchedObservable);
        instance[DispatcherLike_scheduler] = scheduler;
        instance[StreamMixin_observable] = pipe(dispatchedObservable, op, Observable_multicast(scheduler, { replay }), Disposable_add(instance));
        return instance;
    }, props({
        [StreamMixin_observable]: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[StreamMixin_observable][MulticastObservableLike_observerCount];
        },
        get [QueueableLike_maxBufferSize]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },
        get [QueueableLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_count];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [QueueableLike_push](req) {
            return this[DelegatingLike_delegate][QueueableLike_push](req);
        },
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
        [ObservableLike_observe](observer) {
            this[StreamMixin_observable][ObservableLike_observe](observer);
        },
    }));
})();
export default Stream_mixin;
