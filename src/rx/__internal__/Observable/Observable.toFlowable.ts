import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Scheduler$toPausableScheduler from "../../../scheduling/__internal__/Scheduler/Scheduler.toPausableScheduler";
import { FlowMode, ToFlowable } from "../../../streaming";
import Flowable$createLifted from "../../../streaming/__internal__/Flowable/Flowable.createLifted";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable$toObservable from "../../../util/__internal__/Disposable/Disposable.toObservable";
import Pauseable$pause from "../../../util/__internal__/Pauseable/Pauseable.pause";
import Pauseable$resume from "../../../util/__internal__/Pauseable/Pauseable.resume";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Observable$create from "./Observable.create";
import Observable$empty from "./Observable.empty";
import Observable$forEach from "./Observable.forEach";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$subscribe from "./Observable.subscribe";
import Observable$subscribeOn from "./Observable.subscribeOn";
import Observable$takeUntil from "./Observable.takeUntil";

const Observable$toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  () => observable =>
    Observable$isRunnable(observable)
      ? Flowable$createLifted((modeObs: ObservableLike<FlowMode>) =>
          Observable$create(observer => {
            const pausableScheduler = pipe(
              observer,
              Observer$getScheduler,
              Scheduler$toPausableScheduler,
            );

            pipe(
              observer,
              Sink$sourceFrom(
                pipe(
                  observable,
                  Observable$subscribeOn(pausableScheduler),
                  Observable$takeUntil(
                    pipe(pausableScheduler, Disposable$toObservable()),
                  ),
                ),
              ),
              Disposable$add(
                pipe(
                  modeObs,
                  Observable$forEach(mode => {
                    switch (mode) {
                      case "pause":
                        Pauseable$pause(pausableScheduler);
                        break;
                      case "resume":
                        Pauseable$resume(pausableScheduler);
                        break;
                    }
                  }),
                  Observable$subscribe(Observer$getScheduler(observer)),
                  Disposable$bindTo(pausableScheduler),
                ),
              ),
              Disposable$add(pausableScheduler),
            );
          }),
        )
      : Flowable$createLifted(_ => Observable$empty());

export default Observable$toFlowable;
