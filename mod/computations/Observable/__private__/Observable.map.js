/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../utils.js";
import Observable_liftPure from "./Observable.liftPure.js";
const MapObserver_selector = Symbol("MapObserver_selector");
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function MapObserver(delegate, selector) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[MapObserver_selector] = selector;
    return this;
}, props({
    [MapObserver_selector]: none,
}), proto({
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
    }),
})))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
