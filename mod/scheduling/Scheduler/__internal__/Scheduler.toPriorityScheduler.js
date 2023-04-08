/// <reference types="./Scheduler.toPriorityScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { __QueueTask_priority, __QueueTask_taskID, } from "../../../__internal__/symbols.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const taskComparator = (a, b) => {
    let diff = 0;
    diff =
        diff !== 0
            ? diff
            : a[__QueueTask_priority] - b[__QueueTask_priority];
    diff =
        diff !== 0
            ? diff
            : b[__QueueTask_taskID] - a[__QueueTask_taskID];
    return diff;
};
const createTaskQueue = () => Queue_createPriorityQueue(taskComparator, MAX_SAFE_INTEGER, "overflow");
const Scheduler_toPriorityScheduler = (hostScheduler) => Scheduler_createQueueScheduler(hostScheduler, createTaskQueue);
export default Scheduler_toPriorityScheduler;
