import {
  ErrorLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";

class ConcatSubscriber<T> extends DelegatingSubscriber<T, T> {
  private index = 0;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly observables: readonly ObservableLike<T>[],
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      const head = this.observables[this.index];

      if (head !== undefined) {
        this.index++;
        head.subscribe(this);
      } else {
        this.delegate.complete();
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
    const concatSubscriber = new ConcatSubscriber(subscriber, this.observables);
    concatSubscriber.complete();
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
