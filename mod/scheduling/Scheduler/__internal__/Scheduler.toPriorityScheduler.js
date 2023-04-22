/// <reference types="./Scheduler.toPriorityScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { PrioritySchedulerTaskLike_priority, SchedulerTaskLike_id, } from "../../../__internal__/scheduling.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";
const taskComparator = (a, b) => {
    let diff = 0;
    diff =
        diff !== 0
            ? diff
            : a[PrioritySchedulerTaskLike_priority] -
                b[PrioritySchedulerTaskLike_priority];
    diff = diff !== 0 ? diff : b[SchedulerTaskLike_id] - a[SchedulerTaskLike_id];
    return diff;
};
const createTaskQueue = () => Queue_createPriorityQueue(taskComparator, MAX_SAFE_INTEGER, "overflow");
const Scheduler_toPriorityScheduler = (hostScheduler) => Scheduler_createQueueScheduler(hostScheduler, createTaskQueue);
export default Scheduler_toPriorityScheduler;
