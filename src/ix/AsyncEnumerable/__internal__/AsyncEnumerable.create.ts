import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { composeUnsafe, getLength, none, pipe } from "../../../functions";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { StreamableLike_stream } from "../../../streaming";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream";
import AsyncEnumerator_create from "../../AsyncEnumerator/__internal__/AsyncEnumerator.create";

interface CreateAsyncEnumerable {
  <A>(op1: ContainerOperator<ObservableLike, void, A>): AsyncEnumerableLike<A>;
  <A, B>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): AsyncEnumerableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): AsyncEnumerableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): AsyncEnumerableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): AsyncEnumerableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): AsyncEnumerableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): AsyncEnumerableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): AsyncEnumerableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
  ): AsyncEnumerableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
  ): AsyncEnumerableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
  ): AsyncEnumerableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
    op12: ContainerOperator<ObservableLike, K, L>,
  ): AsyncEnumerableLike<L>;
}
const AsyncEnumerable_create: CreateAsyncEnumerable = /*@__PURE__*/ (<T>() => {
  const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");

  type TProperties = {
    readonly [AsyncEnumerable_op]: ContainerOperator<
      ObservableLike,
      unknown,
      unknown
    >;
  };

  const factory = createInstanceFactory(
    mix(
      function AsyncEnumerable(
        instance: Pick<
          AsyncEnumerableLike<T>,
          | typeof StreamableLike_stream
          | typeof InteractiveContainerLike_interact
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, unknown, unknown>,
      ): AsyncEnumerableLike<T> {
        instance[AsyncEnumerable_op] = op;

        return instance;
      },
      props<TProperties>({
        [AsyncEnumerable_op]: none,
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
  );

  return (
    ...ops: readonly ContainerOperator<ObservableLike, unknown, unknown>[]
  ): AsyncEnumerableLike => {
    const op =
      getLength(ops) > 1
        ? (composeUnsafe(...ops) as ContainerOperator<
            ObservableLike<unknown>,
            unknown,
            unknown
          >)
        : ops[0];
    return factory(op);
  };
})();

export default AsyncEnumerable_create;
