import { SchedulerContinuationLike, HostSchedulerLike } from "./interfaces";

function createCallback(
  scheduler: HostSchedulerLike,
  continuation: SchedulerContinuationLike,
): () => void {
  const callback = () => {
    if (!continuation.isDisposed) {
      continuation.run(scheduler.shouldYield);

      if (!continuation.isDisposed) {
        scheduler.scheduleCallback(callback, continuation.delay);
      }
    }
  };
  return callback;
}

/** Mixin functions that can be used to implement the SchedulerLike interface */
export function schedule(
  this: HostSchedulerLike,
  continuation: SchedulerContinuationLike,
): void {
  const callback = createCallback(this, continuation);
  const callbackSubscription = this.scheduleCallback(
    callback,
    continuation.delay,
  );
  continuation.add(callbackSubscription);
}
