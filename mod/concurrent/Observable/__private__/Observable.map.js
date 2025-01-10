/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const MapObserver_selector = Symbol("MapObserver_selector");
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin(), ObserverMixin()), function MapObserver(instance, delegate, selector) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[MapObserver_selector] = selector;
    return instance;
}, props({
    [MapObserver_selector]: none,
}), {
    [ObserverLike_notify](next) {
        Observer_assertObserverState(this);
        const mapped = this[MapObserver_selector](next);
        this[DelegatingDisposableLike_delegate][ObserverLike_notify](mapped);
    },
}))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
