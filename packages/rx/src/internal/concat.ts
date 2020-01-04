import { ErrorLike, ObservableLike, SubscriberLike, EnumerableLike, EnumeratorLike, EnumerableOperatorLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import { enumerableMixin, isEnumerable } from "./enumerable";
import { fromArray } from "./fromArray";
import { empty } from "./empty";

class ConcatSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<ObservableLike<T>>,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose(error);
      if (error !== undefined) {
        this.delegate.complete(error);
      } else {
        const enumerator = this.enumerator;
        if (enumerator.moveNext()) {
          const concatSubscriber = new ConcatSubscriber(
            this.delegate,
            enumerator
          );
          enumerator.current.subscribe(concatSubscriber);
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
  constructor(private readonly observables: EnumerableLike<ObservableLike<T>>) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerator = this.observables.enumerate();
    const concatSubscriber = new ConcatSubscriber(
      subscriber,
      enumerator,
    );
    
    if(enumerator.moveNext()) {
      enumerator.current.subscribe(concatSubscriber);
    } else {
      empty().subscribe(subscriber);
    }
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
    ? new ConcatEnumerable(fromArray(observables)) 
    : new ConcatObservable(fromArray(observables));
}

export const flatten = <T>(): EnumerableOperatorLike<EnumerableLike<T>, T> =>
  enumerable => new ConcatEnumerable(enumerable);
 