import { DisposableLike } from "@reactive-js/disposable";

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

/** @noInheritDoc */
export interface SchedulerResourceLike extends SchedulerLike, DisposableLike {}

let instance: SchedulerLike | undefined;

export const registerDefaultScheduler = (scheduler: SchedulerLike) => {
  if (instance !== undefined && scheduler !== instance) {
    throw new Error("Default scheduler already registered");
  }
  instance = scheduler;
};

export const getDefaultScheduler = () => {
  if (instance === undefined) {
    throw new Error("No default scheduler registered");
  }
  return instance;
};
