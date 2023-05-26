/// <reference types="./Observer.create.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function SubscribeObserver(instance, scheduler, config) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, scheduler, config);
        return instance;
    }, props({}), {}));
})();
export default Observer_create;
