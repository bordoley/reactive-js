import { pipe } from "../../../functions.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
import {
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling.js";
import Pauseable_pause from "../../../scheduling/Pauseable/__internal__/Pauseable.pause.js";
import Pauseable_resume from "../../../scheduling/Pauseable/__internal__/Pauseable.resume.js";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { ToFlowable } from "../../../streaming.js";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Runnable_toFlowable: ToFlowable<RunnableLike>["toFlowable"] =
  () => observable =>
    Flowable_createLifted((modeObs: ObservableLike<PauseableState>) =>
      Observable_create(observer => {
        const pauseableScheduler = pipe(
          observer,
          Observer_getScheduler,
          Scheduler_toPausableScheduler,
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
              Observable_forEach<ObservableLike, PauseableState>(mode => {
                switch (mode) {
                  case PauseableState_paused:
                    Pauseable_pause(pauseableScheduler);
                    break;
                  case PauseableState_running:
                    Pauseable_resume(pauseableScheduler);
                    break;
                }
              }),
              Observable_subscribe(Observer_getScheduler(observer)),
              Disposable_bindTo(pauseableScheduler),
            ),
          ),
          Disposable_add(pauseableScheduler),
        );
      }),
    );

export default Runnable_toFlowable;
