import {
  ObservableLike,
  ObservableOperator,
  pipe as observablePipe,
} from "@reactive-js/rx-observable";
import { SubscriberLike } from "@reactive-js/rx-subscriber";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends ObservableLike<T> {
  dispatch(request: TReq): void;
}

class AsyncIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  readonly dispatcher: (req: TReq) => void;
  readonly observable: ObservableLike<T>;

  constructor(observable: ObservableLike<T>, dispatcher: (req: TReq) => void) {
    this.observable = observable;
    this.dispatcher = dispatcher;
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export interface AsyncIteratorOperator<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: ObservableOperator<T, TA>,
  mapper?: (req: TReqA) => TReq,
): AsyncIteratorOperator<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorResourceImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: ObservableLike<any> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: TReq) => iterator.dispatch(req));

  const pipedObservable =
    operator !== undefined ? observablePipe(observable, operator) : observable;
  const mappedDispatcher: (req: TReqA) => void =
    mapper !== undefined ? req => dispatcher(mapper(req)) : (dispatcher as any);

  return new AsyncIteratorImpl(pipedObservable, mappedDispatcher);
};

export const lift = <TReq, T, TA>(
  operator: ObservableOperator<T, TA>,
): AsyncIteratorOperator<TReq, T, TReq, TA> => liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  mapper: (req: TReqA) => TReq,
): AsyncIteratorOperator<TReq, T, TReqA, T> => liftImpl(undefined, mapper);

export function pipe<TSrcReq, TSrc, TReqA, TA>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
): AsyncIteratorLike<TReqA, TA>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
): AsyncIteratorLike<TReqB, TB>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
): AsyncIteratorLike<TReqC, TC>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
): AsyncIteratorLike<TReqD, TD>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE
>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperator<TReqD, TD, TReqE, TE>,
): AsyncIteratorLike<TReqE, TE>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF
>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperator<TReqE, TE, TReqF, TF>,
): AsyncIteratorLike<TReqF, TF>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG
>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperator<TReqF, TF, TReqG, TG>,
): AsyncIteratorLike<TReqG, TG>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG,
  TReqH,
  TH
>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperator<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorOperator<TReqG, TG, TReqH, TH>,
): AsyncIteratorLike<TReqH, TH>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG,
  TReqH,
  TH,
  TReqI,
  TI
>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperator<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorOperator<TReqG, TG, TReqH, TH>,
  op9: AsyncIteratorOperator<TReqH, TH, TReqI, TI>,
): AsyncIteratorLike<TReqI, TI>;
export function pipe(
  src: AsyncIteratorLike<any, any>,
  ...operators: AsyncIteratorOperator<any, any, any, any>[]
) {
  return operators.reduce((acc, next) => next(acc), src);
}
