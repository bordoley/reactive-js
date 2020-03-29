import {
  ObservableLike,
  ObservableOperatorLike,
  map,
  onNotify,
  ignoreElements,
  merge,
  using,
} from "@reactive-js/observable";
import { AsyncEnumerableLike, AsyncEnumerableOperatorLike } from "./interfaces";
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
      enumerator => {
        const observable: ObservableLike<TB> = obsOps.reduce(
          (acc: ObservableLike<unknown>, next) => next(acc),
          enumerator,
        );

        const onRequest: ObservableLike<TB> = pipe(
          requests,
          map(
            (req: TReqB): TReqA =>
              reqOps.reduce((acc: unknown, next) => next(acc), req),
          ),
          onNotify((req: TReqA) => enumerator.dispatch(req)),
          ignoreElements<unknown, TB>(),
        );

        return merge(observable, onRequest);
      },
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
