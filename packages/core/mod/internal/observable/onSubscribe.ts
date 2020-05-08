import { DisposableOrTeardown } from "../../disposable.ts";
import { isSome, none } from "../../option.ts";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces.ts";

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
      subscriber.dispose({ cause });
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
