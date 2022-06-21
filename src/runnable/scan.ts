import { bindDisposables } from "../disposable";
import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifyScan } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class ScanSink<T, TAcc> extends Sink<T> {
  constructor(
    readonly delegate: Sink<TAcc>,
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
  const operator = (delegate: Sink<TAcc>) => {
    const sink = new ScanSink(delegate, reducer, initialValue());
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
