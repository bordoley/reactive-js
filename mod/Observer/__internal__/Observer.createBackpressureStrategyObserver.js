/// <reference types="./Observer.createBackpressureStrategyObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, SinkLike_notify, } from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createBackpressureObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Disposable_delegatingMixin, Delegating_mixin()), function EnqueueObserver(instance, delegate, config) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Observer_mixin(), instance, delegate, config);
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({}), {
    [SinkLike_notify](next) {
        this[DelegatingLike_delegate][SinkLike_notify](next);
    },
})))();
export default Observer_createBackpressureObserver;
