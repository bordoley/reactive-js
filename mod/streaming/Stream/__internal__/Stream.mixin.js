/// <reference types="./Stream.mixin.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike_dispatcher, ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import { DispatcherLike_scheduler, SchedulerLike_inContinuation, } from "../../../scheduling.js";
import { DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
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
        get [QueueLike_count]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            const dispatcher = observer[ObserverLike_dispatcher];
            return dispatcher[QueueLike_count];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            return observer[ObserverLike_scheduler];
        },
        [QueueLike_push](next) {
            unsafeCast(this);
            // Practically the observer can never be none.
            const observer = this[DispatchedObservable_observer];
            const dispatcher = observer[ObserverLike_dispatcher];
            const scheduler = observer[ObserverLike_scheduler];
            const inContinuation = scheduler[SchedulerLike_inContinuation];
            const dispatcherQueueIsEmpty = dispatcher[QueueLike_count] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];
            if (inContinuation && dispatcherQueueIsEmpty && !isDisposed) {
                observer[ObserverLike_notify](next);
            }
            else if (!isDisposed) {
                dispatcher[QueueLike_push](next);
            }
        },
        [ObservableLike_observe](observer) {
            if (isSome(this[DispatchedObservable_observer])) {
                raiseWithDebugMessage("DispatchedObservable already subscribed to");
            }
            this[DispatchedObservable_observer] = observer;
            pipe(observer, Observer_getDispatcher, Disposable_addToIgnoringChildErrors(this));
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
            return MulticastObservable_getObserverCount(this[StreamMixin_observable]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[StreamMixin_observable]);
        },
        get [QueueLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueLike_count];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [QueueLike_push](req) {
            this[DelegatingLike_delegate][QueueLike_push](req);
        },
        [ObservableLike_observe](observer) {
            pipe(this[StreamMixin_observable], Observable_observeWith(observer));
        },
    }));
})();
export default Stream_mixin;
