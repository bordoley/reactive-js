import { DisposableLike } from "@reactive-js/disposables";

export interface SchedulerContinuation {
  (shouldYield: () => boolean): SchedulerContinuationResult | void;
}

export type SchedulerContinuationResult = {
  readonly continuation: SchedulerContinuation;
  readonly delay?: number;
  readonly priority?: number;
};

export interface SchedulerLike {
  readonly inScheduledContinuation: boolean;

  now: number;

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike;
}

export interface SchedulerResourceLike extends SchedulerLike {
  disposable: DisposableLike;
}
