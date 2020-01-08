import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { ErrorLike } from "@reactive-js/disposable";

class ThrowsObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly error: ErrorLike,
    readonly delay: number,
  ) {}

  run(_?: () => boolean) {
    (this.subscriber as SubscriberLike<T>).dispose(this.error);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this);
  }
}

export const throws = <T>(cause: unknown, delay = 0): ObservableLike<T> => {
  const error = { cause };
  return defer(() => new ThrowsObservable(error, delay));
};
