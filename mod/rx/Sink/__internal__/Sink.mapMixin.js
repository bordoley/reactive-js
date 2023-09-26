/// <reference types="./Sink.mapMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const MapSinkMixin_selector = Symbol("MapSinkMixin_selector");
const Sink_mapMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function MapSinkMixin(instance, delegate, selector) {
    init(Disposable_delegatingMixin(), instance, delegate);
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
export default Sink_mapMixin;
