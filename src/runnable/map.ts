import { bindDisposables } from "../disposable";
import { Function1 } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifyMap } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class MapSink<TA, TB> extends Sink<TA> {
  constructor(readonly delegate: Sink<TB>, readonly mapper: Function1<TA, TB>) {
    super();
  }
}
MapSink.prototype.notify = notifyMap;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): RunnableOperator<TA, TB> => {
  const operator = (delegate: Sink<TB>) => {
    const sink = new MapSink(delegate, mapper);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
};
