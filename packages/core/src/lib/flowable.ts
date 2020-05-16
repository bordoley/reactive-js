import { add, addDisposableOrTeardown } from "./disposable";
import { Function1, compose, pipe, isEqualTo } from "./functions";
import {
  ObservableLike,
  ignoreElements,
  genMap,
  onNotify,
  subscribe,
  subscribeOn,
  takeFirst,
  takeWhile,
  using,
  keep,
} from "./observable";
import { SchedulerLike, toPausableScheduler } from "./scheduler";

import {
  StreamableLike,
  createStreamable,
} from "./streamable";

export const enum FlowMode {
  Resume = 1,
  Pause = 2,
}

/** @noInheritDoc */
export interface FlowableLike<T>
  extends StreamableLike<FlowMode, T> {}

export type FlowableFunction<TA, TB> = Function1<
  FlowableLike<TA>,
  FlowableLike<TB>
>;

const _empty: FlowableLike<any> = createStreamable(
  compose(
    keep(isEqualTo(FlowMode.Resume)),
    takeWhile(isEqualTo(FlowMode.Pause)),
    ignoreElements(),
  ),
);
export const empty = <T>(): FlowableLike<T> => _empty;

const _fromValue = <T>(data: T): FlowableLike<T> =>
  createStreamable(
    compose(
      keep(isEqualTo(FlowMode.Resume)),
      takeFirst(),
      genMap(function*(mode: FlowMode): Generator<T> {
        switch (mode) {
          case FlowMode.Resume:
            yield data;
        }
      }),
    ),
  );
export const fromValue = <T>(): Function1<T, FlowableLike<T>> => _fromValue;

const _fromObservable = <T>(
  observable: ObservableLike<T>,
): FlowableLike<T> => {
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
      addDisposableOrTeardown(pausableScheduler),
    );

    return add(pausableScheduler, modeSubscription);
  };

  const op = (modeObs: ObservableLike<FlowMode>) =>
    using(createScheduler(modeObs), pausableScheduler =>
      pipe(
        observable,
        subscribeOn(pausableScheduler),
      ),
    );

  return createStreamable(op);
};

export const fromObservable = <T>(): Function1<ObservableLike<T>, FlowableLike<T>> => _fromObservable;