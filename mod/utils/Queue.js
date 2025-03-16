/// <reference types="./Queue.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import { ConsumerLike_capacity, ConsumerLike_isReady, DropOldestBackpressureStrategy, OverflowBackpressureStrategy, SinkLike_isCompleted, } from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
const createInternal = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, options);
        return this;
    });
    return (options) => {
        return createQueue(options);
    };
})();
export const create = (options) => createInternal({
    autoDispose: options?.autoDispose,
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
});
export const createSorted = (comparator, options) => createInternal({
    autoDispose: options?.autoDispose,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
    comparator,
});
export const createDropOldestWithoutBackpressure = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(capacity, options) {
    init(DisposableMixin, this);
    init(QueueMixin(), this, {
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
