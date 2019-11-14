import { DisposableLike } from "@reactive-js/disposables";

export interface SchedulerContinuation {
  (shouldYield: () => boolean): SchedulerContinuationResult;
}

export type SchedulerContinuationResult =
  | SchedulerContinuation
  | Readonly<[SchedulerContinuation, number]>
  | void;

export interface SchedulerLike {
  now: number;
  schedule(
    continuation: SchedulerContinuation,
    delay: number | void,
  ): DisposableLike;
}
