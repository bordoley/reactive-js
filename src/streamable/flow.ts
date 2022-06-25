import { addChildAndDisposeOnError, bindTo } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  createObservable,
  fromDisposable,
  subscribe,
  subscribeOn,
  takeUntil,
} from "../observable";
import { SchedulerLike, toPausableScheduler } from "../scheduler";
import { sinkInto } from "../source";
import { FlowMode, FlowableLike } from "../streamable";
import { createStreamable } from "./streamable";

export const flow =
  <T>({
    scheduler,
  }: {
    scheduler?: SchedulerLike;
  } = {}): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable => {
    const op = (modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = toPausableScheduler(
          scheduler ?? observer.scheduler,
        );

        const onModeChange = (mode: FlowMode) => {
          switch (mode) {
            case "pause":
              pausableScheduler.pause();
              break;
            case "resume":
              pausableScheduler.resume();
              break;
          }
        };

        pipe(
          observer,
          addChildAndDisposeOnError(
            pipe(
              modeObs,
              subscribe(observer.scheduler, onModeChange),
              bindTo(pausableScheduler),
            ),
          ),
          addChildAndDisposeOnError(pausableScheduler),
        );

        pipe(
          observable,
          subscribeOn(pausableScheduler),
          pipe(pausableScheduler, fromDisposable, takeUntil),
          sinkInto(observer),
        );
      });

    return createStreamable(op);
  };
