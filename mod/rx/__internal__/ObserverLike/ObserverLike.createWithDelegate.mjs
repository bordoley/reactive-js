/// <reference types="./ObserverLike.createWithDelegate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import ObserverLike__getScheduler from './ObserverLike.getScheduler.mjs';
import ObserverLike__observerMixin from './ObserverLike.mixin.mjs';

const ObserverLike__createWithDelegate = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__observerMixin();
    return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, ObserverLike__getScheduler(observer));
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

export { ObserverLike__createWithDelegate as default };
