import { ContainerOperator } from "../../../containers.js";
import {
  Function1,
  newInstance,
  pipe,
  pipeUnsafe,
} from "../../../functions.js";
import {
  AsyncEnumerableLike,
  AsyncEnumerableLike_isEnumerable,
  AsyncEnumerableLike_isRunnable,
  AsyncEnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamableLike_stream } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";

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

  readonly [AsyncEnumerableLike_isEnumerable]: boolean;
  readonly [AsyncEnumerableLike_isRunnable]: boolean;

  constructor(
    src: AsyncEnumerableLike<any>,
    operators: readonly Function1<
      AsyncEnumeratorLike<any>,
      AsyncEnumeratorLike<any>
    >[],
    isEnumerable: boolean,
    isRunnable: boolean,
  ) {
    this[LiftedAsyncEnumerable_src] = src;
    this[LiftedAsyncEnumerable_operators] = operators;

    this[AsyncEnumerableLike_isEnumerable] = isEnumerable;
    this[AsyncEnumerableLike_isRunnable] = isRunnable;
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
  (isEnumerable = false, isRunnable = false) =>
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

    const isLiftedEnumerable =
      isEnumerable && src[AsyncEnumerableLike_isEnumerable];
    const isLiftedRunnable =
      (isEnumerable || isRunnable) && src[AsyncEnumerableLike_isRunnable];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<AsyncEnumeratorLike<any>, AsyncEnumeratorLike<any>>[],
      boolean,
      boolean
    >(
      LiftedAsyncEnumerable,
      src,
      allFunctions,
      isLiftedEnumerable,
      isLiftedRunnable,
    );
  };

export default AsyncEnumerable_lift;
