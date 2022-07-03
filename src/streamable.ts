import { createStream } from "./__internal__.stream";
import { concatWith, fromValue, ignoreElements } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  compose,
  getLength,
  newInstance,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  ObservableOperator,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservable,
  distinctUntilChanged,
  fromArrayT as fromArrayTObs,
  keepT,
  merge,
  mergeT,
  onNotify,
  onSubscribe,
  scan,
  subscribe,
} from "./observable";
import { Option, isSome, none } from "./option";
import { SchedulerLike } from "./scheduler";
import { sinkInto as sinkIntoSink } from "./source";
import { StreamLike } from "./stream";

export interface StreamableLike<
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  stream(
    this: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface StreamableStateLike<
  T,
  TStream extends StateStreamLike<T> = StateStreamLike<T>,
> extends StreamableLike<Updater<T>, T, TStream> {}
export interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {}

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable.stream(scheduler, options);

class CreateStreamable<
  TReq,
  TData,
  TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
> implements StreamableLike<TReq, TData, TStream>
{
  constructor(
    readonly stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => TStream,
  ) {}
}

export const createStreamble = <
  TReq,
  TData,
  TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
>(
  stream: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => TStream,
): StreamableLike<TReq, TData, TStream> =>
  newInstance(CreateStreamable, stream);

export function createLiftedStreamable<T, A>(
  op1: ObservableOperator<T, A>,
): StreamableLike<T, A>;
export function createLiftedStreamable<T, A, B>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
): StreamableLike<T, B>;
export function createLiftedStreamable<T, A, B, C>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): StreamableLike<T, C>;
export function createLiftedStreamable<T, A, B, C, D>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): StreamableLike<T, D>;
export function createLiftedStreamable<T, A, B, C, D, E>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): StreamableLike<T, E>;
export function createLiftedStreamable<T, A, B, C, D, E, F>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): StreamableLike<T, F>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): StreamableLike<T, G>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): StreamableLike<T, H>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
): StreamableLike<T, I>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J>(
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
): StreamableLike<T, J>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K>(
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
): StreamableLike<T, K>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K, L>(
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
): StreamableLike<T, L>;

export function createLiftedStreamable<TReq, TData>(
  ...ops: readonly ObservableOperator<unknown, unknown>[]
): StreamableLike<TReq, TData> {
  const op = getLength(ops) > 1 ? (compose as any)(...ops) : ops[0];
  return createStreamble((scheduler, options) =>
    createStream(op, scheduler, options),
  );
}

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      return pipe(
        obs,
        scan(reducer, returns(acc)),
        concatWith(mergeT, fromValue(fromArrayTObs)(acc)),
        distinctUntilChanged(options),
        sinkIntoSink(observer),
      );
    }),
  );

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableStateLike<T> =>
  createActionReducer(updateReducer, initialState, options);

const streamOnSchedulerFactory = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  scheduler: SchedulerLike,
  replay: number,
) => pipe(streamable, stream(scheduler, { replay }));

export const __stream = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  {
    replay = 0,
    scheduler,
  }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
): TStream => {
  const currentScheduler = __currentScheduler();
  return __using(
    streamOnSchedulerFactory,
    streamable,
    scheduler ?? currentScheduler,
    replay,
  );
};

const createStateOptions = <T>(equality: Option<Equality<T>>) =>
  isSome(equality) ? { equality } : none;

export const __state = <T>(
  initialState: () => T,
  options: {
    readonly equality?: Option<Equality<T>>;
  } = {},
): StateStreamLike<T> => {
  const { equality } = options;
  const optionsMemo = __memo(createStateOptions, equality);
  const streamable = __memo(createStateStore, initialState, optionsMemo);
  return __stream(streamable);
};

export const sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));

    pipe(
      merge(
        pipe(
          srcStream,
          onNotify<T>(dispatchTo(dest)),
          ignoreElements(keepT),
          onSubscribe(() => dest),
        ),
        pipe(dest, onNotify(dispatchTo(srcStream)), ignoreElements(keepT)),
      ),
      ignoreElements(keepT),
      subscribe(scheduler),
      addTo(dest),
      add(srcStream),
    );

    return src;
  };

export const sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, sinkInto(dest));
    return dest;
  };
