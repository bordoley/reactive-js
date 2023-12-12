import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredSideEffectsObservableLike,
  DispatcherLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SchedulerLike,
  StreamLike,
  StreamLike_scheduler,
  StreamableLike_stream,
} from "../../../concurrent.js";
import {
  Function1,
  Optional,
  isSome,
  none,
  pipe,
  raiseIf,
} from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_multicast from "../../Observable/__private__/Observable.multicast.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "../../__mixins__/DelegatingReplayObservableMixin.js";

const Stream_create: <TReq, T>(
  op: Function1<
    DeferredSideEffectsObservableLike<TReq>,
    DeferredSideEffectsObservableLike<T>
  >,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> & DisposableLike = /*@__PURE__*/ (<TReq, T>() => {
  const DispatchedObservableLike_dispatcher = Symbol(
    "DispatchedObservableLike_dispatcher",
  );

  interface DispatchedObservableLike<T>
    extends DeferredSideEffectsObservableLike<T> {
    [DispatchedObservableLike_dispatcher]: Optional<DispatcherLike<T>>;
  }

  const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> = (<
    T,
  >() => {
    type TProperties = {
      [DispatchedObservableLike_dispatcher]: Optional<DispatcherLike<T>>;
    };

    return createInstanceFactory(
      mix(
        function DispatchedObservable(
          instance: DispatchedObservableLike<T> & Mutable<TProperties>,
        ): DispatchedObservableLike<T> {
          return instance;
        },
        props<TProperties>({
          [DispatchedObservableLike_dispatcher]: none,
        }),
        {
          [ObservableLike_isDeferred]: true as const,
          [ObservableLike_isPure]: false as const,
          [ObservableLike_isRunnable]: false as const,

          [ObservableLike_observe](
            this: TProperties & DispatchedObservableLike<T> & DisposableLike,
            observer: ObserverLike<T>,
          ) {
            raiseIf(
              isSome(this[DispatchedObservableLike_dispatcher]),
              "DispatchedObservable already subscribed to",
            );

            this[DispatchedObservableLike_dispatcher] = observer;
          },
        },
      ),
    );
  })();

  type TProperties = {
    [StreamLike_scheduler]: SchedulerLike;
  };

  return createInstanceFactory(
    mix(
      include(
        DelegatingDispatcherMixin(),
        DelegatingReplayObservableMixin<T>(),
      ),
      function StreamMixin(
        instance: TProperties,
        op: Function1<
          DeferredSideEffectsObservableLike<TReq>,
          DeferredSideEffectsObservableLike<T>
        >,
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

        init(
          DelegatingDispatcherMixin<TReq>(),
          instance,
          dispatchedObservable[DispatchedObservableLike_dispatcher],
        );
        init(DelegatingReplayObservableMixin<T>(), instance, delegate);

        pipe(delegate, Disposable.addTo(instance));

        return instance;
      },
      props<TProperties>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  );
})();

const Streamable_create: Streamable.Signature["create"] = <TReq, T>(
  op: Function1<
    DeferredSideEffectsObservableLike<TReq>,
    DeferredSideEffectsObservableLike<T>
  >,
) => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
