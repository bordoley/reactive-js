import { pipe } from "../../../functions";
import { ObservableLike, RunnableObservableLike } from "../../../rx";
import {
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
} from "../../../scheduling";
import Pauseable_pause from "../../../scheduling/Pauseable/__internal__/Pauseable.pause";
import Pauseable_resume from "../../../scheduling/Pauseable/__internal__/Pauseable.resume";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler";
import { ToFlowable } from "../../../streaming";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable";
import Observable_create from "../../Observable/__internal__/Observable.create";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom";

const RunnableObservable_toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
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
          Sink_sourceFrom(
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
              Observable_forEach(mode => {
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

export default RunnableObservable_toFlowable;
