import { pipe } from "../../functions";
import { RunnableFunction, SinkLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";
import { notifySkipFirst } from "../notifyMixins";

class SkipFirstSink<T> extends AbstractDelegatingSink<T, T> {
  count = 0;

  constructor(delegate: SinkLike<T>, readonly skipCount: number) {
    super(delegate);
  }

  notify(next: T) {
    notifySkipFirst(this, next);
  }
}

export const skipFirst = <T>(count = 1): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) => new SkipFirstSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : runnable);
};
