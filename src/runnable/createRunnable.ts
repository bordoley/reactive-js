import { AbstractContainer } from "../container";
import { SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { Sink } from "./sinks";

class RunnableImpl<T> extends AbstractContainer implements RunnableLike<T> {
  constructor(private readonly _run: SideEffect1<Sink<T>>) {
    super();
  }

  run(sink: Sink<T>) {
    try {
      this._run(sink);
    } catch (cause) {
      sink.dispose({ cause });
    }
  }
}

export const createRunnable = <T>(run: SideEffect1<Sink<T>>): RunnableLike<T> =>
  new RunnableImpl(run);
