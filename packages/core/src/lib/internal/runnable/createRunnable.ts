import { SinkLike, RunnableLike, sinkDone } from "./interfaces";
import { SideEffect1 } from "../../functions";

class RunnableImpl<T> implements RunnableLike<T> {
  constructor(readonly runUnsafe: SideEffect1<SinkLike<T>>) {}

  run(sink: SinkLike<T>) {
    try {
      this.runUnsafe(sink);
    } catch (e) {
      if (e !== sinkDone) {
        throw e;
      }
    }
  }
}

export const createRunnable = <T>(
  run: SideEffect1<SinkLike<T>>,
): RunnableLike<T> => new RunnableImpl(run);
