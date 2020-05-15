import { RunnableFunction, SinkLike, sinkDone } from "./interfaces.ts";
import { pipe } from "../../functions.ts";
import { lift } from "./lift.ts";
import { empty } from "./empty.ts";
import { fromArray } from "./fromArray.ts";

class TakeLastSink<T> implements SinkLike<T> {
  readonly last: T[] = [];

  constructor(private delegate: SinkLike<T>, readonly maxCount: number) {}

  notify(next: T) {
    const last = this.last;

    last.push(next);

    if (last.length > this.maxCount) {
      last.shift();
    }
  }

  done() {
    fromArray()(this.last).run(this.delegate);
    throw sinkDone;
  }
}

export const takeLast = <T>(count = 1): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) => new TakeLastSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
