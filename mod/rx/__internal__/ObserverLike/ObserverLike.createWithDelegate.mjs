/// <reference types="./ObserverLike.createWithDelegate.d.ts" />
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import getScheduler from './ObserverLike.getScheduler.mjs';
import observerMixin from './ObserverLike.mixin.mjs';

const createWithDelegate = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(observer));
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

export { createWithDelegate as default };
