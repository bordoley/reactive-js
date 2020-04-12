import { ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";

class ConcatSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observables: Array<ObservableLike<T>>,
    private readonly next: number,
  ) {
    super(delegate);
    this.add(error => {
      const observables = this.observables;
      const next = this.next;

      if (error !== undefined) {
        delegate.dispose(error);
      } else if (next < observables.length) {
        const concatSubscriber = new ConcatSubscriber(
          delegate,
          observables,
          next + 1,
        );
        observables[next].subscribe(concatSubscriber);
      } else {
        delegate.dispose();
      }
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

class ConcatObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: Array<ObservableLike<T>>) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;

    if (observables.length > 0) {
      const concatSubscriber = new ConcatSubscriber(subscriber, observables, 1);
      observables[0].subscribe(concatSubscriber);
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
