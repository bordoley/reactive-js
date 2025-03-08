/// <reference types="./Observable.pairwise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, tuple } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const PairwiseObserver_hasPrev = Symbol("PairwiseObserver_hasPrev");
const PairwiseObserver_prev = Symbol("PairwiseObserver_prev");
const createPairwiseObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function PairwiseObserver(instance, delegate) {
    init(DelegatingDisposableMixin, instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    return instance;
}, props({
    [PairwiseObserver_prev]: none,
    [PairwiseObserver_hasPrev]: false,
}), {
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        const prev = this[PairwiseObserver_prev];
        if (this[PairwiseObserver_hasPrev]) {
            this[LiftedObserverLike_delegate][ObserverLike_notify](tuple(prev, next));
        }
        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
    }),
}))();
const Observable_pairwise = () => Observable_liftPureDeferred((createPairwiseObserver));
export default Observable_pairwise;
