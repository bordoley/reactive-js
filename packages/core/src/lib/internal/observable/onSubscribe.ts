import { DisposableOrTeardown, dispose, add } from "../../disposable";
import { Factory } from "../../functions";
import { isSome, none } from "../../option";
import {
  ObservableLike,
  SubscriberLike,
  ObservableFunction,
} from "./interfaces";

class OnSubscribeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly src: ObservableLike<T>,
    private readonly f: Factory<DisposableOrTeardown | void>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    try {
      this.src.subscribe(subscriber);
      const disposable = this.f() || none;
      if (isSome(disposable)) {
        add(subscriber, disposable);
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
  f: Factory<DisposableOrTeardown | void>,
): ObservableFunction<T, T> => observable =>
  new OnSubscribeObservable(observable, f);
