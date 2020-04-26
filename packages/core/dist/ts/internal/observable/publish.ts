import { onNotify } from "./onNotify.ts";
import { createSubject } from "./createSubject.ts";
import { Operator, pipe } from "../../pipe.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { MulticastObservableLike, ObservableLike } from "./interfaces.ts";
import { subscribe } from "./subscribe.ts";

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
