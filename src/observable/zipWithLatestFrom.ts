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
import { AbstractSchedulerDelegatingObserver } from "./observer";
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

class ZipWithLatestFromObserver<
  TA,
  TB,
  T,
> extends AbstractSchedulerDelegatingObserver<TA, ObserverLike<T>> {
  otherLatest: Option<TB>;
  hasLatest = false;

  readonly queue: TA[] = [];

  constructor(
    delegate: ObserverLike<T>,
    readonly selector: Function2<TA, TB, T>,
  ) {
    super(delegate);
    this.selector = selector;
  }

  notify(next: TA) {
    this.assertState();
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
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new ZipWithLatestFromObserver(delegate, selector);

    const otherSubscription = pipe(
      other,
      subscribe(delegate, onNotify, observer),
    );

    const disposeDelegate = () => {
      if (observer.isDisposed && otherSubscription.isDisposed) {
        pipe(delegate, dispose());
      }
    };

    addDisposableDisposeParentOnChildError(delegate, observer);
    addDisposableDisposeParentOnChildError(delegate, otherSubscription);

    addOnDisposedWithoutErrorTeardown(observer, disposeDelegate);
    addOnDisposedWithoutErrorTeardown(otherSubscription, disposeDelegate);

    return observer;
  };
  operator.isSynchronous = false;
  return lift(operator);
};
