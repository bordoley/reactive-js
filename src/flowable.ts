import { bindDisposables } from "./disposable";
import { Function1, compose, pipe } from "./functions";
import {
  ObservableLike,
  fromArray as fromArrayObs,
  fromDisposable,
  subscribe,
  subscribeOn,
  takeUntil,
  using,
} from "./observable";
import { SchedulerLike, toPausableScheduler } from "./scheduler";

import { StreamableLike, createStreamable } from "./streamable";

export const enum FlowMode {
  Resume = 1,
  Pause = 2,
}

/** @noInheritDoc */
export interface FlowableLike<T> extends StreamableLike<FlowMode, T> {}

export type FlowableOperator<TA, TB> = Function1<
  FlowableLike<TA>,
  FlowableLike<TB>
>;

export const fromObservable = <T>({
  scheduler,
}: {
  scheduler?: SchedulerLike;
} = {}): Function1<ObservableLike<T>, FlowableLike<T>> => observable => {
  const createScheduler = (modeObs: ObservableLike<FlowMode>) => (
    modeScheduler: SchedulerLike,
  ) => {
    const pausableScheduler = toPausableScheduler(scheduler ?? modeScheduler);

    const onModeChange = (mode: FlowMode) => {
      switch (mode) {
        case FlowMode.Pause:
          pausableScheduler.pause();
          break;
        case FlowMode.Resume:
          pausableScheduler.resume();
          break;
      }
    };

    const modeSubscription = pipe(
      modeObs,
      subscribe(modeScheduler, onModeChange),
    );

    bindDisposables(modeSubscription, pausableScheduler);

    return pausableScheduler;
  };

  const op = (modeObs: ObservableLike<FlowMode>) =>
    using(createScheduler(modeObs), pausableScheduler =>
      pipe(
        observable,
        subscribeOn(pausableScheduler),
        pipe(pausableScheduler, fromDisposable, takeUntil),
      ),
    );

  return createStreamable(op);
};

export const fromArray = <T>(options?: {
  readonly delay?: number;
  readonly startIndex?: number;
  readonly endIndex?: number;
}): Function1<readonly T[], FlowableLike<T>> =>
  compose(fromArrayObs(options), fromObservable());

export const fromValue = <T>(options?: {
  readonly delay?: number;
}): Function1<T, FlowableLike<T>> => v => fromArray<T>(options)([v]);

const _empty: FlowableLike<any> = fromArray()([]);
export const empty = <T>(): FlowableLike<T> => _empty;
