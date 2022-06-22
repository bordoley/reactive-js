import { bindDisposables } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  ObservableLike,
  createObservableWithScheduler,
  fromDisposable,
  subscribe,
  subscribeOn,
  takeUntil,
} from "../observable";
import { SchedulerLike, toPausableScheduler } from "../scheduler";
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
      createObservableWithScheduler(modeScheduler => {
        const pausableScheduler = toPausableScheduler(
          scheduler ?? modeScheduler,
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

        const modeSubscription = pipe(
          modeObs,
          subscribe(modeScheduler, onModeChange),
        );

        bindDisposables(modeSubscription, pausableScheduler);
        modeScheduler.add(pausableScheduler);

        return pipe(
          observable,
          subscribeOn(pausableScheduler),
          pipe(pausableScheduler, fromDisposable, takeUntil),
        );
      });

    return createStreamable(op);
  };
