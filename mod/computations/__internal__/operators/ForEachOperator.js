/// <reference types="./ForEachOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ForEachOperator_effect = Symbol("ForEachOperator_effect");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function ForEachOperator(delegate, effect) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[ForEachOperator_effect] = effect;
        return this;
    }, props({
        [ForEachOperator_effect]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[ForEachOperator_effect](next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
    }));
})();
