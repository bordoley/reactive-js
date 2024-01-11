/// <reference types="./Observer.createWithDelegate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { bindMethod, none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function DelegatingObserver(instance, delegate) {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[ObserverLike_notify] = bindMethod(delegate, ObserverLike_notify);
        return instance;
    }, props({
        [ObserverLike_notify]: none,
    })));
})();
export default Observer_createWithDelegate;
