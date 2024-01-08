/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function EnqueueObserver(instance, delegate, config) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, config);
    return instance;
}, props(), {
    [SinkLike_notify](next) {
        this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
    },
})))();
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
