import { Function1 } from "../../functions";
import { RunnableLike } from "./interfaces";
import { AbstractSink } from "./sink";

class ToArraySink<T> extends AbstractSink<T> {
  public readonly acc: T[] = [];
  constructor() {
    super();
  }

  notify(next: T) {
    this.acc.push(next);
  }
}

const _toArray = <T>(runnable: RunnableLike<T>): readonly T[] => {
  const sink = new ToArraySink<T>();
  runnable.run(sink);
  return sink.acc;
};
/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
export const toArray = <T>(): Function1<RunnableLike<T>, readonly T[]> =>
  _toArray;
