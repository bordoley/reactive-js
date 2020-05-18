import { bindDisposables } from "./disposable";
import { Function1, compose, pipe } from "./functions";
import {
  ObservableLike,
  fromArray as fromArrayObs,
  fromDisposable,
  onNotify,
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

const _fromObservable = <T>(observable: ObservableLike<T>): FlowableLike<T> => {
  const createScheduler = (modeObs: ObservableLike<FlowMode>) => (
    scheduler: SchedulerLike,
  ) => {
    const pausableScheduler = toPausableScheduler(scheduler);

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
      onNotify(onModeChange),
      subscribe(scheduler),
      
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
export const fromObservable = <T>(): Function1<
  ObservableLike<T>,
  FlowableLike<T>
> => _fromObservable;

const _fromArray = compose(fromArrayObs(), fromObservable());
export const fromArray = <T>(): Function1<readonly T[], FlowableLike<T>> =>
  _fromArray;

const _fromValue = <T>(v: T) => _fromArray([v]);
export const fromValue = <T>(): Function1<T, FlowableLike<T>> => _fromValue;

const _empty: FlowableLike<any> = _fromArray([]);
export const empty = <T>(): FlowableLike<T> => _empty;
