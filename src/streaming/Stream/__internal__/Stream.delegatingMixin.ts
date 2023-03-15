import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  Pick<
    StreamLike<TReq, T>,
    | typeof QueueableLike_push
    | typeof QueueableLike_maxBufferSize
    | typeof DispatcherLike_complete
    | typeof DispatcherLike_scheduler
    | typeof MulticastObservableLike_observerCount
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
    | keyof DisposableLike
  >,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() => {
  type TReturn = Pick<
    StreamLike<TReq, T>,
    | typeof QueueableLike_push
    | typeof QueueableLike_maxBufferSize
    | typeof DispatcherLike_complete
    | typeof DispatcherLike_scheduler
    | typeof MulticastObservableLike_observerCount
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
    | keyof DisposableLike
  >;

  return pipe(
    mix(
      include(Disposable_delegatingMixin()),
      function DelegatingStreamMixin(
        instance: Omit<TReturn, keyof DisposableLike>,
        delegate: StreamLike<TReq, T>,
      ): TReturn {
        init(Disposable_delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [DispatcherLike_scheduler]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        [DispatcherLike_complete](this: DelegatingLike<StreamLike<TReq, T>>) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },

        [QueueableLike_push](
          this: DelegatingLike<StreamLike<TReq, T>>,
          next: TReq,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_push](next);
        },
      },
    ),
    returns,
  );
})();

export default Stream_delegatingMixin;
