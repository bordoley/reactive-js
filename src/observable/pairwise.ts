import { bindDisposables } from "../disposable";
import { ObservableOperator, ObserverLike } from "../observable";
import { Option } from "../option";
import { notifyPairwise } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class PairwiseObserver<T> extends AbstractDelegatingObserver<
  T,
  [Option<T>, T]
> {
  prev: Option<T>;
  hasPrev = false;
}
PairwiseObserver.prototype.notify = notifyPairwise;

export const pairwise = <T>(): ObservableOperator<T, [Option<T>, T]> => {
  const operator = (delegate: ObserverLike<[Option<T>, T]>) => {
    const observer = new PairwiseObserver(delegate);
    bindDisposables(observer, delegate);
    return observer;
  };

  operator.isSynchronous = true;
  return lift(operator);
};
