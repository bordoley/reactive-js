/// <reference types="./Observer.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_create = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [ObserverLike_notify](_) {
            Observer_assertState(this);
        },
    }));
})();
export default Observer_create;
