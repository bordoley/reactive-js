import { Function1 } from "../functions";
import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { run } from "./run";
import { Sink } from "./sinks";

class FirstSink<T> extends Sink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
    this.dispose();
  }
}

export const first = <T>(): Function1<RunnableLike<T>, Option<T>> => {
  const createSink = () => new FirstSink<T>();
  return run<T, Option<T>>(createSink);
};
