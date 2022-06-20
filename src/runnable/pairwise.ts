import { bindDisposables } from "../disposable";
import { Option } from "../option";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyPairwise } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class PairwiseObserver<T> extends AbstractSink<T> {
  prev: Option<T>;
  hasPrev = false;

  constructor(readonly delegate: SinkLike<[Option<T>, T]>) {
    super();
  }
}
PairwiseObserver.prototype.notify = notifyPairwise;

export const pairwise = <T>(): RunnableOperator<T, [Option<T>, T]> => {
  const operator = (delegate: SinkLike<[Option<T>, T]>) => {
    const sink = new PairwiseObserver(delegate);
    bindDisposables(sink, delegate);
    return sink;
  };

  return lift(operator);
};
