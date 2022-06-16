import { Function1, SideEffect1 } from "../functions";
import { RunnableLike } from "../runnable";
import { run } from "./run";
import { AbstractSink } from "./sinks";

class ForEachSink<T> extends AbstractSink<T> {
  result: void = undefined;

  constructor(readonly notify: SideEffect1<T>) {
    super();
  }
}

export const forEach = <T>(
  f: SideEffect1<T>,
): Function1<RunnableLike<T>, void> => {
  const createSink = () => new ForEachSink<T>(f);
  return run<T, void>(createSink);
};
