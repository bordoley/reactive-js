import {
  generate as generateObs,
  map,
  keepType,
  takeFirst,
  never,
  concat,
  ObservableLike,
  fromArray,
  scanAsync,
  switchAll,
  empty,
} from "@reactive-js/observable";
import { none, isSome } from "@reactive-js/option";
import { Operator, compose } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import {
  StreamEvent,
  StreamEventType,
  StreamLike,
  StreamMode,
} from "./interfaces";
import { ScanAsyncMode } from "@reactive-js/observable/dist/types/internal/scanAsync";

const createStream = <T>(
  f: Operator<ObservableLike<StreamMode>, ObservableLike<StreamEvent<T>>>,
) => createAsyncEnumerable(obs => concat(f(obs), never()));

const emptyModeMapper = (mode: StreamMode) =>
  mode === StreamMode.Produce ? { type: StreamEventType.Complete } : none;

const onEmptyOperator = compose(
  map(emptyModeMapper),
  keepType(isSome),
  takeFirst(),
);

export const emptyStream = <T>(): StreamLike<T> =>
  createStream(onEmptyOperator);

const ofValueModeMapper = <T>(data: T) => (mode: StreamMode) =>
  mode === StreamMode.Produce
    ? fromArray([
        { type: StreamEventType.Next, data },
        { type: StreamEventType.Complete },
      ])
    : none;

const ofValueOperator = <T>(value: T) =>
  compose(
    map(ofValueModeMapper(value)),
    keepType(isSome),
    takeFirst(),
    switchAll<StreamEvent<T>>(),
  );

export const ofValueStream = <T>(value: T): StreamLike<T> =>
  createStream(ofValueOperator(value));

const generateScanner = <T>(generator: (acc: T) => T, delay: number) => (
  acc: T,
  ev: StreamMode,
): ObservableLike<T> =>
  ev === StreamMode.Produce
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
      map<T, StreamEvent<T>>(data => ({ type: StreamEventType.Next, data })),
    ),
  );
