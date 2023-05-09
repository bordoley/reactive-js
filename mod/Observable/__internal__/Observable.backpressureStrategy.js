/// <reference types="./Observable.backpressureStrategy.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { partial, pipe } from "../../functions.js";
import { BufferLike_capacity, ObserverLike_notify, QueueableLike_backpressureStrategy, } from "../../types.js";
const Observable_backpressureStrategy = 
/*@__PURE__*/ (() => {
    const createBackpressureObserver = (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Disposable_delegatingMixin, Delegating_mixin()), function EnqueueObserver(instance, delegate, config) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, config);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        [ObserverLike_notify](next) {
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    })))();
    return ((capacity, backpressureStrategy) => pipe(createBackpressureObserver, partial({
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
        [BufferLike_capacity]: capacity,
    }), Enumerable_lift));
})();
export default Observable_backpressureStrategy;
