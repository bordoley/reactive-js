import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import {
  SubscriberLike,
  ObservableLike,
  ObservableOperator,
} from "./interfaces.ts";
import { pipe } from "../../functions.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import { isSome, Option } from "../../option.ts";
import { lift } from "./lift.ts";

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
      this.delegate.dispose();
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
        delegate.dispose(e);
      } else if (this.isDisposed) {
        delegate.dispose();
      }
    });

    this.add(e => {
      if (isSome(e)) {
        delegate.dispose(e);
      } else if (otherSubscription.isDisposed) {
        delegate.dispose();
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
