/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedObserverMixin(), DelegatingDisposableMixin), function EnqueueObserver(delegate, options) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, options);
    return this;
}, props(), {
    [LiftedObserverLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        return (delegate?.[LiftedObserverLike_notify]?.(next) ??
            delegate[QueueableLike_enqueue](next));
    },
}))();
const Observable_backpressureStrategy = (options) => pipe((createBackpressureObserver), partial(options), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
