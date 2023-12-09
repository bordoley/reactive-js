/// <reference types="./PairwiseSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { none, returns } from "../../functions.js";
import { DelegatingDisposableLike_delegate, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");
const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
const PairwiseSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function PairwiseSinkMixin(instance, delegate) {
    init(DelegatingDisposableMixin(), instance, delegate);
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
export default PairwiseSinkMixin;
