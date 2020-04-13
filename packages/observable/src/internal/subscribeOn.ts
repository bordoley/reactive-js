import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";
import { createObservable } from "./createObservable";
import {
  ObservableOperator,
  ObserverLike,
  SafeSubscriberLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { Exception } from "@reactive-js/disposable";

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
