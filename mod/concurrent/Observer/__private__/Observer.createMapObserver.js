/// <reference types="./Observer.createMapObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import MapSinkMixin from "../../../events/__mixins__/MapSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createMapObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), MapSinkMixin()), function MapObserver(instance, delegate, selector) {
    init(ObserverMixin(), instance, delegate, delegate);
    init(MapSinkMixin(), instance, delegate, selector);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(MapSinkMixin()))))();
export default Observer_createMapObserver;
