import { AbstractContainer } from "../container";
import { SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { SinkLike } from "../sink";

class RunnableImpl<T> extends AbstractContainer implements RunnableLike<T> {
  constructor(private readonly _run: SideEffect1<SinkLike<T>>) {
    super();
  }

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
