import { bindDisposables } from "../disposable";
import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyScan } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class ScanSink<T, TAcc> extends AbstractSink<T> {
  constructor(
    readonly delegate: SinkLike<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super();
  }
}
ScanSink.prototype.notify = notifyScan;

export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): RunnableOperator<T, TAcc> => {
  const operator = (delegate: SinkLike<TAcc>) => {
    const sink = new ScanSink(delegate, reducer, initialValue());
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
