import { SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { CreateSource } from "../source";
import { AbstractRunnable } from "./runnable";
import { Sink } from "./sinks";

class RunnableImpl<T> extends AbstractRunnable<T> {
  constructor(private readonly _run: SideEffect1<Sink<T>>) {
    super();
  }

  sink(sink: Sink<T>) {
    try {
      this._run(sink);
    } catch (cause) {
      sink.dispose({ cause });
    }
  }
}

export const createRunnable = <T>(run: SideEffect1<Sink<T>>): RunnableLike<T> =>
  new RunnableImpl(run);

export const createT: CreateSource<RunnableLike<unknown>> = {
  create: createRunnable,
};
