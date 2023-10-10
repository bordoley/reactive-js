/// <reference types="./Observer.createDistinctUntilChangedObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import DistinctUntilChangedSinkMixin from "../../../utils/__mixins__/DistinctUntilChangedSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createDistinctUntilChangedObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), DistinctUntilChangedSinkMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
    init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(DistinctUntilChangedSinkMixin()))))();
export default Observer_createDistinctUntilChangedObserver;
