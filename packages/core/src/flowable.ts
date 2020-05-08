import { Operator, compose, pipe, returns } from "./functions";
import { SchedulerLike } from "./internal/scheduler/interfaces";
import {
  ObservableLike,
  endWith,
  generate as generateObs,
  map as mapObs,
  keepType,
  takeFirst,
  genMap,
  empty as emptyObs,
  onNotify,
  subscribe,
  subscribeOn,
  ScanAsyncMode,
  scanAsync,
  using,
} from "./observable";
import { none, isSome } from "./option";
import { toPausableScheduler } from "./scheduler";
import {
  StreamableLike,
  createStreamable,
  map as mapStream,
} from "./streamable";

export const enum FlowMode {
  Resume = 1,
  Pause = 2,
}

export const enum FlowEventType {
  Next = 1,
  Complete = 2,
}

export type FlowEvent<T> =
  | { readonly type: FlowEventType.Next; readonly data: T }
  | { readonly type: FlowEventType.Complete };

export interface FlowableLike<T>
  extends StreamableLike<FlowMode, FlowEvent<T>> {}

export interface FlowableSinkLike<T>
  extends StreamableLike<FlowEvent<T>, FlowMode> {}

export type FlowableOperator<TA, TB> = Operator<
  FlowableLike<TA>,
  FlowableLike<TB>
>;

const _empty = createStreamable(
  compose(
    mapObs(mode =>
      mode === FlowMode.Resume ? { type: FlowEventType.Complete } : none,
    ),
    keepType(isSome),
    takeFirst(),
  ),
);
export const empty = <T>(): FlowableLike<T> => _empty;

export const fromValue = <T>(data: T): FlowableLike<T> =>
  pipe(
    genMap(function*(mode: FlowMode): Generator<FlowEvent<T>> {
      switch (mode) {
        case FlowMode.Resume:
          yield { type: FlowEventType.Next, data };
          yield { type: FlowEventType.Complete };
      }
    }),
    createStreamable,
  );

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  { delay }: { delay: number } = { delay: 0 },
): FlowableLike<T> => {
  const reducer = (acc: T, ev: FlowMode): ObservableLike<T> =>
    ev === FlowMode.Resume
      ? generateObs(generator, returns(acc), { delay })
      : emptyObs();

  const op = compose(
    scanAsync(reducer, initialValue, ScanAsyncMode.Switching),
    mapObs(data => ({ type: FlowEventType.Next, data })),
  );

  return createStreamable(op);
};

export const map = <TA, TB>(
  mapper: (v: TA) => TB,
): Operator<FlowableLike<TA>, FlowableLike<TB>> =>
  mapStream((ev: FlowEvent<TA>) =>
    ev.type === FlowEventType.Next
      ? {
          type: FlowEventType.Next,
          data: mapper(ev.data),
        }
      : { type: FlowEventType.Complete },
  );

export const fromObservable = <T>(
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
    );

    return pausableScheduler.add(modeSubscription);
  };

  const op = (modeObs: ObservableLike<FlowMode>) =>
    using(
      createScheduler(modeObs),

      pausableScheduler =>
        pipe(
          observable,
          subscribeOn(pausableScheduler),
          mapObs(data => ({ type: FlowEventType.Next, data })),
          endWith<FlowEvent<T>>({ type: FlowEventType.Complete }),
        ),
    );

  return createStreamable(op);
};
