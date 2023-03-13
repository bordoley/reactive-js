/// <reference types="./Queue.createPriorityQueue.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";
const Queue_createPriorityQueue = /*@__PURE__*/ (() => {
    const factory = createInstanceFactory(Queue_priorityQueueMixin());
    return (comparator, options) => {
        var _a;
        const maxBuffersize = max((_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
        return factory(comparator, maxBuffersize);
    };
})();
export default Queue_createPriorityQueue;
