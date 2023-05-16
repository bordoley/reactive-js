/// <reference types="./Observer.createScanObserver.d.ts" />

import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createScanObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Sink_scanMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(Sink_scanMixin(), instance, delegate, reducer, initialValue);
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        return instance;
    }, props({}), Observer_decorateNotifyWithStateAssert(Sink_scanMixin())));
})();
export default Observer_createScanObserver;
