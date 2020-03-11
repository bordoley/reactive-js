import { ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { fromArray } from "./fromArray";
import { observableMixin } from "./observable";
import { EnumeratorLike } from "@reactive-js/enumerable";

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
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(private readonly observables: Array<ObservableLike<T>>) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerator = fromArray(this.observables).enumerate();
    subscriber.add(enumerator);

    const concatSubscriber = new ConcatSubscriber(subscriber, enumerator);

    if (enumerator.move()) {
      enumerator.current.subscribe(concatSubscriber);
    } else {
      subscriber.dispose();
    }
  }
}

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
  return new ConcatObservable(observables);
}
