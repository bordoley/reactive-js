import { bindDisposables } from "../../disposable";
import { Function1, pipe } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { createSubject } from "./createSubject";
import { dispatchTo } from "./dispatcher";
import { MulticastObservableLike, ObservableLike } from "./interfaces";
import { onNotify } from "./onNotify";
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
): Function1<ObservableLike<T>, MulticastObservableLike<T>> => observable => {
  const subject = createSubject<T>(replayCount);
  const srcSubscription = pipe(
    observable,
    onNotify(dispatchTo(subject)),
    subscribe(scheduler),
  );

  bindDisposables(srcSubscription, subject);

  return subject;
};
