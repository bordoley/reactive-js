import { dispose } from "../disposable";
import { SideEffect1, pipe } from "../functions";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { CreateSource } from "../source";
import { AbstractRunnable } from "./runnable";

class RunnableImpl<T> extends AbstractRunnable<T> {
  constructor(private readonly _run: SideEffect1<RunnableSink<T>>) {
    super();
  }

  sink(sink: RunnableSink<T>) {
    try {
      this._run(sink);
    } catch (cause) {
      pipe(sink, dispose({ cause }));
    }
  }
}

export const createRunnable = <T>(
  run: SideEffect1<RunnableSink<T>>,
): RunnableLike<T> => new RunnableImpl(run);

export const createT: CreateSource<RunnableLike<unknown>> = {
  create: createRunnable,
};
