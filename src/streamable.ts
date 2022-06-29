import { concatWith, fromValue, ignoreElements, startWith } from "./container";
import { DispatcherLike, dispatch, dispatchTo } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  compose,
  identity as identityF,
  length,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  AbstractDisposableObservable,
  MulticastObservableLike,
  ObservableLike,
  ObservableOperator,
  StreamLike,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  concatT,
  createObservable,
  createSubject,
  distinctUntilChanged,
  fromArrayT,
  fromArrayT as fromArrayTObs,
  fromDisposable,
  keepT,
  merge,
  mergeT,
  observerCount,
  onNotify,
  onSubscribe,
  publish,
  reduce,
  replay,
  scan,
  subscribe,
  subscribeOn,
  takeFirst,
  takeUntil,
} from "./observable";
import { Observer, scheduler as getScheduler } from "./observer";
import { Option, isSome, none } from "./option";
import { SchedulerLike, createPausableScheduler } from "./scheduler";
import { notifySink, sinkInto as sinkIntoSink, sourceFrom } from "./source";

export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
  stream(
    this: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface StreamableStateLike<T>
  extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {}
export interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {}

export type FlowMode = "resume" | "pause";

export interface FlowableLike<T>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<T>
  extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable.stream(scheduler, options);

class StreamImpl<TReq, T>
  extends AbstractDisposableObservable<T>
  implements StreamLike<TReq, T>
{
  constructor(
    private readonly dispatcher: DispatcherLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {
    super();
  }

  get observerCount(): number {
    return observerCount(this.observable);
  }

  get replay(): number {
    return replay(this.observable);
  }

  dispatch(req: TReq) {
    pipe(this.dispatcher, dispatch(req));
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkIntoSink(observer));
  }
}

const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => {
  const subject = createSubject<TReq>();
  const observable = pipe(subject, op, publish(scheduler, options));

  return pipe(
    new StreamImpl(subject, observable),
    add(subject),
    // FIXME: This seems wrong.
    addTo(observable),
  );
};

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
): StreamableLike<TReq, TData, TStream> => new CreateStreamable(stream);

export function createLiftedStreamable<T, A>(
  op1: ObservableOperator<T, A>,
): StreamableLike<T, A, StreamLike<T, A>>;
export function createLiftedStreamable<T, A, B>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
): StreamableLike<T, B, StreamLike<T, B>>;
export function createLiftedStreamable<T, A, B, C>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): StreamableLike<T, C, StreamLike<T, C>>;
export function createLiftedStreamable<T, A, B, C, D>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): StreamableLike<T, D, StreamLike<T, D>>;
export function createLiftedStreamable<T, A, B, C, D, E>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): StreamableLike<T, E, StreamLike<T, E>>;
export function createLiftedStreamable<T, A, B, C, D, E, F>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): StreamableLike<T, F, StreamLike<T, F>>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): StreamableLike<T, G, StreamLike<T, G>>;
export function createLiftedStreamable<T, A, B, C, D, E, F, G, H>(
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): StreamableLike<T, H, StreamLike<T, H>>;
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
): StreamableLike<T, I, StreamLike<T, I>>;
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
): StreamableLike<T, J, StreamLike<T, J>>;
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
): StreamableLike<T, K, StreamLike<T, K>>;
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
): StreamableLike<T, L, StreamLike<T, L>>;

export function createLiftedStreamable<TReq, TData>(
  ...ops: readonly ObservableOperator<unknown, unknown>[]
): StreamableLike<TReq, TData, StreamLike<TReq, TData>> {
  const op = length(ops) > 1 ? (compose as any)(...ops) : ops[0];
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
): StreamableLike<TAction, T, StreamLike<TAction, T>> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      return pipe(
        obs,
        scan(reducer, returns(acc)),
        concatWith(mergeT, fromValue(fromArrayTObs)(acc)),
        distinctUntilChanged(options),
        onNotify(notifySink(observer)),
        subscribe(getScheduler(observer)),
        bindTo(observer),
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

const _empty = createLiftedStreamable<any, any>(takeFirst({ count: 0 }));

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(): StreamableLike<
  TReq,
  T,
  StreamLike<TReq, T>
> => _empty;

export const flow =
  <T>({
    scheduler,
  }: {
    scheduler?: SchedulerLike;
  } = {}): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedStreamable((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = createPausableScheduler(
          scheduler ?? getScheduler(observer),
        );

        pipe(
          observer,
          sourceFrom(
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

const _identity = {
  stream(scheduler: SchedulerLike, options?: { readonly replay: number }) {
    return createStream(identityF, scheduler, options);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T, StreamLike<T, T>> =>
  _identity as StreamableLike<T, T, StreamLike<T, T>>;

export const sinkInto =
  <TReq, T, TOut>(dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) =>
  (src: StreamableLike<TReq, T, StreamLike<TReq, T>>): ObservableLike<TOut> =>
    createObservable(observer => {
      const srcStream = pipe(src, stream(getScheduler(observer)));
      const destStream = pipe(dest, stream(getScheduler(observer)));

      pipe(
        merge(
          pipe(
            srcStream,
            onNotify(dispatchTo(destStream)),
            ignoreElements(keepT),
            onSubscribe(() => destStream),
          ),
          pipe(
            destStream,
            onNotify(dispatchTo(srcStream)),
            ignoreElements(keepT),
            onSubscribe(() => srcStream),
          ),
        ),
        ignoreElements(keepT),
        sinkIntoSink(observer),
      );
    });

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

class FlowableSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposableObservable<TAcc>
  implements FlowableSinkLike<T>, MulticastObservableLike<TAcc>
{
  constructor(
    private readonly subject: StreamLike<TAcc, TAcc>,
    private readonly streamable: FlowableSinkLike<T>,
  ) {
    super();
  }

  get observerCount(): number {
    return observerCount(this.subject);
  }

  get replay(): number {
    return replay(this.subject);
  }

  sink(observer: Observer<TAcc>): void {
    pipe(this.subject, sinkIntoSink(observer));
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay: number },
  ): StreamLike<T, FlowMode> {
    return pipe(this.streamable, stream(scheduler, options), addTo(this));
  }
}

/** @experimental */
export const createFlowableSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): FlowableSinkLike<T> & MulticastObservableLike<TAcc> => {
  const subject = createSubject(options);

  return pipe(
    createLiftedStreamable(
      reduce(reducer, initialValue),
      onNotify(dispatchTo(subject)),
      ignoreElements(keepT),
      startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
    ),
    streamable => new FlowableSinkAccumulatorImpl(subject, streamable),
    add(subject),
  );
};
