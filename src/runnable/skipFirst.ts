import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifySkipFirst } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class SkipFirstSink<T> extends AbstractSink<T> {
  count = 0;

  constructor(readonly delegate: SinkLike<T>, readonly skipCount: number) {
    super();
  }
}
SkipFirstSink.prototype.notify = notifySkipFirst;

export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: SinkLike<T>) => {
    const sink = new SkipFirstSink(delegate, count);
    bindDisposables(sink, delegate);
    return sink;
  };
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
