import {
  Mixin3,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
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
} from "../../concurrent.js";
import {
  Function1,
  Optional,
  isSome,
  none,
  pipe,
  raiseIf,
  returns,
} from "../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observable_multicast from "../Observable/__internal__/Observable.multicast.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";

const DispatchedObservableLike_dispatcher = Symbol(
  "DispatchedObservableLike_dispatcher",
);

interface DispatchedObservableLike<T>
  extends DeferredSideEffectsObservableLike<T> {
  [DispatchedObservableLike_dispatcher]: Optional<DispatcherLike<T>>;
}

const DispatchedObservable_create: <T>() => DispatchedObservableLike<T> =
  /*@__PURE__*/ (<T>() => {
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

const StreamMixin: <TReq, T>() => Mixin3<
  StreamLike<TReq, T> & DisposableLike,
  Function1<
    DeferredSideEffectsObservableLike<TReq>,
    DeferredSideEffectsObservableLike<T>
  >,
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
        DelegatingDispatcherMixin(),
        DelegatingReplayObservableMixin<T>(),
        DelegatingDisposableMixin(),
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

        init(DelegatingDisposableMixin(), instance, delegate);
        init(
          DelegatingDispatcherMixin<TReq>(),
          instance,
          dispatchedObservable[DispatchedObservableLike_dispatcher],
        );
        init(DelegatingReplayObservableMixin<T>(), instance, delegate);

        return instance;
      },
      props<TProperties>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  ))();

export default StreamMixin;
