import {
  dispose,
  addOnDisposedWithoutErrorTeardown,
  addDisposableDisposeParentOnChildError,
} from "../../disposable.ts";
import { pipe, Function2 } from "../../functions.ts";
import { Option } from "../../option.ts";
import { ObservableLike, ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

class WithLatestFromObserver<
  TA,
  TB,
  T
> extends AbstractAutoDisposingDelegatingObserver<TA, T> {
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
    );

    addOnDisposedWithoutErrorTeardown(otherSubscription, () => {
      if (!this.hasLatest) {
        pipe(this, dispose());
      }
    });

    addDisposableDisposeParentOnChildError(this, otherSubscription);
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
