import { pipe } from "../../functions.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";
import { notifySkipFirst } from "../notifyMixins.ts";

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
