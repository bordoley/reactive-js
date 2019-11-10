import {
  DisposableLike
} from "@rx-min/rx-disposables";

export interface SchedulerContinuationLike {
  (shouldYield: () => boolean): SchedulerContinuationResult;
}

export type SchedulerContinuationResult =
  SchedulerContinuationLike
  | Readonly<[SchedulerContinuationLike, number | void]>
  | void;

export interface SchedulerLike {
  now: number;
  schedule(continuation: SchedulerContinuationLike, delay: number | void): DisposableLike;
}