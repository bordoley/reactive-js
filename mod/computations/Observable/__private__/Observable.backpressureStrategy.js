/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function EnqueueObserver(delegate, config) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, config);
    init(LiftedObserverMixin(), this, delegate);
    return this;
}, props(), {
    [ObserverLike_notify](next) {
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
    },
}))();
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
