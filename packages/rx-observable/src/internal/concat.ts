import { disposed } from "@reactive-js/disposable";
import { ObservableLike, SubscriberLike } from "@reactive-js/rx-core";
import { connect } from "./connect";
import { fromArray } from "./fromArray";
import { ObservableOperator, pipe } from "./pipe";
import { observe } from "./observe";

export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;
export function concat<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const queue = [...observables];

    let innerSubscription = disposed;

    const subscribeNext = () => {
      const head = queue.shift();

      if (head !== undefined) {
        innerSubscription = connect(pipe(head, observe(observer)), subscriber);

        subscriber.add(innerSubscription);
      }

      return head !== undefined;
    };

    const next = (v: T) => subscriber.next(v);

    const complete = (error?: Error) => {
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

  return { subscribe };
}

export function startWith<T>(
  value: T,
  ...values: T[]
): ObservableOperator<T, T>;
export function startWith<T>(...values: T[]): ObservableOperator<T, T> {
  return obs2 => concat(fromArray(values), obs2);
}
