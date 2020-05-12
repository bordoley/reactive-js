import { addDisposableOrTeardown, add } from "../../disposable.ts";
import { Operator, pipe } from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { createSubject } from "./createSubject.ts";
import { dispatchTo } from "./dispatcher.ts";
import { MulticastObservableLike, ObservableLike } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
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
    onNotify(dispatchTo(subject)),
    subscribe(scheduler),
    addDisposableOrTeardown(subject),
  );
  add(subject, srcSubscription);
  add(srcSubscription, subject);
  return subject;
};
