import { pipe } from "../../../functions.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
import {
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
  SchedulerLike,
} from "../../../scheduling.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { Flow } from "../../../streaming.js";
import FlowableStream_create from "../../../streaming/FlowableStream/__internal__/FlowableStream.create.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Runnable_flow: Flow<RunnableLike>["flow"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly replay?: number;
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
              Observable_forEach<ObservableLike, boolean>(isPaused => {
                if (isPaused) {
                  pauseableScheduler[PauseableSchedulerLike_pause]();
                } else {
                  pauseableScheduler[PauseableSchedulerLike_resume]();
                }
              }),
              Observable_subscribeWithConfig(observer, observer),
              Disposable_bindTo(pauseableScheduler),
            ),
          ),
          Disposable_add(pauseableScheduler),
        );
      });

    return FlowableStream_create<T>(op, scheduler, options);
  };
export default Runnable_flow;
