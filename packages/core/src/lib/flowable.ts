import { add, addDisposableOrTeardown } from "./disposable";
import {
  Operator,
  compose,
  pipe,
  returns,
  isEqualTo,
  Factory,
  Reducer,
} from "./functions";
import { createObservable } from "./internal/observable/createObservable";
import {
  ObservableLike,
  endWith,
  map as mapObs,
  mapTo,
  genMap,
  keepType,
  onNotify,
  reduce,
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
  StreamLike,
  dispatch,
} from "./observable";
import { SchedulerLike, toPausableScheduler } from "./scheduler";

import {
  StreamableLike,
  createStreamable,
  map as mapStream,
  lift,
  stream,
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

export const next = <T>(data: T): FlowEvent<T> => ({
  type: FlowEventType.Next,
  data,
});
const _complete: FlowEvent<any> = { type: FlowEventType.Complete };
export const complete = <T>(): FlowEvent<T> => _complete;

/** @noInheritDoc */
export interface FlowableLike<T>
  extends StreamableLike<FlowMode, FlowEvent<T>> {}

/** @noInheritDoc */
export interface FlowableSinkLike<T>
  extends StreamableLike<FlowEvent<T>, FlowMode> {}

export type FlowableOperator<TA, TB> = Operator<
  FlowableLike<TA>,
  FlowableLike<TB>
>;

const _empty: FlowableLike<any> = createStreamable(
  compose(
    keep(isEqualTo(FlowMode.Resume)),
    takeWhile(isEqualTo(FlowMode.Pause), { inclusive: true }),
    mapTo(complete()),
  ),
);
export const empty = <T>(): FlowableLike<T> => _empty;

export const fromValue = <T>(data: T): FlowableLike<T> =>
  createStreamable(
    compose(
      keep(isEqualTo(FlowMode.Resume)),
      takeFirst(),
      genMap(function*(mode: FlowMode): Generator<FlowEvent<T>> {
        switch (mode) {
          case FlowMode.Resume:
            yield next(data);
            yield complete();
        }
      }),
    ),
  );

export const map = <TA, TB>(
  mapper: Operator<TA, TB>,
): Operator<FlowableLike<TA>, FlowableLike<TB>> =>
  mapStream((ev: FlowEvent<TA>) =>
    ev.type === FlowEventType.Next ? pipe(ev.data, mapper, next) : ev,
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
      addDisposableOrTeardown(pausableScheduler),
    );

    return add(pausableScheduler, modeSubscription);
  };

  const op = (modeObs: ObservableLike<FlowMode>) =>
    using(createScheduler(modeObs), pausableScheduler =>
      pipe(
        observable,
        subscribeOn(pausableScheduler),
        mapObs(next),
        endWith<FlowEvent<T>>(complete()),
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
              if (data.length > 0) {
                yield next(data);
              }
              break;
            }
            case FlowEventType.Complete: {
              const data = decoder.decode();
              if (data.length > 0) {
                yield next(data);
              }
              yield complete<string>();
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
          return next(data);
        }
        case FlowEventType.Complete: {
          return ev;
        }
      }
    },
  ),
);

const isNext = <T>(
  ev: FlowEvent<T>,
): ev is { readonly type: FlowEventType.Next; readonly data: T } =>
  ev.type === FlowEventType.Next;

/** 
 * @experimental 
 * @noInheritDoc 
 * */
export interface FlowableSinkAccumulatorLike<T, TAcc>
  extends FlowableSinkLike<T> {
  readonly acc: TAcc;
}

class FlowableSinkAccumulatorImpl<T, TAcc>
  implements FlowableSinkAccumulatorLike<T, TAcc> {
  constructor(private readonly reducer: Reducer<T, TAcc>, private _acc: TAcc) {}

  get acc() {
    return this._acc;
  }

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<FlowEvent<T>, FlowMode> {
    const op = (events: ObservableLike<FlowEvent<T>>) =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNext),
            keepType(isNext),
            mapObs(ev => ev.data),
            reduce(this.reducer, returns(this.acc)),
            onNotify(acc => {
              this._acc = acc;
            }),
            subscribe(scheduler),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatch(dispatcher, FlowMode.Pause);
            dispatch(dispatcher, FlowMode.Resume);
            add(eventsSubscription, dispatcher);
          }),
      );
    return stream(createStreamable(op), scheduler, replayCount);
  }
}

/** @experimental */
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): FlowableSinkAccumulatorLike<T, TAcc> =>
  new FlowableSinkAccumulatorImpl(reducer, initialValue());
