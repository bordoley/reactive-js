import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { toPausableScheduler } from "../../../scheduling/SchedulerLike";
import { FlowMode, ToFlowable } from "../../../streaming";
import FlowableLike__createLifted from "../../../streaming/__internal__/FlowableLike/FlowableLike.createLifted";
import { add, bindTo } from "../../../util/DisposableLike";
import { pause, resume } from "../../../util/PauseableLike";
import DisposableLike__toObservable from "../../../util/__internal__/DisposableLike/DisposableLike.toObservable";
import { getScheduler } from "../../ObserverLike";
import { sourceFrom } from "../../SinkLike";
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
              getScheduler,
              toPausableScheduler,
            );

            pipe(
              observer,
              sourceFrom(
                pipe(
                  observable,
                  ObservableLike__subscribeOn(pausableScheduler),
                  ObservableLike__takeUntil(
                    pipe(pausableScheduler, DisposableLike__toObservable()),
                  ),
                ),
              ),
              add(
                pipe(
                  modeObs,
                  ObservableLike__forEach(mode => {
                    switch (mode) {
                      case "pause":
                        pause(pausableScheduler);
                        break;
                      case "resume":
                        resume(pausableScheduler);
                        break;
                    }
                  }),
                  ObservableLike__subscribe(getScheduler(observer)),
                  bindTo(pausableScheduler),
                ),
              ),
              add(pausableScheduler),
            );
          }),
        )
      : FlowableLike__createLifted(_ => ObservableLike__empty());

export default ObservableLike__toFlowable;
