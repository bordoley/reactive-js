import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1 } from "../../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableSchedulerLike_pause,
  SchedulerLike,
} from "../../../scheduling.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Scheduler_createQueueScheduler from "./Scheduler.createQueueScheduler.js";

const Scheduler_toPauseableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = (hostScheduler: SchedulerLike) => {
  const scheduler = Scheduler_createQueueScheduler(hostScheduler, () =>
    IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow"),
  );
  scheduler[PauseableSchedulerLike_pause]();
  return scheduler;
};

export default Scheduler_toPauseableScheduler;
