import { create as createQueueScheduler } from "../__internal__/scheduling/QueueScheduler";
import { PauseableLike } from "../util/PauseableLike";
import { Function1 } from "../util/functions";
import { SchedulerLike } from "./SchedulerLike";

export interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {}

export const create: Function1<SchedulerLike, PauseableSchedulerLike> =
  createQueueScheduler;
