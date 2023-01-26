/// <reference types="./Observer.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer$mixin from './Observer.mixin.mjs';

const Observer$create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();

export { Observer$create as default };
