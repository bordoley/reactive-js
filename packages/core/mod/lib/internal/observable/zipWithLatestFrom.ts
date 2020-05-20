import {
  dispose,
  addOnDisposedWithoutErrorTeardown,
  addDisposableDisposeParentOnChildError,
} from "../../disposable.ts";
import { pipe, Function2 } from "../../functions.ts";
import { Option } from "../../option.ts";
import { ObserverLike, ObservableLike, ObservableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractObserver, assertObserverState } from "./observer.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

const notifyDelegate = <TA, TB, TC>(
  observer: ZipWithLatestFromObserver<TA, TB, TC>,
) => {
  if (observer.queue.length > 0 && observer.hasLatest) {
    observer.hasLatest = false;
    const next = observer.queue.shift() as TA;
    const result = observer.selector(next, observer.otherLatest as TB);
    observer.delegate.notify(result);
  }
};

class ZipWithLatestFromObserver<TA, TB, T> extends AbstractObserver<TA, ObserverLike<T>> {
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
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(
      other,
      onNotify(this.onNotify),
      subscribe(delegate),
    );

    const disposeDelegate = () => {
      if (this.isDisposed && otherSubscription.isDisposed) {
        dispose(delegate);
      }
    };

    addDisposableDisposeParentOnChildError(delegate, this);
    addDisposableDisposeParentOnChildError(delegate, otherSubscription);

    addOnDisposedWithoutErrorTeardown(this, disposeDelegate);
    addOnDisposedWithoutErrorTeardown(otherSubscription, disposeDelegate);
  }

  notify(next: TA) {
    assertObserverState(this);
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
): ObservableOperator<TA, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new ZipWithLatestFromObserver(observer, other, selector);
  operator.isSynchronous = false;
  return lift(operator);
};
