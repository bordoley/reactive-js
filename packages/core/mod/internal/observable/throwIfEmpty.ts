import { add, dispose } from "../../disposable.ts";
import { Factory } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class ThrowIfEmptySubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private isEmpty = true;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly factory: Factory<unknown>,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error) && this.isEmpty) {
        const cause = this.factory();
        error = { cause };
      }
      dispose(this.delegate, error);
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    this.isEmpty = false;
    this.delegate.notify(next);
  }
}

/**
 * Returns an `ObservableLike` that emits an error if the source completes without emitting a value.
 *
 * @param factory A factory function invoked to produce the error to be thrown.
 */
export const throwIfEmpty = <T>(
  factory: Factory<unknown>,
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ThrowIfEmptySubscriber(subscriber, factory);
  operator.isSynchronous = true;
  return lift(operator);
};
