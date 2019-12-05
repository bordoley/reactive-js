import { DisposableLike } from "@reactive-js/disposable";

export interface PrioritySchedulerLike {
  readonly now: number;
  readonly shouldYield: boolean;

  schedule(
    continuation: () => void,
    priority: number,
    delay?: number,
  ): DisposableLike;
}
