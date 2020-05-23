import { Function1 } from "../../functions";
import { createRunnable } from "./createRunnable";
import { RunnableLike } from "./interfaces";

const _fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
export const fromValue = <T>(): Function1<T, RunnableLike<T>> => _fromValue;
