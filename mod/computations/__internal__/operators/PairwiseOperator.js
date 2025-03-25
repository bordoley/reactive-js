/// <reference types="./PairwiseOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, tuple } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
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
        [LiftedOperatorLike_notify](next) {
            const prev = this[PairwiseOperator_prev];
            const hasPrev = this[PairwiseOperator_hasPrev];
            this[PairwiseOperator_hasPrev] = true;
            this[PairwiseOperator_prev] = next;
            if (hasPrev) {
                const pair = tuple(prev, next);
                this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](pair);
            }
        },
    }));
})();
