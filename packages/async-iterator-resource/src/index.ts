import { DisposableLike } from "@reactive-js/disposable";
import {
  AsyncIteratorResourceLike,
  createAsyncIteratorResource,
} from "@reactive-js/ix";
import { OperatorLike } from "@reactive-js/pipe";
import { ObservableLike, MulticastObservableLike } from "@reactive-js/rx";

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
  dispatchOperator?: (dispatcher: (req: TReq) => void) => (req: TReqA) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));
  const disposable: DisposableLike = (iterator as any).disposable || iterator;

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  const liftedDispatcher: (req: TReqA) => void =
    dispatchOperator !== undefined
      ? dispatchOperator(dispatcher)
      : (dispatcher as any);

  return createAsyncIteratorResource(
    liftedDispatcher,
    liftedObservable as MulticastObservableLike<TA>,
    disposable,
  );
};

export const lift = <TReq, T, TA>(
  operator: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, TA> =>
  liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  operator: (dispatcher: (req: TReq) => void) => (ref: TReqA) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, T> =>
  liftImpl(undefined, operator);
