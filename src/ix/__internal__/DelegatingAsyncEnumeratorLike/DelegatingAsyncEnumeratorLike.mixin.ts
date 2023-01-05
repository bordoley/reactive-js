import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { none, pipe, returns, unsafeCast } from "../../../functions";
import { AsyncEnumeratorLike, SourceLike_move } from "../../../ix";
import {
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
} from "../../../scheduling";
import { dispatch, getScheduler } from "../../../scheduling/DispatcherLike";
import { StreamLike } from "../../../streaming";

const DelegatingAsyncEnumerator__mixin: <T>() => Mixin1<
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
  type TProperties = {
    readonly delegate: AsyncEnumeratorLike<T>;
  };

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
      function DelegatingAsyncEnumerator(
        instance: Mutable<TProperties> & TReturn,
        delegate: AsyncEnumeratorLike<T>,
      ): TReturn {
        instance.delegate = delegate;

        return instance;
      },
      props<TProperties>({
        delegate: none,
      }),
      {
        [DispatcherLike_dispatch](this: TProperties, _: void) {
          pipe(this.delegate, dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return getScheduler(this.delegate);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move](this: StreamLike<void, T>) {
          pipe(this, dispatch(none));
        },
      },
    ),
    returns,
  );
})();

export default DelegatingAsyncEnumerator__mixin;
