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

export interface SchedulerResourceLike extends SchedulerLike, DisposableLike {}

class DefaultScheduler {
  private _instance: SchedulerLike | undefined;

  register(scheduler: SchedulerLike) {
    if (this._instance !== undefined && scheduler !== this._instance) {
      throw new Error("Default scheduler already registered");
    }
    this._instance = scheduler;
  }

  get instance() {
    if (this._instance === undefined) {
      throw new Error("No default scheduler registered");
    }
    return this._instance;
  }
}

export const defaultScheduler: {
  readonly register: (scheduler: SchedulerLike) => void;
  readonly instance: SchedulerLike;
} = new DefaultScheduler();
