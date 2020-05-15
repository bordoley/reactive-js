import { Factory, Reducer } from "../../functions.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink, assertSinkState } from "./sink.ts";
import { notifyScan } from "../notifyMixins.ts";

class ScanSink<T, TAcc> extends AbstractDelegatingSink<T, TAcc> {
  constructor(
    delegate: SinkLike<TAcc>,
    readonly scanner: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertSinkState(this);
    notifyScan(this, next);
  }
}

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scan = <T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): RunnableFunction<T, TAcc> => {
  const operator = (sink: SinkLike<TAcc>) =>
    new ScanSink(sink, scanner, initialValue());
  return lift(operator);
};
