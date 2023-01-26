import { ContainerOperator } from "../../../containers";
import { Function1, newInstance, pipe, pipeUnsafe } from "../../../functions";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { SchedulerLike } from "../../../scheduling";
import { StreamableLike_stream } from "../../../streaming";
import Streamable_stream from "../../../streaming/__internal__/Streamable/Streamable.stream";

class LiftedAsyncEnumerable<T> implements AsyncEnumerableLike<T> {
  constructor(
    readonly src: AsyncEnumerableLike<any>,
    readonly operators: readonly Function1<
      AsyncEnumeratorLike<any>,
      AsyncEnumeratorLike<any>
    >[],
  ) {}

  [InteractiveContainerLike_interact](scheduler: SchedulerLike) {
    return pipe(this, Streamable_stream(scheduler));
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> {
    const src = pipe(this.src, Streamable_stream(scheduler, options));
    return pipeUnsafe(src, ...this.operators) as AsyncEnumeratorLike<T>;
  }
}

const AsyncEnumerable_lift =
  <TA, TB>(
    operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>,
  ): ContainerOperator<AsyncEnumerableLike, TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<AsyncEnumeratorLike<any>, AsyncEnumeratorLike<any>>[]
    >(LiftedAsyncEnumerable, src, allFunctions);
  };

export default AsyncEnumerable_lift;
