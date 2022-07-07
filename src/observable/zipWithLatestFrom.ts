import { getDelegate } from "../__internal__.delegating";
import { add, dispose, isDisposed, onComplete } from "../disposable";
import {
  Function2,
  getLength,
  isEmpty,
  newInstanceWith,
  pipe,
} from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { ObserverLike, getScheduler } from "../observer";
import { Option } from "../option";
import { assertState, notify } from "../reactiveSink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

const notifyDelegate = <TA, TB, TC>(
  observer: ZipWithLatestFromObserver<TA, TB, TC>,
) => {
  if (getLength(observer.queue) > 0 && observer.hasLatest) {
    observer.hasLatest = false;
    const next = observer.queue.shift() as TA;
    const result = observer.selector(next, observer.otherLatest as TB);
    pipe(observer, getDelegate, notify(result));
  }
};

class ZipWithLatestFromObserver<TA, TB, T> extends AbstractDelegatingObserver<
  TA,
  T
> {
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
    assertState(this);
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
    const disposeDelegate = () => {
      if (isDisposed(observer) && isDisposed(otherSubscription)) {
        pipe(delegate, dispose());
      }
    };

    const observer = pipe(
      ZipWithLatestFromObserver,
      newInstanceWith<
        ZipWithLatestFromObserver<TA, TB, T>,
        ObserverLike<T>,
        Function2<TA, TB, T>
      >(delegate, selector),
      onComplete(disposeDelegate),
    );

    const otherSubscription = pipe(
      other,
      onNotify(otherLatest => {
        observer.hasLatest = true;
        observer.otherLatest = otherLatest;
        notifyDelegate(observer);

        if (isDisposed(observer) && isEmpty(observer.queue)) {
          pipe(observer, getDelegate, dispose());
        }
      }),
      subscribe(getScheduler(delegate)),
      onComplete(disposeDelegate),
    );

    pipe(delegate, add(observer), add(otherSubscription));

    return observer;
  };
  return lift(operator);
};
