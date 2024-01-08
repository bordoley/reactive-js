/// <reference types="./Observable.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { none, tuple } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const PairwiseObserver_hasPrev = Symbol("PairwiseObserver_hasPrev");
const PairwiseObserver_prev = Symbol("PairwiseObserver_prev");
const createPairwiseObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function PairwiseObserver(instance, delegate) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({
    [PairwiseObserver_prev]: none,
    [PairwiseObserver_hasPrev]: false,
}), {
    [SinkLike_notify](next) {
        const prev = this[PairwiseObserver_prev];
        if (this[PairwiseObserver_hasPrev]) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](tuple(prev, next));
        }
        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
    },
}))))();
const Observable_pairwise = () => Observable_liftPureDeferred((createPairwiseObserver));
export default Observable_pairwise;
