/// <reference types="./Observer.delegatingMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import Scheduler_delegatingMixin from "../../../scheduling/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_baseMixin from "./Observer.baseMixin.js";
const Observer_delegatingMixin = /*@__PURE__*/ (() => returns(mix(include(Observer_baseMixin(), Scheduler_delegatingMixin, Disposable_delegatingMixin()), function ObserverMixin(instance, delegate, config) {
    init(Disposable_delegatingMixin(), instance, delegate);
    init(Scheduler_delegatingMixin, instance, delegate);
    init(Observer_baseMixin(), instance, config);
    return instance;
}, props({}), {})))();
export default Observer_delegatingMixin;
