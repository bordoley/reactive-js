import { pipe } from "../../../functions";
import { ObservableLike, RunnableObservableLike } from "../../../rx";
import Scheduler_toPausableScheduler from "../../../scheduling/Scheduler/__internal__/Scheduler.toPausableScheduler";
import {
  FlowMode,
  FlowMode_pause,
  FlowMode_resume,
  ToFlowable,
} from "../../../streaming";
import Flowable_createLifted from "../../../streaming/Flowable/__internal__/Flowable.createLifted";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Disposable_toObservable from "../../../util/Disposable/__internal__/Disposable.toObservable";
import Pauseable_pause from "../../../util/Pauseable/__internal__/Pauseable.pause";
import Pauseable_resume from "../../../util/Pauseable/__internal__/Pauseable.resume";
import Observable_create from "../../Observable/__internal__/Observable.create";
import Observable_empty from "../../Observable/__internal__/Observable.empty";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach";
import Observable_isRunnable from "../../Observable/__internal__/Observable.isRunnable";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn";
import Observable_takeUntil from "../../Observable/__internal__/Observable.takeUntil";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom";

const RunnableObservable_toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"] =
  () => observable =>
    Observable_isRunnable(observable)
      ? Flowable_createLifted((modeObs: ObservableLike<FlowMode>) =>
          Observable_create(observer => {
            const pausableScheduler = pipe(
              observer,
              Observer_getScheduler,
              Scheduler_toPausableScheduler,
            );

            pipe(
              observer,
              Sink_sourceFrom(
                pipe(
                  observable,
                  Observable_subscribeOn(pausableScheduler),
                  Observable_takeUntil(
                    pipe(pausableScheduler, Disposable_toObservable()),
                  ),
                ),
              ),
              Disposable_add(
                pipe(
                  modeObs,
                  Observable_forEach(mode => {
                    switch (mode) {
                      case FlowMode_pause:
                        Pauseable_pause(pausableScheduler);
                        break;
                      case FlowMode_resume:
                        Pauseable_resume(pausableScheduler);
                        break;
                    }
                  }),
                  Observable_subscribe(Observer_getScheduler(observer)),
                  Disposable_bindTo(pausableScheduler),
                ),
              ),
              Disposable_add(pausableScheduler),
            );
          }),
        )
      : Flowable_createLifted(_ => Observable_empty());

export default RunnableObservable_toFlowable;
