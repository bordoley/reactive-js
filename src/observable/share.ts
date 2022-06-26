import { dispose, onDisposed } from "../disposable";
import { pipe } from "../functions";
import { MulticastObservableLike, ObservableOperator } from "../observable";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { sourceFrom } from "../source";
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
    let multicast: Option<MulticastObservableLike<T>> = none;

    return createObservable(observer => {
      if (isNone(multicast)) {
        multicast = pipe(source, publish(scheduler, options));
      }

      pipe(
        observer,
        sourceFrom(multicast),
        onDisposed(() => {
          if (isSome(multicast) && multicast.observerCount === 0) {
            pipe(multicast, dispose());
            multicast = none;
          }
        }),
      );
    });
  };
