import { ContainerOperator } from "../../../containers";
import { Function1, newInstance, pipe, pipeUnsafe } from "../../../functions";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { SchedulerLike } from "../../../scheduling";
import { StreamableLike_stream } from "../../../streaming";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream";

const LiftedAsyncEnumerable_src = Symbol("LiftedAsyncEnumerable_src");
const LiftedAsyncEnumerable_operators = Symbol(
  "LiftedAsyncEnumerable_operators",
);

class LiftedAsyncEnumerable<T> implements AsyncEnumerableLike<T> {
  readonly [LiftedAsyncEnumerable_src]: AsyncEnumerableLike<any>;
  readonly [LiftedAsyncEnumerable_operators]: readonly Function1<
    AsyncEnumeratorLike<any>,
    AsyncEnumeratorLike<any>
  >[];

  constructor(
    src: AsyncEnumerableLike<any>,
    operators: readonly Function1<
      AsyncEnumeratorLike<any>,
      AsyncEnumeratorLike<any>
    >[],
  ) {
    this[LiftedAsyncEnumerable_src] = src;
    this[LiftedAsyncEnumerable_operators] = operators;
  }

  [InteractiveContainerLike_interact](scheduler: SchedulerLike) {
    return pipe(this, Streamable_stream(scheduler));
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> {
    const src = pipe(
      this[LiftedAsyncEnumerable_src],
      Streamable_stream(scheduler, options),
    );
    return pipeUnsafe(
      src,
      ...this[LiftedAsyncEnumerable_operators],
    ) as AsyncEnumeratorLike<T>;
  }
}

const AsyncEnumerable_lift =
  <TA, TB>(
    operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>,
  ): ContainerOperator<AsyncEnumerableLike, TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedAsyncEnumerable
        ? enumerable[LiftedAsyncEnumerable_src]
        : enumerable;

    const allFunctions =
      enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable[LiftedAsyncEnumerable_operators], operator]
        : [operator];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<AsyncEnumeratorLike<any>, AsyncEnumeratorLike<any>>[]
    >(LiftedAsyncEnumerable, src, allFunctions);
  };

export default AsyncEnumerable_lift;
