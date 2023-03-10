/// <reference types="./SerialDisposable.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import Disposable_mixin from "./Disposable.mixin.js";
import SerialDisposable_mixin from "./SerialDisposable.mixin.js";
const SerialDisposable_create = /*@__PURE__*/ (() => {
    const typedSerialDisposableMixin = SerialDisposable_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedSerialDisposableMixin), function SerialDisposable(instance, initialValue) {
        init(Disposable_mixin, instance);
        init(typedSerialDisposableMixin, instance, initialValue);
        return instance;
    }));
})();
export default SerialDisposable_create;
