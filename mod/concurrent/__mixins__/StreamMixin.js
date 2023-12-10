/// <reference types="./StreamMixin.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, StreamLike_scheduler, } from "../../concurrent.js";
import { isSome, none, pipe, raiseIf, returns, } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observable_multicast from "../Observable/__internal__/Observable.multicast.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";
const DispatchedObservableLike_dispatcher = Symbol("DispatchedObservableLike_dispatcher");
const DispatchedObservable_create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function DispatchedObservable(instance) {
        return instance;
    }, props({
        [DispatchedObservableLike_dispatcher]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[DispatchedObservableLike_dispatcher]), "DispatchedObservable already subscribed to");
            this[DispatchedObservableLike_dispatcher] = observer;
        },
    }));
})();
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDispatcherMixin(), DelegatingReplayObservableMixin(), DelegatingDisposableMixin()), function StreamMixin(instance, op, scheduler, multicastOptions) {
    instance[StreamLike_scheduler] = scheduler;
    const dispatchedObservable = DispatchedObservable_create();
    const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, multicastOptions));
    init(DelegatingDisposableMixin(), instance, delegate);
    init(DelegatingDispatcherMixin(), instance, dispatchedObservable[DispatchedObservableLike_dispatcher]);
    init(DelegatingReplayObservableMixin(), instance, delegate);
    return instance;
}, props({
    [StreamLike_scheduler]: none,
}), {})))();
export default StreamMixin;
