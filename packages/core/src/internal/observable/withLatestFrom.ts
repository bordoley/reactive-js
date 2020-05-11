import { pipe, Selector2 } from "../../functions";
import { Option, isSome } from "../../option";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { dispose } from "../../disposable";

class WithLatestFromSubscriber<TA, TB, T> extends AbstractDelegatingSubscriber<
  TA,
  T
> {
  private otherLatest: Option<TB>;
  private hasLatest = false;

  private readonly onNotify = (next: TB) => {
    this.hasLatest = true;
    this.otherLatest = next;
  }

  constructor(
    delegate: SubscriberLike<T>,
    other: ObservableLike<TB>,
    private readonly selector: Selector2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(this),
    ).add(e => {
      if (isSome(e) || !this.hasLatest) {
        dispose(this, e);
      }
    });

    this.add(otherSubscription).add(delegate);
  }

  notify(next: TA) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed && this.hasLatest) {
      const result = this.selector(next, this.otherLatest as TB);
      this.delegate.notify(result);
    }
  }
}

/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
export const withLatestFrom = <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Selector2<TA, TB, T> 
): ObservableOperator<TA, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new WithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
