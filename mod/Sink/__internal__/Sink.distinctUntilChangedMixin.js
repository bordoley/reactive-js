/// <reference types="./Sink.distinctUntilChangedMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, DistinctUntilChangedLike_equality, DistinctUntilChangedLike_hasValue, DistinctUntilChangedLike_prev, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_distinctUntilChangedMixin = /*@__PURE__*/ (() => returns(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function DistinctUntilChangedSinkMixin(instance, delegate, equality) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[DistinctUntilChangedLike_equality] = equality;
    return instance;
}, props({
    [DistinctUntilChangedLike_equality]: none,
    [DistinctUntilChangedLike_prev]: none,
    [DistinctUntilChangedLike_hasValue]: false,
}), {
    [SinkLike_notify](next) {
        const shouldEmit = !this[DistinctUntilChangedLike_hasValue] ||
            !this[DistinctUntilChangedLike_equality](this[DistinctUntilChangedLike_prev], next);
        if (shouldEmit) {
            this[DistinctUntilChangedLike_prev] = next;
            this[DistinctUntilChangedLike_hasValue] = true;
            this[DelegatingLike_delegate][SinkLike_notify](next);
        }
    },
})))();
export default Sink_distinctUntilChangedMixin;
