/// <reference types="./Observer.createWithDelegate.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "./Observer.mixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin(), delegatingMixin()), function DelegatingObserver(instance, observer) {
    init(Disposable_mixin, instance);
    initObserverMixinFromDelegate(instance, observer);
    init(delegatingMixin(), instance, observer);
    return instance;
}, props({}), {
    [ObserverLike_notify](next) {
        Observer_assertState(this);
        this[DelegatingLike_delegate][ObserverLike_notify](next);
    },
})))();
export default Observer_createWithDelegate;
