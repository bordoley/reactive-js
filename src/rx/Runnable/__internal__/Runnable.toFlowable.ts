import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike_scheduler,
  RunnableLike,
} from "../../../rx.js";
import {
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
} from "../../../scheduling.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import {
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
  ToFlowable,
} from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Runnable_toFlowable: ToFlowable<RunnableLike>["toFlowable"] =
  () => observable =>
    Flowable_createLifted(
      (modeObs: ObservableLike<FlowableState>) =>
        Observable_create(observer => {
          const pauseableScheduler = Scheduler_toPausableScheduler(
            observer[ObserverLike_scheduler],
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
                Observable_forEach<ObservableLike, FlowableState>(mode => {
                  switch (mode) {
                    case FlowableState_paused:
                      pauseableScheduler[PauseableSchedulerLike_pause]();
                      break;
                    case FlowableState_running:
                      pauseableScheduler[PauseableSchedulerLike_resume]();
                      break;
                  }
                }),
                Observable_subscribe(observer[ObserverLike_scheduler]),
                Disposable_bindTo(pauseableScheduler),
              ),
            ),
            Disposable_add(pauseableScheduler),
          );
        }),
      true,
    );

export default Runnable_toFlowable;
