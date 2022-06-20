import { bindDisposables } from "../disposable";
import { Function1 } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyMap } from "../sink";
import { lift } from "./lift";
import { AbstractSink } from "./sinks";

class MapSink<TA, TB> extends AbstractSink<TA> {
  constructor(
    readonly delegate: SinkLike<TB>,
    readonly mapper: Function1<TA, TB>,
  ) {
    super();
  }
}
MapSink.prototype.notify = notifyMap;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): RunnableOperator<TA, TB> => {
  const operator = (delegate: SinkLike<TB>) => {
    const sink = new MapSink(delegate, mapper);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
