/// <reference types="./Observer.createWithDelegate.d.ts" />
import { createInstanceFactory, mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer_getScheduler from './Observer.getScheduler.mjs';
import Observer_mixin from './Observer.mixin.mjs';

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

export { Observer_createWithDelegate as default };
