import { bindDisposables } from "../disposable";
import { Option } from "../option";
import { RunnableOperator } from "../runnable";
import { notifyPairwise } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class PairwiseObserver<T> extends Sink<T> {
  prev: Option<T>;
  hasPrev = false;

  constructor(readonly delegate: Sink<[Option<T>, T]>) {
    super();
  }
}
PairwiseObserver.prototype.notify = notifyPairwise;

export const pairwise = <T>(): RunnableOperator<T, [Option<T>, T]> => {
  const operator = (delegate: Sink<[Option<T>, T]>) => {
    const sink = new PairwiseObserver(delegate);
    bindDisposables(sink, delegate);
    return sink;
  };

  return lift(operator);
};
