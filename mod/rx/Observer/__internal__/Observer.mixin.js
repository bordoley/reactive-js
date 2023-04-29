/// <reference types="./Observer.mixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Scheduler_delegatingMixin from "../../../util/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_baseMixin from "./Observer.baseMixin.js";
const Observer_mixin = /*@__PURE__*/ (() => returns(mix(include(Observer_baseMixin(), Scheduler_delegatingMixin, Disposable_mixin), function ObserverMixin(instance, scheduler, config) {
    init(Disposable_mixin, instance);
    init(Scheduler_delegatingMixin, instance, scheduler);
    init(Observer_baseMixin(), instance, config);
    return instance;
}, props({}), {
    [ObserverLike_notify](_) {
        Observer_assertState(this);
    },
})))();
export default Observer_mixin;
