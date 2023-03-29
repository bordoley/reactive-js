import { __DEV__ } from "../../../__internal__/constants.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin5,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DispatchedObservable_observer,
  StreamMixin_dispatcher,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_count,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Optional,
  isNone,
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
} from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

interface DispatchedObservableLike<T>
  extends ObservableLike<T>,
    DispatcherLike<T> {}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [DispatchedObservable_observer]: Optional<ObserverLike<T>>;
    };

    return createInstanceFactory(
      mix(
        function DispatchedObservable(
          instance: Pick<
            DispatchedObservableLike<T>,
            | typeof ObservableLike_observe
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof QueueableLike_backpressureStrategy
            | typeof QueueableLike_enqueue
            | typeof QueueableLike_capacity
            | typeof DispatcherLike_complete
            | typeof DispatcherLike_scheduler
          > &
            Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          return instance;
        },
        props<TProperties>({
          [DispatchedObservable_observer]: none,
        }),
        {
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          get [QueueableLike_backpressureStrategy]() {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);

            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[QueueableLike_backpressureStrategy];
          },

          get [QueueableLike_capacity](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[QueueableLike_capacity];
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;
            return observer[DispatcherLike_scheduler];
          },

          [QueueableLike_enqueue](
            this: TProperties & DispatchedObservableLike<T>,
            next: T,
          ): boolean {
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            // Practically the observer can never be none,
            // unless the stream operator uses fromFactory subscriptions
            // eg. concat.
            if (__DEV__ && isNone(observer)) {
              raiseWithDebugMessage(
                "DispatchedObservable has not been subscribed to yet",
              );
            }

            const scheduler = observer[DispatcherLike_scheduler];
            const inContinuation = scheduler[SchedulerLike_inContinuation];

            // Observer only implement Queueable publicly so cast to the implementation interface
            // to enable bypassing the queue
            const observerQueueIsEmpty =
              (observer as unknown as QueueLike<T>)[QueueLike_count] === 0;
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
              DispatchedObservable_observer
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
            if (isSome(this[DispatchedObservable_observer])) {
              raiseWithDebugMessage(
                "DispatchedObservable already subscribed to",
              );
            }

            this[DispatchedObservable_observer] = observer;
          },
        },
      ),
    );
  })();

const Stream_mixin: <TReq, T>() => Mixin5<
  StreamLike<TReq, T>,
  ContainerOperator<ObservableLike, TReq, T>,
  SchedulerLike,
  number,
  number,
  QueueableLike[typeof QueueableLike_backpressureStrategy]
> = /*@__PURE__*/ (<TReq, T>() => {
  type TProperties = {
    readonly [StreamMixin_dispatcher]: DispatcherLike<TReq>;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin<MulticastObservableLike<T>>()),
      function StreamMixin(
        instance: Pick<
          StreamLike<TReq, T>,
          | typeof MulticastObservableLike_observerCount
          | typeof QueueableLike_backpressureStrategy
          | typeof QueueableLike_enqueue
          | typeof QueueableLike_capacity
          | typeof DispatcherLike_complete
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, TReq, T>,
        scheduler: SchedulerLike,
        replay: number,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): StreamLike<TReq, T> {
        instance[DispatcherLike_scheduler] = scheduler;

        const dispatchedObservable = DispatchedObservable_create<TReq>();
        instance[StreamMixin_dispatcher] = dispatchedObservable;

        const delegate = pipe(
          dispatchedObservable,
          op,
          Observable_multicast<T>(scheduler, {
            replay,
            capacity,
            backpressureStrategy,
          }),
        );

        init(
          Disposable_delegatingMixin<MulticastObservableLike<T>>(),
          instance,
          delegate,
        );

        return instance;
      },
      props<TProperties>({
        [StreamMixin_dispatcher]: none,
        [DispatcherLike_scheduler]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<TProperties>(this);
          return this[StreamMixin_dispatcher][
            QueueableLike_backpressureStrategy
          ];
        },

        get [QueueableLike_capacity](): number {
          unsafeCast<TProperties>(this);
          return this[StreamMixin_dispatcher][QueueableLike_capacity];
        },

        [ObservableLike_isEnumerable]: false as const,

        [ObservableLike_isRunnable]: false as const,

        [QueueableLike_enqueue](this: TProperties, req: TReq): boolean {
          return this[StreamMixin_dispatcher][QueueableLike_enqueue](req);
        },

        [DispatcherLike_complete](this: TProperties) {
          this[StreamMixin_dispatcher][DispatcherLike_complete]();
        },

        [ObservableLike_observe](
          this: DelegatingLike<MulticastObservableLike<T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default Stream_mixin;
