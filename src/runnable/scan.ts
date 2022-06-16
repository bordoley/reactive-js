import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifyScan,
} from "../sink";
import { lift } from "./lift";

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
