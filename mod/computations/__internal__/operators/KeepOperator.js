/// <reference types="./KeepOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const KeepOperator_predicate = Symbol("KeepOperator_predicate");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function KeepOperator(delegate, predicate) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[KeepOperator_predicate] = predicate;
        return this;
    }, props({
        [KeepOperator_predicate]: none,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            const shouldNotify = this[KeepOperator_predicate](next);
            if (shouldNotify) {
                this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
            }
        },
    }));
})();
