import { Function1 } from "../functions";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "../sink";
import { run } from "./run";

class ToArraySink<T> extends AbstractSink<T> {
  public readonly result: T[] = [];

  notify(next: T) {
    this.result.push(next);
  }
}

const createSink = <T>() => new ToArraySink<T>();

/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
export const toArray = <T>(): Function1<RunnableLike<T>, readonly T[]> =>
  run<T, T[]>(createSink);
