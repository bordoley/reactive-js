import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";

const _empty = createRunnable(sink => {
  sink.done();
});

export const empty = <T>(): RunnableLike<T> => _empty;
