import {
  generate as generateObs,
  map as mapObs,
  keepType,
  takeFirst,
  never,
  concat,
  ObservableLike,
  scanAsync,
  ScanAsyncMode,
  empty,
  genMap,
  createObservable,
  subscribe,
  onNotify,
  ofValue,
} from "@reactive-js/observable";
import { none, isSome } from "@reactive-js/option";
import { Operator, compose, pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import {
  StreamEvent,
  StreamEventType,
  StreamLike,
  StreamMode,
} from "./interfaces";
import { map } from "./map";
import { createPausableScheduler } from "./pausableScheduler";

const createStream = <T>(
  f: Operator<ObservableLike<StreamMode>, ObservableLike<StreamEvent<T>>>,
) => createAsyncEnumerable(obs => concat(f(obs), never()));

const emptyModeMapper = (mode: StreamMode) =>
  mode === StreamMode.Resume ? { type: StreamEventType.Complete } : none;

const onEmptyOperator = compose(
  mapObs(emptyModeMapper),
  keepType(isSome),
  takeFirst(),
);

export const emptyStream = <T>(): StreamLike<T> =>
  createStream(onEmptyOperator);

const ofValueOperator = <T>(data: T) =>
  genMap(function*(mode: StreamMode): Generator<StreamEvent<T>> {
    switch (mode) {
      case StreamMode.Resume:
        yield { type: StreamEventType.Next, data };
        yield { type: StreamEventType.Complete };
    }
  });

export const ofValueStream = <T>(value: T): StreamLike<T> =>
  createStream(ofValueOperator(value));

const generateScanner = <T>(generator: (acc: T) => T, delay: number) => (
  acc: T,
  ev: StreamMode,
): ObservableLike<T> =>
  ev === StreamMode.Resume
    ? generateObs(generator, () => acc, delay)
    : empty();

export const generateStream = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): StreamLike<T> =>
  createStream(
    compose(
      scanAsync(
        generateScanner(generator, delay),
        initialValue,
        ScanAsyncMode.Switching,
      ),
      mapObs<T, StreamEvent<T>>(data => ({ type: StreamEventType.Next, data })),
    ),
  );

export const mapStream = <TA, TB>(
  mapper: (v: TA) => TB,
): Operator<StreamLike<TA>, StreamLike<TB>> =>
  map((ev: StreamEvent<TA>) =>
    ev.type === StreamEventType.Next
      ? {
          type: StreamEventType.Next,
          data: mapper(ev.data),
        }
      : { type: StreamEventType.Complete },
  );

export const fromObservableStream = <T>(
  observable: ObservableLike<T>,
): StreamLike<T> =>
  createAsyncEnumerable(modeObs =>
    createObservable(subscriber => {
      const pausableScheduler = createPausableScheduler(subscriber);

      const modeSubscription = pipe(
        modeObs,
        onNotify(mode => {
          switch (mode) {
            case StreamMode.Pause:
              pausableScheduler.pause();
              break;
            case StreamMode.Resume:
              pausableScheduler.resume();
              break;
          }
        }),
        subscribe(subscriber),
      );

      const eventStream = concat<StreamEvent<T>>(
        pipe(
          observable,
          mapObs(data => ({ type: StreamEventType.Next, data })),
        ),
        ofValue({ type: StreamEventType.Complete }),
        never(),
      );

      const eventStreamSubscription =pipe(eventStream, onNotify(x => subscriber.notify(x)), subscribe(pausableScheduler));
      subscriber.add(pausableScheduler).add(modeSubscription).add(eventStreamSubscription);
    }),
  );
