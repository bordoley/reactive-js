import { Optional } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
import { CollectionLike, DisposableLike, QueueableLike } from "../util.js";
import {
  __ContinuationLike_activeChild as ContinuationLike_activeChild,
  __ContinuationLike_parent as ContinuationLike_parent,
  __ContinuationLike_priority as ContinuationLike_priority,
  __ContinuationLike_run as ContinuationLike_run,
  __ContinuationLike_scheduler as ContinuationLike_scheduler,
  __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule,
  __PrioritySchedulerTaskLike_priority as PrioritySchedulerTaskLike_priority,
  __SchedulerTaskLike_continuation as SchedulerTaskLike_continuation,
  __SchedulerTaskLike_dueTime as SchedulerTaskLike_dueTime,
  __SchedulerTaskLike_id as SchedulerTaskLike_id,
} from "./symbols.js";

export {
  ContinuationLike_activeChild,
  ContinuationLike_parent,
  ContinuationLike_priority,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerTaskLike_priority,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
};

export interface ContinuationLike
  extends DisposableLike,
    QueueableLike<ContinuationLike>,
    CollectionLike {
  readonly [ContinuationLike_activeChild]: Optional<ContinuationLike>;
  readonly [ContinuationLike_priority]: number;
  readonly [ContinuationLike_scheduler]: ContinuationSchedulerLike;

  [ContinuationLike_parent]: Optional<ContinuationLike>;

  [ContinuationLike_run](): void;
}

export interface ContinuationSchedulerLike extends SchedulerLike {
  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

export interface SchedulerTaskLike {
  readonly [SchedulerTaskLike_continuation]: ContinuationLike;
  [SchedulerTaskLike_dueTime]: number;
  [SchedulerTaskLike_id]: number;
}

export interface PrioritySchedulerTaskLike extends SchedulerTaskLike {
  readonly [PrioritySchedulerTaskLike_priority]: number;
}
