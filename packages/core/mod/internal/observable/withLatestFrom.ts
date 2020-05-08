import { pipe } from "../../functions.ts";
import { Option, isSome } from "../../option.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class WithLatestFromSubscriber<TA, TB, TC> extends AbstractDelegatingSubscriber<
  TA,
  TC
> {
  private otherLatest: Option<TB>;
  private hasLatest = false;

  private readonly onNotify = (next: TB) => {
    this.hasLatest = true;
    this.otherLatest = next;
  };

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    private readonly selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(this),
    ).add(e => {
      if (isSome(e) || !this.hasLatest) {
        this.dispose(e);
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
export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperator<TA, TC> => {
  const operator = (subscriber: SubscriberLike<TC>) =>
    new WithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
