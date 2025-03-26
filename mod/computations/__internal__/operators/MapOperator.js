/// <reference types="./MapOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const MapOperator_selector = Symbol("MapOperator_selector");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function MapOperator(delegate, selector) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
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
