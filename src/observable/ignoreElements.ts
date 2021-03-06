import { ObservableOperator, ObserverLike } from "../observable";
import { lift } from "./lift";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer";

class IgnoreObserver<TA, TB> extends AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> {
  notify(_: TA) {
    assertObserverState(this);
  }
}

const operator = <TA, TB>(observer: ObserverLike<TB>) =>
  new IgnoreObserver<TA, TB>(observer);
operator.isSynchronous = true;

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
export const ignoreElements = <TA, TB>(): ObservableOperator<TA, TB> =>
  lift<TA, TB>(operator);
