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
import { ContainerOperator } from "../../../containers.js";
import {
  Optional,
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  SchedulerLike,
  SchedulerLike_inContinuation,
} from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike_isDisposed,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

export interface DispatchedObservableLike<T>
  extends ObservableLike<T>,
    DispatcherLike<T> {}

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
            | typeof QueueLike_count
            | typeof QueueLike_push
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

          get [QueueLike_count](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;
            const dispatcher = observer[ObserverLike_dispatcher];
            return dispatcher[QueueLike_count];
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;
            return observer[ObserverLike_scheduler];
          },

          [QueueLike_push](
            this: TProperties & DispatchedObservableLike<T>,
            next: T,
          ) {
            unsafeCast<DispatchedObservableLike<T>>(this);

            // Practically the observer can never be none.
            const observer = this[
              DispatchedObservable_observer
            ] as ObserverLike<T>;
            const dispatcher = observer[ObserverLike_dispatcher];
            const scheduler = observer[ObserverLike_scheduler];
            const inContinuation = scheduler[SchedulerLike_inContinuation];
            const dispatcherQueueIsEmpty = dispatcher[QueueLike_count] === 0;
            const isDisposed = observer[DisposableLike_isDisposed];

            if (inContinuation && dispatcherQueueIsEmpty && !isDisposed) {
              observer[ObserverLike_notify](next);
            } else if (!isDisposed) {
              dispatcher[QueueLike_push](next);
            }
          },

          [ObservableLike_observe](
            this: TProperties & DispatchedObservableLike<T>,
            observer: ObserverLike<T>,
          ) {
            if (isSome(this[DispatchedObservable_observer])) {
              raiseWithDebugMessage(
                "DispatchedObservable already subscribed to",
              );
            }

            this[DispatchedObservable_observer] = observer;

            pipe(
              observer,
              Observer_getDispatcher,
              Disposable_addToIgnoringChildErrors(this),
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
          | typeof MulticastObservableLike_replay
          | typeof QueueLike_count
          | typeof QueueLike_push
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

        get [MulticastObservableLike_replay](): number {
          unsafeCast<TProperties>(this);
          return this[StreamMixin_observable][MulticastObservableLike_replay];
        },

        get [QueueLike_count](): number {
          unsafeCast<DelegatingLike<DispatchedObservableLike<TReq>>>(this);
          return this[DelegatingLike_delegate][QueueLike_count];
        },

        [ObservableLike_isEnumerable]: false,

        [ObservableLike_isRunnable]: false,

        [QueueLike_push](
          this: DelegatingLike<DispatchedObservableLike<TReq>>,
          req: TReq,
        ) {
          this[DelegatingLike_delegate][QueueLike_push](req);
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          pipe(this[StreamMixin_observable], Observable_observeWith(observer));
        },
      },
    ),
  );
})();

export default Stream_mixin;
