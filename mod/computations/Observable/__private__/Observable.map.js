/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin(), MapMixin()), function MapObserver(delegate, selector) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    init(MapMixin(), this, selector);
    return this;
}))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
