import { addDisposableOrTeardown, add } from "../../disposable";
import { pipe, compose, Function1 } from "../../functions";
import {
  ObservableFunction,
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
import { createStream, StreamableFunction } from "./createStream";
import { StreamableLike } from "./interfaces";

class StreamableImpl<TReq, TData> implements StreamableLike<TReq, TData> {
  constructor(private readonly op: ObservableFunction<TReq, TData>) {}

  stream(scheduler: SchedulerLike, replayCount = 0): StreamLike<TReq, TData> {
    return createStream(this.op, scheduler, replayCount);
  }
}

export const createStreamable = <TReq, TData>(
  op: ObservableFunction<TReq, TData>,
): StreamableLike<TReq, TData> => new StreamableImpl(op);

class LiftedStreamable<TReqA, TReqB, TA, TB> extends StreamableImpl<TReqB, TB> {
  constructor(
    op: ObservableFunction<TReqB, TB>,
    readonly src: StreamableLike<TReqA, TA>,
    readonly obsOps: ObservableFunction<any, any>[],
    readonly reqOps: Function1<any, any>[],
  ) {
    super(op);
  }
}

const liftImpl = <TReqA, TReqB, TA, TB>(
  streamable: StreamableLike<TReqA, TA>,
  obsOps: ObservableFunction<any, any>[],
  reqOps: Function1<any, any>[],
) => {
  const src =
    streamable instanceof LiftedStreamable ? streamable.src : streamable;

  const op: ObservableFunction<TReqB, TB> = requests =>
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
  op: ObservableFunction<TA, TB>,
): StreamableFunction<TReq, TA, TReq, TB> => streamable => {
  const obsOps =
    streamable instanceof LiftedStreamable ? [...streamable.obsOps, op] : [op];
  const reqOps =
    streamable instanceof LiftedStreamable ? streamable.reqOps : [];

  return liftImpl(streamable, obsOps, reqOps);
};

export const mapReq = <TReqA, TReqB, T>(
  op: Function1<TReqB, TReqA>,
): StreamableFunction<TReqA, T, TReqB, T> => streamable => {
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
