import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { AsyncEnumeratorDelegatingMixin_src } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike } from "../../../streaming.js";
import {
  CollectionLike_count,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  IndexedLike_get,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const AsyncEnumerator_create: <TA, TB>() => (
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    readonly [AsyncEnumeratorDelegatingMixin_src]: StreamLike<void, TA>;
  };

  return pipe(
    mix(
      include(Disposable_delegatingMixin<MulticastObservableLike<TB>>()),
      function AsyncEnumeratorDelegatingMixin(
        instance: Omit<
          StreamLike<void, TB>,
          | typeof DisposableLike_add
          | typeof DisposableLike_dispose
          | typeof DisposableLike_error
          | typeof DisposableLike_isDisposed
        > &
          Mutable<TProperties>,
        delegate: StreamLike<void, TA>,
        operator: ContainerOperator<ObservableLike, TA, TB>,
      ): StreamLike<void, TB> {
        const observable = pipe(
          delegate,
          operator,
          Observable_multicast(delegate[DispatcherLike_scheduler], {
            capacity: delegate[QueueableLike_capacity],
          }),
          Disposable_add(delegate),
        );

        init(
          Disposable_delegatingMixin<MulticastObservableLike<TB>>(),
          instance,
          observable,
        );

        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;

        return instance;
      },
      props<TProperties>({
        [AsyncEnumeratorDelegatingMixin_src]: none,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [CollectionLike_count]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<TB>>>(this);
          return this[DelegatingLike_delegate][CollectionLike_count];
        },

        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            DispatcherLike_scheduler
          ];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_capacity
          ];
        },

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<TB>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<TB>>>(this);
          return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },

        [DispatcherLike_complete](this: TProperties) {
          this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },

        [IndexedLike_get](
          this: DelegatingLike<MulticastObservableLike<TB>>,
          index: number,
        ): TB {
          return this[DelegatingLike_delegate][IndexedLike_get](index);
        },

        [QueueableLike_enqueue](this: TProperties, next: void): boolean {
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_enqueue
          ](next);
        },

        [ObservableLike_observe](
          this: DelegatingLike<MulticastObservableLike<TB>>,
          observer: ObserverLike<TB>,
        ): void {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
    createInstanceFactory,
    returns,
  ) as <TA, TB>() => (
    stream: StreamLike<void, TA>,
    op: ContainerOperator<ObservableLike, TA, TB>,
  ) => StreamLike<void, TB>;
})();

export default AsyncEnumerator_create;
