import { RunnableFunction, SinkLike } from "./interfaces";
import { pipe } from "../../functions";
import { lift } from "./lift";
import { empty } from "./empty";
import { fromArray } from "./fromArray";

class TakeLastSink<T> implements SinkLike<T> {
  isDone = false;
  readonly last: T[] = [];

  constructor(private delegate: SinkLike<T>, readonly maxCount: number) {
  }

  notify(next: T) {
    const last = this.last;

    last.push(next);
  
    if (last.length > this.maxCount) {
      last.shift();
    }
  }

  done() {
    if(!this.isDone) {
      this.isDone = true;
      fromArray()(this.last).run(this.delegate);
    }
  };
}

export const takeLast = <T>(count = 1): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) => new TakeLastSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
