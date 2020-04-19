import { Option } from "@reactive-js/option";
import { SchedulerContinuationLike, CallbackSchedulerLike } from "./interfaces";

function createCallback(
  scheduler: CallbackSchedulerLike,
  continuation: SchedulerContinuationLike,
): (shouldYield: Option<() => boolean>) => void {
  const callback = (shouldYield: Option<() => boolean>) => {
    if (!continuation.isDisposed) {
      scheduler.inContinuation = true;
      const delay = continuation.run(shouldYield);
      scheduler.inContinuation = false;

      if (!continuation.isDisposed) {
        scheduler.scheduleCallback(callback, delay);
      }
    }
  };
  return callback;
}

/** Mixin functions that can be used to implement the SchedulerLike interface */
export function schedule(
  this: CallbackSchedulerLike,
  continuation: SchedulerContinuationLike,
  delay = 0,
): void {
  const callback = createCallback(this, continuation);
  const callbackSubscription = this.scheduleCallback(callback, delay);
  continuation.add(callbackSubscription);
}
