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
import { none, pipe, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
  QueueableLike_maxBufferSize,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const AsyncEnumerator_create: <TA, TB>(
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    readonly [AsyncEnumeratorDelegatingMixin_src]: StreamLike<void, TA>;
  };

  return createInstanceFactory(
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
            maxBufferSize: delegate[QueueableLike_maxBufferSize],
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

        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            DispatcherLike_scheduler
          ];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_maxBufferSize
          ];
        },

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<TB>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        [DispatcherLike_complete](this: TProperties) {
          this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
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
  );
})();

export default AsyncEnumerator_create;
