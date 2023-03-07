import { ContainerOperator } from "../../../containers.js";
import {
  Function1,
  newInstance,
  pipe,
  pipeUnsafe,
} from "../../../functions.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  AsyncEnumerableLike,
  StreamLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";

const LiftedAsyncEnumerable_src = Symbol("LiftedAsyncEnumerable_src");
const LiftedAsyncEnumerable_operators = Symbol(
  "LiftedAsyncEnumerable_operators",
);

class LiftedAsyncEnumerable<T> implements AsyncEnumerableLike<T> {
  readonly [LiftedAsyncEnumerable_src]: AsyncEnumerableLike<any>;
  readonly [LiftedAsyncEnumerable_operators]: readonly Function1<
    StreamLike<void, any>,
    StreamLike<void, any>
  >[];

  readonly [StreamableLike_isEnumerable]: boolean;
  readonly [StreamableLike_isInteractive] = true;
  readonly [StreamableLike_isRunnable]: boolean;

  constructor(
    src: AsyncEnumerableLike<any>,
    operators: readonly Function1<
      StreamLike<void, any>,
      StreamLike<void, any>
    >[],
    isEnumerable: boolean,
    isRunnable: boolean,
  ) {
    this[LiftedAsyncEnumerable_src] = src;
    this[LiftedAsyncEnumerable_operators] = operators;
    this[StreamableLike_isEnumerable] = isEnumerable;
    this[StreamableLike_isRunnable] = isRunnable;
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<void, T> {
    const src = pipe(
      this[LiftedAsyncEnumerable_src],
      Streamable_stream(scheduler, options),
    );
    return pipeUnsafe(
      src,
      ...this[LiftedAsyncEnumerable_operators],
    ) as StreamLike<void, T>;
  }
}

const AsyncEnumerable_lift =
  (isEnumerable: boolean, isRunnable: boolean) =>
  <TA, TB>(
    operator: Function1<StreamLike<void, TA>, StreamLike<void, TB>>,
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

    const liftedIsEnumerable =
      isEnumerable && enumerable[StreamableLike_isEnumerable];
    const liftIsRunnable = isRunnable && enumerable[StreamableLike_isRunnable];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<StreamLike<void, any>, StreamLike<void, any>>[],
      boolean,
      boolean
    >(
      LiftedAsyncEnumerable,
      src,
      allFunctions,
      liftedIsEnumerable,
      liftIsRunnable,
    );
  };

export default AsyncEnumerable_lift;
