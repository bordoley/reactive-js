import { __DEV__ } from "../../../__internal__/constants.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin3,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
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
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";

export interface DispatchedObservableLike<T>
  extends ObservableLike<T>,
    DispatcherLike<T>,
    DisposableLike {}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
    const DispatchedObservable_observer = Symbol(
      "DispatchedObservable_observer",
    );

    type TProperties = {
      [DispatchedObservable_observer]: Optional<ObserverLike<T>>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function DispatchedObservable(
          instance: Pick<
            DispatchedObservableLike<T>,
            | typeof ObservableLike_observe
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof QueueableLike_push
            | typeof QueueableLike_maxBufferSize
            | typeof DispatcherLike_complete
            | typeof DispatcherLike_scheduler
          > &
            Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          init(Disposable_mixin, instance);
          return instance;
        },
        props<TProperties>({
          [DispatchedObservable_observer]: none,
        }),
        {
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          get [QueueableLike_maxBufferSize](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            return observer[QueueableLike_maxBufferSize];
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;
            return observer[DispatcherLike_scheduler];
          },

          [QueueableLike_push](
            this: TProperties & DispatchedObservableLike<T>,
            next: T,
          ): boolean {
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;

            // Practically the observer can never be none,
            // unless the stream operator uses lazy subscriptions
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
              return observer[QueueableLike_push](next);
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
            // unless the stream operator uses lazy subscriptions
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

            pipe(
              this,
              Disposable_onDisposed(e => {
                if (isSome(e)) {
                  observer[DisposableLike_dispose](e);
                } else {
                  observer[DispatcherLike_complete]();
                }
              }),
            );
          },
        },
      ),
    );
  })();

const Stream_mixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T>,
  ContainerOperator<ObservableLike, TReq, T>,
  SchedulerLike,
  number
> = /*@__PURE__*/ (<TReq, T>() => {
  const StreamMixin_observable = Symbol("StreamMixin_observable");

  type TProperties = {
    readonly [StreamMixin_observable]: MulticastObservableLike<T>;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin<DispatchedObservableLike<T>>()),
      function StreamMixin(
        instance: Pick<
          StreamLike<TReq, T>,
          | typeof MulticastObservableLike_observerCount
          | typeof QueueableLike_push
          | typeof QueueableLike_maxBufferSize
          | typeof DispatcherLike_complete
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, TReq, T>,
        scheduler: SchedulerLike,
        replay: number,
      ): StreamLike<TReq, T> {
        const dispatchedObservable = DispatchedObservable_create<TReq>();

        init(
          Disposable_delegatingMixin<DispatchedObservableLike<TReq>>(),
          instance,
          dispatchedObservable,
        );

        instance[DispatcherLike_scheduler] = scheduler;

        instance[StreamMixin_observable] = pipe(
          dispatchedObservable,
          op,
          Observable_multicast<T>(scheduler, { replay }),
          Disposable_add(instance),
        );

        return instance;
      },
      props<TProperties>({
        [StreamMixin_observable]: none,
        [DispatcherLike_scheduler]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<TProperties>(this);
          return this[StreamMixin_observable][
            MulticastObservableLike_observerCount
          ];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<DelegatingLike<DispatchedObservableLike<TReq>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },

        [ObservableLike_isEnumerable]: false,

        [ObservableLike_isRunnable]: false,

        [QueueableLike_push](
          this: DelegatingLike<DispatchedObservableLike<TReq>>,
          req: TReq,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_push](req);
        },

        [DispatcherLike_complete](this: DelegatingLike<StreamLike<TReq, T>>) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[StreamMixin_observable][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default Stream_mixin;
