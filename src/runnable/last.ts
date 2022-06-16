import { Function1 } from "../functions";
import { Option, none } from "../option";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "../sink";
import { run } from "./run";

class LastSink<T> extends AbstractSink<T> {
  result: Option<T> = none;

  notify(next: T) {
    this.result = next;
  }
}

export const last = <T>(): Function1<RunnableLike<T>, Option<T>> => {
  const createSink = () => new LastSink<T>();
  return run<T, Option<T>>(createSink);
};
