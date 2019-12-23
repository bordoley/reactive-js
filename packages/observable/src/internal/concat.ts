import { disposed } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  subscribe,
  ObserverLike,
} from "@reactive-js/rx";
import { fromArray } from "./fromArray";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { ObservableOperatorLike } from "./interfaces";
import { defer } from "./defer";

class ConcatObservable<T> implements ObservableLike<T>, ObserverLike<T> {
  private subscriber: SubscriberLike<T> | undefined;
  private innerSubscription = disposed;
  private index = 0;

  constructor(private readonly observables: readonly ObservableLike<T>[]) {}

  onNext(v: T) {
    (this.subscriber as SubscriberLike<T>).next(v);
  }

  onComplete(error?: ErrorLike) {
    const subscriber = this.subscriber as SubscriberLike<T>;
    subscriber.remove(this.innerSubscription);

    if (error !== undefined) {
      subscriber.complete(error);
    } else if (!this.subscribeNext()) {
      subscriber.complete();
    }
  }

  subscribeNext() {
    const head = this.observables[this.index];
    const hasNextObservable = head !== undefined;

    if (hasNextObservable) {
      this.index++;

      const subscriber = this.subscriber as SubscriberLike<T>;
      this.innerSubscription = pipe(head, observe(this), subscribe(subscriber));

      subscriber.add(this.innerSubscription);
    }

    return hasNextObservable;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    this.subscribeNext();
  }
}

export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;
export function concat<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  return defer(() => new ConcatObservable(observables));
}

export function startWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function startWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(fromArray(values), obs);
}

export function endWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function endWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(obs, fromArray(values));
}
