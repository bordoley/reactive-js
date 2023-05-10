/// <reference types="./Observer.createBackpressureStrategyObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { BufferLike_capacity, ObserverLike_notify, QueueableLike_backpressureStrategy, } from "../../types.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createBackpressureObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Disposable_delegatingMixin, Delegating_mixin()), function EnqueueObserver(instance, delegate, config) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Observer_delegatingMixin(), instance, delegate, config);
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({}), {
    [ObserverLike_notify](next) {
        this[DelegatingLike_delegate][ObserverLike_notify](next);
    },
})))();
export default Observer_createBackpressureObserver;
