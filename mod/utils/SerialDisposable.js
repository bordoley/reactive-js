/// <reference types="./SerialDisposable.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../__internal__/mixins.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import SerialDisposableMixin from "./__mixins__/SerialDisposableMixin.js";
export const create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(DisposableMixin, SerialDisposableMixin()), function SerialDisposable(instance, initialValue) {
    init(DisposableMixin, instance);
    init(SerialDisposableMixin(), instance, initialValue);
    return instance;
})))();
