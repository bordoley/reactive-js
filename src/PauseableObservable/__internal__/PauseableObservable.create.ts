import type * as DeferredObservable from "../../DeferredObservable.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lazyInitPublisherMixin from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
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
import { Updater, compose, none, pipe } from "../../functions.js";
import {
  ContainerOperator,
  DisposableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
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
  op: ContainerOperator<DeferredObservable.Type, boolean, T>,
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
      include(
        Disposable_delegatingMixin,
        Delegating_mixin(),
        EventSource_lazyInitPublisherMixin(),
      ),
      function PauseableObservable(
        instance: PauseableObservableLike<T> & TProperties,
        op: ContainerOperator<DeferredObservable.Type, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const liftedOp: ContainerOperator<DeferredObservable.Type, boolean, T> =
          compose(
            Observable_backpressureStrategy<boolean | Updater<boolean>>(
              1,
              "drop-oldest",
            ),
            Observable_mergeWith<boolean>(
              // Initialize to paused state
              pipe(true, Optional_toRunnable()),
            ),
            Observable_distinctUntilChanged<boolean>(),
            Observable_forEach((isPaused: boolean) => {
              instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
            }),
            op,
          );

        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);
        init(EventSource_lazyInitPublisherMixin(), instance);

        instance[PauseableLike_isPaused] = Store_create(true);

        return instance;
      },
      props<TProperties>({
        [PauseableLike_isPaused]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isEnumerable]: false as const,
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
