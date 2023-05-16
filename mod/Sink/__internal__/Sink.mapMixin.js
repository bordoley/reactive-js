/// <reference types="./Sink.mapMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_mapMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function MapSinkMixin(instance, delegate, selector) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_delegatingMixin, instance, delegate);
    instance[MappingLike_selector] = selector;
    return instance;
}, props({
    [MappingLike_selector]: none,
}), {
    [SinkLike_notify](next) {
        const mapped = this[MappingLike_selector](next);
        this[DelegatingLike_delegate][SinkLike_notify](mapped);
    },
})))();
export default Sink_mapMixin;
