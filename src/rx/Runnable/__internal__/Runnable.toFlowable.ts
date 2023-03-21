import { pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  RunnableLike,
} from "../../../rx.js";
import {
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
} from "../../../scheduling.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { ToFlowable } from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_subscribeWithMaxBufferSize from "../../Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Runnable_toFlowable: ToFlowable<RunnableLike>["toFlowable"] =
  () => observable =>
    Flowable_createLifted(
      (modeObs: ObservableLike<boolean>) =>
        Observable_create(observer => {
          const pauseableScheduler = Scheduler_toPausableScheduler(
            observer[DispatcherLike_scheduler],
          );

          pipe(
            observer,
            Observer_sourceFrom(
              pipe(
                observable,
                Observable_subscribeOn(pauseableScheduler),
                Observable_takeUntil(
                  pipe(pauseableScheduler, Disposable_toObservable()),
                ),
              ),
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
                Observable_subscribeWithMaxBufferSize(
                  observer[DispatcherLike_scheduler],
                  observer[QueueableLike_maxBufferSize],
                ),
                Disposable_bindTo(pauseableScheduler),
              ),
            ),
            Disposable_add(pauseableScheduler),
          );
        }),
      true,
    );

export default Runnable_toFlowable;
