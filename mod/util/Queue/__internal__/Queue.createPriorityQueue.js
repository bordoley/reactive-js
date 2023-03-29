/// <reference types="./Queue.createPriorityQueue.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";
const Queue_createPriorityQueue = /*@__PURE__*/ (() => createInstanceFactory(Queue_priorityQueueMixin()))();
export default Queue_createPriorityQueue;
