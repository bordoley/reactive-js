import { RunnableLike } from "./interfaces.ts";
import { none, Option } from "../../option.ts";
import { AbstractSink } from "./sink.ts";

class LastSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  constructor() {
    super();
  }

  notify(next: T): void {
    this.result = next;
  }
}

export const last = <T>(runnable: RunnableLike<T>): Option<T> => {
  const sink = new LastSink<T>();
  runnable.run(sink);
  return sink.result;
};
