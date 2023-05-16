/// <reference types="./Observer.createWithDelegate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { bindMethod, none } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_mixin()), function DelegatingObserver(instance, delegate) {
        init(Observer_mixin(), instance, delegate, delegate);
        instance[SinkLike_notify] = bindMethod(delegate, SinkLike_notify);
        return instance;
    }, props({
        [SinkLike_notify]: none,
    }), {}));
})();
export default Observer_createWithDelegate;
