import { Function1, newInstanceWith, pipeLazy } from "../functions";
import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { run } from "./run";
import { RunnableSink } from "./runnableSink";

class LastSink<T> extends RunnableSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
  }
}

export const last = <T>(): Function1<RunnableLike<T>, Option<T>> => {
  const createSink = pipeLazy(LastSink, newInstanceWith<LastSink<T>>());
  return run<T, Option<T>>(createSink);
};
