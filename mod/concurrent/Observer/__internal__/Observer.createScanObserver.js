/// <reference types="./Observer.createScanObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ScanSinkMixin from "../../../rx/__mixins__/ScanSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createScanObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(ObserverMixin(), ScanSinkMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(ScanSinkMixin(), instance, delegate, reducer, initialValue);
        init(ObserverMixin(), instance, delegate, delegate);
        return instance;
    }, props({}), Observer_decorateNotifyWithStateAssert(ScanSinkMixin())));
})();
export default Observer_createScanObserver;
