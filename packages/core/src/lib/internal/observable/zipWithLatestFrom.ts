import { dispose, add, addDisposableOrTeardown } from "../../disposable";
import { pipe, Function2 } from "../../functions";
import { isSome, Option } from "../../option";
import {
  SubscriberLike,
  ObservableLike,
  ObservableFunction,
} from "./interfaces";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

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
    readonly selector: Function2<TA, TB, T>,
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
  selector: Function2<TA, TB, T>,
): ObservableFunction<TA, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ZipWithLatestFromSubscriber(subscriber, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
