/// <reference types="./Observable.map.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import MapSinkMixin from "../../../events/__mixins__/MapSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const createMapObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), MapSinkMixin()), function MapObserver(instance, delegate, selector) {
    init(ObserverMixin(), instance, delegate, delegate);
    init(MapSinkMixin(), instance, delegate, selector);
    return instance;
}))))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
