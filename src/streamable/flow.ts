import { addAndDisposeParentOnChildError, bindTo } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  createObservable,
  fromDisposable,
  onNotify,
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

        pipe(
          observer,
          sourceFrom(
            pipe(
              observable,
              subscribeOn(pausableScheduler),
              pipe(pausableScheduler, fromDisposable, takeUntil),
            ),
          ),
          addAndDisposeParentOnChildError(
            pipe(
              modeObs,
              onNotify((mode: FlowMode) => {
                switch (mode) {
                  case "pause":
                    pausableScheduler.pause();
                    break;
                  case "resume":
                    pausableScheduler.resume();
                    break;
                }
              }),
              subscribe(observer.scheduler),
              bindTo(pausableScheduler),
            ),
          ),
          addAndDisposeParentOnChildError(pausableScheduler),
        );
      });

    return createStreamable(op);
  };
