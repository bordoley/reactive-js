import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "./sink";

class LastSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
  }
}

export const last = <T>(runnable: RunnableLike<T>): Option<T> => {
  const sink = new LastSink<T>();
  runnable.run(sink);
  return sink.result;
};
