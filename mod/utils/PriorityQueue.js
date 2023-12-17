/// <reference types="./PriorityQueue.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { createInstanceFactory } from "../__internal__/mixins.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createPriorityQueue = createInstanceFactory(PriorityQueueMixin());
    return (comparator, options) => createPriorityQueue(comparator, options?.capacity ?? MAX_SAFE_INTEGER, options?.backpressureStrategy ?? "overflow");
})();
