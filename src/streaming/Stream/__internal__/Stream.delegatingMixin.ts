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
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  Pick<
    StreamLike<TReq, T>,
    | typeof QueueLike_count
    | typeof QueueLike_push
    | typeof DispatcherLike_scheduler
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() => {
  type TReturn = Pick<
    StreamLike<TReq, T>,
    | typeof QueueLike_count
    | typeof QueueLike_push
    | typeof DispatcherLike_scheduler
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
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
        get [QueueLike_count](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][QueueLike_count];
        },

        [QueueLike_push](
          this: DelegatingLike<StreamLike<TReq, T>>,
          next: TReq,
        ) {
          pipe(this[DelegatingLike_delegate], Queue_push(next));
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      },
    ),
    returns,
  );
})();

export default Stream_delegatingMixin;
