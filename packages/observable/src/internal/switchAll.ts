import { Exception, disposed } from "@reactive-js/disposable";
import { isSome } from "@reactive-js/option";
import { compose, pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObserverLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

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

const switchAllInstance = lift(operator, false);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
export const switchAll = <T>() =>
  switchAllInstance as ObservableOperator<ObservableLike<T>, T>;

export const switchMap = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(map(mapper), switchAll());
