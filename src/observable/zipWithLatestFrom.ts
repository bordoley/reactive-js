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
import { AbstractObserver, assertObserverState } from "./observer";
import { subscribe } from "./subscribe";

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

function onNotify<TA, TB, T>(
  this: ZipWithLatestFromObserver<TA, TB, T>,
  otherLatest: TB,
) {
  this.hasLatest = true;
  this.otherLatest = otherLatest;
  notifyDelegate(this);

  if (this.isDisposed && this.queue.length === 0) {
    pipe(this.delegate, dispose());
  }
}

class ZipWithLatestFromObserver<TA, TB, T> extends AbstractObserver<
  TA,
  ObserverLike<T>
> {
  otherLatest: Option<TB>;
  hasLatest = false;

  readonly queue: TA[] = [];

  constructor(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;

    const otherSubscription = pipe(other, subscribe(delegate, onNotify, this));

    const disposeDelegate = () => {
      if (this.isDisposed && otherSubscription.isDisposed) {
        pipe(delegate, dispose());
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
