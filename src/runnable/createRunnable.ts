import { SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { SinkLike } from "../sink";

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
  }
}

export const createRunnable = <T>(
  run: SideEffect1<SinkLike<T>>,
): RunnableLike<T> => new RunnableImpl(run);
