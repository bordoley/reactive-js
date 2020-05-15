import { createRunnable } from "./createRunnable";
import { RunnableLike } from "./interfaces";

export const fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
