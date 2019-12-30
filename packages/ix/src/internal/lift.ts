import { pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  ObservableOperatorLike,
  publish,
} from "@reactive-js/rx";
import {
  AsyncIteratorResourceLike,
  AsyncIterableLike,
  AsyncIterableOperatorLike,
} from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { disposableMixin, DisposableLike } from "@reactive-js/disposable";

class LiftedAsyncIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  add = disposableMixin.add;
dispose = disposableMixin.dispose;
remove = disposableMixin.remove;
constructor(
    readonly dispatch: (req: TReq) => void,
    readonly observable: MulticastObservableLike<T>,
    readonly disposable: DisposableLike,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  

  

  

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

interface AsyncIteratorRequestOperatorLike<TReqA, TReqB> {
  (dispatcher: (req: TReqA) => void): (ref: TReqB) => void;
}

class LiftedAsyncIterable<TReq, T> implements AsyncIterableLike<TReq, T> {
  constructor(
    readonly source: AsyncIterableLike<TReq, T>,
    readonly observableOperators: ReadonlyArray<
      ObservableOperatorLike<any, any>
    >,
    readonly reqOperators: ReadonlyArray<
      AsyncIteratorRequestOperatorLike<any, any>
    >,
  ) {}

  getIXAsyncIterator(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncIteratorResourceLike<TReq, T> {
    const iterator = this.source.getIXAsyncIterator(scheduler);

    const dispatch: (req: any) => void =
      iterator instanceof LiftedAsyncIterable
        ? iterator.dispatch
        : (req: any) => iterator.dispatch(req);
    const liftedDispatch = this.reqOperators.reduce(
      (acc, next) => next(acc),
      dispatch,
    );

    const observable: ObservableLike<any> =
      (iterator as any).observable || iterator;
    const liftedObservable = pipe(
      this.observableOperators.reduce((acc, next) => next(acc), observable),
      publish(scheduler, replayCount),
    );

    const disposable = (iterator as any).disposable || iterator;
    disposable.add(liftedObservable);

    return new LiftedAsyncIteratorResourceImpl(
      liftedDispatch,
      liftedObservable,
      disposable,
    );
  }
}

export function lift<TReq, TA, TB>(
  op1: ObservableOperatorLike<TA, TB>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TB>;
export function lift<TReq, TA, TB, TC>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TC>;
export function lift<TReq, TA, TB, TC, TD>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TD>;
export function lift<TReq, TA, TB, TC, TD, TE>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TE>;
export function lift<TReq, TA, TB, TC, TD, TE, TF>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TF>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TG>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG, TH>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
  op7: ObservableOperatorLike<TG, TH>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TH>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
  op7: ObservableOperatorLike<TG, TH>,
  op8: ObservableOperatorLike<TH, TI>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TI>;
export function lift<TReq>(
  ...operators: ObservableOperatorLike<unknown, unknown>[]
): AsyncIterableOperatorLike<TReq, unknown, TReq, unknown> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncIterable
        ? [...iterable.observableOperators, ...operators]
        : operators;
    const reqOperators =
      iterable instanceof LiftedAsyncIterable ? iterable.reqOperators : [];

    return new LiftedAsyncIterable(source, observableOperators, reqOperators);
  };
}

export function liftReq<TReqA, TReqB, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
): AsyncIterableOperatorLike<TReqA, T, TReqB, T>;
export function liftReq<TReqA, TReqB, TReqC, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
): AsyncIterableOperatorLike<TReqA, T, TReqC, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
): AsyncIterableOperatorLike<TReqA, T, TReqD, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncIteratorRequestOperatorLike<TReqD, TReqE>,
): AsyncIterableOperatorLike<TReqA, T, TReqE, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, TReqF, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncIteratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncIteratorRequestOperatorLike<TReqE, TReqF>,
): AsyncIterableOperatorLike<TReqA, T, TReqF, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, TReqF, TReqG, T>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncIteratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncIteratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncIteratorRequestOperatorLike<TReqF, TReqG>,
): AsyncIterableOperatorLike<TReqA, T, TReqG, T>;
export function liftReq<
  TReqA,
  TReqB,
  TReqC,
  TReqD,
  TReqE,
  TReqF,
  TReqG,
  TReqH,
  T
>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncIteratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncIteratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncIteratorRequestOperatorLike<TReqF, TReqG>,
  op7: AsyncIteratorRequestOperatorLike<TReqG, TReqH>,
): AsyncIterableOperatorLike<TReqA, T, TReqH, T>;
export function liftReq<
  TReqA,
  TReqB,
  TReqC,
  TReqD,
  TReqE,
  TReqF,
  TReqG,
  TReqH,
  TReqI,
  T
>(
  op1: AsyncIteratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncIteratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncIteratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncIteratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncIteratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncIteratorRequestOperatorLike<TReqF, TReqG>,
  op7: AsyncIteratorRequestOperatorLike<TReqG, TReqH>,
  op8: AsyncIteratorRequestOperatorLike<TReqH, TReqI>,
): AsyncIterableOperatorLike<TReqA, T, TReqI, T>;
export function liftReq<T>(
  ...operators: AsyncIteratorRequestOperatorLike<unknown, unknown>[]
): AsyncIterableOperatorLike<unknown, T, unknown, T> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncIterable
        ? iterable.observableOperators
        : [];
    const reqOperators =
      iterable instanceof LiftedAsyncIterable
        ? [...iterable.reqOperators, ...operators]
        : operators;

    return new LiftedAsyncIterable(source, observableOperators, reqOperators);
  };
}
