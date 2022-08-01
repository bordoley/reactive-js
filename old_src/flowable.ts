import { createStream } from "./__internal__.stream";
import { ContainerLike, ignoreElements, startWith } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import { Function1, compose, pipe } from "./functions";
import {
  FromObservable,
  ObservableLike,
  ObservableOperator,
  ToObservable,
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
import { getScheduler } from "./observer";
import { sourceFrom as sourceFromReactiveContainer } from "./reactiveContainer";
import { createPausableScheduler } from "./scheduler";
import { StreamLike } from "./stream";
import {
  StreamableLike,
  createLiftedStreamable,
  sourceFrom,
} from "./streamable";

export type FlowMode = "resume" | "pause";

export interface FlowableLike<
  T,
  TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>,
> extends StreamableLike<FlowMode, T, TStream>,
    ContainerLike {
  readonly T: unknown;
  readonly TContainerOf: FlowableLike<this["T"]>;
}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export const fromObservable =
  <T>(): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedFlowable((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = pipe(
          observer,
          getScheduler,
          createPausableScheduler,
        );

        pipe(
          observer,
          sourceFromReactiveContainer(
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

export const fromObservableT: FromObservable<FlowableLike<unknown>> = {
  fromObservable,
};

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

export const toObservableT: ToObservable<FlowableLike<unknown>> = {
  toObservable,
};

export const TContainerOf: FlowableLike<unknown> = undefined as any;
