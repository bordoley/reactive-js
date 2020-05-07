import { disposed } from "../../disposable";
import { compose, pipe } from "../../functions";
import { isSome } from "../../option";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class SwitchSubscriber<T> extends AbstractDelegatingSubscriber<
  ObservableLike<T>,
  T
> {
  private inner = disposed;

  private readonly onNotify = (next: T) => {
    this.delegate.notify(next);
  };

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
    this.add(error => {
      if (this.inner.isDisposed || isSome(error)) {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: ObservableLike<T>) {
    assertSubscriberNotifyInContinuation(this);

    this.inner.dispose();

    const inner = pipe(
      next,
      onNotify(this.onNotify),
      subscribe(this.delegate),
    ).add(e => {
      if (isSome(e) || this.isDisposed) {
        this.delegate.dispose(e);
      }
    });
    this.delegate.add(inner);
    this.inner = inner;
  }
}

const operator = <T>(subscriber: SubscriberLike<T>) =>
  new SwitchSubscriber(subscriber);
operator.isSynchronous = false;

const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>() =>
  switchAllInstance as ObservableOperator<ObservableLike<T>, T>;

export const switchMap = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(map(mapper), switchAll());
