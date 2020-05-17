import { dispose, add, addDisposableOrTeardown } from "../../disposable.ts";
import { pipe, Function2 } from "../../functions.ts";
import { Option, isSome } from "../../option.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

class WithLatestFromObserver<TA, TB, T> extends AbstractDelegatingObserver<
  TA,
  T
> {
  private otherLatest: Option<TB>;
  private hasLatest = false;

  private readonly onNotify = (next: TB) => {
    this.hasLatest = true;
    this.otherLatest = next;
  };

  constructor(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    private readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(this),
      addDisposableOrTeardown(e => {
        if (isSome(e) || !this.hasLatest) {
          dispose(this, e);
        }
      }),
    );

    add(this, otherSubscription, delegate);
  }

  notify(next: TA) {
    assertObserverState(this);

    if (!this.isDisposed && this.hasLatest) {
      const result = this.selector(next, this.otherLatest as TB);
      this.delegate.notify(result);
    }
  }
}

/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
export const withLatestFrom = <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
): ObservableOperator<TA, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new WithLatestFromObserver(observer, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
