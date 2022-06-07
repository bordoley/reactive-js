import { ObservableOperator, ObserverLike } from "../observable";
import { Option, none } from "../option";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer";

class PairwiseObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  [Option<T>, T]
> {
  private prev: Option<T>;
  private hasPrev = false;

  notify(value: T): void {
    assertObserverState(this);
    const prev = this.hasPrev ? this.prev : none;

    this.hasPrev = true;
    this.prev = value;

    this.delegate.notify([prev, value]);
  }
}

export const pairwise = <T>(): ObservableOperator<T, [Option<T>, T]> => {
  const operator = (observer: ObserverLike<[Option<T>, T]>) =>
    new PairwiseObserver(observer);
  operator.isSynchronous = true;
  return lift(operator);
};
