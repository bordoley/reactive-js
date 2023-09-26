/// <reference types="./Sink.pairwiseMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");
const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
const Sink_pairwiseMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function PairwiseSinkMixin(instance, delegate) {
    init(Disposable_delegatingMixin(), instance, delegate);
    return instance;
}, props({
    [PairwiseSinkMixin_prev]: none,
    [PairwiseSinkMixin_hasPrev]: false,
}), {
    [SinkLike_notify](next) {
        const prev = this[PairwiseSinkMixin_prev];
        if (this[PairwiseSinkMixin_hasPrev]) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify]([
                prev,
                next,
            ]);
        }
        this[PairwiseSinkMixin_hasPrev] = true;
        this[PairwiseSinkMixin_prev] = next;
    },
})))();
export default Sink_pairwiseMixin;
