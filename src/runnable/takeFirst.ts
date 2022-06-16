import { empty } from "../container";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyTakeFirst } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sinks";

class TakeFirstSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  count = 0;

  constructor(delegate: SinkLike<T>, readonly maxCount: number) {
    super(delegate);
  }
}
TakeFirstSink.prototype.notify = notifyTakeFirst;

export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeFirstSink(sink, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
