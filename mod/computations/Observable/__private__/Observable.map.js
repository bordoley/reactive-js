/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../utils.js";
import Observable_liftPure from "./Observable.liftPure.js";
const MapObserver_selector = Symbol("MapObserver_selector");
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function MapObserver(instance, delegate, selector) {
    init(DelegatingDisposableMixin, instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    instance[MapObserver_selector] = selector;
    return instance;
}, props({
    [MapObserver_selector]: none,
}), {
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        const mapped = this[MapObserver_selector](next);
        this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
    }),
}))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
