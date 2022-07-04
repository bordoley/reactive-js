import {
  AbstractDelegatingRunnableSink,
  createDelegatingRunnableSink,
} from "../__internal__.runnableSink";
import { ConcatAll } from "../container";
import { addTo, bindTo, dispose } from "../disposable";
import { newInstanceWith, pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { sourceFrom } from "../source";
import { lift } from "./lift";

class FlattenSink<T> extends AbstractDelegatingRunnableSink<
  RunnableLike<T>,
  T
> {
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

const _concatAll = /*@__PURE__*/ lift(delegate =>
  pipe(FlattenSink, newInstanceWith(delegate), bindTo(delegate)),
);

export const concatAll: ConcatAll<RunnableLike<unknown>>["concatAll"] = <
  T,
>(): RunnableOperator<RunnableLike<T>, T> => _concatAll;

export const concatAllT: ConcatAll<RunnableLike<unknown>> = {
  concatAll,
};
