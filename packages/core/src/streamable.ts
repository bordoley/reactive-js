import {
  MulticastObservableLike,
  SafeSubscriberLike,
  ObservableOperator,
  createSubject,
  toSafeSubscriber,
  publish,
  SubscriberLike,
  AbstractDelegatingSubscriber,
  ObservableLike,
  empty as emptyObs,
  map as mapObs,
  onNotify,
  ignoreElements,
  merge,
  using,
  createObservable,
  endWith,
  scan,
  startWith,
  distinctUntilChanged,
} from "./observable";
import { SchedulerLike } from "./scheduler";
import { pipe } from "./pipe";
import { none } from "./option";

/** @noInheritDoc */
export interface StreamLike<TReq, T>
  extends SafeSubscriberLike<TReq>,
    MulticastObservableLike<T> {}

export interface StreamableLike<TReq, T> {
  stream(scheduler: SchedulerLike, replayCount?: number): StreamLike<TReq, T>;
}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = {
  (enumerable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};

class StreamImpl<TReq, T> extends AbstractDelegatingSubscriber<TReq, TReq>
  implements StreamLike<TReq, T> {
  readonly isSynchronous = false;

  constructor(
    delegate: SafeSubscriberLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {
    super(delegate);
    this.add(observable);
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  notify(req: TReq) {
    this.delegate.notify(req);
  }

  dispatch(req: TReq) {
    (this.delegate as SafeSubscriberLike<TReq>).dispatch(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const createStream = <TReq, TData>(
  op: ObservableOperator<TReq, TData>,
  scheduler: SchedulerLike,
  replayCount?: number,
): StreamLike<TReq, TData> => {
  const subject = createSubject<TReq>(scheduler);
  const safeSubscriber = toSafeSubscriber(subject);
  const observable = pipe(subject, op, publish(scheduler, replayCount));

  return new StreamImpl(safeSubscriber, observable);
};

class StreamableImpl<TReq, TData> implements StreamableLike<TReq, TData> {
  constructor(private readonly op: ObservableOperator<TReq, TData>) {}

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<TReq, TData> {
    return createStream(this.op, scheduler, replayCount);
  }
}

export const createStreamable = <TReq, TData>(
  op: ObservableOperator<TReq, TData>,
): StreamableLike<TReq, TData> => new StreamableImpl(op);

const _identity = {
  stream: (scheduler: SchedulerLike, replayCount = 0) => {
    const subject = createSubject(scheduler, replayCount);
    const safeSubscriber = toSafeSubscriber(subject);

    return new StreamImpl(safeSubscriber, subject);
  },
};

/**
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T> =>
  _identity as StreamableLike<T, T>;

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
    mapObs(mapRequest),
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

export const map = <TA, TB>(mapper: (v: TA) => TB) => lift(mapObs(mapper));

const _empty = createStreamable<any, any>(_ => emptyObs());

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(): StreamableLike<TReq, T> => _empty;

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T>,
  dest: StreamableLike<T, TReq>,
): ObservableLike<void> => {
  const onSubscribe = (subscriber: SubscriberLike<void>) => {
    const destStream = dest.stream(subscriber);
    const srcStream = src.stream(subscriber);

    srcStream.subscribe(destStream);
    destStream.subscribe(srcStream);

    subscriber.add(destStream).add(srcStream);
    destStream.add(subscriber);
  };

  return pipe(onSubscribe, createObservable, endWith(none as void));
};

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
  reducer: (state: T, action: TAction) => T,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): StreamableLike<TAction, T> => {
  const operator = (src: ObservableLike<TAction>) => {
    const acc = initialState();

    return pipe(
      src,
      scan(reducer, () => acc),
      startWith(acc),
      distinctUntilChanged(equals),
    );
  };

  return createStreamable(operator);
};
