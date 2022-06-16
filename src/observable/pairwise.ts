import { ObservableOperator, ObserverLike } from "../observable";
import { Option } from "../option";
import { notifyPairwise } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class PairwiseObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  [Option<T>, T]
> {
  prev: Option<T>;
  hasPrev = false;

  notify = notifyPairwise;
}

export const pairwise = <T>(): ObservableOperator<T, [Option<T>, T]> => {
  const operator = (observer: ObserverLike<[Option<T>, T]>) =>
    new PairwiseObserver(observer);
  operator.isSynchronous = true;
  return lift(operator);
};
