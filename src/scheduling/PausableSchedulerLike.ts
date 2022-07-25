import { create as createQueueScheduler } from "../__internal__/scheduling/QueueScheduler";
import { Function1 } from "../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../scheduling";

export const create: Function1<SchedulerLike, PauseableSchedulerLike> =
  createQueueScheduler;
