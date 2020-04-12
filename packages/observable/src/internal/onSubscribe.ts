import {
  ObservableLike,
  SubscriberLike,
  ObservableOperatorLike,
} from "./interfaces";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: () => void,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    try {
      this.src.subscribe(subscriber);
      this.f();
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
  f: () => void,
): ObservableOperatorLike<T, T> => observable =>
  new OnSubscribeObservable(observable, f);
