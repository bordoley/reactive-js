import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { none, pipe } from "../../../functions";
import { AsyncEnumeratorLike, SourceLike, SourceLike_move } from "../../../ix";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import DispatcherLike__dispatch from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch";
import { StreamLike } from "../../../streaming";
import StreamLike__mixin from "../../../streaming/__internal__/StreamLike/StreamLike.mixin";

const AsyncEnumerator__create = /*@__PURE__*/ (() => {
  const createAsyncEnumeratorInternal: <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    scheduler: SchedulerLike,
    replay: number,
  ) => AsyncEnumeratorLike<T> = (<T>() => {
    const typedStreamMixin = StreamLike__mixin<void, T>();
    return createInstanceFactory(
      mix(
        include(typedStreamMixin),
        function AsyncEnumerator(
          instance: Pick<SourceLike, typeof SourceLike_move>,
          op: ContainerOperator<ObservableLike, void, T>,
          scheduler: SchedulerLike,
          replay: number,
        ): AsyncEnumeratorLike<T> {
          init(typedStreamMixin, instance, op, scheduler, replay);

          return instance;
        },
        {},
        {
          [SourceLike_move](this: StreamLike<void, T>) {
            pipe(this, DispatcherLike__dispatch(none));
          },
        },
      ),
    );
  })();

  return <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> => {
    const { replay = 0 } = options ?? {};
    return createAsyncEnumeratorInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
    );
  };
})();

export default AsyncEnumerator__create;
