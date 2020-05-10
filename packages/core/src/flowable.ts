import { Operator, compose, pipe, returns } from "./functions";
import { SchedulerLike } from "./scheduler";
import {
  ObservableLike,
  endWith,
  map as mapObs,
  mapTo,
  genMap,
  onNotify,
  subscribe,
  subscribeOn,
  takeFirst,
  takeWhile,
  using,
  keep,
  withLatestFrom,
  compute,
  concatMap,
  fromIterator,
} from "./observable";
import { toPausableScheduler } from "./scheduler";
import {
  StreamableLike,
  createStreamable,
  map as mapStream,
  lift,
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

const _empty: FlowableLike<any> = createStreamable(
  compose(
    keep(mode => mode === FlowMode.Resume),
    takeWhile(mode => mode !== FlowMode.Resume, { inclusive: true }),
    mapTo({ type: FlowEventType.Complete }),
  ),
);
export const empty = <T>(): FlowableLike<T> => _empty;

export const fromValue = <T>(data: T): FlowableLike<T> =>
  createStreamable(
    compose(
      keep(mode => mode === FlowMode.Resume),
      takeFirst(),
      genMap(function*(mode: FlowMode): Generator<FlowEvent<T>> {
        switch (mode) {
          case FlowMode.Resume:
            yield { type: FlowEventType.Next, data };
            yield { type: FlowEventType.Complete };
        }
      }),
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
      : ev,
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
    ).add(pausableScheduler);

    return pausableScheduler.add(modeSubscription);
  };

  const op = (modeObs: ObservableLike<FlowMode>) =>
    using(createScheduler(modeObs), pausableScheduler =>
      pipe(
        observable,
        subscribeOn(pausableScheduler),
        mapObs(data => ({ type: FlowEventType.Next, data })),
        endWith<FlowEvent<T>>({ type: FlowEventType.Complete }),
      ),
    );

  return createStreamable(op);
};

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): FlowableOperator<ArrayBuffer, string> =>
  lift(
    compose(
      withLatestFrom(
        compute<TextDecoder>()(() => new TextDecoder(charset, options)),
        function*(ev, decoder) {
          switch (ev.type) {
            case FlowEventType.Next: {
              const data = decoder.decode(ev.data, { stream: true });
              yield { type: FlowEventType.Next, data };
              break;
            }
            case FlowEventType.Complete: {
              const data = decoder.decode();
              if (data.length > 0) {
                yield { type: FlowEventType.Next, data };
              }

              yield { type: FlowEventType.Complete };
              break;
            }
          }
        },
      ),
      concatMap(compose(returns, fromIterator())),
    ),
  );

export const encodeUtf8: FlowableOperator<string, Uint8Array> = lift(
  withLatestFrom(
    compute<TextEncoder>()(() => new TextEncoder()),
    (ev, textEncoder) => {
      switch (ev.type) {
        case FlowEventType.Next: {
          const data = textEncoder.encode(ev.data);
          return { type: FlowEventType.Next, data };
        }
        case FlowEventType.Complete: {
          return ev;
        }
      }
    },
  ),
);
