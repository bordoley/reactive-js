/// <reference types="./PriorityQueue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../utils.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createPriorityQueue = createInstanceFactory(PriorityQueueMixin());
    return (comparator, options) => createPriorityQueue(comparator, {
        [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
        [QueueableLike_capacity]: options?.capacity,
    });
})();
