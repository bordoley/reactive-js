import { empty as emptyContainer } from "../container";
import { add, bindTo } from "../disposable";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableOperator,
  StreamLike,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservable,
  dispatchTo,
  fromArrayT,
  map,
  onNotify,
  subscribe,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { sourceFrom } from "../source";
import { StreamableLike, StreamableOperator } from "../streamable";
import { createStream } from "./createStream";

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

export const fromObservableOperator = <TReq, TData>(
  op: ObservableOperator<TReq, TData>,
): StreamableLike<TReq, TData, StreamLike<TReq, TData>> =>
  createStreamble((scheduler, options) => createStream(op, scheduler, options));

class LiftedStreamable<TReqA, TReqB, TA, TB>
  implements StreamableLike<TReqB, TB, StreamLike<TReqB, TB>>
{
  readonly op: ObservableOperator<TReqB, TB>;
  readonly src: StreamableLike<TReqA, TA, StreamLike<TReqA, TA>>;

  constructor(
    src: StreamableLike<TReqA, TA, StreamLike<TReqA, TA>>,
    readonly obsOps: readonly ObservableOperator<any, any>[],
    readonly reqOps: readonly Function1<any, any>[],
  ) {
    this.src = src instanceof LiftedStreamable ? src.src : src;

    this.op = requests =>
      createObservable(observer => {
        const { scheduler } = observer;
        const srcStream = pipe(this.src, stream(scheduler));

        pipe(
          observer,
          sourceFrom(
            pipe(srcStream, (compose as any)(...obsOps)) as StreamLike<
              TReqB,
              TB
            >,
          ),
          add(srcStream),
          add(
            pipe(
              requests,
              map((compose as any)(...reqOps)),
              onNotify(dispatchTo(srcStream)),
              subscribe(scheduler),
              bindTo(srcStream),
            ),
          ),
        );
      });
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReqB, TB> {
    return createStream(this.op, scheduler, options);
  }
}

const liftImpl = <TReqA, TReqB, TA, TB>(
  streamable: StreamableLike<TReqA, TA, StreamLike<TReqA, TA>>,
  obsOps: readonly ObservableOperator<any, any>[],
  reqOps: readonly Function1<any, any>[],
) => new LiftedStreamable<TReqA, TReqB, TA, TB>(streamable, obsOps, reqOps);

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

const _empty = fromObservableOperator<any, any>(_ =>
  emptyContainer(fromArrayT),
);

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(
  options: {
    readonly delay?: number;
  } = {},
): StreamableLike<TReq, T, StreamLike<TReq, T>> => {
  const { delay = Math.max(options.delay ?? 0, 0) } = options;

  return delay === 0
    ? _empty
    : fromObservableOperator<TReq, T>(_ => emptyContainer(fromArrayT, options));
};

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable.stream(scheduler, options);

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
