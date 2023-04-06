/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_backpressureStrategy = 
/*@__PURE__*/ (() => {
    const createBackpressureObserver = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function EnqueueObserver(instance, delegate, capacity, backpressureStrategy) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], capacity, backpressureStrategy);
        return instance;
    }, props({}), {
        [ObserverLike_notify](next) {
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    })))();
    return ((capacity, backpressureStrategy) => pipe(createBackpressureObserver, partial(capacity, backpressureStrategy), Enumerable_lift));
})();
export default Observable_backpressureStrategy;
