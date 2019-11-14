import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { DisposableLike } from "@reactive-js/disposables";

export interface AsyncIteratorLike<TReq, T> extends ObservableResourceLike<T> {
  dispatch(request: TReq): void;
}

export class DelegatingAsyncIterator<TReq, T>
  implements AsyncIteratorLike<TReq, T> {
  public readonly observable: ObservableLike<T>;
  public readonly dispatcher: (req: TReq) => void;
  public readonly disposable: DisposableLike;

  constructor(
    observable: ObservableLike<T>,
    dispatcher: (req: TReq) => void,
    disposable: DisposableLike,
  ) {
    this.observable = observable;
    this.dispatcher = dispatcher;
    this.disposable = disposable;
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }
}

export interface Operator<TSrcReq, TSrc, TReq, T> {
  (iterator: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

export function pipe<TReq, T, TReqA, TA>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
): AsyncIteratorLike<TReqA, TA>;

export function pipe<TReq, T, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
): AsyncIteratorLike<TReqB, TB>;

export function pipe<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
): AsyncIteratorLike<TReqC, TC>;

export function pipe<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
): AsyncIteratorLike<TReqD, TD>;

export function pipe<
  TReq,
  T,
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
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
): AsyncIteratorLike<TReqE, TE>;

export function pipe<
  TReq,
  T,
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
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
): AsyncIteratorLike<TReqF, TF>;

export function pipe<
  TReq,
  T,
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
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
): AsyncIteratorLike<TReqG, TG>;

export function pipe<
  TReq,
  T,
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
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
  op8: Operator<TReqG, TG, TReqH, TH>,
): AsyncIteratorLike<TReqH, TH>;

export function pipe<
  TReq,
  T,
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
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
  op8: Operator<TReqG, TG, TReqH, TH>,
  op9: Operator<TReqH, TH, TReqI, TI>,
): AsyncIteratorLike<TReqI, TI>;

export function pipe(
  iterator: AsyncIteratorLike<any, any>,
  operator: Operator<any, any, any, any>,
  ...operators: Operator<any, any, any, any>[]
): AsyncIteratorLike<any, any> {
  let retval = operator(iterator);

  for (let operator of operators) {
    retval = operator(retval);
  }

  return retval;
}
