/// <reference types="./PairwiseOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, tuple } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const PairwiseOperator_hasPrev = Symbol("PairwiseOperator_hasPrev");
    const PairwiseOperator_prev = Symbol("PairwiseOperator_prev");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function BufferOperator(delegate) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        return this;
    }, props({
        [PairwiseOperator_prev]: none,
        [PairwiseOperator_hasPrev]: false,
    }), proto({
        [EventListenerLike_notify](next) {
            const prev = this[PairwiseOperator_prev];
            const hasPrev = this[PairwiseOperator_hasPrev];
            this[PairwiseOperator_hasPrev] = true;
            this[PairwiseOperator_prev] = next;
            if (hasPrev) {
                const pair = tuple(prev, next);
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](pair);
            }
        },
    }));
})();
