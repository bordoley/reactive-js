/// <reference types="./MapOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const MapOperator_selector = Symbol("MapOperator_selector");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function MapOperator(delegate, selector) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[MapOperator_selector] = selector;
        return this;
    }, props({
        [MapOperator_selector]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const mapped = this[MapOperator_selector](next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
