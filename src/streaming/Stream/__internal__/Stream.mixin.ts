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
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import {
  DispatcherLike,
  DispatcherLike_count,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

export interface DispatchedObservableLike<T>
  extends ObservableLike<T>,
    DispatcherLike<T> {}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
    const DispatchedObservable_dispatcher = Symbol(
      "DispatchedObservable_dispatcher",
    );

    type TProperties = {
      [DispatchedObservable_dispatcher]: Optional<DispatcherLike<T>>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function DispatchedObservable(
          instance: Pick<
            DispatchedObservableLike<T>,
            | typeof ReactiveContainerLike_sinkInto
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof DispatcherLike_count
            | typeof DispatcherLike_dispatch
            | typeof DispatcherLike_scheduler
          > &
            Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          init(Disposable_mixin, instance);
          return instance;
        },
        props<TProperties>({
          [DispatchedObservable_dispatcher]: none,
        }),
        {
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          get [DispatcherLike_count](): number {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            return (
              this[DispatchedObservable_dispatcher]?.[DispatcherLike_count] ?? 0
            );
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<DispatchedObservableLike<T> & TProperties>(this);
            const dispatcher = this[DispatchedObservable_dispatcher];
            return isSome(dispatcher)
              ? dispatcher[DispatcherLike_scheduler]
              : raiseWithDebugMessage<SchedulerLike>(
                  "DispatchedObservable has not been subscribed to",
                );
          },

          [DispatcherLike_dispatch](
            this: TProperties & DispatchedObservableLike<T>,
            next: T,
          ) {
            unsafeCast<DispatchedObservableLike<T>>(this);
            this[DispatchedObservable_dispatcher]?.[DispatcherLike_dispatch](
              next,
            );
          },

          [ReactiveContainerLike_sinkInto](
            this: TProperties & DispatchedObservableLike<T>,
            observer: ObserverLike<T>,
          ) {
            if (isSome(this[DispatchedObservable_dispatcher])) {
              raiseWithDebugMessage(
                "DispatchedObservable already subscribed to",
              );
            }

            const dispatcher = Observer_getDispatcher(observer);
            this[DispatchedObservable_dispatcher] = dispatcher;

            pipe(this, Disposable_addIgnoringChildErrors(dispatcher));
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
          | typeof DispatcherLike_count
          | typeof DispatcherLike_dispatch
          | typeof ReactiveContainerLike_sinkInto
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, TReq, T>,
        scheduler: SchedulerLike,
        replay: number,
      ): StreamLike<TReq, T> {
        const subject = DispatchedObservable_create<TReq>();

        init(
          Disposable_delegatingMixin<DispatchedObservableLike<TReq>>(),
          instance,
          subject,
        );

        instance[DispatcherLike_scheduler] = scheduler;

        instance[StreamMixin_observable] = pipe(
          subject,
          op,
          Observable_multicast<T>(scheduler, { replay }),
          add(instance),
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
          return MulticastObservable_getObserverCount(
            this[StreamMixin_observable],
          );
        },

        get [MulticastObservableLike_replay](): number {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getReplay(this[StreamMixin_observable]);
        },

        get [DispatcherLike_count](): number {
          unsafeCast<DelegatingLike<DispatchedObservableLike<TReq>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_count];
        },

        [ObservableLike_isEnumerable]: false,

        [ObservableLike_isRunnable]: false,

        [DispatcherLike_dispatch](
          this: DelegatingLike<DispatchedObservableLike<TReq>>,
          req: TReq,
        ) {
          this[DelegatingLike_delegate][DispatcherLike_dispatch](req);
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ) {
          pipe(
            this[StreamMixin_observable],
            ReactiveContainer_sinkInto(observer),
          );
        },
      },
    ),
  );
})();

export default Stream_mixin;
