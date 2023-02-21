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
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
} from "../../../scheduling.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import { StreamLike } from "../../../streaming.js";

const DelegatingAsyncEnumerator_mixin: <T>() => Mixin1<
  Pick<
    AsyncEnumeratorLike<T>,
    | typeof DispatcherLike_dispatch
    | typeof DispatcherLike_scheduler
    | typeof SourceLike_move
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >,
  AsyncEnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TReturn = Pick<
    AsyncEnumeratorLike<T>,
    | typeof DispatcherLike_dispatch
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
        [DispatcherLike_dispatch](
          this: DelegatingLike<AsyncEnumeratorLike<T>>,
          _: void,
        ) {
          pipe(this[DelegatingLike_delegate], Dispatcher_dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<T>>>(this);
          return Dispatcher_getScheduler(this[DelegatingLike_delegate]);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move](this: StreamLike<void, T>) {
          pipe(this, Dispatcher_dispatch(none));
        },
      },
    ),
    returns,
  );
})();

export default DelegatingAsyncEnumerator_mixin;
