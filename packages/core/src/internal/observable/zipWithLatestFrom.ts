import { pipe, Selector2 } from "../../functions";
import { isSome, Option } from "../../option";
import {
  SubscriberLike,
  ObservableLike,
  ObservableOperator,
} from "./interfaces";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { dispose } from "../../disposable";

const notifyDelegate = <TA, TB, TC>(
  subscriber: ZipWithLatestFromSubscriber<TA, TB, TC>,
) => {
  if (subscriber.queue.length > 0 && subscriber.hasLatest) {
    subscriber.hasLatest = false;
    const next = subscriber.queue.shift() as TA;
    const result = subscriber.selector(next, subscriber.otherLatest as TB);
    subscriber.delegate.notify(result);
  }
};

class ZipWithLatestFromSubscriber<TA, TB, T> extends AbstractSubscriber<TA> {
  otherLatest: Option<TB>;
  hasLatest = false;

  private readonly onNotify = (otherLatest: TB) => {
    this.hasLatest = true;
    this.otherLatest = otherLatest;
    notifyDelegate(this);

    if (this.isDisposed && this.queue.length === 0) {
      dispose(this.delegate);
    }
  };

  readonly queue: TA[] = [];

  constructor(
    readonly delegate: SubscriberLike<T>,
    other: ObservableLike<TB>,
    readonly selector: Selector2<TA, TB, T> 
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(delegate),
    ).add(e => {
      if (isSome(e)) {
        dispose(delegate, e);
      } else if (this.isDisposed) {
        dispose(delegate);
      }
    });

    this.add(e => {
      if (isSome(e)) {
        dispose(delegate, e);
      } else if (otherSubscription.isDisposed) {
        dispose(delegate);
      }
    });

    delegate.add(otherSubscription).add(this);
  }

  notify(next: TA) {
    assertSubscriberNotifyInContinuation(this);
    this.queue.push(next);

    notifyDelegate(this);
  }
}

/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
export const zipWithLatestFrom = <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Selector2<TA, TB, T> 
): ObservableOperator<TA, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ZipWithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
