import { Function, SideEffect1 } from "../../functions";
import { RunnableLike } from "./interfaces";
import { AbstractSink } from "./sink";

class ForEachSink<T> extends AbstractSink<T> {
  constructor(readonly notify: SideEffect1<T>) {
    super();
  }
}

export const forEach = <T>(
  f: SideEffect1<T>,
): Function<RunnableLike<T>, void> => runnable =>
  runnable.run(new ForEachSink(f));
