import { invoke, pipe } from "../../../functions.js";
import {
  ObservableContainer,
  ObservableLike,
  ObservableLike_observe,
  Reactive,
  RunnableContainer,
  RunnableLike,
} from "../../../rx.js";
import PauseableObservable_create from "../../../rx/PauseableObservable/__internal__/PauseableObservable.create.js";
import {
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Scheduler_toPausableScheduler from "../../../util/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";

const Runnable_flow: Reactive.Flow<RunnableContainer>["flow"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (runnable: RunnableLike<T>) => {
    const op = (modeObs: ObservableLike<boolean>) =>
      Observable_create<T>(observer => {
        const pauseableScheduler = pipe(
          observer,
          Scheduler_toPausableScheduler,
          Disposable_addTo(observer),
        );

        pipe(
          runnable,
          Observable_subscribeOn(pauseableScheduler),
          invoke(ObservableLike_observe, observer),
        );

        pipe(
          modeObs,
          Observable_forEach<ObservableContainer, boolean>(isPaused => {
            if (isPaused) {
              pauseableScheduler[PauseableLike_pause]();
            } else {
              pauseableScheduler[PauseableLike_resume]();
            }
          }),
          Observable_subscribeWithConfig(observer, observer),
          Disposable_bindTo(pauseableScheduler),
        );
      });

    return PauseableObservable_create<T>(op, scheduler, options);
  };
export default Runnable_flow;
