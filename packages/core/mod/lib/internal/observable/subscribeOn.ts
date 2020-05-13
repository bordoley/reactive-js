import { addDisposableOrTeardown, add } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { createObservable } from "./createObservable.ts";
import { dispatchTo } from "./dispatcher.ts";
import { ObservableFunction } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableFunction<T, T> => observable =>
  createObservable(dispatcher => {
    add(
      dispatcher,
      pipe(
        observable,
        onNotify(dispatchTo(dispatcher)),
        subscribe(scheduler),
        addDisposableOrTeardown(dispatcher),
      ),
    );
  });
