import { Function, Reducer, Factory } from "../../functions";
import { RunnableLike, SinkLike } from "./interfaces";

class ReducerSink<T, TAcc> implements SinkLike<T> {
  isDone = false;

  constructor(public acc: TAcc, private readonly reducer: Reducer<T, TAcc>) {}

  notify(next: T): void {
    this.acc = this.reducer(this.acc, next);
  }
  done(): void {
    this.isDone = true;
  }
}

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): Function<RunnableLike<T>, TAcc> => runnable => {
  const sink = new ReducerSink(initialValue(), reducer);
  runnable.run(sink);
  return sink.acc;
};
