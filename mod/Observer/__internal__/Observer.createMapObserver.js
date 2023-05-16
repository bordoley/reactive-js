/// <reference types="./Observer.createMapObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createMapObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function MapObserver(instance, delegate, selector) {
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[MappingLike_selector] = selector;
    return instance;
}, props({
    [MappingLike_selector]: none,
}), {
    [SinkLike_notify](next) {
        Observer_assertState(this);
        const mapped = this[MappingLike_selector](next);
        this[DelegatingLike_delegate][SinkLike_notify](mapped);
    },
})))();
export default Observer_createMapObserver;
