import { ConcatAll } from "../container";
import { addTo, dispose } from "../disposable";
import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { sourceFrom } from "../source";
import { lift } from "./lift";
import { Sink, createDelegatingSink } from "./sinks";

class FlattenSink<T> extends Sink<RunnableLike<T>> {
  constructor(readonly delegate: Sink<T>) {
    super();
  }

  notify(next: RunnableLike<T>) {
    const { delegate } = this;
    pipe(
      createDelegatingSink(delegate),
      addTo(this),
      sourceFrom(next),
      dispose(),
    );
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
