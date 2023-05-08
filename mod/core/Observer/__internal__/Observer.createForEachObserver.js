/// <reference types="./Observer.createForEachObserver.d.ts" />

import { DelegatingLike_delegate, ForEachLike_effect, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import { none } from "../../../functions.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createForEachObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function ForEachObserver(instance, delegate, effect) {
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[ForEachLike_effect] = effect;
    return instance;
}, props({
    [ForEachLike_effect]: none,
}), {
    [ObserverLike_notify](next) {
        Observer_assertState(this);
        this[ForEachLike_effect](next);
        this[DelegatingLike_delegate][ObserverLike_notify](next);
    },
})))();
export default Observer_createForEachObserver;
