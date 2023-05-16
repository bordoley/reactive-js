/// <reference types="./Sink.pairwiseMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PairwiseLike_hasPrev, PairwiseLike_prev, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_pairwiseMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function PairwiseSinkMixin(instance, delegate) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({
    [PairwiseLike_prev]: none,
    [PairwiseLike_hasPrev]: false,
}), {
    [SinkLike_notify](next) {
        const prev = this[PairwiseLike_prev];
        if (this[PairwiseLike_hasPrev]) {
            this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
        }
        this[PairwiseLike_hasPrev] = true;
        this[PairwiseLike_prev] = next;
    },
})))();
export default Sink_pairwiseMixin;
