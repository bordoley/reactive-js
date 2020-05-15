import { RunnableFunction, SinkLike, sinkDone } from "./interfaces";
import { pipe } from "../../functions";
import { lift } from "./lift";
import { empty } from "./empty";
import { fromArray } from "./fromArray";

class TakeLastSink<T> implements SinkLike<T> {
  private readonly last: T[] = [];

  constructor(private delegate: SinkLike<T>, private readonly maxCount: number) {}

  get isDone() {
    return this.delegate.isDone;
  }

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
