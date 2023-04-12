import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1 } from "../../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableSchedulerLike_pause,
  SchedulerLike,
} from "../../../scheduling.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";

const Scheduler_toPauseableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = (hostScheduler: SchedulerLike) => {
  const scheduler = Scheduler_createQueueScheduler(hostScheduler, () =>
    Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow"),
  );
  scheduler[PauseableSchedulerLike_pause]();
  return scheduler;
};

export default Scheduler_toPauseableScheduler;
