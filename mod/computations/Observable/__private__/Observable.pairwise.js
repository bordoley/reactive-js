/// <reference types="./Observable.pairwise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, pipe, tuple } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_enqueue, QueueableLike_isReady, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const PairwiseObserver_hasPrev = Symbol("PairwiseObserver_hasPrev");
const PairwiseObserver_prev = Symbol("PairwiseObserver_prev");
const createPairwiseObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function PairwiseObserver(delegate) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    pipe(this, Disposable.addTo(delegate));
    return this;
}, props({
    [PairwiseObserver_prev]: none,
    [PairwiseObserver_hasPrev]: false,
}), {
    [LiftedObserverLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        const prev = this[PairwiseObserver_prev];
        const hasPrev = this[PairwiseObserver_hasPrev];
        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
        let pair = none;
        return ((hasPrev &&
            ((pair = tuple(prev, next)),
                delegate?.[LiftedObserverLike_notify]?.(pair) ??
                    delegate[QueueableLike_enqueue](pair))) ||
            delegate[QueueableLike_isReady]);
    },
}))();
const Observable_pairwise = () => Observable_liftPureDeferred((createPairwiseObserver));
export default Observable_pairwise;
