import { AbstractDelegatingSink } from "./sink";
import { SinkLike, RunnableFunction } from "./interfaces";
import { TypePredicate, Predicate } from "../../functions";
import { lift } from "./lift";

class KeepTypeSink<TA, TB extends TA> extends AbstractDelegatingSink<TA, TB> {
  constructor(
    delegate: SinkLike<TB>,
    private readonly predicate: TypePredicate<TA, TB>,
  ) {
    super(delegate);
  }

  notify(next: TA) {
    if (!this.isDone && this.predicate(next)) {
      this.delegate.notify(next);
    }
  }
}

export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
): RunnableFunction<TA, TB> => {
  const operator = (sink: SinkLike<TB>) => new KeepTypeSink(sink, predicate);
  return lift(operator);
};

export const keep = <T>(predicate: Predicate<T>): RunnableFunction<T, T> =>
  keepType(predicate as TypePredicate<T, T>);
