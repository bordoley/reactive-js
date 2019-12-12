import { disposed } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  subscribe,
} from "@reactive-js/rx";
import { fromArray } from "./fromArray";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { ObservableOperatorLike } from "./interfaces";

export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;
export function concat<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  const subscribeImpl = (subscriber: SubscriberLike<T>) => {
    const queue = [...observables];

    let innerSubscription = disposed;

    const subscribeNext = () => {
      const head = queue.shift();

      if (head !== undefined) {
        innerSubscription = pipe(head, observe(observer), subscribe(subscriber));

        subscriber.add(innerSubscription);
      }

      return head !== undefined;
    };

    const next = (v: T) => subscriber.next(v);

    const complete = (error?: ErrorLike) => {
      subscriber.remove(innerSubscription);

      if (error !== undefined) {
        subscriber.complete(error);
      } else if (!subscribeNext()) {
        subscriber.complete();
      }
    };

    const observer = { next, complete };

    subscribeNext();
  };

  return { subscribe: subscribeImpl };
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
