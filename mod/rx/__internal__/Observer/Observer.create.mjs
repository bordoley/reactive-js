/// <reference types="./Observer.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer_mixin from './Observer.mixin.mjs';

const Observer_create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { Observer_create as default };
