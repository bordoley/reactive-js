import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __PauseableObservable_eventPublisher } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Optional, Updater, compose, none, pipe } from "../../../functions.js";
import {
  ObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableObservableLike,
} from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike_addEventListener,
  PauseableEventMap,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";

const PauseableObservable_create: <T>(
  op: ContainerOperator<ObservableContainer, boolean, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__PauseableObservable_eventPublisher]: Optional<
      EventPublisherLike<PauseableEventMap[keyof PauseableEventMap]>
    >;
    [PauseableLike_isPaused]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function PauseableObservable(
        instance: TProperties & PauseableObservableLike<T>,
        op: ContainerOperator<ObservableContainer, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const liftedOp = compose(
          Observable_backpressureStrategy<
            ObservableContainer,
            boolean | Updater<boolean>
          >(1, "drop-oldest"),
          Observable_mergeWith<ObservableContainer, boolean>(
            // Initialize to paused state
            pipe(true, Optional_toObservable()),
          ),
          Observable_distinctUntilChanged<ObservableContainer, boolean>(),
          Observable_forEach<ObservableContainer, boolean>(ev => {
            instance[__PauseableObservable_eventPublisher]?.[
              EventListenerLike_notify
            ](ev ? { type: "paused" } : { type: "resumed" });

            instance[PauseableLike_isPaused] = ev;
          }),
          op,
        );

        const stream = Stream_create(liftedOp, scheduler, multicastOptions);
        init(Disposable_delegatingMixin, instance, stream);
        init(Delegating_mixin(), instance, stream);

        return instance;
      },
      props<TProperties>({
        [__PauseableObservable_eventPublisher]: none,
        [PauseableLike_isPaused]: true,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        [EventSourceLike_addEventListener](
          this: TProperties & DisposableLike,
          listener: EventListenerLike<
            PauseableEventMap[keyof PauseableEventMap]
          >,
        ): void {
          const publisher =
            this[__PauseableObservable_eventPublisher] ??
            (() => {
              const publisher = pipe(
                EventPublisher_create(),
                Disposable_addTo(this),
              );
              this[__PauseableObservable_eventPublisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },

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
