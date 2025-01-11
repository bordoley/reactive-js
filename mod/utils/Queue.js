/// <reference types="./Queue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../utils.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createQueue = createInstanceFactory(QueueMixin());
    return (options) => {
        const { comparator } = options ?? {};
        return createQueue(comparator, {
            [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
            [QueueableLike_capacity]: options?.capacity,
        });
    };
})();
