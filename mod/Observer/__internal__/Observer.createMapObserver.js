/// <reference types="./Observer.createMapObserver.d.ts" />

import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createMapObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Sink_mapMixin()), function MapObserver(instance, delegate, selector) {
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    init(Sink_mapMixin(), instance, delegate, selector);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_mapMixin()))))();
export default Observer_createMapObserver;
