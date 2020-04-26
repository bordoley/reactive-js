import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: (subscriber: SubscriberLike<T>) => void,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    try {
      this.src.subscribe(subscriber);
      this.f(subscriber);
    } catch (cause) {
      subscriber.dispose({ cause });
    }
  }
}

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
export const onSubscribe = <T>(
  f: (subscriber: SubscriberLike<T>) => void,
): ObservableOperator<T, T> => observable =>
  new OnSubscribeObservable(observable, f);
