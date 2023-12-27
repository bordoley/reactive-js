/// <reference types="./IndexedQueue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import { IndexedQueueLike_get, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_count, } from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());
    return (options) => createIndexedQueue({
        [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
        [QueueableLike_capacity]: options?.capacity,
    });
})();
export const toReadonlyArray = () => queue => {
    const count = queue[QueueableLike_count];
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
        result[i] = queue[IndexedQueueLike_get](i);
    }
    return result;
};
