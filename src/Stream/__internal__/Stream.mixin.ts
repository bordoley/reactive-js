import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_multicast from "../../DeferredObservable/__internal__/DeferredObservable.multicast.js";
import Dispatcher_delegatingMixin from "../../Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin3,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __DispatchedObservable_observer } from "../../__internal__/symbols.js";
import { IndexedQueueLike } from "../../__internal__/types.js";
import {
  Optional,
  isNone,
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  ContainerOperator,
  DeferredObservableLike,
  DispatcherLike,
  DispatcherLikeEventMap,
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventSourceLike_addEventListener,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  StreamLike,
  StreamLike_scheduler,
} from "../../types.js";

interface DispatchedObservableLike<T>
  extends DeferredObservableLike<T>,
    Omit<DispatcherLike<T>, keyof DisposableLike> {}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [__DispatchedObservable_observer]: Optional<ObserverLike<T>>;
    };

    return createInstanceFactory(
      mix(
        function DispatchedObservable(
          instance: DispatchedObservableLike<T> & Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          return instance;
        },
        props<TProperties>({
          [__DispatchedObservable_observer]: none,
        }),
        {
          [ObservableLike_isDeferred]: true as const,
          [ObservableLike_isEnumerable]: false as const,
          [ObservableLike_isRunnable]: false as const,

          get [QueueableLike_backpressureStrategy]() {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);

            const observer = this[
              __DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[QueueableLike_backpressureStrategy];
          },

          get [BufferLike_capacity](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              __DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[BufferLike_capacity];
          },

          [QueueableLike_enqueue](
            this: TProperties & DispatchedObservableLike<T>,
            next: T,
          ): boolean {
            const observer = this[
              __DispatchedObservable_observer
            ] as ObserverLike<T>;

            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
              raiseWithDebugMessage(
                "DispatchedObservable has not been subscribed to yet",
              );
            }

            const inContinuation = observer[SchedulerLike_inContinuation];

            // Observer only implement Queueable publicly so cast to the implementation interface
            // to enable bypassing the queue
            const observerQueueIsEmpty =
              (observer as unknown as IndexedQueueLike<T>)[
                CollectionLike_count
              ] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];

            if (inContinuation && observerQueueIsEmpty && !isDisposed) {
              observer[ObserverLike_notify](next);
              return true;
            } else if (!isDisposed) {
              return observer[QueueableLike_enqueue](next);
            } else {
              return true;
            }
          },

          [DispatcherLike_complete](
            this: TProperties & DispatchedObservableLike<T>,
          ) {
            const observer = this[
              __DispatchedObservable_observer
            ] as ObserverLike<T>;

            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
              raiseWithDebugMessage(
                "DispatchedObservable has not been subscribed to yet",
              );
            }

            observer[DispatcherLike_complete]();
          },

          [ObservableLike_observe](
            this: TProperties & DispatchedObservableLike<T> & DisposableLike,
            observer: ObserverLike<T>,
          ) {
            if (isSome(this[__DispatchedObservable_observer])) {
              raiseWithDebugMessage(
                "DispatchedObservable already subscribed to",
              );
            }

            this[__DispatchedObservable_observer] = observer;
          },

          [EventSourceLike_addEventListener](
            this: TProperties,
            listener: EventListenerLike<
              DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
            >,
          ): void {
            const observer = this[
              __DispatchedObservable_observer
            ] as ObserverLike<T>;

            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
              raiseWithDebugMessage(
                "DispatchedObservable has not been subscribed to yet",
              );
            }

            observer[EventSourceLike_addEventListener](listener);
          },
        },
      ),
    );
  })();

type TProperties = {
  [StreamLike_scheduler]: SchedulerLike;
};

const Stream_mixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T> & DisposableLike,
  ContainerOperator<DeferredObservable.Type, TReq, T>,
  SchedulerLike,
  Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }>
> = /*@__PURE__*/ (<TReq, T>() =>
  returns(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<T>(),
        Disposable_delegatingMixin,
      ),
      function StreamMixin(
        instance: TProperties,
        op: ContainerOperator<DeferredObservable.Type, TReq, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          replay?: number;
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): StreamLike<TReq, T> & DisposableLike {
        instance[StreamLike_scheduler] = scheduler;

        const dispatchedObservable = DispatchedObservable_create<TReq>();

        const delegate = pipe(
          dispatchedObservable,
          op,
          Observable_multicast<T>(scheduler, multicastOptions),
        );

        init(Disposable_delegatingMixin, instance, delegate);
        init(
          Dispatcher_delegatingMixin<TReq>(),
          instance,
          dispatchedObservable,
        );
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);

        return instance;
      },
      props<TProperties>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  ))();

export default Stream_mixin;
