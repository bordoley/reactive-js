/// <reference types="./Queue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import { isSome } from "../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());
    const createPriorityQueue = createInstanceFactory(PriorityQueueMixin());
    return (options) => {
        const { comparator } = options ?? {};
        return isSome(comparator)
            ? createPriorityQueue(comparator, {
                [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
                [QueueableLike_capacity]: options?.capacity,
            })
            : createIndexedQueue({
                [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
                [QueueableLike_capacity]: options?.capacity,
            });
    };
})();
