/// <reference types="./Queue.createIndexedQueue.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import Queue_indexedQueueMixin from "./Queue.indexedQueueMixin.js";
const Queue_createIndexedQueue = /*@__PURE__*/ (() => createInstanceFactory(Queue_indexedQueueMixin()))();
export default Queue_createIndexedQueue;
