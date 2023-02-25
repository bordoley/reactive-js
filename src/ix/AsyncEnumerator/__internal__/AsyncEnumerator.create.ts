import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import {
  AsyncEnumeratorLike,
  SourceLike,
  SourceLike_move,
} from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const AsyncEnumerator_create = /*@__PURE__*/ (() => {
  const createAsyncEnumeratorInternal: <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    scheduler: SchedulerLike,
    replay: number,
  ) => AsyncEnumeratorLike<T> = (<T>() => {
    const typedStreamMixin = Stream_mixin<void, T>();
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
            pipe(this, Queue_push(none));
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

export default AsyncEnumerator_create;
