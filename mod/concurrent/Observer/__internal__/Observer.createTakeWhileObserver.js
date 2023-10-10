/// <reference types="./Observer.createTakeWhileObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import TakeWhileSinkMixin from "../../../utils/__mixins__/TakeWhileSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createTakeWhileObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(TakeWhileSinkMixin(), ObserverMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(TakeWhileSinkMixin(), instance, delegate, predicate, inclusive);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(TakeWhileSinkMixin()))))();
export default Observer_createTakeWhileObserver;
