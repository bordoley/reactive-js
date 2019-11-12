import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@rx-min/rx-core";

import { DisposableLike } from "@rx-min/rx-disposables";

export interface AsyncIteratorLike<TReq, T> extends ObservableResourceLike<T> {
  dispatch(request: TReq): void;
}

export interface AsyncIterableLike<TReq, T> {
  iterateAsync(): AsyncIteratorLike<TReq, T>;
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

function pipe<TReq, T, TReqA, TA>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
): AsyncIteratorLike<TReqA, TA>;

function pipe<TReq, T, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
): AsyncIteratorLike<TReqB, TB>;

function pipe<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
): AsyncIteratorLike<TReqC, TC>;

function pipe<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
): AsyncIteratorLike<TReqD, TD>;

function pipe<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD, TReqE, TE>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
): AsyncIteratorLike<TReqE, TE>;

function pipe<
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

function pipe<
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

function pipe<
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

function pipe<
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

function pipe(
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

export const AsyncIterator = {
  pipe,
};

class LiftedAsyncIterable<TReq, T> implements AsyncIterableLike<TReq, T> {
  readonly delegate: AsyncIterableLike<TReq, T>;
  readonly operators: ReadonlyArray<Operator<any, any, any, any>>;

  constructor(
    delegate: AsyncIterableLike<TReq, T>,
    operators: ReadonlyArray<Operator<any, any, any, any>>,
  ) {
    this.delegate = delegate;
    this.operators = operators;
  }

  iterateAsync() {
    let iterator = this.delegate.iterateAsync();
    for (let operator of this.operators) {
      iterator = operator(iterator);
    }
    return iterator;
  }
}

function lift<TReq, T, TReqA, TA>(
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
): AsyncIterableLike<TReqA, TA>;

function lift<TReq, T, TReqA, TA, TReqB, TB>(
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
): AsyncIterableLike<TReqB, TB>;

function lift<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
): AsyncIterableLike<TReqC, TC>;

function lift<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
): AsyncIterableLike<TReqD, TD>;

function lift<TReq, T, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD, TReqE, TE>(
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
): AsyncIterableLike<TReqE, TE>;

function lift<
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
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
): AsyncIterableLike<TReqF, TF>;

function lift<
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
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
): AsyncIterableLike<TReqG, TG>;

function lift<
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
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
  op8: Operator<TReqG, TG, TReqH, TH>,
): AsyncIterableLike<TReqH, TH>;

function lift<
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
  src: AsyncIterableLike<TReq, T>,
  op1: Operator<TReq, T, TReqA, TA>,
  op2: Operator<TReqA, TA, TReqB, TB>,
  op3: Operator<TReqB, TB, TReqC, TC>,
  op4: Operator<TReqC, TC, TReqD, TD>,
  op5: Operator<TReqD, TD, TReqE, TE>,
  op6: Operator<TReqE, TE, TReqF, TF>,
  op7: Operator<TReqF, TF, TReqG, TG>,
  op8: Operator<TReqG, TG, TReqH, TH>,
  op9: Operator<TReqH, TH, TReqI, TI>,
): AsyncIterableLike<TReqI, TI>;

function lift(
  asyncIterable: AsyncIterableLike<any, any>,
  operator: Operator<any, any, any, any>,
  ...operators: Operator<any, any, any, any>[]
): AsyncIterableLike<any, any> {
  return asyncIterable instanceof LiftedAsyncIterable
    ? new LiftedAsyncIterable(asyncIterable.delegate, [
        ...asyncIterable.operators,
        operator,
        ...operators,
      ])
    : new LiftedAsyncIterable(asyncIterable, [operator, ...operators]);
}

export const AsyncIterable = {
  lift,
};
