/// <reference types="./Scheduler.toPriorityScheduler.d.ts" />

import { QueueTask_priority, QueueTask_taskID, } from "../../../__internal__/symbols.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const taskComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a[QueueTask_priority] - b[QueueTask_priority];
    diff = diff !== 0 ? diff : b[QueueTask_taskID] - a[QueueTask_taskID];
    return diff;
};
const createTaskQueue = () => Queue_createPriorityQueue(taskComparator);
const Scheduler_toPriorityScheduler = (hostScheduler) => Scheduler_createQueueScheduler(hostScheduler, createTaskQueue);
export default Scheduler_toPriorityScheduler;
