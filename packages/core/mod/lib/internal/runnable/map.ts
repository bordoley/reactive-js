import { returns, Function } from "../../functions.ts";
import { RunnableFunction, SinkLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink, assertSinkState } from "./sink.ts";
import { notifyMap } from "../notifyMixins.ts";

class MapSink<TA, TB> extends AbstractDelegatingSink<TA, TB> {
  constructor(
    delegate: SinkLike<TB>,
    readonly mapper: Function<TA, TB>,
  ) {
    super(delegate);
  }

  notify(next: TA) {
    assertSinkState(this);
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
