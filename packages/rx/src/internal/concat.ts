import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";

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
          const concatSubscriber = new ConcatSubscriber(this.delegate, this.observables, nextIndex);
          head.subscribe(concatSubscriber);
        } else {
          this.delegate.complete();
        }
      }
    };
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

class ConcatObservable<T> implements ObservableLike<T> {
  constructor(private readonly observables: readonly ObservableLike<T>[]) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const concatSubscriber = new ConcatSubscriber(subscriber, this.observables, 0);
    this.observables[0].subscribe(concatSubscriber);
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
  return new ConcatObservable(observables);
}
