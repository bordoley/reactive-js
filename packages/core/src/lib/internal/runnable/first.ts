import { RunnableLike } from "./interfaces";
import { none, Option } from "../../option";
import { AbstractSink } from "./sink";

class FirstSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  constructor() {
    super();
  }

  notify(next: T): void {
    this.result = next;
    this.done();
  }
}

export const first = <T>(runnable: RunnableLike<T>): Option<T> => {
  const sink = new FirstSink<T>();
  runnable.run(sink);
  return sink.result;
};
