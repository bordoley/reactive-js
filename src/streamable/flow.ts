import { addDisposable, bindDisposables } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  createObservableUnsafe,
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
      createObservableUnsafe(observer => {
        const pausableScheduler = toPausableScheduler(scheduler ?? observer);

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

        const modeSubscription = pipe(
          modeObs,
          subscribe(observer, onModeChange),
        );

        bindDisposables(modeSubscription, pausableScheduler);
        addDisposable(observer, pausableScheduler);

        pipe(
          observable,
          subscribeOn(pausableScheduler),
          pipe(pausableScheduler, fromDisposable, takeUntil),
          sinkInto(observer),
        );
      });

    return createStreamable(op);
  };
