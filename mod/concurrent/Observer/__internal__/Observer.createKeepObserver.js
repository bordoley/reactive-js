/// <reference types="./Observer.createKeepObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import KeepSinkMixin from "../../../utils/__mixins__/KeepSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createKeepObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), KeepSinkMixin()), function KeepObserver(instance, delegate, predicate) {
    init(KeepSinkMixin(), instance, delegate, predicate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(KeepSinkMixin()))))();
export default Observer_createKeepObserver;
