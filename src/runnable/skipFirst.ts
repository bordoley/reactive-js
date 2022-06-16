import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifySkipFirst,
} from "../sink";
import { lift } from "./lift";

class SkipFirstSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  count = 0;

  constructor(delegate: SinkLike<T>, readonly skipCount: number) {
    super(delegate);
  }
}
SkipFirstSink.prototype.notify = notifySkipFirst;

export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new SkipFirstSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
