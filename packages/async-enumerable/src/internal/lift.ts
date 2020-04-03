import {
  ObservableLike,
  ObservableOperatorLike,
  map,
  onNotify,
  ignoreElements,
  merge,
  using,
} from "@reactive-js/observable";
import {
  AsyncEnumerableLike,
  AsyncEnumerableOperatorLike,
  AsyncEnumeratorLike,
} from "./interfaces";
import { AsyncEnumerableImpl } from "./createAsyncEnumerable";
import { pipe } from "@reactive-js/pipe";

class LiftedAsyncEnumerable<TReqA, TReqB, TA, TB> extends AsyncEnumerableImpl<
  TReqB,
  TB
> {
  constructor(
    op: ObservableOperatorLike<TReqB, TB>,
    readonly src: AsyncEnumerableLike<TReqA, TA>,
    readonly obsOps: ObservableOperatorLike<any, any>[],
    readonly reqOps: ((req: any) => any)[],
  ) {
    super(op);
  }
}

const reducer = <T>(acc: T, next: (req: T) => T): T => next(acc);

const createFactory = <TReqA, TReqB, TA, TB>(
  obsOps: ObservableOperatorLike<any, any>[],
  reqOps: ((req: unknown) => any)[],
  requests: ObservableLike<TReqB>,
) => (enumerator: AsyncEnumeratorLike<TReqA, TA>) => {
  const observable: ObservableLike<TB> = obsOps.reduce<any>(
    reducer,
    enumerator,
  );

  const mapRequest = (req: TReqB): TReqA => reqOps.reduce<any>(reducer, req);

  const onRequest: ObservableLike<TB> = pipe(
    requests,
    map(mapRequest),
    onNotify((req: TReqA) => enumerator.dispatch(req)),
    ignoreElements<unknown, TB>(),
  );

  return merge(observable, onRequest);
};

const liftImpl = <TReqA, TReqB, TA, TB>(
  enumerable: AsyncEnumerableLike<TReqA, TA>,
  obsOps: ObservableOperatorLike<any, any>[],
  reqOps: ((req: any) => any)[],
) => {
  const src =
    enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;
  const op = (requests: ObservableLike<TReqB>): ObservableLike<TB> =>
    using(
      scheduler => src.enumerateAsync(scheduler),
      createFactory(obsOps, reqOps, requests),
    );
  return new LiftedAsyncEnumerable(op, src, obsOps, reqOps);
};

export const lift = <TReq, TA, TB>(
  op: ObservableOperatorLike<TA, TB>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TB> => enumerable => {
  const obsOps =
    enumerable instanceof LiftedAsyncEnumerable
      ? [...enumerable.obsOps, op]
      : [op];
  const reqOps =
    enumerable instanceof LiftedAsyncEnumerable ? enumerable.reqOps : [];

  return liftImpl(enumerable, obsOps, reqOps);
};

export const liftReq = <TReqA, TReqB, T>(
  op: (req: TReqB) => TReqA,
): AsyncEnumerableOperatorLike<TReqA, T, TReqB, T> => enumerable => {
  const obsOps =
    enumerable instanceof LiftedAsyncEnumerable ? enumerable.obsOps : [];
  const reqOps =
    enumerable instanceof LiftedAsyncEnumerable
      ? [op, ...enumerable.reqOps]
      : [op];

  return liftImpl(enumerable, obsOps, reqOps);
};
