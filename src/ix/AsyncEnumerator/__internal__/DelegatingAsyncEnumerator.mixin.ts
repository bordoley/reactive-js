import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { AsyncEnumeratorLike, SourceLike_move } from "../../../ix.js";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import { StreamLike } from "../../../streaming.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const DelegatingAsyncEnumerator_mixin: <T>() => Mixin1<
  Pick<
    AsyncEnumeratorLike<T>,
    | typeof QueueLike_count
    | typeof QueueLike_push
    | typeof DispatcherLike_scheduler
    | typeof SourceLike_move
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >,
  AsyncEnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TReturn = Pick<
    AsyncEnumeratorLike<T>,
    | typeof QueueLike_count
    | typeof QueueLike_push
    | typeof DispatcherLike_scheduler
    | typeof SourceLike_move
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >;

  return pipe(
    mix(
      include(delegatingMixin()),
      function DelegatingAsyncEnumeratorMixin(
        instance: TReturn,
        delegate: AsyncEnumeratorLike<T>,
      ): TReturn {
        init(delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        get [QueueLike_count](): number {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][QueueLike_count];
        },

        [QueueLike_push](
          this: DelegatingLike<AsyncEnumeratorLike<T>>,
          _: void,
        ) {
          pipe(this[DelegatingLike_delegate], Queue_push(none));
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<T>>>(this);
          return Dispatcher_getScheduler(this[DelegatingLike_delegate]);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move](this: StreamLike<void, T>) {
          pipe(this, Queue_push(none));
        },
      },
    ),
    returns,
  );
})();

export default DelegatingAsyncEnumerator_mixin;
