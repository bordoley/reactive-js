import { ConcatAll } from "../container";
import { addTo } from "../disposable";
import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { lift } from "./lift";
import { Sink, createDelegatingSink } from "./sinks";

class FlattenSink<T> extends Sink<RunnableLike<T>> {
  constructor(readonly delegate: Sink<T>) {
    super();
  }

  notify(next: RunnableLike<T>) {
    const { delegate } = this;
    const concatSink = pipe(createDelegatingSink(delegate), addTo(this));

    next.sink(concatSink);
    concatSink.dispose();
  }
}

const _concatAll = lift(delegate =>
  pipe(new FlattenSink(delegate), addTo(delegate)),
);

export const concatAll: ConcatAll<RunnableLike<unknown>>["concatAll"] = <
  T,
>(): RunnableOperator<RunnableLike<T>, T> => _concatAll;

export const concatAllT: ConcatAll<RunnableLike<unknown>> = {
  concatAll,
};
