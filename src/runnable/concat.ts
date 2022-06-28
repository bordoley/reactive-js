import { ConcatAll } from "../container";
import { addTo, dispose } from "../disposable";
import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { RunnableSink, createDelegatingRunnableSink } from "../runnableSink";
import { sourceFrom } from "../source";
import { lift } from "./lift";

class FlattenSink<T> extends RunnableSink<RunnableLike<T>> {
  constructor(readonly delegate: RunnableSink<T>) {
    super();
  }

  notify(next: RunnableLike<T>) {
    const { delegate } = this;
    pipe(
      createDelegatingRunnableSink(delegate),
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
