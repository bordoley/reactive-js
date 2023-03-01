import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  AsyncEnumerableLike_isEnumerable,
  AsyncEnumerableLike_isRunnable,
  AsyncEnumeratorLike,
  EnumerableAsyncEnumerableLike,
  InteractiveContainerLike_interact,
  RunnableAsyncEnumerableLike,
} from "../../../ix.js";
import {
  EnumerableObservableLike,
  ObservableLike,
  RunnableLike,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamableLike_stream } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import AsyncEnumerator_create from "../../AsyncEnumerator/__internal__/AsyncEnumerator.create.js";

interface AsyncEnumerable_CreateBase {
  <A>(
    op1: ContainerOperator<ObservableLike, void, A>,
    isEnumerable: false,
    isRunnable: false,
  ): AsyncEnumerableLike<A>;
  <A>(
    op1: ContainerOperator<RunnableLike, void, A>,
    isEnumerable: false,
    isRunnable: true,
  ): RunnableAsyncEnumerableLike<A>;
  <A>(
    op1: ContainerOperator<EnumerableObservableLike, void, A>,
    isEnumerable: true,
    isRunnable: true,
  ): EnumerableAsyncEnumerableLike<A>;
}

const AsyncEnumerable_createBase: AsyncEnumerable_CreateBase = /*@__PURE__*/ (<
  T,
>() => {
  const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");

  type TProperties = {
    readonly [AsyncEnumerable_op]: ContainerOperator<
      ObservableLike,
      unknown,
      unknown
    >;
    readonly [AsyncEnumerableLike_isEnumerable]: boolean;
    readonly [AsyncEnumerableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mix(
      function AsyncEnumerable(
        instance: Pick<
          AsyncEnumerableLike<T>,
          | typeof StreamableLike_stream
          | typeof InteractiveContainerLike_interact
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, unknown, unknown>,
        isEnumerable: boolean,
        isRunnable: boolean,
      ): AsyncEnumerableLike<T> {
        instance[AsyncEnumerable_op] = op;
        instance[AsyncEnumerableLike_isEnumerable] = isEnumerable;
        instance[AsyncEnumerableLike_isRunnable] = isRunnable;

        return instance;
      },
      props<TProperties>({
        [AsyncEnumerable_op]: none,
        [AsyncEnumerableLike_isEnumerable]: false,
        [AsyncEnumerableLike_isRunnable]: false,
      }),
      {
        [StreamableLike_stream](
          this: TProperties,
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) {
          return AsyncEnumerator_create(
            this[AsyncEnumerable_op],
            scheduler,
            options,
          );
        },
        [InteractiveContainerLike_interact](
          ctx: SchedulerLike,
        ): AsyncEnumeratorLike<T> {
          return pipe(this, Streamable_stream(ctx));
        },
      },
    ),
  ) as AsyncEnumerable_CreateBase;
})();

export default AsyncEnumerable_createBase;
