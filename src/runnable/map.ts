import { Function1 } from "../functions";
import { RunnableOperator, SinkLike } from "../runnable";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";

class MapSink<TA, TB> extends AbstractDelegatingSink<TA, TB> {
  constructor(delegate: SinkLike<TB>, readonly mapper: Function1<TA, TB>) {
    super(delegate);
  }

  notify(next: TA) {
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  }
}

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): RunnableOperator<TA, TB> => {
  const operator = (sink: SinkLike<TB>) => new MapSink(sink, mapper);
  return lift(operator);
};
