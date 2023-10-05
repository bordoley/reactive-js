import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableObservableLike,
  SchedulerLike,
  StreamLike,
} from "../../../concurrent.js";
import { Function1, invoke, none, pipe } from "../../../functions.js";
import {
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  StoreLike_value,
  WritableStoreLike,
} from "../../../rx.js";
import * as WritableStore from "../../../rx/WritableStore.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_fromIterable from "../../Observable/__internal__/Observable.fromIterable.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_multicast from "../../Observable/__internal__/Observable.multicast.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Scheduler_toPausableScheduler from "../../Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";

const PauseableObservable_create: <T>(
  op: Function1<MulticastObservableLike<boolean>, DeferredObservableLike<T>>,
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
      include(DelegatingDisposableMixin()),
      function PauseableObservable(
        instance: PauseableObservableLike<T> & TProperties,
        op: Function1<
          MulticastObservableLike<boolean>,
          DeferredObservableLike<T>
        >,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const liftedOp = (mode: DeferredObservableLike<boolean>) =>
          Observable_create(observer => {
            const pauseableScheduler = pipe(
              observer,
              Scheduler_toPausableScheduler,
              Disposable.addTo(observer),
            );

            const multicastedMode = pipe(
              mode,
              Observable_mergeWith<boolean>(
                // Initialize to paused state
                pipe([true], Observable_fromIterable()),
              ),
              Observable_distinctUntilChanged<boolean>(),
              Observable_multicast(observer, {
                replay: 1,
                capacity: 1,
                backpressureStrategy: "drop-oldest",
              }),
              Disposable.addTo(observer),
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
              Disposable.addTo(observer),
            );

            pipe(
              multicastedMode,
              op,
              Observable_subscribeOn(pauseableScheduler),
              invoke(ObservableLike_observe, observer),
            );
          });

        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(DelegatingDisposableMixin(), instance, stream);

        instance[PauseableLike_isPaused] = WritableStore.create(true);

        return instance;
      },
      props<TProperties>({
        [PauseableLike_isPaused]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isPure]: true as const,
        [ObservableLike_isRunnable]: false as const,

        [ObservableLike_observe](
          this: DelegatingDisposableLike<
            StreamLike<boolean, T> & DisposableLike
          >,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingDisposableLike_delegate][ObservableLike_observe](
            observer,
          );
        },

        [PauseableLike_pause](
          this: DelegatingDisposableLike<
            StreamLike<boolean, T> & DisposableLike
          >,
        ) {
          this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](true);
        },

        [PauseableLike_resume](
          this: DelegatingDisposableLike<
            StreamLike<boolean, T> & DisposableLike
          >,
        ) {
          this[DelegatingDisposableLike_delegate][QueueableLike_enqueue](false);
        },
      },
    ),
  );
})();

export default PauseableObservable_create;
