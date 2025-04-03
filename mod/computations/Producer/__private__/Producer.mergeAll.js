/// <reference types="./Producer.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { OverflowBackpressureStrategy, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import MergeAllConsumerMixin from "../../__mixins__/MergeAllConsumerMixin.js";
export const createMergeAllConsumer = 
/*@__PURE__*/
(() => mixInstanceFactory(include(MergeAllConsumerMixin()), function MergeAllConsumer(delegate, options) {
    init(MergeAllConsumerMixin(), this, delegate, options, Consumer.createDelegatingNonCompleting);
    return this;
}))();
export const Producer_mergeAll = ((options) => (obs) => DeferredEventSource.create((observer) => {
    const delegate = createMergeAllConsumer(observer, options);
    obs[EventSourceLike_subscribe](delegate);
}, {
    [ComputationLike_isPure]: Computation.isPure(obs) && Computation.isPure(options ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(obs) &&
        Computation.isSynchronous(options ?? {}),
}));
export const Producer_concatAll = (options => Producer_mergeAll({
    ...options,
    concurrency: 1,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
}));
