import {
  add,
  disposed,
  dispose,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { compose, pipe, Operator } from "../../functions.ts";
import { isSome } from "../../option.ts";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { map } from "./map.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

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
    add(this, error => {
      if (this.inner.isDisposed || isSome(error)) {
        dispose(this.delegate, error);
      }
    });
  }

  notify(next: ObservableLike<T>) {
    assertSubscriberNotifyInContinuation(this);

    dispose(this.inner);

    const inner = pipe(
      next,
      onNotify(this.onNotify),
      subscribe(this.delegate),
      addDisposableOrTeardown(e => {
        if (isSome(e) || this.isDisposed) {
          dispose(this.delegate, e);
        }
      }),
    );
    add(this.delegate, inner);
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

export const switchMap = <TA, TB>(mapper: Operator<TA, ObservableLike<TB>>) =>
  compose(map(mapper), switchAll());
