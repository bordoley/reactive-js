/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createBackpressureObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function EnqueueObserver(instance, delegate, config) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, config);
    return instance;
}, props({}), {
    [SinkLike_notify](next) {
        this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
    },
})))();
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((Observer_createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftPure));
export default Observable_backpressureStrategy;
