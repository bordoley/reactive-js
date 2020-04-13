import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { Exception } from "@reactive-js/disposable";

class WithLatestFromSubscriber<TA, TB, TC>
  extends AbstractDelegatingSubscriber<TA, TC>
  implements ObserverLike<TB> {
  private otherLatest: TB | undefined;
  private hasLatest = false;

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    private readonly selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    this.add(pipe(other, observe(this), subscribe(this))).add(delegate);
  }

  notify(next: TA) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed && this.hasLatest) {
      const result = this.selector(next, this.otherLatest as TB);
      this.delegate.notify(result);
    }
  }

  onDispose(error?: Exception) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNotify(next: TB) {
    this.hasLatest = true;
    this.otherLatest = next;
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
  return lift(operator, false);
};
