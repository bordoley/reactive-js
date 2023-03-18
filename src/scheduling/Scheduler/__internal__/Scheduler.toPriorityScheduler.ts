import {
  QueueTask_priority,
  QueueTask_taskID,
} from "../../../__internal__/symbols.js";
import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import Scheduler_createQueueScheduler, {
  QueueTask,
} from "./Scheduler.createQueueScheduler.js";

const taskComparator = (a: QueueTask, b: QueueTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a[QueueTask_priority] - b[QueueTask_priority];
  diff = diff !== 0 ? diff : b[QueueTask_taskID] - a[QueueTask_taskID];
  return diff;
};

const createTaskQueue = () => Queue_createPriorityQueue(taskComparator);

const Scheduler_toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = (hostScheduler: SchedulerLike) =>
  Scheduler_createQueueScheduler(hostScheduler, createTaskQueue);

export default Scheduler_toPriorityScheduler;
