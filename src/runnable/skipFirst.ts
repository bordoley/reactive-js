import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifySkipFirst } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class SkipFirstSink<T> extends Sink<T> {
  count = 0;

  constructor(readonly delegate: Sink<T>, readonly skipCount: number) {
    super();
  }
}
SkipFirstSink.prototype.notify = notifySkipFirst;

export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: Sink<T>) => {
    const sink = new SkipFirstSink(delegate, count);
    bindDisposables(sink, delegate);
    return sink;
  };
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
