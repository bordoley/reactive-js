/// <reference types="./Queue.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { DropOldestBackpressureStrategy, } from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
const createInternal = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(options) {
    init(DisposableMixin, this);
    init(QueueMixin(), this, options);
    return this;
}))();
export const create = (options) => createInternal({
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
});
export const createSorted = (comparator) => createInternal({
    comparator,
});
export const createDropOldest = (capacity) => createInternal({
    backpressureStrategy: DropOldestBackpressureStrategy,
    capacity,
});
