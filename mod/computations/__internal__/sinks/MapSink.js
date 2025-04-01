/// <reference types="./MapSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
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
            this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
