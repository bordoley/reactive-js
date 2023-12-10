/// <reference types="./ObserverMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { returns } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../utils.js";
import Observer_assertState from "../Observer/__private__/Observer.assertState.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import Observer_baseMixin from "./ObserverBaseMixin.js";
const ObserverMixin = /*@__PURE__*/ (() => returns(mix(include(Observer_baseMixin(), DelegatingSchedulerMixin), function ObserverMixin(instance, scheduler, config) {
    init(DelegatingSchedulerMixin, instance, scheduler);
    init(Observer_baseMixin(), instance, config);
    return instance;
}, props({}), {
    [SinkLike_notify](_) {
        Observer_assertState(this);
    },
})))();
export default ObserverMixin;
