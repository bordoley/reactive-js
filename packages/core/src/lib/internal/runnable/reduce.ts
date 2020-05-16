import { Function1, Reducer, Factory } from "../../functions";
import { RunnableLike } from "./interfaces";
import { AbstractSink } from "./sink";

class ReducerSink<T, TAcc> extends AbstractSink<T> {
  constructor(public acc: TAcc, private readonly reducer: Reducer<T, TAcc>) {
    super();
  }

  notify(next: T): void {
    this.acc = this.reducer(this.acc, next);
  }
}

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): Function1<RunnableLike<T>, TAcc> => runnable => {
  const sink = new ReducerSink(initialValue(), reducer);
  runnable.run(sink);
  return sink.acc;
};
