import { createRunnable } from "./createRunnable.ts";
import { RunnableLike } from "./interfaces.ts";

const _empty = createRunnable(sink => {
  sink.done();
});

export const empty = <T>(): RunnableLike<T> => _empty;
