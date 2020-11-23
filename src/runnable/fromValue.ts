import { Function1 } from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";

const _fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
export const fromValue = <T>(): Function1<T, RunnableLike<T>> => _fromValue;
