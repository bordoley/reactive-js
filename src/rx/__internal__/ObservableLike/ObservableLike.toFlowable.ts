import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import SchedulerLike__toPausableScheduler from "../../../scheduling/__internal__/SchedulerLike/SchedulerLike.toPausableScheduler";
import { FlowMode, ToFlowable } from "../../../streaming";
import FlowableLike__createLifted from "../../../streaming/__internal__/FlowableLike/FlowableLike.createLifted";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import DisposableLike__toObservable from "../../../util/__internal__/DisposableLike/DisposableLike.toObservable";
import PauseableLike__pause from "../../../util/__internal__/PauseableLike/PauseableLike.pause";
import PauseableLike__resume from "../../../util/__internal__/PauseableLike/PauseableLike.resume";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import ObservableLike__create from "./ObservableLike.create";
import ObservableLike__empty from "./ObservableLike.empty";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__subscribe from "./ObservableLike.subscribe";
import ObservableLike__subscribeOn from "./ObservableLike.subscribeOn";
import ObservableLike__takeUntil from "./ObservableLike.takeUntil";

const ObservableLike__toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  () => observable =>
    ObservableLike__isRunnable(observable)
      ? FlowableLike__createLifted((modeObs: ObservableLike<FlowMode>) =>
          ObservableLike__create(observer => {
            const pausableScheduler = pipe(
              observer,
              ObserverLike__getScheduler,
              SchedulerLike__toPausableScheduler,
            );

            pipe(
              observer,
              SinkLike__sourceFrom(
                pipe(
                  observable,
                  ObservableLike__subscribeOn(pausableScheduler),
                  ObservableLike__takeUntil(
                    pipe(pausableScheduler, DisposableLike__toObservable()),
                  ),
                ),
              ),
              DisposableLike__add(
                pipe(
                  modeObs,
                  ObservableLike__forEach(mode => {
                    switch (mode) {
                      case "pause":
                        PauseableLike__pause(pausableScheduler);
                        break;
                      case "resume":
                        PauseableLike__resume(pausableScheduler);
                        break;
                    }
                  }),
                  ObservableLike__subscribe(
                    ObserverLike__getScheduler(observer),
                  ),
                  DisposableLike__bindTo(pausableScheduler),
                ),
              ),
              DisposableLike__add(pausableScheduler),
            );
          }),
        )
      : FlowableLike__createLifted(_ => ObservableLike__empty());

export default ObservableLike__toFlowable;
