export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);

export const SchedulerLike_now = Symbol("SchedulerLike_now");

export const isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export const getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];
