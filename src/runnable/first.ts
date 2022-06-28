import { dispose } from "../disposable";
import { Function1, pipe } from "../functions";
import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { run } from "./run";

class FirstSink<T> extends RunnableSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
    pipe(this, dispose());
  }
}

export const first = <T>(): Function1<RunnableLike<T>, Option<T>> => {
  const createSink = () => new FirstSink<T>();
  return run<T, Option<T>>(createSink);
};
