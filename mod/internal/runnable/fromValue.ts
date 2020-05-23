import { Function1 } from "../../functions.ts";
import { createRunnable } from "./createRunnable.ts";
import { RunnableLike } from "./interfaces.ts";

const _fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
export const fromValue = <T>(): Function1<T, RunnableLike<T>> => _fromValue;
