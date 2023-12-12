import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  DeferredSideEffectsObservableLike,
  FlowableLike,
  FlowableLike_flow,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import { StoreLike_value, WritableStoreLike } from "../../../events.js";
import * as WritableStore from "../../../events/WritableStore.js";
import { Function1, invoke, none, pipe } from "../../../functions.js";
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
import type * as Flowable from "../../Flowable.js";
import Observable_create from "../../Observable/__private__/Observable.create.js";
import Observable_distinctUntilChanged from "../../Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_fromIterable from "../../Observable/__private__/Observable.fromIterable.js";
import Observable_mergeWith from "../../Observable/__private__/Observable.mergeWith.js";
import Observable_multicast from "../../Observable/__private__/Observable.multicast.js";
import Observable_subscribe from "../../Observable/__private__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__private__/Observable.subscribeOn.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import Streamable_create from "../../Streamable/__private__/Streamable.create.js";

const PauseableObservable_create: <T>(
  op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return createInstanceFactory(
    mix(
      include(DelegatingDisposableMixin()),
      function PauseableObservable(
        instance: Omit<PauseableObservableLike<T>, keyof DisposableLike> &
          TProperties,
        op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> {
        const liftedOp = (mode: DeferredSideEffectsObservableLike<boolean>) =>
          Observable_create(observer => {
            const pauseableScheduler = pipe(
              observer,
              PauseableScheduler.create,
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

        const stream = Streamable_create(liftedOp)[StreamableLike_stream](
          scheduler,
          multicastOptions,
        );
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

const Flowable_create: Flowable.Signature["create"] = <T>(
  op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>,
): FlowableLike<T> => ({
  [FlowableLike_flow]: (scheduler, options) =>
    PauseableObservable_create(op, scheduler, options),
});

export default Flowable_create;
