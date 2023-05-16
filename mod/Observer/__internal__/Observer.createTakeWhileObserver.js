/// <reference types="./Observer.createTakeWhileObserver.d.ts" />

import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createTakeWhileObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Sink_takeWhileMixin(), Observer_delegatingMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(Sink_takeWhileMixin(), instance, delegate, predicate, inclusive);
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_takeWhileMixin()))))();
export default Observer_createTakeWhileObserver;
