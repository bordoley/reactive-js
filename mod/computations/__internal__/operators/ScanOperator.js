/// <reference types="./ScanOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const ScanOperator_acc = Symbol("ScanOperator_acc");
    const ScanOperator_reducer = Symbol("ScanOperator_reducer");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function ScanOperator(delegate, reducer, initialValue) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[ScanOperator_reducer] = reducer;
        this[ScanOperator_acc] = initialValue();
        return this;
    }, props({
        [ScanOperator_acc]: none,
        [ScanOperator_reducer]: none,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            const oldAcc = this[ScanOperator_acc];
            const nextAcc = this[ScanOperator_reducer](oldAcc, next);
            this[ScanOperator_acc] = nextAcc;
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](nextAcc);
        },
    }));
})();
