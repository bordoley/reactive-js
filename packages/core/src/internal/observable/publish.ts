import { onNotify } from "./onNotify";
import { createSubject } from "./createSubject";
import { Operator, pipe } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { MulticastObservableLike, ObservableLike } from "./interfaces";
import { subscribe } from "./subscribe";

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
): Operator<ObservableLike<T>, MulticastObservableLike<T>> => observable => {
  const subject = createSubject<T>(replayCount);
  const srcSubscription = pipe(
    observable,
    onNotify(next => subject.dispatch(next)),
    subscribe(scheduler),
  ).add(subject);
  subject.add(srcSubscription);
  return subject;
};
