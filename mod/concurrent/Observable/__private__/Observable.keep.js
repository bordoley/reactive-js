/// <reference types="./Observable.keep.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const KeepObserver_predicate = Symbol("KeepObserver_predicate");
const createKeepObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin(), ObserverMixin(), LiftedObserverMixin()), function KeepObserver(instance, delegate, predicate) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    instance[KeepObserver_predicate] = predicate;
    return instance;
}, props({
    [KeepObserver_predicate]: none,
}), {
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        if (this[KeepObserver_predicate](next)) {
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
    }),
}))();
const Observable_keep = (predicate) => pipe((createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
