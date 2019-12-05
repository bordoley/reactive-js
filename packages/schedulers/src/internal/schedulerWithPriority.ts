import {
  createSerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";
import { PrioritySchedulerLike } from "./priorityScheduler";

class SchedulerWithPriorityImpl implements SchedulerLike {
  private _inScheduledContinuation = false;
  private readonly priority: number;
  private readonly priorityScheduler: PrioritySchedulerLike;

  constructor(priorityScheduler: PrioritySchedulerLike, priority: number) {
    this.priorityScheduler = priorityScheduler;
    this.priority = priority;
  }

  public get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now(): number {
    return this.priorityScheduler.now;
  }

  createCallback(
    continuation: SchedulerContinuation,
    shouldYield: () => boolean,
    disposable: SerialDisposableLike,
  ): () => void {
    const callback = () => {
      if (disposable.isDisposed) {
        return;
      }

      this._inScheduledContinuation = true;
      const result = continuation(shouldYield);
      this._inScheduledContinuation = false;

      if (result === undefined) {
        disposable.dispose();
      } else {
        const nextCallback =
          result.continuation === continuation
            ? callback
            : this.createCallback(result.continuation, shouldYield, disposable);

        disposable.disposable = this.priorityScheduler.schedule(
          nextCallback,
          this.priority,
          result.delay,
        );
      }
    };

    return callback;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number | undefined,
  ): DisposableLike {
    const disposable = createSerialDisposable();
    const shouldYield = () =>
      this.priorityScheduler.shouldYield || disposable.isDisposed;
    const callback = this.createCallback(continuation, shouldYield, disposable);

    disposable.disposable = this.priorityScheduler.schedule(
      callback,
      this.priority,
      delay,
    );
    return disposable;
  }
}

export const createSchedulerWithPriority = (
  priorityScheduler: PrioritySchedulerLike,
  priority: number,
): SchedulerLike => new SchedulerWithPriorityImpl(priorityScheduler, priority);
