import { DispatcherLike, dispatch } from "../dispatcher";
import { add, addTo } from "../disposable";
import { Function1, compose, length, pipe } from "../functions";
import {
  AbstractDisposableObservable,
  MulticastObservableLike,
  ObservableOperator,
  StreamLike,
  createSubject,
  observerCount,
  publish,
  replay,
} from "../observable";
import { Observer } from "../observer";
import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";
import { StreamableLike } from "../streamable";

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
    pipe(this.observable, sinkInto(observer));
  }
}

export const createStream = <TReq, T>(
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

class CreateStreamable<TReq, TData, TStream extends StreamLike<TReq, TData>>
  implements StreamableLike<TReq, TData, TStream>
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
  TStream extends StreamLike<TReq, TData>,
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

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable.stream(scheduler, options);
