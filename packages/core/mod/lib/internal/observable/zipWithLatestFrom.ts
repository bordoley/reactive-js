import { dispose, add, addDisposableOrTeardown } from "../../disposable.ts";
import { pipe, Selector2 } from "../../functions.ts";
import { isSome, Option } from "../../option.ts";
import {
  SubscriberLike,
  ObservableLike,
  ObservableOperator,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

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
    readonly selector: Selector2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(delegate),
      addDisposableOrTeardown(e => {
        if (isSome(e)) {
          dispose(delegate, e);
        } else if (this.isDisposed) {
          dispose(delegate);
        }
      }),
    );

    add(this, e => {
      if (isSome(e)) {
        dispose(delegate, e);
      } else if (otherSubscription.isDisposed) {
        dispose(delegate);
      }
    });

    add(delegate, otherSubscription, this);
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
  selector: Selector2<TA, TB, T>,
): ObservableOperator<TA, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ZipWithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
