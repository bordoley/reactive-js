import { __DEV__ } from "../../../__internal__/constants.js";
import {
  Mixin5,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DispatchedObservable_observer } from "../../../__internal__/symbols.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
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
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
} from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DisposableLike,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";

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
            | typeof BufferLike_capacity
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

          get [BufferLike_capacity](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[BufferLike_capacity];
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
              (observer as unknown as QueueLike<T>)[CollectionLike_count] === 0;
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
> = /*@__PURE__*/ (<TReq, T>() =>
  returns(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<T>(),
      ),
      function StreamMixin(
        instance: unknown,
        op: ContainerOperator<ObservableLike, TReq, T>,
        scheduler: SchedulerLike,
        replay: number,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): StreamLike<TReq, T> {
        const dispatchedObservable = DispatchedObservable_create<TReq>();

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
          Dispatcher_delegatingMixin<TReq>(),
          instance,
          dispatchedObservable,
        );
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);

        return instance;
      },
      props({}),
      {},
    ),
  ))();

export default Stream_mixin;
