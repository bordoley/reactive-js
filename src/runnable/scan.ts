import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "../sink";
import { notifyScan, SinkLike } from "../sink";

class ScanSink<T, TAcc> extends AbstractAutoDisposingDelegatingSink<T, TAcc> {
  constructor(
    delegate: SinkLike<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }
}
ScanSink.prototype.notify = notifyScan;

export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): RunnableOperator<T, TAcc> => {
  const operator = (sink: SinkLike<TAcc>) =>
    new ScanSink(sink, reducer, initialValue());
  return lift(operator);
};
