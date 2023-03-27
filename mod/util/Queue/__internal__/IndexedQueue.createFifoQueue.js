/// <reference types="./IndexedQueue.createFifoQueue.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";
const IndexedQueue_createFifoQueue = /*@__PURE__*/ (() => {
    const factory = createInstanceFactory(IndexedQueue_fifoQueueMixin());
    return options => {
        var _a;
        const maxBuffersize = clampPositiveNonZeroInteger((_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER);
        return factory(maxBuffersize);
    };
})();
export default IndexedQueue_createFifoQueue;
