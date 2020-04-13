import { Operator } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { MulticastObservableLike, ObservableLike } from "./interfaces";
import { createSubject } from "./subject";

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replayCount The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const publish = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): Operator<
  ObservableLike<T>,
  MulticastObservableLike<T>
> => observable => {
  const subject = createSubject<T>(scheduler, replayCount);
  observable.subscribe(subject);
  return subject;
};
