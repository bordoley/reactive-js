/// <reference types="./IndexedQueue.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { createInstanceFactory } from "../__internal__/mixins.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());
    return (options) => createIndexedQueue(options?.capacity ?? MAX_SAFE_INTEGER, options?.backpressureStrategy ?? "overflow");
})();
