import { Function1 } from "../functions";
import { RunnableOperator } from "../runnable";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingSink } from "../sink";
import { SinkLike, notifyMap } from "../sink";

class MapSink<TA, TB> extends AbstractAutoDisposingDelegatingSink<TA, TB> {
  constructor(delegate: SinkLike<TB>, readonly mapper: Function1<TA, TB>) {
    super(delegate);
  }
}
MapSink.prototype.notify = notifyMap;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): RunnableOperator<TA, TB> => {
  const operator = (sink: SinkLike<TB>) => new MapSink(sink, mapper);
  return lift(operator);
};
