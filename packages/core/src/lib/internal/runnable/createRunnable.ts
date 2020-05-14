import { SinkLike, RunnableLike } from "./interfaces";
import { SideEffect1 } from "../../functions";

class RunnableImpl<T> implements RunnableLike<T> {
  constructor(readonly run: SideEffect1<SinkLike<T>>) {}
}

export const createRunnable = <T>(
  run: SideEffect1<SinkLike<T>>,
): RunnableLike<T> => new RunnableImpl(run);
