import { RunnableOperator } from "../runnable";
import { Option } from "../option";
import { notifyPairwise, SinkLike } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "../sink";

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
