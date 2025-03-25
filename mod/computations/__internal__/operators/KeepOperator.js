/// <reference types="./KeepOperator.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const KeepMixin_predicate = Symbol("KeepMixin_predicate");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function KeepMixin(delegate, predicate) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[KeepMixin_predicate] = predicate;
        return this;
    }, props({
        [KeepMixin_predicate]: none,
    }), {
        [LiftedOperatorLike_notify](next) {
            const shouldNotify = this[KeepMixin_predicate](next);
            if (shouldNotify) {
                this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
            }
        },
    });
})();
