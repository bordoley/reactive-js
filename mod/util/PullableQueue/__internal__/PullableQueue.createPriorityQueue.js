/// <reference types="./PullableQueue.createPriorityQueue.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import PullableQueue_priorityQueueMixin from "./PullableQueue.priorityQueueMixin.js";
const PullableQueue_createPriorityQueue = /*@__PURE__*/ (() => createInstanceFactory(PullableQueue_priorityQueueMixin()))();
export default PullableQueue_createPriorityQueue;
