import { returns, Function } from "../../functions";
import { RunnableFunction, SinkLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";

class MapSink<TA, TB> extends AbstractDelegatingSink<TA, TB> {
  constructor(
    delegate: SinkLike<TB>,
    private readonly mapper: Function<TA, TB>,
  ) {
    super(delegate);
  }

  notify(next: TA) {
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  }
}

export const map = <TA, TB>(
  mapper: Function<TA, TB>,
): RunnableFunction<TA, TB> => {
  const operator = (sink: SinkLike<TB>) => new MapSink(sink, mapper);
  return lift(operator);
};

export const mapTo = <TA, TB>(value: TB): RunnableFunction<TA, TB> =>
  map(returns(value));
