import { Factory, Reducer } from "../../functions.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class ScanSink<T, TAcc> extends AbstractDelegatingSink<T, TAcc> {
  constructor(
    delegate: SinkLike<TAcc>,
    readonly scanner: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }

  notify(next: T) {
    const nextAcc = this.scanner(this.acc, next);
    this.acc = nextAcc;

    this.delegate.notify(nextAcc);
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
