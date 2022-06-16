import { Keep } from "../container";
import { Predicate } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifyKeep,
} from "../sink";
import { lift } from "./lift";

class KeepSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  constructor(delegate: SinkLike<T>, readonly predicate: Predicate<T>) {
    super(delegate);
  }
}
KeepSink.prototype.notify = notifyKeep;

export const keep = <T>(predicate: Predicate<T>): RunnableOperator<T, T> => {
  const operator = (sink: SinkLike<T>) => new KeepSink(sink, predicate);
  return lift(operator);
};

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};
