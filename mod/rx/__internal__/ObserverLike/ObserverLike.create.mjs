/// <reference types="./ObserverLike.create.d.ts" />
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import observerMixin from './ObserverLike.mixin.mjs';

const create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { create as default };
