/// <reference types="./Consumer.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import { ConsumerLike_capacity, ConsumerLike_isReady, DropOldestBackpressureStrategy, SinkLike_isCompleted, } from "../utils.js";
import DelegatingConsumerMixin from "./__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueingConsumerMixin from "./__mixins__/QueueingConsumerMixin.js";
const createInternal = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(DisposableMixin, QueueingConsumerMixin()), function ConsumerQueue(options) {
        init(DisposableMixin, this);
        init(QueueingConsumerMixin(), this, options);
        return this;
    });
    return (options) => createQueue(options);
})();
export const create = (options) => createInternal({
    autoDispose: options?.autoDispose,
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
});
export const createDropOldestWithoutBackpressure = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, QueueingConsumerMixin()), function ConsumerQueueDropOldestWithoutBackpressur(capacity, options) {
    init(DisposableMixin, this);
    init(QueueingConsumerMixin(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
    });
    return this;
}, props(), proto({
    get [ConsumerLike_isReady]() {
        unsafeCast(this);
        const isCompleted = this[SinkLike_isCompleted];
        return !isCompleted;
    },
    get [ConsumerLike_capacity]() {
        return MAX_SAFE_INTEGER;
    },
})))();
export const toObserver = /*@__PURE__*/ (() => {
    const createProducerConsumerObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, DelegatingConsumerMixin()), function ProducerConsumerObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingConsumerMixin(), this, consumer);
        return this;
    });
    return (scheduler) => (consumer) => createProducerConsumerObserver(scheduler, consumer);
})();
