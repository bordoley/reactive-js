import { SchedulerLike } from "../scheduling.js";
import { CollectionLike, DisposableLike, QueueableLike } from "../util.js";
import {
  __ContinuationLike_priority as ContinuationLike_priority,
  __ContinuationLike_run as ContinuationLike_run,
  __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule,
} from "./symbols.js";

export {
  ContinuationLike_priority,
  ContinuationLike_run,
  ContinuationSchedulerLike_schedule,
};

export interface ContinuationLike
  extends DisposableLike,
    QueueableLike<ContinuationLike>,
    CollectionLike {
  readonly [ContinuationLike_priority]: number;

  [ContinuationLike_run](): void;
}

export interface ContinuationSchedulerLike extends SchedulerLike {
  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}
