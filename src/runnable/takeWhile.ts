import { bindDisposables } from "../disposable";
import { Predicate } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyTakeWhile } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class TakeWhileSink<T> extends AbstractSink<T> {
  constructor(
    readonly delegate: SinkLike<T>,
    readonly predicate: Predicate<T>,
    readonly inclusive: boolean,
  ) {
    super();
  }
}
TakeWhileSink.prototype.notify = notifyTakeWhile;

export const takeWhile = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
): RunnableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (delegate: SinkLike<T>) => {
    const sink = new TakeWhileSink(delegate, predicate, inclusive);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
