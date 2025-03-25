/// <reference types="./MapOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const MapOperator_selector = Symbol("MapOperator_selector");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function MapOperator(delegate, selector) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[MapOperator_selector] = selector;
        return this;
    }, props({
        [MapOperator_selector]: none,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            const mapped = this[MapOperator_selector](next);
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](mapped);
        },
    }));
})();
