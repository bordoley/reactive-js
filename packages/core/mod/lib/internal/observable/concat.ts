import { dispose, add } from "../../disposable.ts";
import { isSome } from "../../option.ts";
import { ObservableLike, ObserverLike, ObservableFunction } from "./interfaces.ts";
import { AbstractDelegatingObserver } from "./observer.ts";

class ConcatObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly observables: ObservableLike<T>[],
    private readonly next: number,
  ) {
    super(delegate);
    add(this, error => {
      const observables = this.observables;
      const next = this.next;

      if (isSome(error)) {
        dispose(delegate, error);
      } else if (next < observables.length) {
        const concatObserver = new ConcatObserver(
          delegate,
          observables,
          next + 1,
        );
        observables[next].observe(concatObserver);
      } else {
        dispose(delegate);
      }
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

class ConcatObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: ObservableLike<T>[]) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;

    if (observables.length > 0) {
      const concatObserver = new ConcatObserver(observer, observables, 1);
      observables[0].observe(concatObserver);
    } else {
      dispose(observer);
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
  ...observables: ObservableLike<T>[]
): ObservableLike<T> {
  return new ConcatObservable(observables);
}

export const concatWith = <T>(
  snd: ObservableLike<T>,
): ObservableFunction<T, T> => first => concat(first, snd);
