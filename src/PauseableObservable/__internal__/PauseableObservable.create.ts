import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventPublisher_lazyInitMixin from "../../EventPublisher/__internal__/EventPublisher.lazyInitMixin.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import Store_createMutable from "../../Store/__internal__/Store.createMutable.js";
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
  MutableStoreLike,
} from "../../__internal__/types.js";
import { Container, DeferredObservableContainer } from "../../containers.js";
import { Updater, compose, none, pipe } from "../../functions.js";
import {
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
} from "../../types.js";

const PauseableObservable_create: <T>(
  op: Container.Operator<DeferredObservableContainer.Type, boolean, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: MutableStoreLike<boolean>;
  };

  return createInstanceFactory(
    mix(
      include(
        Disposable_delegatingMixin,
        Delegating_mixin(),
        EventPublisher_lazyInitMixin(),
      ),
      function PauseableObservable(
        instance: PauseableObservableLike<T> & TProperties,
        op: Container.Operator<DeferredObservableContainer.Type, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const liftedOp = compose(
          Observable_backpressureStrategy<
            DeferredObservableContainer.Type,
            boolean | Updater<boolean>
          >(1, "drop-oldest"),
          Observable_mergeWith<DeferredObservableContainer.Type, boolean>(
            // Initialize to paused state
            pipe(true, Optional_toObservable()),
          ),
          Observable_distinctUntilChanged<
            DeferredObservableContainer.Type,
            boolean
          >(),
          Observable_forEach<DeferredObservableContainer.Type, boolean>(
            isPaused => {
              instance[PauseableLike_isPaused][StoreLike_value] = isPaused;
            },
          ),
          op,
        );

        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);
        init(EventPublisher_lazyInitMixin(), instance);

        instance[PauseableLike_isPaused] = Store_createMutable(true);

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
