import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_multicast from "../../Observable/__internal__/Observable.multicast.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import Scheduler_createPausableScheduler from "../../Scheduler/__internal__/Scheduler.createPausableScheduler.js";
import Store_create from "../../Store/__internal__/Store.create.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Function1, invoke, none, pipe } from "../../functions.js";
import {
  DeferredObservableBaseLike,
  DisposableLike,
  MulticastObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  StoreLike_value,
  StreamLike,
  WritableStoreLike,
} from "../../types.js";

const PauseableObservable_create: <T>(
  op: Function1<
    MulticastObservableLike<boolean>,
    DeferredObservableBaseLike<T>
  >,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function PauseableObservable(
        instance: PauseableObservableLike<T> & TProperties,
        op: Function1<
          MulticastObservableLike<boolean>,
          DeferredObservableBaseLike<T>
        >,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const liftedOp = (mode: DeferredObservableBaseLike<boolean>) =>
          Observable_create(observer => {
            const pauseableScheduler = pipe(
              observer,
              Scheduler_createPausableScheduler,
              Disposable_addTo(observer),
            );

            const multicastedMode = pipe(
              mode,
              Observable_mergeWith<boolean>(
                // Initialize to paused state
                pipe(true, Optional_toObservable()),
              ),
              Observable_distinctUntilChanged<boolean>(),
              Observable_multicast(observer, {
                replay: 1,
                capacity: 1,
                backpressureStrategy: "drop-oldest",
              }),
              Disposable_addTo(observer),
            );

            pipe(
              multicastedMode,
              Observable_forEach((isPaused: boolean) => {
                instance[PauseableLike_isPaused][StoreLike_value] = isPaused;

                if (isPaused) {
                  pauseableScheduler[PauseableLike_pause]();
                } else {
                  pauseableScheduler[PauseableLike_resume]();
                }
              }),
              Observable_subscribe(observer),
              Disposable_addTo(observer),
            );

            pipe(
              multicastedMode,
              op,
              Observable_subscribeOn(pauseableScheduler),
              invoke(ObservableLike_observe, observer),
            );
          });

        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);

        instance[PauseableLike_isPaused] = Store_create(true);

        return instance;
      },
      props<TProperties>({
        [PauseableLike_isPaused]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isPure]: true as const,
        [ObservableLike_isRunnable]: false as const,

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<boolean, T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },

        [PauseableLike_pause](this: DelegatingLike<StreamLike<boolean, T>>) {
          this[DelegatingLike_delegate][QueueableLike_enqueue](true);
        },

        [PauseableLike_resume](this: DelegatingLike<StreamLike<boolean, T>>) {
          this[DelegatingLike_delegate][QueueableLike_enqueue](false);
        },
      },
    ),
  );
})();

export default PauseableObservable_create;
