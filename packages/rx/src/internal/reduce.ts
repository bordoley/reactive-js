import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { DelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";
import { ErrorLike } from "@reactive-js/disposable";

class ReduceSubscriber<T, TAcc> extends DelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);
      
      if (error === undefined) {
        ofValue(this.acc).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    }
  }

  notifyNext(next: T) {
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
