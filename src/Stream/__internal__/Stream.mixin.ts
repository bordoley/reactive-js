import Dispatcher_delegatingMixin from "../../Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Observable_multicast from "../../Observable/__internal__/Observable.multicast.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
import {
  Mixin3,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __DispatchedObservable_dispatcher } from "../../__internal__/symbols.js";
import {
  Function1,
  Optional,
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
} from "../../functions.js";
import {
  DeferredObservableLike,
  DispatcherLike,
  DisposableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  StreamLike,
  StreamLike_scheduler,
} from "../../types.js";

interface DispatchedObservableLike<T> extends DeferredObservableLike<T> {
  [__DispatchedObservable_dispatcher]: Optional<DispatcherLike<T>>;
}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [__DispatchedObservable_dispatcher]: Optional<DispatcherLike<T>>;
    };

    return createInstanceFactory(
      mix(
        function DispatchedObservable(
          instance: DispatchedObservableLike<T> & Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          return instance;
        },
        props<TProperties>({
          [__DispatchedObservable_dispatcher]: none,
        }),
        {
          [ObservableLike_isDeferred]: true as const,
          [ObservableLike_isEnumerable]: false as const,
          [ObservableLike_isPure]: false as const,
          [ObservableLike_isRunnable]: false as const,

          [ObservableLike_observe](
            this: TProperties & DispatchedObservableLike<T> & DisposableLike,
            observer: ObserverLike<T>,
          ) {
            if (isSome(this[__DispatchedObservable_dispatcher])) {
              raiseWithDebugMessage(
                "DispatchedObservable already subscribed to",
              );
            }

            this[__DispatchedObservable_dispatcher] = observer;
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
  Function1<DeferredObservableLike<TReq>, DeferredObservableLike<T>>,
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
        ReplayObservable_delegatingMixin<T>(),
        Disposable_delegatingMixin,
      ),
      function StreamMixin(
        instance: TProperties,
        op: Function1<DeferredObservableLike<TReq>, DeferredObservableLike<T>>,
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
          dispatchedObservable[__DispatchedObservable_dispatcher],
        );
        init(ReplayObservable_delegatingMixin<T>(), instance, delegate);

        return instance;
      },
      props<TProperties>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  ))();

export default Stream_mixin;
