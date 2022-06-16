import { Option } from "../option";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyPairwise } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sinks";

class PairwiseObserver<T> extends AbstractAutoDisposingDelegatingSink<
  T,
  [Option<T>, T]
> {
  prev: Option<T>;
  hasPrev = false;
}
PairwiseObserver.prototype.notify = notifyPairwise;

export const pairwise = <T>(): RunnableOperator<T, [Option<T>, T]> => {
  const operator = (observer: SinkLike<[Option<T>, T]>) =>
    new PairwiseObserver(observer);
  return lift(operator);
};
