/// <reference types="./Observer.createMapObserver.d.ts" />

import { MappingLike_selector, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
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
    [ObserverLike_notify](next) {
        Observer_assertState(this);
        const mapped = this[MappingLike_selector](next);
        this[DelegatingLike_delegate][ObserverLike_notify](mapped);
    },
})))();
export default Observer_createMapObserver;
