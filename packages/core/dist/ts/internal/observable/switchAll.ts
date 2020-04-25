import { Exception, disposed } from "../../disposable.ts";
import { isSome } from "../../option.ts";
import { compose, pipe } from "../../pipe.ts";
import {
  ObservableLike,
  ObserverLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { map } from "./map.ts";
import { observe } from "./observe.ts";
import { subscribe } from "./subscribe.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class SwitchSubscriber<T>
  extends AbstractDelegatingSubscriber<ObservableLike<T>, T>
  implements ObserverLike<T> {
  private inner = disposed;

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

    const inner = pipe(next, observe(this), subscribe(this.delegate));
    this.delegate.add(inner);
    this.inner = inner;
  }

  onDispose(error?: Exception) {
    if (isSome(error) || this.isDisposed) {
      this.delegate.dispose(error);
    }
  }

  onNotify(next: T) {
    this.delegate.notify(next);
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
