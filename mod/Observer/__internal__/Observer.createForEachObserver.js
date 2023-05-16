/// <reference types="./Observer.createForEachObserver.d.ts" />

import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createForEachObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Sink_forEachMixin()), function ForEachObserver(instance, delegate, effect) {
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    init(Sink_forEachMixin(), instance, delegate, effect);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_forEachMixin()))))();
export default Observer_createForEachObserver;
