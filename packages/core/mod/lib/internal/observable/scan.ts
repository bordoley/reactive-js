import { add } from "../../disposable.ts";
import { Factory, Reducer } from "../../functions.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class ScanSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly scanner: Reducer<T, TAcc>,
    private acc: TAcc,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    const nextAcc = this.scanner(this.acc, next);
    this.acc = nextAcc;

    this.delegate.notify(nextAcc);
  }
}

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scan = <T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (subscriber: SubscriberLike<TAcc>) =>
    new ScanSubscriber(subscriber, scanner, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
