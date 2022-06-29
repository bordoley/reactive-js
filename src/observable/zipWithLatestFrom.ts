import { add, dispose, isDisposed, onComplete } from "../disposable";
import { Function2, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer, scheduler } from "../observer";
import { Option } from "../option";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
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
  const operator = (delegate: Observer<T>) => {
    const disposeDelegate = () => {
      if (isDisposed(observer) && isDisposed(otherSubscription)) {
        pipe(delegate, dispose());
      }
    };

    const observer = pipe(
      new ZipWithLatestFromObserver(delegate, selector),
      onComplete(disposeDelegate),
    );

    const otherSubscription = pipe(
      other,
      onNotify(otherLatest => {
        observer.hasLatest = true;
        observer.otherLatest = otherLatest;
        notifyDelegate(observer);

        if (isDisposed(observer) && observer.queue.length === 0) {
          pipe(observer.delegate, dispose());
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
