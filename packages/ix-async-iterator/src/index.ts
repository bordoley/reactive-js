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

/** @noInheritDoc */
export class DelegatingAsyncIterator<TReq, T>
  implements AsyncIteratorLike<TReq, T> {
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

export const mapDispatch = <TSrcReq, TReq, T>(
  mapper: (v: TReq) => TSrcReq,
): AsyncIteratorOperator<TSrcReq, T, TReq, T> => (
  iterator: AsyncIteratorLike<TSrcReq, T>,
) => {
  const [delegate, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.dispatcher]
      : [iterator, (req: TSrcReq) => iterator.dispatch(req)];
  const mappedDispatcher = (req: TReq) => dispatcher(mapper(req));

  return new DelegatingAsyncIterator(delegate, mappedDispatcher);
};

export const asyncIteratorOperatorFrom = <TReq, T, TA>(
  operator: ObservableOperator<T, TA>,
): AsyncIteratorOperator<TReq, T, TReq, TA> => (
  iterator: AsyncIteratorLike<TReq, T>,
) => {
  const [observable, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.dispatcher]
      : [iterator, (req: any) => iterator.dispatch(req)];

  const pipedObservable = observablePipe(observable, operator);

  return new DelegatingAsyncIterator(pipedObservable, dispatcher);
};
