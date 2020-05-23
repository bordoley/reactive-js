import { none, Option } from "../../option.ts";
import { RunnableLike } from "./interfaces.ts";
import { AbstractSink } from "./sink.ts";

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
