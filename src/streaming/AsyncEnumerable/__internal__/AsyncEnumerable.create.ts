import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { none } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  AsyncEnumerableLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";

const AsyncEnumerable_create: <T>(
  op1: ContainerOperator<ObservableLike, void, T>,
) => AsyncEnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");

  type TProperties = {
    readonly [AsyncEnumerable_op]: ContainerOperator<ObservableLike, void, T>;
  };

  return createInstanceFactory(
    mix(
      function AsyncEnumerable(
        instance: Pick<AsyncEnumerableLike<T>, typeof StreamableLike_stream> &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, void, T>,
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
          return Stream_create(this[AsyncEnumerable_op], scheduler, options);
        },
      },
    ),
  );
})();

export default AsyncEnumerable_create;
