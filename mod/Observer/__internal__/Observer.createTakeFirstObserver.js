/// <reference types="./Observer.createTakeFirstObserver.d.ts" />

import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createTakeFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Sink_takeFirstMixin()), function TakeFirstObserver(instance, delegate, takeCount) {
    init(Sink_takeFirstMixin(), instance, delegate, takeCount);
    init(Observer_mixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_takeFirstMixin()))))();
export default Observer_createTakeFirstObserver;
