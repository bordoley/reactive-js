import { TypePredicate, Predicate } from "../../functions.ts";
import { SinkLike, RunnableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class KeepTypeSink<TA, TB extends TA> extends AbstractDelegatingSink<TA, TB> {
  constructor(
    delegate: SinkLike<TB>,
    readonly predicate: TypePredicate<TA, TB>,
  ) {
    super(delegate);
  }

  notify(next: TA) {
    if (this.predicate(next)) {
      this.delegate.notify(next);
    }
  }
}

export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
): RunnableOperator<TA, TB> => {
  const operator = (sink: SinkLike<TB>) => new KeepTypeSink(sink, predicate);
  return lift(operator);
};

export const keep = <T>(predicate: Predicate<T>): RunnableOperator<T, T> =>
  keepType(predicate as TypePredicate<T, T>);
