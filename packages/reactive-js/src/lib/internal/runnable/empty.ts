import { createRunnable } from "./createRunnable";
import { RunnableLike } from "./interfaces";

const _empty = createRunnable(sink => {
  sink.done();
});

export const empty = <T>(): RunnableLike<T> => _empty;
