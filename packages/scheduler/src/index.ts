import { DisposableLike } from "@reactive-js/disposables";

export interface SchedulerContinuation {
  (shouldYield: () => boolean): SchedulerContinuationResult;
}

export type SchedulerContinuationResult =
  Readonly<[SchedulerContinuation, number, number | void]> | void;

export interface SchedulerLike {
  now: number;
  schedule(continuation: SchedulerContinuation, delay?: number, priority?: number): DisposableLike;
}

export interface SchedulerResourceLike extends SchedulerLike, DisposableLike {}
