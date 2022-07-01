import { ignoreElements, startWith } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import { Function1, compose, pipe } from "./functions";
import {
  ObservableLike,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  concatT,
  createObservable,
  fromArrayT,
  fromDisposable,
  keepT,
  onNotify,
  onSubscribe,
  subscribe,
  subscribeOn,
  takeUntil,
} from "./observable";
import { scheduler as getScheduler } from "./observer";
import { createPausableScheduler } from "./scheduler";
import { sourceFrom as sourceFromSource } from "./source";
import { StreamLike, createStream } from "./stream";
import {
  StreamableLike,
  createLiftedStreamable,
  sourceFrom,
} from "./streamable";

export type FlowMode = "resume" | "pause";

export interface FlowableLike<
  T,
  TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>,
> extends StreamableLike<FlowMode, T, TStream> {}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<
  T,
  TStream extends FlowableSinkStreamLike<T> = FlowableSinkStreamLike<T>,
> extends StreamableLike<T, FlowMode, TStream> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export const flow =
  <T>(): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedStreamable((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = createPausableScheduler(
          getScheduler(observer),
        );

        pipe(
          observer,
          sourceFromSource(
            pipe(
              observable,
              subscribeOn(pausableScheduler),
              pipe(pausableScheduler, fromDisposable, takeUntil),
            ),
          ),
          add(
            pipe(
              modeObs,
              onNotify((mode: FlowMode) => {
                switch (mode) {
                  case "pause":
                    pausableScheduler.pause();
                    break;
                  case "resume":
                    pausableScheduler.resume();
                    break;
                }
              }),
              subscribe(getScheduler(observer)),
              bindTo(pausableScheduler),
            ),
          ),
          add(pausableScheduler),
        );
      }),
    );

export const toObservable =
  <T>(): Function1<FlowableLike<T>, ObservableLike<T>> =>
  src =>
    createObservable(observer => {
      const { dispatcher, scheduler } = observer;

      const op = compose(
        onNotify<T>(dispatchTo(dispatcher)),
        ignoreElements(keepT),
        startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
        onSubscribe(() => dispatcher),
      );

      pipe(createStream(op, scheduler), sourceFrom(src), addTo(observer));
    });
