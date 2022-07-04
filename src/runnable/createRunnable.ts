import { dispose } from "../disposable";
import { SideEffect1, newInstance, pipe } from "../functions";
import { CreateReactiveContainer } from "../reactive";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { AbstractRunnable } from "./runnable";

class RunnableImpl<T> extends AbstractRunnable<T> {
  constructor(private readonly _run: SideEffect1<RunnableSink<T>>) {
    super();
  }

  sink(sink: RunnableSink<T>) {
    try {
      this._run(sink);
      pipe(sink, dispose());
    } catch (cause) {
      pipe(sink, dispose({ cause }));
    }
  }
}

export const createRunnable = <T>(
  run: SideEffect1<RunnableSink<T>>,
): RunnableLike<T> => newInstance(RunnableImpl, run);

export const createT: CreateReactiveContainer<RunnableLike<unknown>> = {
  create: createRunnable,
};
