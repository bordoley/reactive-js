import { addDisposableOrTeardown, add } from "../../disposable";
import { pipe, compose, Operator } from "../../functions";
import {
  ObservableOperator,
  StreamLike,
  onNotify,
  empty as emptyObs,
  map,
  using,
  dispatchTo,
} from "../../observable";
import { isNone } from "../../option";
import { SchedulerLike } from "../../scheduler";
import { subscribe } from "../observable/subscribe";
import { createStream, StreamableOperator } from "./createStream";
import { StreamableLike } from "./interfaces";

class StreamableImpl<TReq, TData> implements StreamableLike<TReq, TData> {
  constructor(private readonly op: ObservableOperator<TReq, TData>) {}

  stream(scheduler: SchedulerLike, replayCount = 0): StreamLike<TReq, TData> {
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
    readonly reqOps: Operator<any, any>[],
  ) {
    super(op);
  }
}

const liftImpl = <TReqA, TReqB, TA, TB>(
  streamable: StreamableLike<TReqA, TA>,
  obsOps: ObservableOperator<any, any>[],
  reqOps: Operator<any, any>[],
) => {
  const src =
    streamable instanceof LiftedStreamable ? streamable.src : streamable;

  const op: ObservableOperator<TReqB, TB> = requests =>
    using(scheduler => {
      const srcStream = stream(src, scheduler);
      const requestSubscription = pipe(
        requests,
        map((compose as any)(...reqOps)),
        onNotify(dispatchTo(srcStream)),
        subscribe(scheduler),
        addDisposableOrTeardown(srcStream),
      );

      return add(srcStream, requestSubscription);
    }, (compose as any)(...obsOps));
  return new LiftedStreamable(op, src, obsOps, reqOps);
};

export const lift = <TReq, TA, TB>(
  op: ObservableOperator<TA, TB>,
): StreamableOperator<TReq, TA, TReq, TB> => streamable => {
  const obsOps =
    streamable instanceof LiftedStreamable ? [...streamable.obsOps, op] : [op];
  const reqOps =
    streamable instanceof LiftedStreamable ? streamable.reqOps : [];

  return liftImpl(streamable, obsOps, reqOps);
};

export const mapReq = <TReqA, TReqB, T>(
  op: Operator<TReqB, TReqA>,
): StreamableOperator<TReqA, T, TReqB, T> => streamable => {
  const obsOps =
    streamable instanceof LiftedStreamable ? streamable.obsOps : [];
  const reqOps =
    streamable instanceof LiftedStreamable ? [op, ...streamable.reqOps] : [op];

  return liftImpl(streamable, obsOps, reqOps);
};

const _empty = createStreamable<any, any>(_ => emptyObs());

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(options?: {
  delay: number;
}): StreamableLike<TReq, T> =>
  isNone(options) ? _empty : createStreamable<TReq, T>(_ => emptyObs(options));

export const stream = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount?: number,
): StreamLike<TReq, T> => streamable.stream(scheduler, replayCount);
