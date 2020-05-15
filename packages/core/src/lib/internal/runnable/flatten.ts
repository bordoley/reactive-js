import { Function, compose } from "../../functions";
import { RunnableLike, RunnableFunction, SinkLike } from "./interfaces";
import { AbstractDelegatingSink } from "./sink";
import { lift } from "./lift";
import { map } from "./map";

class IgnoreDoneSink<T> implements SinkLike<T> {
  isDone = false;

  constructor(private delegate: SinkLike<T>) {}

  notify(next: T): void {
    this.delegate.notify(next);
  }

  done(): void {}
}

class FlattenSink<T> extends AbstractDelegatingSink<RunnableLike<T>, T> {
  private readonly sink: SinkLike<T>;

  constructor(delegate: SinkLike<T>) {
    super(delegate);
    this.sink = new IgnoreDoneSink(delegate);
  }

  notify(next: RunnableLike<T>) {
    next.run(this.sink);
  }
}

const _flatten = lift(s => new FlattenSink(s));
export const flatten = <T>(): RunnableFunction<RunnableLike<T>, T> => _flatten;

export const flatMap = <TA, TB>(
  mapper: Function<TA, RunnableLike<TB>>,
): RunnableFunction<TA, TB> => compose(map(mapper), flatten());
