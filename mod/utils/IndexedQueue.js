/// <reference types="./IndexedQueue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());
    return (options) => createIndexedQueue({
        [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
        [QueueableLike_capacity]: options?.capacity,
    });
})();
