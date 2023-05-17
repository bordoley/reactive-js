/// <reference types="./Observer.createSkipFirstObserver.d.ts" />

import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Sink_skipFirstMixin()), function SkipFirstObserver(instance, delegate, skipCount) {
    init(Sink_skipFirstMixin(), instance, delegate, skipCount);
    init(Observer_mixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_skipFirstMixin()))))();
export default Observer_createSkipFirstObserver;
