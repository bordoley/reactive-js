import {
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { Function2, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { Option } from "../option";
import { lift } from "./lift";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer";
import { subscribe } from "./subscribe";

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

    const otherSubscription = pipe(other, subscribe(this, this.onNotify));

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
