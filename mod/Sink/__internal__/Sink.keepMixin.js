/// <reference types="./Sink.keepMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_keepMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function KeepSinkMixin(instance, delegate, predicate) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_delegatingMixin, instance, delegate);
    instance[PredicatedLike_predicate] = predicate;
    return instance;
}, props({
    [PredicatedLike_predicate]: none,
}), {
    [SinkLike_notify](next) {
        if (this[PredicatedLike_predicate](next)) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default Sink_keepMixin;
