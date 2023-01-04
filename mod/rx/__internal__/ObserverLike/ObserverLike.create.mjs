/// <reference types="./ObserverLike.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import ObserverLike__mixin from './ObserverLike.mixin.mjs';

const ObserverLike__create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { ObserverLike__create as default };
