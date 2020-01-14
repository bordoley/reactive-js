import {
  ObservableLike,
  SubscriberLike,
  EnumerableLike,
  EnumeratorLike,
  EnumerableObservableLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { enumerableMixin, isEnumerable, enumerableMap } from "./enumerable";
import { fromArray } from "./fromArray";
import { fromEnumerable } from "./fromEnumerable";
import { pipe } from "@reactive-js/pipe";

class ConcatSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<void, ObservableLike<T>>,
  ) {
    super(delegate);
    this.add(error => {
      if (error !== undefined) {
        delegate.dispose(error);
      } else {
        const enumerator = this.enumerator;
        if (enumerator.move()) {
          const concatSubscriber = new ConcatSubscriber(delegate, enumerator);
          enumerator.current.subscribe(concatSubscriber);
        } else {
          delegate.dispose();
        }
      }
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

class ConcatObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly observables: EnumerableLike<void, ObservableLike<T>>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerator = this.observables.enumerate();
    subscriber.add(enumerator);
    const concatSubscriber = new ConcatSubscriber(subscriber, enumerator);

    if (enumerator.move()) {
      enumerator.current.subscribe(concatSubscriber);
    } else {
      subscriber.dispose();
    }
  }
}

class ConcatEnumerable<T> extends ConcatObservable<T>
  implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
}

/**
 * Creates an `EnumerableObservableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableObservableLike<T>,
  snd: EnumerableObservableLike<T>,
  ...tail: Array<EnumerableObservableLike<T>>
): EnumerableObservableLike<T>;

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;

export function concat<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  return observables.every(isEnumerable)
    ? new ConcatEnumerable(fromArray(observables))
    : new ConcatObservable(fromArray(observables));
}

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike
 * by concatenating the inner Enumerables in order.
 */
export const flatten: <T>(
  enumerable: EnumerableLike<void, EnumerableLike<void, T>>,
) => EnumerableObservableLike<T> = enumerable =>
  new ConcatEnumerable(
    pipe(enumerable, enumerableMap(fromEnumerable)));
