import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { empty } from "../container";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "./sink";
import { notifyTakeFirst, SinkLike } from "../sink";

class TakeFirstSink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  count = 0;

  constructor(delegate: SinkLike<T>, readonly maxCount: number) {
    super(delegate);
  }

  notify = notifyTakeFirst;
}

export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeFirstSink(sink, count);
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
