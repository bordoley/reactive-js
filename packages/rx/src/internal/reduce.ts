import {
  ObservableOperatorLike,
  ErrorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";

class ReduceSubscriber<T, TAcc> extends DelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.dispose(error);
      
      if (error === undefined) {
        ofValue(this.acc).subscribe(this.delegate);
      } else {
        this.delegate.complete(error);
      }
    }
  }

  next(next: T) {
    this.acc = this.reducer(this.acc, next);
  }
}

const operator = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): SubscriberOperatorLike<T, TAcc> => subscriber =>
  new ReduceSubscriber(subscriber, reducer, initialValue());

export const reduce = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> =>
  liftEnumerable(operator(reducer, initialValue));
