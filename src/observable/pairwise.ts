import { bindDisposables } from "../disposable";
import { ObservableOperator } from "../observable";
import { Option } from "../option";
import { notifyPairwise } from "../sink";
import { lift } from "./lift";
import { Observer } from "./observer";

class PairwiseObserver<T> extends Observer<T> {
  prev: Option<T>;
  hasPrev = false;

  constructor(readonly delegate: Observer<[Option<T>, T]>) {
    super(delegate);
  }
}
PairwiseObserver.prototype.notify = notifyPairwise;

export const pairwise = <T>(): ObservableOperator<T, [Option<T>, T]> => {
  const operator = (delegate: Observer<[Option<T>, T]>) => {
    const observer = new PairwiseObserver(delegate);
    bindDisposables(observer, delegate);
    return observer;
  };

  operator.isSynchronous = true;
  return lift(operator);
};
