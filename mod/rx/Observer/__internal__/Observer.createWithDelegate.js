/// <reference types="./Observer.createWithDelegate.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_getScheduler from "./Observer.getScheduler.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin(), delegatingMixin()), function DelegatingObserver(instance, observer) {
    init(Disposable_mixin, instance);
    init(Observer_mixin(), instance, Observer_getScheduler(observer));
    init(delegatingMixin(), instance, observer);
    return instance;
}, props({}), {
    [SinkLike_notify](next) {
        this[DelegatingLike_delegate][SinkLike_notify](next);
    },
})))();
export default Observer_createWithDelegate;
