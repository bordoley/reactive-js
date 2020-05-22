import { Option, none } from "../../option.ts";
import { ObserverLike, ObservableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractAutoDisposingDelegatingObserver } from "./observer.ts";

class PairwiseObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  [Option<T>, T]
> {
  private prev: Option<T>;
  private hasPrev = false;

  notify(value: T): void {
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
