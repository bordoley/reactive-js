import { empty } from "../container";
import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyTakeFirst } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class TakeFirstSink<T> extends AbstractSink<T> {
  count = 0;

  constructor(readonly delegate: SinkLike<T>, readonly maxCount: number) {
    super();
  }
}
TakeFirstSink.prototype.notify = notifyTakeFirst;

export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: SinkLike<T>) => {
    const sink = new TakeFirstSink(delegate, count);
    bindDisposables(sink, delegate);
    return sink;
  };
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
