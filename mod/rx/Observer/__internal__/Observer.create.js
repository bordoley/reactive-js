/// <reference types="./Observer.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin()), function Observer(instance, scheduler, config) {
    init(Observer_mixin(), instance, scheduler, config);
    return instance;
}, {}, {
    [ObserverLike_notify](_) {
        Observer_assertState(this);
    },
})))();
export default Observer_create;
