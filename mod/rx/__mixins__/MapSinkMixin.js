/// <reference types="./MapSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const MapSinkMixin_selector = Symbol("MapSinkMixin_selector");
const MapSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function MapSinkMixin(instance, delegate, selector) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[MapSinkMixin_selector] = selector;
    return instance;
}, props({
    [MapSinkMixin_selector]: none,
}), {
    [SinkLike_notify](next) {
        const mapped = this[MapSinkMixin_selector](next);
        this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
    },
})))();
export default MapSinkMixin;
