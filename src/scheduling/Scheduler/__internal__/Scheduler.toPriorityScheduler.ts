import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  __QueueTask_priority,
  __QueueTask_taskID,
} from "../../../__internal__/symbols.js";
import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import Scheduler_createQueueScheduler, {
  QueueTask,
} from "./Scheduler.createQueueScheduler.js";

const taskComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a[__QueueTask_priority] - b[__QueueTask_priority];
  diff = diff !== 0 ? diff : b[__QueueTask_taskID] - a[__QueueTask_taskID];
  return diff;
};

const createTaskQueue = () =>
  Queue_createPriorityQueue(taskComparator, MAX_SAFE_INTEGER, "overflow");

const Scheduler_toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = (hostScheduler: SchedulerLike) =>
  Scheduler_createQueueScheduler(hostScheduler, createTaskQueue);

export default Scheduler_toPriorityScheduler;
