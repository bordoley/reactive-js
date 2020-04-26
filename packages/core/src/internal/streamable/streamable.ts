import { StreamableLike } from "../../streamable";
import { SchedulerLike } from "../../scheduler";
import { createStream } from "./createStream";
import { ObservableOperator, ObservableLike, StreamLike, onNotify, empty as emptyObs, ignoreElements, map, merge, using } from "../../observable";
import { pipe } from "../../pipe";
import { StreamableOperator } from "./createStream";

class StreamableImpl<TReq, TData> implements StreamableLike<TReq, TData> {
  constructor(private readonly op: ObservableOperator<TReq, TData>) {}

  stream(
    scheduler: SchedulerLike,
    replayCount = 0,
  ): StreamLike<TReq, TData> {
    return createStream(this.op, scheduler, replayCount);
  }
}

export const createStreamable = <TReq, TData>(
  op: ObservableOperator<TReq, TData>,
): StreamableLike<TReq, TData> => new StreamableImpl(op);


class LiftedStreamable<TReqA, TReqB, TA, TB> extends StreamableImpl<TReqB, TB> {
  constructor(
    op: ObservableOperator<TReqB, TB>,
    readonly src: StreamableLike<TReqA, TA>,
    readonly obsOps: ObservableOperator<any, any>[],
    readonly reqOps: ((req: any) => any)[],
  ) {
    super(op);
  }
}

const reducer = <T>(acc: T, next: (req: T) => T): T => next(acc);

const createFactory = <TReqA, TReqB, TA, TB>(
  obsOps: ObservableOperator<any, any>[],
  reqOps: ((req: unknown) => any)[],
  requests: ObservableLike<TReqB>,
) => (stream: StreamLike<TReqA, TA>) => {
  const observable: ObservableLike<TB> = obsOps.reduce<any>(reducer, stream);

  const mapRequest = (req: TReqB): TReqA => reqOps.reduce<any>(reducer, req);

  const onRequest: ObservableLike<TB> = pipe(
    requests,
    map(mapRequest),
    onNotify((req: TReqA) => stream.dispatch(req)),
    ignoreElements<unknown, TB>(),
  );

  return merge(observable, onRequest);
};

const liftImpl = <TReqA, TReqB, TA, TB>(
  enumerable: StreamableLike<TReqA, TA>,
  obsOps: ObservableOperator<any, any>[],
  reqOps: ((req: any) => any)[],
) => {
  const src =
    enumerable instanceof LiftedStreamable ? enumerable.src : enumerable;
  const op = (requests: ObservableLike<TReqB>): ObservableLike<TB> =>
    using(
      scheduler => src.stream(scheduler),
      createFactory(obsOps, reqOps, requests),
    );
  return new LiftedStreamable(op, src, obsOps, reqOps);
};

export const lift = <TReq, TA, TB>(
  op: ObservableOperator<TA, TB>,
): StreamableOperator<TReq, TA, TReq, TB> => enumerable => {
  const obsOps =
    enumerable instanceof LiftedStreamable ? [...enumerable.obsOps, op] : [op];
  const reqOps =
    enumerable instanceof LiftedStreamable ? enumerable.reqOps : [];

  return liftImpl(enumerable, obsOps, reqOps);
};

export const liftReq = <TReqA, TReqB, T>(
  op: (req: TReqB) => TReqA,
): StreamableOperator<TReqA, T, TReqB, T> => enumerable => {
  const obsOps =
    enumerable instanceof LiftedStreamable ? enumerable.obsOps : [];
  const reqOps =
    enumerable instanceof LiftedStreamable ? [op, ...enumerable.reqOps] : [op];

  return liftImpl(enumerable, obsOps, reqOps);
};


const _empty = createStreamable<any, any>(_ => emptyObs());

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(): StreamableLike<TReq, T> => _empty;