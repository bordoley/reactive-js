/// <reference types="./Observable.pairwise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, tuple } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const PairwiseObserver_hasPrev = Symbol("PairwiseObserver_hasPrev");
const PairwiseObserver_prev = Symbol("PairwiseObserver_prev");
const createPairwiseObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function PairwiseObserver(delegate) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    return this;
}, props({
    [PairwiseObserver_prev]: none,
    [PairwiseObserver_hasPrev]: false,
}), {
    [LiftedObserverLike_notify](next) {
        const prev = this[PairwiseObserver_prev];
        const hasPrev = this[PairwiseObserver_hasPrev];
        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
        if (hasPrev) {
            const pair = tuple(prev, next);
            this[LiftedObserverLike_notifyDelegate](pair);
        }
    },
}))();
const Observable_pairwise = () => Observable_liftPureDeferred((createPairwiseObserver));
export default Observable_pairwise;
