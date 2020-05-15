import { createRunnable } from "./createRunnable.ts";
import { RunnableLike } from "./interfaces.ts";

export const fromValue = <T>(value: T): RunnableLike<T> =>
  createRunnable(sink => {
    sink.notify(value);
    sink.done();
  });
