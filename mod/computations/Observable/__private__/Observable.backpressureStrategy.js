/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function EnqueueObserver(delegate, config) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, config);
    init(LiftedObserverMixin(), this, delegate);
    return this;
}, props(), {
    [ObserverMixinBaseLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        return (delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
            delegate[QueueableLike_enqueue](next));
    },
}))();
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
