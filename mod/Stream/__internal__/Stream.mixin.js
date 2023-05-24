/// <reference types="./Stream.mixin.d.ts" />

import Dispatcher_delegatingMixin from "../../Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Observable_multicast from "../../Observable/__internal__/Observable.multicast.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DispatchedObservable_dispatcher } from "../../__internal__/symbols.js";
import { isSome, none, pipe, raiseWithDebugMessage, returns, } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, StreamLike_scheduler, } from "../../types.js";
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function DispatchedObservable(instance) {
        return instance;
    }, props({
        [__DispatchedObservable_dispatcher]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            if (isSome(this[__DispatchedObservable_dispatcher])) {
                raiseWithDebugMessage("DispatchedObservable already subscribed to");
            }
            this[__DispatchedObservable_dispatcher] = observer;
        },
    }));
})();
const Stream_mixin = /*@__PURE__*/ (() => returns(mix(include(Dispatcher_delegatingMixin(), ReplayObservable_delegatingMixin(), Disposable_delegatingMixin), function StreamMixin(instance, op, scheduler, multicastOptions) {
    instance[StreamLike_scheduler] = scheduler;
    const dispatchedObservable = DispatchedObservable_create();
    const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, multicastOptions));
    init(Disposable_delegatingMixin, instance, delegate);
    init(Dispatcher_delegatingMixin(), instance, dispatchedObservable[__DispatchedObservable_dispatcher]);
    init(ReplayObservable_delegatingMixin(), instance, delegate);
    return instance;
}, props({
    [StreamLike_scheduler]: none,
}), {})))();
export default Stream_mixin;
