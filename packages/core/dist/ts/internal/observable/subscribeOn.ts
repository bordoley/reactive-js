import { SchedulerLike } from "../../scheduler.ts";
import { pipe } from "../../pipe.ts";
import { createObservable } from "./createObservable.ts";
import {
  ObservableOperator,
  ObserverLike,
  SafeSubscriberLike,
} from "./interfaces.ts";
import { observe } from "./observe.ts";
import { subscribe } from "./subscribe.ts";
import { Exception } from "../../disposable.ts";

class SubscribeOnObserver<T> implements ObserverLike<T> {
  constructor(private readonly subscriber: SafeSubscriberLike<T>) {}

  onDispose(error?: Exception) {
    this.subscriber.dispose(error);
  }

  onNotify(next: T) {
    this.subscriber.dispatch(next);
  }
}

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  createObservable(subscriber => {
    subscriber.add(
      pipe(
        observable,
        observe(new SubscribeOnObserver(subscriber)),
        subscribe(scheduler),
      ),
    );
  });
