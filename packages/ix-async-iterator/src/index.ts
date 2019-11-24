import {
  lift as observableLift,
  ObservableLike,
} from "@reactive-js/rx-observable";
import { Operator, SubscriberLike } from "@reactive-js/rx-subscriber";

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

export function lift<TReq, T, TA>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
): AsyncIteratorLike<TReq, TA>;
export function lift<TReq, T, TA, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
): AsyncIteratorLike<TReq, TB>;
export function lift<TReq, T, TA, TB, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
): AsyncIteratorLike<TReq, TC>;
export function lift<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
): AsyncIteratorLike<TReq, TD>;
export function lift<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
): AsyncIteratorLike<TReq, TE>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
): AsyncIteratorLike<TReq, TF>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
): AsyncIteratorLike<TReq, TG>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
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
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
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
export function lift<TReq>(
  iterator: AsyncIteratorLike<TReq, any>,
  operator: Operator<any, any>,
  ...operators: readonly Operator<any, any>[]
): AsyncIteratorLike<TReq, any> {
  const [observable, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.dispatcher]
      : [iterator, (req: TReq) => iterator.dispatch(req)];

  const liftedObservable = observableLift.apply(undefined, [
    observable,
    operator,
    ...operators,
  ] as any);

  return new DelegatingAsyncIterator(liftedObservable, dispatcher);
}

export const map = <TSrcReq, TReq, T>(
  iterator: AsyncIteratorLike<TSrcReq, T>,
  mapper: (v: TReq) => TSrcReq,
): AsyncIteratorLike<TReq, T> => {
  const [delegate, dispatcher] =
    iterator instanceof DelegatingAsyncIterator
      ? [iterator.observable, iterator.dispatcher]
      : [iterator, (req: TSrcReq) => iterator.dispatch(req)];
  const mappedDispatcher = (req: TReq) => dispatcher(mapper(req));

  return new DelegatingAsyncIterator(delegate, mappedDispatcher);
};
