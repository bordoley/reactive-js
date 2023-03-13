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
import { pipe, returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import {
  QueueableLike_count,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  Pick<
    StreamLike<TReq, T>,
    | typeof QueueableLike_count
    | typeof QueueableLike_push
    | typeof QueueableLike_maxBufferSize
    | typeof DispatcherLike_scheduler
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
    | typeof DispatcherLike_complete
  >,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() => {
  type TReturn = Pick<
    StreamLike<TReq, T>,
    | typeof QueueableLike_count
    | typeof QueueableLike_maxBufferSize
    | typeof QueueableLike_push
    | typeof DispatcherLike_scheduler
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
    | typeof DispatcherLike_complete
  >;

  return pipe(
    mix(
      include(delegatingMixin()),
      function DelegatingStreamMixin(
        instance: TReturn,
        delegate: StreamLike<TReq, T>,
      ): TReturn {
        init(delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        get [QueueableLike_count](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_count];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },

        [QueueableLike_push](
          this: DelegatingLike<StreamLike<TReq, T>>,
          next: TReq,
        ) {
          this[DelegatingLike_delegate][QueueableLike_push](next);
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,

        [DispatcherLike_complete](this: DelegatingLike<StreamLike<TReq, T>>) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
      },
    ),
    returns,
  );
})();

export default Stream_delegatingMixin;
