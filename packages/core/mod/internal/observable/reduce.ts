import { isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { dispose } from "../../disposable.ts";

class ReduceSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly reducer: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
    this.add(error => {
      if (isNone(error)) {
        fromValue()(this.acc).subscribe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    this.acc = this.reducer(this.acc, next);
  }
}

/**
 * Returns an `ObservableLike` that applies an accumulator function
 * over the source, returning the accumulated result when the subscription is disposed.
 *
 * @param reducer The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const reduce = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperator<T, TAcc> => {
  const operator = (subscriber: SubscriberLike<TAcc>) =>
    new ReduceSubscriber(subscriber, reducer, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
