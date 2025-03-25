/// <reference types="./TakeWhileOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const TakeWhileMixin_inclusive = Symbol("TakeWhileMixin_inclusive");
    const TakeWhileMixin_predicate = Symbol("TakeWhileMixin_predicate");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeWhileOperator(delegate, predicate, options) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[TakeWhileMixin_predicate] = predicate;
        this[TakeWhileMixin_inclusive] = options?.inclusive ?? false;
        return this;
    }, props({
        [TakeWhileMixin_predicate]: none,
        [TakeWhileMixin_inclusive]: none,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileMixin_predicate](next);
            const isInclusive = this[TakeWhileMixin_inclusive];
            if (satisfiesPredicate || isInclusive) {
                this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
            }
            if (!satisfiesPredicate) {
                this[LiftedOperatorLike_complete]();
            }
        },
    }));
})();
