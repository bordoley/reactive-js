import {
  StreamableLike,
  createStreamable,
  map as mapStream,
} from "./streamable";
import { Operator, compose, pipe } from "./pipe";
import {
  ObservableLike,
  concat,
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

const createFlowable = <T>(
  f: Operator<ObservableLike<FlowMode>, ObservableLike<FlowEvent<T>>>,
) => createStreamable(obs => f(obs));

const emptyModeMapper = (mode: FlowMode) =>
  mode === FlowMode.Resume ? { type: FlowEventType.Complete } : none;

const onEmptyOperator = compose(
  mapObs(emptyModeMapper),
  keepType(isSome),
  takeFirst(),
);

export const empty = <T>(): FlowableLike<T> => createFlowable(onEmptyOperator);

const ofValueOperator = <T>(data: T) =>
  genMap(function*(mode: FlowMode): Generator<FlowEvent<T>> {
    switch (mode) {
      case FlowMode.Resume:
        yield { type: FlowEventType.Next, data };
        yield { type: FlowEventType.Complete };
    }
  });

export const ofValue = <T>(value: T): FlowableLike<T> =>
  createFlowable(ofValueOperator(value));

const generateScanner = <T>(generator: (acc: T) => T, delay: number) => (
  acc: T,
  ev: FlowMode,
): ObservableLike<T> =>
  ev === FlowMode.Resume
    ? generateObs(generator, () => acc, delay)
    : emptyObs();

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): FlowableLike<T> =>
  createFlowable(
    compose(
      scanAsync(
        generateScanner(generator, delay),
        initialValue,
        ScanAsyncMode.Switching,
      ),
      mapObs<T, FlowEvent<T>>(data => ({ type: FlowEventType.Next, data })),
    ),
  );

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
): FlowableLike<T> => createStreamable(
  modeObs => using(
    scheduler => {
      const pausableScheduler = toPausableScheduler(scheduler);
      const modeSubscription = pipe(
        modeObs,
        onNotify(mode => {
          switch (mode) {
            case FlowMode.Pause:
              pausableScheduler.pause();
              break;
            case FlowMode.Resume:
              pausableScheduler.resume();
              break;
          }
        }),
        subscribe(scheduler),
      );

      return pausableScheduler.add(modeSubscription);
    },

    pausableScheduler => pipe(
      observable,
      subscribeOn(pausableScheduler),
      mapObs(data => ({ type: FlowEventType.Next, data })),
      endWith<FlowEvent<T>>({ type: FlowEventType.Complete }),
    )
  )
)
