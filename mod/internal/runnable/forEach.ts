import { Function1, SideEffect1 } from "../../functions.ts";
import { RunnableLike } from "./interfaces.ts";
import { AbstractSink } from "./sink.ts";

class ForEachSink<T> extends AbstractSink<T> {
  constructor(readonly notify: SideEffect1<T>) {
    super();
  }
}

export const forEach = <T>(
  f: SideEffect1<T>,
): Function1<RunnableLike<T>, void> => runnable =>
  runnable.run(new ForEachSink(f));
