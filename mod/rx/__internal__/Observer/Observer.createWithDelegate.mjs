/// <reference types="./Observer.createWithDelegate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer_getScheduler from './Observer.getScheduler.mjs';
import Observer_mixin from './Observer.mixin.mjs';

const Observer_createWithDelegate = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(observer));
        instance.delegate = observer;
        return instance;
    }, props({
        delegate: none,
    }), {
        [SinkLike_notify](next) {
            this.delegate[SinkLike_notify](next);
        },
    }));
})();

export { Observer_createWithDelegate as default };
