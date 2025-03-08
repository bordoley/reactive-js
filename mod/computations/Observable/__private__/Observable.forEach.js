/// <reference types="./Observable.forEach.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../computations.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const createForEachObserver = /*@__PURE__*/ (() => {
    const ForEachObserver_effect = Symbol("ForEachObserver_effect");
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function ForEachObserver(instance, delegate, effect) {
        init(DelegatingDisposableMixin, instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        init(LiftedObserverMixin(), instance, delegate);
        instance[ForEachObserver_effect] = effect;
        return instance;
    }, props({
        [ForEachObserver_effect]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            this[ForEachObserver_effect](next);
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }),
    });
})();
const Observable_forEach = (effect) => pipe((createForEachObserver), partial(effect), Observable_liftWithSideEffects);
export default Observable_forEach;
