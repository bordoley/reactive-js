import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
} from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T>,
  StreamLike<TReq, T>,
  Pick<
    StreamLike<TReq, T>,
    | typeof DispatcherLike_scheduler
    | typeof QueueableLike_backpressureStrategy
    | typeof QueueableLike_enqueue
    | typeof QueueableLike_capacity
    | typeof DispatcherLike_complete
  >
> = /*@__PURE__*/ (<TReq, T>() => {
  return returns(
    mix(
      include(MulticastObservable_delegatingMixin<StreamLike<TReq, T>>()),
      function DelegatingStreamMixin(
        instance: Pick<
          StreamLike<TReq, T>,
          | typeof DispatcherLike_scheduler
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_enqueue
          | typeof QueueableLike_capacity
          | typeof DispatcherLike_complete
        >,
        delegate: StreamLike<TReq, T>,
      ): StreamLike<TReq, T> {
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);

        return instance;
      },
      props<unknown>({}),
      {
        get [DispatcherLike_scheduler](): SchedulerLike {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_capacity];
        },

        [QueueableLike_enqueue](
          this: DelegatingLike<StreamLike<TReq, T>>,
          req: TReq,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_enqueue](req);
        },

        [DispatcherLike_complete](this: DelegatingLike<StreamLike<TReq, T>>) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
      },
    ),
  );
})();

export default Stream_delegatingMixin;
