import { addTeardown, dispose } from "../disposable";
import { pipe } from "../functions";
import { MulticastObservableLike, ObservableOperator } from "../observable";
import { Option, isNone, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";
import { createObservable } from "./createObservable";
import { publish } from "./publish";

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): ObservableOperator<T, T> =>
  source => {
    let observerCount = 0;
    let multicast: Option<MulticastObservableLike<T>> = none;

    const teardown = () => {
      observerCount--;

      if (observerCount === 0) {
        pipe(multicast as MulticastObservableLike<T>, dispose());
        multicast = none;
      }
    };

    return createObservable(observer => {
      if (isNone(multicast)) {
        multicast = pipe(source, publish(scheduler, options));
      }
      observerCount++;

      pipe(multicast, sinkInto(observer));
      addTeardown(observer, teardown);
    });
  };
