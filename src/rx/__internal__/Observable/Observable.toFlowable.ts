import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Scheduler_toPausableScheduler from "../../../scheduling/__internal__/Scheduler/Scheduler.toPausableScheduler";
import {
  FlowMode,
  FlowMode_pause,
  FlowMode_resume,
  ToFlowable,
} from "../../../streaming";
import Flowable_createLifted from "../../../streaming/__internal__/Flowable/Flowable.createLifted";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable_toObservable from "../../../util/__internal__/Disposable/Disposable.toObservable";
import Pauseable_pause from "../../../util/__internal__/Pauseable/Pauseable.pause";
import Pauseable_resume from "../../../util/__internal__/Pauseable/Pauseable.resume";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Observable_create from "./Observable.create";
import Observable_empty from "./Observable.empty";
import Observable_forEach from "./Observable.forEach";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_subscribe from "./Observable.subscribe";
import Observable_subscribeOn from "./Observable.subscribeOn";
import Observable_takeUntil from "./Observable.takeUntil";

const Observable_toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
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

export default Observable_toFlowable;
