import { Factory, Reducer } from "../../functions";
import { RunnableFunction, SinkLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";
import { notifyScan } from "../notifyMixins";

class ScanSink<T, TAcc> extends AbstractDelegatingSink<T, TAcc> {
  constructor(
    delegate: SinkLike<TAcc>,
    readonly scanner: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }

  notify(next: T) {
    notifyScan(this, next);
  }
}

export const scan = <T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): RunnableFunction<T, TAcc> => {
  const operator = (sink: SinkLike<TAcc>) =>
    new ScanSink(sink, scanner, initialValue());
  return lift(operator);
};
