import { Predicate } from "../functions";
import { RunnableOperator } from "../runnable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sink";
import { notifyTakeWhile, SinkLike } from "../sink";

class TakeWhileSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  constructor(
    delegate: SinkLike<T>,
    readonly predicate: Predicate<T>,
    readonly inclusive: boolean,
  ) {
    super(delegate);
  }

  notify = notifyTakeWhile;
}

export const takeWhile = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
): RunnableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (sink: SinkLike<T>) =>
    new TakeWhileSink(sink, predicate, inclusive);
  return lift(operator);
};
