/// <reference types="./Observer.createTakeFirstObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import TakeFirstSinkMixin from "../../../utils/__mixins__/TakeFirstSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createTakeFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), TakeFirstSinkMixin()), function TakeFirstObserver(instance, delegate, takeCount) {
    init(TakeFirstSinkMixin(), instance, delegate, takeCount);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(TakeFirstSinkMixin()))))();
export default Observer_createTakeFirstObserver;
