import { pipe } from "../../functions";
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

class ZipWithLatestFromSubscriber<TA, TB, TC> extends AbstractSubscriber<TA> {
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
    readonly delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    readonly selector: (a: TA, b: TB) => TC,
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
export const zipWithLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperator<TA, TC> => {
  const operator = (subscriber: SubscriberLike<TC>) =>
    new ZipWithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
