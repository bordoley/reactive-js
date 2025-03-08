import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  EventSourceLike,
  PauseableEventSourceLike,
  StoreLike_value,
  SynchronousObservableLike,
  WritableStoreLike,
} from "../computations.js";
import { Function1, Optional, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as PauseableScheduler from "../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../utils.js";
import * as Observable from "./Observable.js";
import * as WritableStore from "./WritableStore.js";
import DelegatingEventSourceMixin from "./__mixins__/DelegatingEventSourceMixin.js";

interface PauseableEventSource {
  create<T>(
    op: Function1<
      EventSourceLike<boolean> & DisposableLike,
      EventSourceLike<T>
    >,
  ): PauseableEventSourceLike<T>;

  fromSynchronousObservable<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<SynchronousObservableLike<T>, PauseableEventSourceLike<T>>;
}

export type Signature = PauseableEventSource;

export const create: Signature["create"] = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingEventSourceMixin()),
    function PauseableEventSource(
      instance: Pick<
        PauseableEventSourceLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<
        EventSourceLike<boolean> & DisposableLike,
        EventSourceLike<T>
      >,
    ): PauseableEventSourceLike<T> {
      const writableStore = (instance[PauseableLike_isPaused] =
        WritableStore.create(true));

      const delegate = pipe(writableStore, op);

      init(DelegatingDisposableMixin, instance, writableStore);
      init(DelegatingEventSourceMixin<T>(), instance, delegate);

      return instance;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
    }),
    {
      [PauseableLike_pause](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },

      [PauseableLike_resume](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = false;
      },
    },
  );
})();

export const fromSynchronousObservable: Signature["fromSynchronousObservable"] =
  /*@__PURE__*/ (<T>() => {
    const createPauseableEventSourceFromSynchronousObservable =
      mixInstanceFactory(
        include(
          DelegatingDisposableMixin,
          DelegatingPauseableMixin,
          DelegatingEventSourceMixin(),
        ),
        function PauseableEventSourceFromSynchronousObservable(
          instance: Pick<
            PauseableEventSourceLike<T>,
            | typeof PauseableLike_pause
            | typeof PauseableLike_resume
            | typeof PauseableLike_isPaused
          >,
          obs: SynchronousObservableLike<T>,
          scheduler: SchedulerLike,
          options: Optional<{
            capacity?: number;
            backpressureStrategy?: BackpressureStrategy;
          }>,
        ): PauseableEventSourceLike<T> {
          const pauseableScheduler = PauseableScheduler.create(scheduler);

          const eventSource = pipe(
            obs,
            Observable.toEventSource(scheduler, options),
            Disposable.bindTo(pauseableScheduler),
          );

          init(DelegatingDisposableMixin, instance, pauseableScheduler);
          init(DelegatingPauseableMixin, instance, pauseableScheduler);
          init(DelegatingEventSourceMixin(), instance, eventSource);

          return instance;
        },
      );
    return (
        scheduler: SchedulerLike,
        options?: {
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        },
      ) =>
      (obs: SynchronousObservableLike<T>) =>
        createPauseableEventSourceFromSynchronousObservable(
          obs,
          scheduler,
          options,
        );
  })();
