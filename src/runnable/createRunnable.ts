import { SideEffect1 } from "../functions";
import { isSome } from "../option";
import { RunnableLike, SinkLike } from "../runnable";

class RunnableImpl<T> implements RunnableLike<T> {
  constructor(private readonly _run: SideEffect1<SinkLike<T>>) {}
  readonly type = this;
  readonly T = undefined as any;

  run(sink: SinkLike<T>) {
    try {
      this._run(sink);
    } catch (cause) {
      sink.dispose({ cause });
    }
    const { error } = sink;
    if (isSome(error)) {
      throw error.cause;
    }
  }
}

export const createRunnable = <T>(
  run: SideEffect1<SinkLike<T>>,
): RunnableLike<T> => new RunnableImpl(run);
