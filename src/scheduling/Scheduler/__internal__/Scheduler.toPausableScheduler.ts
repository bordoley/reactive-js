import { Function1 } from "../../../functions.js";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";

const Scheduler_toPriorityScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = (hostScheduler: SchedulerLike) =>
  Scheduler_createQueueScheduler(hostScheduler, IndexedQueue_createFifoQueue);

export default Scheduler_toPriorityScheduler;
