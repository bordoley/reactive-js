/// <reference types="./PullableQueue.createFifoQueue.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import PullableQueue_fifoQueueMixin from "./PullableQueue.fifoQueueMixin.js";
const PullableQueue_createFifoQueue = /*@__PURE__*/ (() => createInstanceFactory(PullableQueue_fifoQueueMixin()))();
export default PullableQueue_createFifoQueue;
