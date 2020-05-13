import { dispose, add, addDisposableOrTeardown } from "../../disposable.ts";
import { pipe, Function2 } from "../../functions.ts";
import { Option, isSome } from "../../option.ts";
import {
  ObservableLike,
  ObservableFunction,
  SubscriberLike,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class WithLatestFromSubscriber<TA, TB, T> extends AbstractDelegatingSubscriber<
  TA,
  T
> {
  private otherLatest: Option<TB>;
  private hasLatest = false;

  private readonly onNotify = (next: TB) => {
    this.hasLatest = true;
    this.otherLatest = next;
  };

  constructor(
    delegate: SubscriberLike<T>,
    other: ObservableLike<TB>,
    private readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(this),
      addDisposableOrTeardown(e => {
        if (isSome(e) || !this.hasLatest) {
          dispose(this, e);
        }
      }),
    );

    add(this, otherSubscription, delegate);
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
  selector: Function2<TA, TB, T>,
): ObservableFunction<TA, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new WithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
