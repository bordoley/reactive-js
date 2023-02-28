/// <reference types="./IndexedQueue.createFifoQueue.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";
const IndexedQueue_createFifoQueue = 
/*@__PURE__*/ (() => createInstanceFactory(IndexedQueue_fifoQueueMixin()))();
export default IndexedQueue_createFifoQueue;
