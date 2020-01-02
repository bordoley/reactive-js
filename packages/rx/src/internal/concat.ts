import { ErrorLike, ObservableLike, SubscriberLike, EnumerableLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import { enumerableMixin, isEnumerable } from "./enumerable";

class ConcatSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observables: readonly ObservableLike<T>[],
    private readonly index: number,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (this.dispose()) {
      if (error !== undefined) {
        this.delegate.complete(error);
      } else {
        const nextIndex = this.index + 1;
        const head = this.observables[nextIndex];

        if (head !== undefined) {
          const concatSubscriber = new ConcatSubscriber(
            this.delegate,
            this.observables,
            nextIndex,
          );
          head.subscribe(concatSubscriber);
        } else {
          this.delegate.complete();
        }
      }
    }
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

class ConcatObservable<T> implements ObservableLike<T> {
  constructor(private readonly observables: readonly ObservableLike<T>[]) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const concatSubscriber = new ConcatSubscriber(
      subscriber,
      this.observables,
      0,
    );
    this.observables[0].subscribe(concatSubscriber);
  }
}

class ConcatEnumerable<T> extends ConcatObservable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
}

export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: Array<EnumerableLike<T>>
): EnumerableLike<T>;
export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;
export function concat<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  return observables.every(isEnumerable) 
    ? new ConcatEnumerable(observables as EnumerableLike<T>[]) 
    : new ConcatObservable(observables);
}
