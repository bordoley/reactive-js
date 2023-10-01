/// <reference types="./Observer.createSkipFirstObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import SkipFirstSinkMixin from "../../../rx/__mixins__/SkipFirstSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), SkipFirstSinkMixin()), function SkipFirstObserver(instance, delegate, skipCount) {
    init(SkipFirstSinkMixin(), instance, delegate, skipCount);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(SkipFirstSinkMixin()))))();
export default Observer_createSkipFirstObserver;
