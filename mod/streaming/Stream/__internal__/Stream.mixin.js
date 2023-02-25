/// <reference types="./Stream.mixin.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isSome, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import { DispatcherLike_scheduler, } from "../../../scheduling.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    const DispatchedObservable_dispatcher = Symbol("DispatchedObservable_dispatcher");
    return createInstanceFactory(mix(include(Disposable_mixin), function DispatchedObservable(instance) {
        init(Disposable_mixin, instance);
        return instance;
    }, props({
        [DispatchedObservable_dispatcher]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [QueueLike_count]() {
            var _a, _b;
            unsafeCast(this);
            return ((_b = (_a = this[DispatchedObservable_dispatcher]) === null || _a === void 0 ? void 0 : _a[QueueLike_count]) !== null && _b !== void 0 ? _b : 0);
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            const dispatcher = this[DispatchedObservable_dispatcher];
            return isSome(dispatcher)
                ? dispatcher[DispatcherLike_scheduler]
                : raiseWithDebugMessage("DispatchedObservable has not been subscribed to");
        },
        [QueueLike_push](next) {
            var _a;
            unsafeCast(this);
            (_a = this[DispatchedObservable_dispatcher]) === null || _a === void 0 ? void 0 : _a[QueueLike_push](next);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (isSome(this[DispatchedObservable_dispatcher])) {
                raiseWithDebugMessage("DispatchedObservable already subscribed to");
            }
            const dispatcher = Observer_getDispatcher(observer);
            this[DispatchedObservable_dispatcher] = dispatcher;
            pipe(this, Disposable_addIgnoringChildErrors(dispatcher));
        },
    }));
})();
const Stream_mixin = /*@__PURE__*/ (() => {
    const StreamMixin_observable = Symbol("StreamMixin_observable");
    return returns(mix(include(Disposable_delegatingMixin()), function StreamMixin(instance, op, scheduler, replay) {
        const subject = DispatchedObservable_create();
        init(Disposable_delegatingMixin(), instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance[StreamMixin_observable] = pipe(subject, op, Observable_multicast(scheduler, { replay }), add(instance));
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
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[StreamMixin_observable], ReactiveContainer_sinkInto(observer));
        },
    }));
})();
export default Stream_mixin;
