import {
  map,
  keepType,
  takeFirst,
  never,
  concat,
  ObservableLike,
  fromArray,
  switchAll,
} from "@reactive-js/observable";
import { none, isSome } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import {
  StreamEvent,
  StreamEventType,
  StreamLike,
  StreamMode,
} from "./interfaces";

const emptyModeMapper = (mode: StreamMode) =>
  mode === StreamMode.Produce ? { type: StreamEventType.Complete } : none;

const onEmptyOperator = (obs: ObservableLike<StreamMode>) =>
  concat(
    pipe(obs, map(emptyModeMapper), keepType(isSome), takeFirst()),
    never(),
  );

export const emptyStream = <T>(): StreamLike<T> =>
  createAsyncEnumerable(onEmptyOperator);

const ofValueModeMapper = <T>(data: T) => (mode: StreamMode) =>
  mode === StreamMode.Produce
    ? fromArray([
        { type: StreamEventType.Next, data },
        { type: StreamEventType.Complete },
      ])
    : none;

const ofValueOperator = <T>(data: T) => (obs: ObservableLike<StreamMode>) =>
  concat(
    pipe(
      obs,
      map(ofValueModeMapper(data)),
      keepType(isSome),
      takeFirst(),
      switchAll<StreamEvent<T>>(),
    ),
    never<StreamEvent<T>>(),
  );

export const ofValueStream = <T>(data: T): StreamLike<T> =>
  createAsyncEnumerable(ofValueOperator(data));
