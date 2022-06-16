import { Factory, Function1, Reducer } from "../functions";
import { RunnableLike } from "../runnable";
import { notifyReduce } from "../sink";
import { AbstractSink } from "./sink";

class ReducerSink<T, TAcc> extends AbstractSink<T> {
  constructor(public acc: TAcc, readonly reducer: Reducer<T, TAcc>) {
    super();
  }

  notify = notifyReduce;
}

export const reduce =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<RunnableLike<T>, TAcc> =>
  runnable => {
    const sink = new ReducerSink(initialValue(), reducer);
    runnable.run(sink);
    return sink.acc;
  };
