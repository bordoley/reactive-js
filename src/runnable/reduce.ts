import { Factory, Function1, Reducer } from "../functions";
import { RunnableLike } from "../runnable";
import { AbstractSink, notifyReduce } from "../sink";
import { run } from "./run";

class ReducerSink<T, TAcc> extends AbstractSink<T> {
  public get result() {
    return this.acc;
  }

  constructor(public acc: TAcc, readonly reducer: Reducer<T, TAcc>) {
    super();
  }
}
ReducerSink.prototype.notify = notifyReduce;

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): Function1<RunnableLike<T>, TAcc> => {
  const createSink = () => new ReducerSink<T, TAcc>(initialValue(), reducer);
  return run<T, TAcc>(createSink);
};
