/// <reference types="./Observer.createKeepObserver.d.ts" />

import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createKeepObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Sink_keepMixin()), function KeepObserver(instance, delegate, predicate) {
    init(Sink_keepMixin(), instance, delegate, predicate);
    init(Observer_mixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_keepMixin()))))();
export default Observer_createKeepObserver;
