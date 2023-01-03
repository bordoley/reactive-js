import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, pipe } from "../../../functions";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { SchedulerLike } from "../../../scheduling";
import { StreamableLike_stream } from "../../../streaming";
import { stream } from "../../../streaming/StreamableLike";

const AsyncEnumerable__create: <T>(
  f: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => AsyncEnumeratorLike<T>,
) => AsyncEnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [StreamableLike_stream]: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => AsyncEnumeratorLike<T>;
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
        stream: (
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) => AsyncEnumeratorLike<T>,
      ): AsyncEnumerableLike<T> {
        instance[StreamableLike_stream] = stream;

        return instance;
      },
      props<TProperties>({
        [StreamableLike_stream]: none,
      }),
      {
        [StreamableLike_stream](
          this: TProperties,
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) {
          return this[StreamableLike_stream](scheduler, options);
        },
        [InteractiveContainerLike_interact](
          ctx: SchedulerLike,
        ): AsyncEnumeratorLike<T> {
          return pipe(this, stream(ctx));
        },
      },
    ),
  );
})();

export default AsyncEnumerable__create;
