import {
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  bindDisposables,
  dispose,
} from "../disposable";
import { Function2, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Option } from "../option";
import { lift } from "./lift";
import { Observer } from "./observer";
import { subscribe } from "./subscribe";

function onNotify<TA, TB, T>(
  this: WithLatestFromObserver<TA, TB, T>,
  next: TB,
) {
  this.hasLatest = true;
  this.otherLatest = next;
}

class WithLatestFromObserver<TA, TB, T> extends Observer<TA> {
  otherLatest: Option<TB>;
  hasLatest = false;

  constructor(
    readonly delegate: Observer<T>,
    private readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;
  }

  notify(next: TA) {
    this.assertState();

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
  const operator = (delegate: Observer<T>) => {
    const observer = new WithLatestFromObserver(delegate, selector);
    bindDisposables(observer, delegate);

    const otherSubscription = pipe(
      other,
      subscribe(observer, onNotify, observer),
    );

    addOnDisposedWithoutErrorTeardown(otherSubscription, () => {
      if (!observer.hasLatest) {
        pipe(observer, dispose());
      }
    });

    addDisposableDisposeParentOnChildError(observer, otherSubscription);

    return observer;
  };
  return lift(operator);
};
