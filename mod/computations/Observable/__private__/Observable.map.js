/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const MapObserver_selector = Symbol("MapObserver_selector");
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function MapObserver(delegate, selector) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[MapObserver_selector] = selector;
    return this;
}, props({
    [MapObserver_selector]: none,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedEventListenerLike_notifyDelegate](mapped);
    },
})))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
