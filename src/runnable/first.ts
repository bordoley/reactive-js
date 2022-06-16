import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "../sink";

class FirstSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
    this.dispose();
  }
}

export const first = <T>(runnable: RunnableLike<T>): Option<T> => {
  const sink = new FirstSink<T>();
  runnable.run(sink);
  return sink.result;
};
