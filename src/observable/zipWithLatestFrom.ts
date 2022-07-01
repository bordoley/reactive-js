import { add, dispose, isDisposed, onComplete } from "../disposable";
import {
  Function2,
  isEmpty,
  length,
  newInstanceWith,
  pipe,
} from "../functions";
import { delegate as liftDelegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { Option } from "../option";
import { assertState, notify } from "../source";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

const notifyDelegate = <TA, TB, TC>(
  observer: ZipWithLatestFromObserver<TA, TB, TC>,
) => {
  if (length(observer.queue) > 0 && observer.hasLatest) {
    observer.hasLatest = false;
    const next = observer.queue.shift() as TA;
    const result = observer.selector(next, observer.otherLatest as TB);
    pipe(observer, liftDelegate, notify(result));
  }
};

class ZipWithLatestFromObserver<TA, TB, T> extends AbstractDelegatingObserver<
  TA,
  T
> {
  otherLatest: Option<TB>;
  hasLatest = false;

  readonly queue: TA[] = [];

  constructor(delegate: Observer<T>, readonly selector: Function2<TA, TB, T>) {
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
  const operator = (delegate: Observer<T>) => {
    const disposeDelegate = () => {
      if (isDisposed(observer) && isDisposed(otherSubscription)) {
        pipe(delegate, dispose());
      }
    };

    const observer = pipe(
      ZipWithLatestFromObserver,
      newInstanceWith<
        Observer<T>,
        Function2<TA, TB, T>,
        ZipWithLatestFromObserver<TA, TB, T>
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
          pipe(observer, liftDelegate, dispose());
        }
      }),
      subscribe(scheduler(delegate)),
      onComplete(disposeDelegate),
    );

    pipe(delegate, add(observer), add(otherSubscription));

    return observer;
  };
  return lift(operator);
};
