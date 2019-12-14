import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class ReduceSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  private acc: TAcc;
  private reducer: (acc: TAcc, next: T) => TAcc;
  constructor(
    delegate: SubscriberLike<TAcc>,
    reducer: (acc: TAcc, next: T) => TAcc,
    initialValue: TAcc,
  ) {
    super(delegate);
    this.reducer = reducer;
    this.acc = initialValue;
  }

  protected onComplete(error?: ErrorLike) {
    if (error === undefined) {
      this.delegate.next(this.acc);
    }
    this.delegate.complete(error);
  }

  protected onNext(next: T) {
    const prevAcc = this.acc;
    const nextAcc = this.reducer(prevAcc, next);
    this.acc = nextAcc;
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
): ObservableOperatorLike<T, TAcc> => lift(operator(reducer, initialValue));
