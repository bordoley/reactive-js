/// <reference types="./Observable.takeWhile.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");
const createTakeWhileObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin, instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    instance[TakeWhileObserver_predicate] = predicate;
    instance[TakeWhileObserver_inclusive] = inclusive ?? false;
    return instance;
}, props({
    [TakeWhileObserver_predicate]: none,
    [TakeWhileObserver_inclusive]: none,
}), {
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
        }
    }),
}))();
const Observable_takeWhile = (predicate, options = {}) => pipe((createTakeWhileObserver), partial(predicate, options?.inclusive), Observable_liftPureDeferred);
export default Observable_takeWhile;
