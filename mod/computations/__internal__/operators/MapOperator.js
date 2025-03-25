/// <reference types="./MapOperator.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const MapMixin_selector = Symbol("MapMixin_selector");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function MapMixin(delegate, selector) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[MapMixin_selector] = selector;
        return this;
    }, props({
        [MapMixin_selector]: none,
    }), {
        [LiftedOperatorLike_notify](next) {
            const mapped = this[MapMixin_selector](next);
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](mapped);
        },
    });
})();
