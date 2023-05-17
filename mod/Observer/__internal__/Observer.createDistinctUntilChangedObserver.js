/// <reference types="./Observer.createDistinctUntilChangedObserver.d.ts" />

import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createDistinctUntilChangedObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Sink_distinctUntilChangedMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
    init(Sink_distinctUntilChangedMixin(), instance, delegate, equality);
    init(Observer_mixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_distinctUntilChangedMixin()))))();
export default Observer_createDistinctUntilChangedObserver;
