import { SinkLike, RunnableLike, sinkDone } from "./interfaces";
import { SideEffect1 } from "../../functions";

class RunnableImpl<T> implements RunnableLike<T> {
  constructor(private readonly _run: SideEffect1<SinkLike<T>>) {}

  run(sink: SinkLike<T>) {
    try {
      this._run(sink);
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
