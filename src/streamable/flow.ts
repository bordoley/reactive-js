import { addDisposeOnChildError, bindTo } from "../disposable";
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
import { sourceFrom } from "../source";
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
          sourceFrom(
            pipe(
              observable,
              subscribeOn(pausableScheduler),
              pipe(pausableScheduler, fromDisposable, takeUntil),
            ),
          ),
          addDisposeOnChildError(
            pipe(
              modeObs,
              subscribe(observer.scheduler, onModeChange),
              bindTo(pausableScheduler),
            ),
          ),
          addDisposeOnChildError(pausableScheduler),
        );
      });

    return createStreamable(op);
  };
