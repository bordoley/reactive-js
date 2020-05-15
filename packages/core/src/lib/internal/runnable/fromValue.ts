import { createRunnable } from "./createRunnable";
import { RunnableLike } from "./interfaces";
import { Function } from "../../functions";

const _fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
export const fromValue = <T>(): Function<T, RunnableLike<T>> => _fromValue;
