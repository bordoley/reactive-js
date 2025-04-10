/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import UnscheduledObserverMixin from "../../../utils/__mixins__/UnscheduledObserverMixin.js";
import { OverflowBackpressureStrategy, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import MergeAllConsumerMixin from "../../__mixins__/MergeAllConsumerMixin.js";
export const createMergeAllObserver = 
/*@__PURE__*/
(() => mixInstanceFactory(include(MergeAllConsumerMixin(), DelegatingSchedulerMixin, UnscheduledObserverMixin()), function MergeAllObserver(delegate, options) {
    init(MergeAllConsumerMixin(), this, delegate, options, Observer.createDelegatingNonCompleting);
    init(DelegatingSchedulerMixin, this, delegate);
    init(UnscheduledObserverMixin(), this);
    return this;
}))();
export const Observable_mergeAll = ((options) => (obs) => DeferredEventSource.create((observer) => {
    const delegate = createMergeAllObserver(observer, options);
    obs[EventSourceLike_subscribe](delegate);
}, {
    [ComputationLike_isPure]: Computation.isPure(obs) && Computation.isPure(options ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(obs) &&
        Computation.isSynchronous(options ?? {}),
}));
export const Observable_concatAll = (options => Observable_mergeAll({
    ...options,
    concurrency: 1,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
}));
