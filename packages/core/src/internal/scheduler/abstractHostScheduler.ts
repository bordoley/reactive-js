import { Option } from "../../option";
import { SchedulerContinuationLike, SchedulerLike } from "./interfaces";
import { DisposableLike } from "../../disposable";

const createCallback = (
  scheduler: AbstractHostScheduler,
  continuation: SchedulerContinuationLike,
): ((shouldYield: Option<() => boolean>) => void) => (
  shouldYield: Option<() => boolean>,
) => {
  if (!continuation.isDisposed) {
    scheduler.inContinuation = true;
    const delay = continuation.run(shouldYield);
    scheduler.inContinuation = false;

    if (!continuation.isDisposed) {
      scheduler.schedule(continuation, delay);
    }
  }
};

export abstract class AbstractHostScheduler implements SchedulerLike {
  inContinuation: boolean = false;

  abstract get now(): number;

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
    const callback = createCallback(this, continuation);
    const callbackSubscription =
      delay > 0
        ? this.scheduleDelayed(callback, delay)
        : this.scheduleImmediate(callback);
    continuation.add(callbackSubscription);
  }

  abstract scheduleDelayed(
    callback: (shouldYield: Option<() => boolean>) => void,
    delay?: number,
  ): DisposableLike;

  abstract scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike;
}
