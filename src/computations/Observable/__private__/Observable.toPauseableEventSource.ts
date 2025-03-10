import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  PauseableEventSourceLike,
  SynchronousObservableLike,
} from "../../../computations.js";
import { Optional, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import Observable_toEventSource from "./Observable.toEventSource.js";

const Observable_toPauseableEventSource: Observable.Signature["toPauseableEventSource"] =
  /*@__PURE__*/ (<T>() => {
    const createPauseableEventSourceFromSynchronousObservable =
      mixInstanceFactory(
        include(
          DelegatingDisposableMixin,
          DelegatingPauseableMixin,
          DelegatingEventSourceMixin(),
        ),
        function PauseableEventSourceFromSynchronousObservable(
          this: Pick<
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
        ): PauseableEventSourceLike<T> & DisposableLike {
          const pauseableScheduler = PauseableScheduler.create(scheduler);

          const eventSource = pipe(
            obs,
            Observable_toEventSource(scheduler, options),
            Disposable.bindTo(pauseableScheduler),
          );

          init(DelegatingDisposableMixin, this, pauseableScheduler);
          init(DelegatingPauseableMixin, this, pauseableScheduler);
          init(DelegatingEventSourceMixin(), this, eventSource);

          return this;
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

export default Observable_toPauseableEventSource;
