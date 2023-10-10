/// <reference types="./Observer.createWithDelegate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { bindMethod, none } from "../../../functions.js";
import { SinkLike_notify } from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function DelegatingObserver(instance, delegate) {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[SinkLike_notify] = bindMethod(delegate, SinkLike_notify);
        return instance;
    }, props({
        [SinkLike_notify]: none,
    }), {}));
})();
export default Observer_createWithDelegate;
