import { returns, Function } from "../../functions";
import { RunnableFunction, SinkLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";
import { notifyMap } from "../notifyMixins";

class MapSink<TA, TB> extends AbstractDelegatingSink<TA, TB> {
  constructor(delegate: SinkLike<TB>, readonly mapper: Function<TA, TB>) {
    super(delegate);
  }

  notify(next: TA) {
    notifyMap(this, next);
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
