/// <reference types="./Observable.forEach.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const createForEachObserver = /*@__PURE__*/ (() => {
    const ForEachObserver_effect = Symbol("ForEachObserver_effect");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function ForEachObserver(delegate, effect) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[ForEachObserver_effect] = effect;
        return this;
    }, props({
        [ForEachObserver_effect]: none,
    }), {
        [LiftedObserverLike_notify](next) {
            this[ForEachObserver_effect](next);
            this[LiftedObserverLike_notifyDelegate](next);
        },
    });
})();
const Observable_forEach = (effect) => pipe((createForEachObserver), partial(effect), Observable_liftWithSideEffects);
export default Observable_forEach;
