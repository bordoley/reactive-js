import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { DisposableLike } from "@reactive-js/disposables";

import { Observable, Operator } from "@reactive-js/rx-core";

export interface AsyncIteratorLike<TReq, T> extends ObservableResourceLike<T> {
  dispatch(request: TReq): void;
}

class DelegatingAsyncIterator<TReq, T> implements AsyncIteratorLike<TReq, T> {
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

function lift<TReq, T, TA>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
): AsyncIteratorLike<TReq, TA>;
function lift<TReq, T, TA, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
): AsyncIteratorLike<TReq, TB>;
function lift<TReq, T, TA, TB, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
): AsyncIteratorLike<TReq, TC>;
function lift<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
): AsyncIteratorLike<TReq, TD>;
function lift<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
): AsyncIteratorLike<TReq, TE>;
function lift<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
): AsyncIteratorLike<TReq, TF>;
function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
): AsyncIteratorLike<TReq, TG>;
function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
  op8: Operator<TG, TH>,
): AsyncIteratorLike<TReq, TH>;
function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
  op8: Operator<TG, TH>,
  op9: Operator<TH, TI>,
): AsyncIteratorLike<TReq, TI>;
function lift<TReq>(
  iterator: AsyncIteratorLike<TReq, any>,
  operator: Operator<any, any>,
  ...operators: readonly Operator<any, any>[]
): AsyncIteratorLike<TReq, any> {
  const [observable, disposable, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.disposable, iterator.dispatcher]
      : [iterator, iterator, (req: TReq) => iterator.dispatch(req)];

  const liftedObservable = Observable.lift.apply(undefined, [
    observable,
    operator,
    ...operators,
  ] as any);

  return new DelegatingAsyncIterator(liftedObservable, dispatcher, disposable);
}

const mapRequest = <TSrcReq, TReq, T>(
  iterator: AsyncIteratorLike<TSrcReq, T>,
  mapper: (v: TReq) => TSrcReq,
): AsyncIteratorLike<TReq, any> => {
  const [observable, disposable, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.disposable, iterator.dispatcher]
      : [iterator, iterator, (req: TSrcReq) => iterator.dispatch(req)];
  const mappedDispatcher = (req: TReq) => dispatcher(mapper(req));

  return new DelegatingAsyncIterator(observable, mappedDispatcher, disposable);
};

export const AsyncIterator = {
  lift,
  mapRequest,
};
