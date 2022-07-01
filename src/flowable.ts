import { ContainerLike, ignoreElements, startWith } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import { Function1, compose, pipe } from "./functions";
import {
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
> extends StreamableLike<FlowMode, T, TStream>,
    ContainerLike {
  readonly T: unknown;
  readonly type: FlowableLike<this["T"]>;
}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<
  T,
  TStream extends FlowableSinkStreamLike<T> = FlowableSinkStreamLike<T>,
> extends StreamableLike<T, FlowMode, TStream> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export function createLiftedFlowable<T, A>(
  op1: ObservableOperator<T, A>,
): FlowableLike<A>;
export function createLiftedFlowable<T, A, B>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
): FlowableLike<B>;
export function createLiftedFlowable<T, A, B, C>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): FlowableLike<C>;
export function createLiftedFlowable<T, A, B, C, D>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): FlowableLike<D>;
export function createLiftedFlowable<T, A, B, C, D, E>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): FlowableLike<E>;
export function createLiftedFlowable<T, A, B, C, D, E, F>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): FlowableLike<F>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): FlowableLike<G>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G, H>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): FlowableLike<H>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
): FlowableLike<I>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
): FlowableLike<J>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J, K>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
  op11: ObservableOperator<J, K>,
): FlowableLike<K>;
export function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
  op11: ObservableOperator<J, K>,
  op12: ObservableOperator<K, L>,
): FlowableLike<L>;

export function createLiftedFlowable<T>(
  ...ops: readonly ObservableOperator<unknown, unknown>[]
): FlowableLike<T> {
  return (createLiftedStreamable as any)(...ops) as unknown as FlowableLike<T>;
}

export const flow =
  <T>(): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedFlowable((modeObs: ObservableLike<FlowMode>) =>
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

export const toObservableT: ToObservable<FlowableLike<unknown>> = {
  toObservable,
};
