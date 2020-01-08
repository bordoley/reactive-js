import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";
import { SubscriberOperator } from "./subscriberOperator";

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
    if (!this.isDisposed && this.hasLatest) {
      const result = this.selector(next, this.otherLatest as TB);
      this.delegate.notify(result);
    }
  }

  onDispose(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNotify(next: TB) {
    this.hasLatest = true;
    this.otherLatest = next;
  }
}

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperatorLike<TA, TC> => {
  const call = (subscriber: SubscriberLike<TC>) =>
    new WithLatestFromSubscriber(subscriber, other, selector);
  return lift(new SubscriberOperator(false, call));
};
