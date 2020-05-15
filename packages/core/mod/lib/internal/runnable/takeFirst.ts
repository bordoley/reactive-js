import { pipe } from "../../functions.ts";
import { empty } from "./empty.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class TakeFirstSink<T> extends AbstractDelegatingSink<T, T> {
  private count = 0;

  constructor(delegate: SinkLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notify(next: T) {
    debugger;
    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      this.done();
    }
  }
}

export const takeFirst = <T>(count = 1): RunnableFunction<T, T> => {
  const operator = (sink: SinkLike<T>) => new TakeFirstSink(sink, count);
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
