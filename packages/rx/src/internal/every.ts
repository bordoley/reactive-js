import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";

class EverySubscriber<T> extends AbstractDelegatingSubscriber<T, boolean>  {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined) {
        ofValue(true).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    const failedPredicate = !this.predicate(next);
    if (failedPredicate) {
      this.delegate.notify(false);
      this.delegate.dispose();
    }
  }
}

const operator = <T>(
  predicate: (data: T) => boolean,
): SubscriberOperatorLike<T, boolean> => subscriber =>
  new EverySubscriber(subscriber, predicate);

export const every = <T>(
  predicate: (next: T) => boolean
): ObservableOperatorLike<T, boolean> => liftEnumerable(operator(predicate));

export const none = <T>(
  predicate: (next: T) => boolean
): ObservableOperatorLike<T, boolean> => every(
  next => !predicate(next),
);