import {
  ObservableLike,
  SubscriberLike,
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperatorLike,
} from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { enumerableMixin, isEnumerable } from "./enumerable";
import { fromArray } from "./fromArray";

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
    private readonly observables: EnumerableLike<ObservableLike<T>>,
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
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
}

/**
 * Creates an `EnumerableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: Array<EnumerableLike<T>>
): EnumerableLike<T>;

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
export const flatten = <T>(): EnumerableOperatorLike<
  EnumerableLike<T>,
  T
> => enumerable => new ConcatEnumerable(enumerable);
