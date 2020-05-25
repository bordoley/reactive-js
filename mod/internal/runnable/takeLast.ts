import { pipe } from "../../functions.ts";
import { empty } from "./empty.ts";
import { fromArray } from "./fromArray.ts";
import { RunnableOperator, SinkLike, sinkDone } from "./interfaces.ts";
import { lift } from "./lift.ts";

class TakeLastSink<T> implements SinkLike<T> {
  private readonly last: T[] = [];

  constructor(
    private delegate: SinkLike<T>,
    private readonly maxCount: number,
  ) {}

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
    if (!this.isDone) {
      fromArray()(this.last).run(this.delegate);
      throw sinkDone;
    }
  }
}

export const takeLast = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeLastSink(sink, count);
  return runnable => (count > 0 ? pipe(runnable, lift(operator)) : empty());
};
