import { Keep } from "../container";
import { bindDisposables } from "../disposable";
import { Predicate } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { SinkLike, notifyKeep } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class KeepSink<T> extends AbstractSink<T> {
  constructor(
    readonly delegate: SinkLike<T>,
    readonly predicate: Predicate<T>,
  ) {
    super();
  }
}
KeepSink.prototype.notify = notifyKeep;

export const keep = <T>(predicate: Predicate<T>): RunnableOperator<T, T> => {
  const operator = (delegate: SinkLike<T>) => {
    const sink = new KeepSink(delegate, predicate);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};
