import { DisposableOrTeardown, dispose } from "../../disposable";
import { isSome, none } from "../../option";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: () => DisposableOrTeardown | void,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    try {
      this.src.subscribe(subscriber);
      const disposable = this.f() || none;
      if (isSome(disposable)) {
        subscriber.add(disposable);
      }
    } catch (cause) {
      dispose(subscriber, { cause });
    }
  }
}

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
export const onSubscribe = <T>(
  f: () => DisposableOrTeardown | void,
): ObservableOperator<T, T> => observable =>
  new OnSubscribeObservable(observable, f);
