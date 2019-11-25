import {
  lift as observableLift,
  ObservableLike,
  ObservableOperator,
  pipe as observablePipe,
} from "@reactive-js/rx-observable";
import { SubscriberLike, SubscriberOperator } from "@reactive-js/rx-subscriber";

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
  op1: SubscriberOperator<T, TA>,
): AsyncIteratorLike<TReq, TA>;
export function lift<TReq, T, TA, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
): AsyncIteratorLike<TReq, TB>;
export function lift<TReq, T, TA, TB, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
): AsyncIteratorLike<TReq, TC>;
export function lift<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
): AsyncIteratorLike<TReq, TD>;
export function lift<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
): AsyncIteratorLike<TReq, TE>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
): AsyncIteratorLike<TReq, TF>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
): AsyncIteratorLike<TReq, TG>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
  op8: SubscriberOperator<TG, TH>,
): AsyncIteratorLike<TReq, TH>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
  op8: SubscriberOperator<TG, TH>,
  op9: SubscriberOperator<TH, TI>,
): AsyncIteratorLike<TReq, TI>;
export function lift<TReq>(
  iterator: AsyncIteratorLike<TReq, any>,
  operator: SubscriberOperator<any, any>,
  ...operators: readonly SubscriberOperator<any, any>[]
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

export function pipe<TReq, T, TA>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
): AsyncIteratorLike<TReq, TA>;
export function pipe<TReq, T, TA, TB>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
): AsyncIteratorLike<TReq, TB>;
export function pipe<TReq, T, TA, TB, TC>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
): AsyncIteratorLike<TReq, TC>;
export function pipe<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
): AsyncIteratorLike<TReq, TD>;
export function pipe<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
): AsyncIteratorLike<TReq, TE>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
): AsyncIteratorLike<TReq, TF>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
): AsyncIteratorLike<TReq, TG>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
  op8: ObservableOperator<TG, TH>,
): AsyncIteratorLike<TReq, TH>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
  op8: ObservableOperator<TG, TH>,
  op9: ObservableOperator<TH, TI>,
): AsyncIteratorLike<TReq, TI>;
export function pipe(
  src: AsyncIteratorLike<any, any>,
  ...operators: ObservableOperator<any, any>[]
): AsyncIteratorLike<any, any> {
  const [observable, dispatcher] =
    src instanceof DelegatingAsyncIterator
      ? [src.observable, src.dispatcher]
      : [src, (req: any) => src.dispatch(req)];

  const liftedObservable = observablePipe.apply(undefined, [
    observable,
    ...operators,
  ] as any);

  return new DelegatingAsyncIterator(liftedObservable, dispatcher);
}
