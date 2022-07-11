import { dispose } from "../disposable";
import { SideEffect1, newInstance, pipe } from "../functions";
import { CreateReactiveContainer } from "../reactiveContainer";
import { ReactiveSinkLike } from "../reactiveSink";
import { RunnableLike } from "../runnable";
import { AbstractRunnable } from "./runnable";

class RunnableImpl<T> extends AbstractRunnable<T> {
  constructor(private readonly _run: SideEffect1<ReactiveSinkLike<T>>) {
    super();
  }

  sinkInto(sink: ReactiveSinkLike<T>) {
    try {
      this._run(sink);
      pipe(sink, dispose());
    } catch (cause) {
      pipe(sink, dispose({ cause }));
    }
  }
}

export const createRunnable = <T>(
  run: SideEffect1<ReactiveSinkLike<T>>,
): RunnableLike<T> => newInstance(RunnableImpl, run);

export const createT: CreateReactiveContainer<RunnableLike<unknown>> = {
  create: createRunnable,
};
