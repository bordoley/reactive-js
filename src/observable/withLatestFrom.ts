import { addTo, bindTo, dispose, isDisposed, onComplete } from "../disposable";
import { Function2, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { Option } from "../option";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

class WithLatestFromObserver<TA, TB, T> extends AbstractDelegatingObserver<
  TA,
  T
> {
  otherLatest: Option<TB>;
  hasLatest = false;

  constructor(
    delegate: Observer<T>,
    private readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;
  }

  notify(next: TA) {
    this.assertState();

    if (!isDisposed(this) && this.hasLatest) {
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
    const observer = pipe(
      new WithLatestFromObserver(delegate, selector),
      bindTo(delegate),
    );

    pipe(
      other,
      onNotify(next => {
        observer.hasLatest = true;
        observer.otherLatest = next;
      }),
      subscribe(scheduler(observer)),
      addTo(observer),
      onComplete(() => {
        if (!observer.hasLatest) {
          pipe(observer, dispose());
        }
      }),
    );

    return observer;
  };
  return lift(operator);
};
