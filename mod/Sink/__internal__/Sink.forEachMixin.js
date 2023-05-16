/// <reference types="./Sink.forEachMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ForEachLike_effect, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_forEachMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function ForEachSinkMixin(instance, delegate, effect) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_delegatingMixin, instance, delegate);
    instance[ForEachLike_effect] = effect;
    return instance;
}, props({
    [ForEachLike_effect]: none,
}), {
    [SinkLike_notify](next) {
        this[ForEachLike_effect](next);
        this[DelegatingLike_delegate][SinkLike_notify](next);
    },
})))();
export default Sink_forEachMixin;
