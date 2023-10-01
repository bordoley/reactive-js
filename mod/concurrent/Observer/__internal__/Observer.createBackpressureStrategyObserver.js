/// <reference types="./Observer.createBackpressureStrategyObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_createBackpressureObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function EnqueueObserver(instance, delegate, config) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, config);
    return instance;
}, props({}), {
    [SinkLike_notify](next) {
        this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
    },
})))();
export default Observer_createBackpressureObserver;
