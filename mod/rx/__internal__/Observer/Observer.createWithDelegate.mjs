/// <reference types="./Observer.createWithDelegate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer$getScheduler from './Observer.getScheduler.mjs';
import Observer$mixin from './Observer.mixin.mjs';

const Observer$createWithDelegate = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, Observer$getScheduler(observer));
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

export { Observer$createWithDelegate as default };
