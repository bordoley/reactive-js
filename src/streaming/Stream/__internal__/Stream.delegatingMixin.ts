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
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  CollectionLike_count,
  IndexedLike_get,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T>,
  StreamLike<TReq, T>,
  Pick<
    StreamLike<TReq, T>,
    | typeof DispatcherLike_scheduler
    | typeof MulticastObservableLike_observerCount
    | typeof QueueableLike_backpressureStrategy
    | typeof QueueableLike_enqueue
    | typeof QueueableLike_capacity
    | typeof DispatcherLike_complete
    | typeof ObservableLike_observe
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >
> = /*@__PURE__*/ (<TReq, T>() => {
  return returns(
    mix(
      include(Disposable_delegatingMixin<StreamLike<TReq, T>>()),
      function DelegatingStreamMixin(
        instance: Pick<
          StreamLike<TReq, T>,
          | typeof CollectionLike_count
          | typeof DispatcherLike_scheduler
          | typeof IndexedLike_get
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_enqueue
          | typeof QueueableLike_capacity
          | typeof DispatcherLike_complete
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        >,
        delegate: StreamLike<TReq, T>,
      ): StreamLike<TReq, T> {
        init(
          Disposable_delegatingMixin<StreamLike<TReq, T>>(),
          instance,
          delegate,
        );

        return instance;
      },
      props<unknown>({}),
      {
        get [CollectionLike_count]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][CollectionLike_count];
        },

        get [DispatcherLike_scheduler](): SchedulerLike {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },

        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][MulticastObservableLike_replay];
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

        get [ObservableLike_isEnumerable]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<DelegatingLike<StreamLike<TReq, T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },

        [IndexedLike_get](
          this: DelegatingLike<StreamLike<TReq, T>>,
          index: number,
        ): T {
          return this[DelegatingLike_delegate][IndexedLike_get](index);
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

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<TReq, T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default Stream_delegatingMixin;
