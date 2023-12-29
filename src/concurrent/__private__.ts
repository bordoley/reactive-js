import { ContinuationLike } from "./__mixins__/ContinuationSchedulerMixin.js";

export const SchedulerTaskLike_continuation = Symbol(
  "SchedulerTaskLike_continuation",
);
export const SchedulerTaskLike_dueTime = Symbol("SchedulerTaskLike_dueTime");
export const SchedulerTaskLike_id = Symbol("SchedulerTaskLike_id");

export interface SchedulerTaskLike {
  readonly [SchedulerTaskLike_continuation]: ContinuationLike;
  [SchedulerTaskLike_dueTime]: number;
  [SchedulerTaskLike_id]: number;
}

export const SchedulerTask_comparator = (
  a: SchedulerTaskLike,
  b: SchedulerTaskLike,
) => {
  const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
  return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
};
