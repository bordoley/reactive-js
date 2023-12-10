/// <reference types="./Observable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ScanSinkMixin from "../../../events/__mixins__/ScanSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createScanObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(ObserverMixin(), ScanSinkMixin()), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(ScanSinkMixin(), instance, delegate, reducer, initialValue);
        init(ObserverMixin(), instance, delegate, delegate);
        return instance;
    }, props({}), Observer_decorateNotifyWithStateAssert(ScanSinkMixin())));
})();
const Observable_scan = (reducer, initialValue) => pipe((Observer_createScanObserver), partial(reducer, initialValue), Observable_liftPure);
export default Observable_scan;
