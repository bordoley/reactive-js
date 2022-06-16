import { Option } from "../option";
import { RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifyPairwise,
} from "../sink";
import { lift } from "./lift";

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
