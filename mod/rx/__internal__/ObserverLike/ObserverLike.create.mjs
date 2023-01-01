/// <reference types="./ObserverLike.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import ObserverLike__observerMixin from './ObserverLike.mixin.mjs';

const ObserverLike__create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__observerMixin();
    return createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(DisposableLike__disposableMixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { ObserverLike__create as default };
