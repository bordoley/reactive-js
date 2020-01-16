import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { ErrorLike } from "@reactive-js/disposable";

class ThrowsObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;

  constructor(private readonly error: ErrorLike, readonly delay: number) {}

  run(_?: () => boolean) {
    (this.subscriber as SubscriberLike<T>).dispose(this.error);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this);
  }
}

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  factory: () => unknown,
  delay = 0,
): ObservableLike<T> =>
  defer(() => new ThrowsObservable({ cause: factory() }, delay));
