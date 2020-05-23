import { none, Option } from "../../option.ts";
import { RunnableLike } from "./interfaces.ts";
import { AbstractSink } from "./sink.ts";

class FirstSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
    this.done();
  }
}

export const first = <T>(runnable: RunnableLike<T>): Option<T> => {
  const sink = new FirstSink<T>();
  runnable.run(sink);
  return sink.result;
};
