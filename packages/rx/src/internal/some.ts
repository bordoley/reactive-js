import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";

class SomeSubscriber<T> extends AbstractDelegatingSubscriber<T, boolean>  {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined) {
        ofValue(false).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    const passesPredicate = this.predicate(next);
    if (passesPredicate) {
      this.delegate.notify(true);
      this.delegate.dispose();
    }
  }
}

const operator = <T>(
  predicate: (data: T) => boolean,
): SubscriberOperatorLike<T, boolean> => subscriber =>
  new SomeSubscriber(subscriber, predicate);

export const some = <T>(
  predicate: (next: T) => boolean
): ObservableOperatorLike<T, boolean> => liftEnumerable(operator(predicate));

const referenceEquals = <T>(a: T, b: T) => a === b;

export const contains = <T>(
  value: T,
  equals: (a: T, b: T) => boolean = referenceEquals,
) => some((b: T) => equals(value, b));