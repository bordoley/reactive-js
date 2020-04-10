import { SchedulerContinuationLike, HostSchedulerLike } from "./interfaces";

function createCallback(
  scheduler: HostSchedulerLike,
  continuation: SchedulerContinuationLike,
): () => void {
  const callback = () => {
    if (!continuation.isDisposed) {
      scheduler.inContinuation = true;
      const delay = continuation.run(scheduler.shouldYield);
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
  this: HostSchedulerLike,
  continuation: SchedulerContinuationLike,
  delay = 0,
): void {
  const callback = createCallback(this, continuation);
  const callbackSubscription = this.scheduleCallback(callback, delay);
  continuation.add(callbackSubscription);
}
