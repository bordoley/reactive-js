import { bindDisposables } from "../disposable";
import { Predicate } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifyTakeWhile } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class TakeWhileSink<T> extends Sink<T> {
  constructor(
    readonly delegate: Sink<T>,
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
  const operator = (delegate: Sink<T>) => {
    const sink = new TakeWhileSink(delegate, predicate, inclusive);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
