import {
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
  ObservableLike,
} from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike } from "../../../streaming.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";

const AsyncEnumerator_create: <TA, TB>() => (
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    readonly [AsyncEnumeratorDelegatingMixin_src]: StreamLike<void, TA>;
  };

  return pipe(
    mix(
      include(MulticastObservable_delegatingMixin<TB>()),
      function AsyncEnumeratorDelegatingMixin(
        instance: Pick<
          StreamLike<void, TB>,
          | typeof DispatcherLike_scheduler
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_capacity
          | typeof DispatcherLike_complete
          | typeof QueueableLike_enqueue
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

        init(MulticastObservable_delegatingMixin<TB>(), instance, observable);

        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;

        return instance;
      },
      props<TProperties>({
        [AsyncEnumeratorDelegatingMixin_src]: none,
      }),
      {
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

        [DispatcherLike_complete](this: TProperties) {
          this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },

        [QueueableLike_enqueue](this: TProperties, next: void): boolean {
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_enqueue
          ](next);
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
