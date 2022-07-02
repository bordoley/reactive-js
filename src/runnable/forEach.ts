import {
  Function1,
  SideEffect1,
  newInstanceWith,
  pipeLazy,
} from "../functions";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { run } from "./run";

class ForEachSink<T> extends RunnableSink<T> {
  result: void = undefined;

  constructor(readonly notify: SideEffect1<T>) {
    super();
  }
}

export const forEach = <T>(
  f: SideEffect1<T>,
): Function1<RunnableLike<T>, void> => {
  const createSink = pipeLazy(
    ForEachSink,
    newInstanceWith<ForEachSink<T>, SideEffect1<T>>(f),
  );
  return run<T, void>(createSink);
};
