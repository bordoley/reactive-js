import { pipe } from "../../../functions.js";
import {
  Flow,
  ObservableContainerLike,
  ObservableLike,
  RunnableContainerLike,
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
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Scheduler_toPausableScheduler from "../../../util/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Runnable_flow: Flow<RunnableContainerLike>["flow"] =
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
          observer,
          Observer_sourceFrom(
            pipe(runnable, Observable_subscribeOn(pauseableScheduler)),
          ),
          Disposable_add(
            pipe(
              modeObs,
              Observable_forEach<ObservableContainerLike, boolean>(isPaused => {
                if (isPaused) {
                  pauseableScheduler[PauseableLike_pause]();
                } else {
                  pauseableScheduler[PauseableLike_resume]();
                }
              }),
              Observable_subscribeWithConfig(observer, observer),
              Disposable_bindTo(pauseableScheduler),
            ),
          ),
          Disposable_add(pauseableScheduler),
        );
      });

    return PauseableObservable_create<T>(op, scheduler, options);
  };
export default Runnable_flow;
