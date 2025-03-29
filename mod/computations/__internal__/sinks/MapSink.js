/// <reference types="./MapSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const MapSink_selector = Symbol("MapSink_selector");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function MapSink(delegate, selector) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[MapSink_selector] = selector;
        return this;
    }, props({
        [MapSink_selector]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const mapped = this[MapSink_selector](next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
