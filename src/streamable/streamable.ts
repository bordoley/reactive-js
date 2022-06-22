import { empty as emptyContainer } from "../container";
import { addDisposable, bindDisposables } from "../disposable";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableOperator,
  StreamLike,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservableWithScheduler,
  fromArrayT,
  map,
  subscribe,
} from "../observable";

import { isNone } from "../option";
import { SchedulerLike } from "../scheduler";
import { StreamableLike, StreamableOperator } from "../streamable";
import { createStream } from "./createStream";

class StreamableImpl<TReq, TData> implements StreamableLike<TReq, TData> {
  constructor(private readonly op: ObservableOperator<TReq, TData>) {}

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, TData> {
    return createStream(this.op, scheduler, options);
  }
}

export const createStreamable = <TReq, TData>(
  op: ObservableOperator<TReq, TData>,
): StreamableLike<TReq, TData> => new StreamableImpl(op);

class LiftedStreamable<TReqA, TReqB, TA, TB> extends StreamableImpl<TReqB, TB> {
  constructor(
    op: ObservableOperator<TReqB, TB>,
    readonly src: StreamableLike<TReqA, TA>,
    readonly obsOps: readonly ObservableOperator<any, any>[],
    readonly reqOps: readonly Function1<any, any>[],
  ) {
    super(op);
  }
}

const liftImpl = <TReqA, TReqB, TA, TB>(
  streamable: StreamableLike<TReqA, TA>,
  obsOps: readonly ObservableOperator<any, any>[],
  reqOps: readonly Function1<any, any>[],
) => {
  const src =
    streamable instanceof LiftedStreamable ? streamable.src : streamable;

  const op: ObservableOperator<TReqB, TB> = requests =>
    createObservableWithScheduler(scheduler => {
      const srcStream = pipe(src, stream(scheduler));
      const requestSubscription = pipe(
        requests,
        map((compose as any)(...reqOps)),
        subscribe(scheduler, srcStream.dispatch, srcStream),
      );

      bindDisposables(srcStream, requestSubscription);
      addDisposable(scheduler, srcStream);

      return pipe(srcStream, (compose as any)(...obsOps));
    });
  return new LiftedStreamable(op, src, obsOps, reqOps);
};

export const lift =
  <TReq, TA, TB>(
    op: ObservableOperator<TA, TB>,
  ): StreamableOperator<TReq, TA, TReq, TB> =>
  streamable => {
    const obsOps =
      streamable instanceof LiftedStreamable
        ? [...streamable.obsOps, op]
        : [op];
    const reqOps =
      streamable instanceof LiftedStreamable ? streamable.reqOps : [];

    return liftImpl(streamable, obsOps, reqOps);
  };

export const mapReq =
  <TReqA, TReqB, T>(
    op: Function1<TReqB, TReqA>,
  ): StreamableOperator<TReqA, T, TReqB, T> =>
  streamable => {
    const obsOps =
      streamable instanceof LiftedStreamable ? streamable.obsOps : [];
    const reqOps =
      streamable instanceof LiftedStreamable
        ? [op, ...streamable.reqOps]
        : [op];

    return liftImpl(streamable, obsOps, reqOps);
  };

const _empty = createStreamable<any, any>(_ => emptyContainer(fromArrayT));

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(options?: {
  readonly delay?: number;
}): StreamableLike<TReq, T> =>
  isNone(options)
    ? _empty
    : createStreamable<TReq, T>(_ => emptyContainer(fromArrayT, options));

export const stream =
  <TReq, T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T>, StreamLike<TReq, T>> =>
  streamable =>
    streamable.stream(scheduler, options);

const streamOnSchedulerFactory = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  scheduler: SchedulerLike,
  replay: number,
) => pipe(streamable, stream(scheduler, { replay }));

export const __stream = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  {
    replay = 0,
    scheduler,
  }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
): StreamLike<TReq, T> => {
  const currentScheduler = __currentScheduler();
  return __using(
    streamOnSchedulerFactory,
    streamable,
    scheduler ?? currentScheduler,
    replay,
  );
};
