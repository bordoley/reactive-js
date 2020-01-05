import { pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  ObservableOperatorLike,
  publish,
} from "@reactive-js/rx";
import {
  AsyncEnumeratorResourceLike,
  AsyncEnumerableLike,
  AsyncEnumerableOperatorLike,
} from "./interfaces";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { disposableMixin, DisposableLike } from "@reactive-js/disposable";

class LiftedAsyncEnumeratorResourceImpl<TReq, T>
  implements AsyncEnumeratorResourceLike<TReq, T> {
  readonly add = disposableMixin.add;
  readonly dispose = disposableMixin.dispose;

  constructor(
    readonly notify: (req: TReq) => void,
    readonly observable: MulticastObservableLike<T>,
    readonly disposable: DisposableLike,
    readonly scheduler: SchedulerLike,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return 0;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    delay?: number,
  ): DisposableLike {
    return this.scheduler.schedule(continuation, delay);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

interface AsyncEnumeratorRequestOperatorLike<TReqA, TReqB> {
  (notify: (req: TReqA) => void): (ref: TReqB) => void;
}

class LiftedAsyncEnumerable<TReq, T> implements AsyncEnumerableLike<TReq, T> {
  constructor(
    readonly source: AsyncEnumerableLike<TReq, T>,
    readonly observableOperators: ReadonlyArray<
      ObservableOperatorLike<any, any>
    >,
    readonly reqOperators: ReadonlyArray<
      AsyncEnumeratorRequestOperatorLike<any, any>
    >,
  ) {}

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorResourceLike<TReq, T> {
    const enumerator = this.source.enumerateAsync(scheduler);

    const notify: (req: any) => void =
      enumerator instanceof LiftedAsyncEnumeratorResourceImpl
        ? enumerator.notify
        : (req: any) => enumerator.notify(req);
    const liftednotify = this.reqOperators.reduce(
      (acc, next) => next(acc),
      notify,
    );

    const observable: ObservableLike<any> =
      (enumerator as any).observable || enumerator;
    const liftedObservable = pipe(
      this.observableOperators.reduce((acc, next) => next(acc), observable),
      publish(scheduler, replayCount),
    );

    const disposable = (enumerator as any).disposable || enumerator;
    disposable.add(liftedObservable);

    return new LiftedAsyncEnumeratorResourceImpl(
      liftednotify,
      liftedObservable,
      disposable,
      scheduler,
    );
  }
}

export function lift<TReq, TA, TB>(
  op1: ObservableOperatorLike<TA, TB>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TB>;
export function lift<TReq, TA, TB, TC>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TC>;
export function lift<TReq, TA, TB, TC, TD>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TD>;
export function lift<TReq, TA, TB, TC, TD, TE>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TE>;
export function lift<TReq, TA, TB, TC, TD, TE, TF>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TF>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TG>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG, TH>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
  op7: ObservableOperatorLike<TG, TH>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TH>;
export function lift<TReq, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  op1: ObservableOperatorLike<TA, TB>,
  op2: ObservableOperatorLike<TB, TC>,
  op3: ObservableOperatorLike<TC, TD>,
  op4: ObservableOperatorLike<TD, TE>,
  op5: ObservableOperatorLike<TE, TF>,
  op6: ObservableOperatorLike<TF, TG>,
  op7: ObservableOperatorLike<TG, TH>,
  op8: ObservableOperatorLike<TH, TI>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TI>;
export function lift<TReq>(
  ...operators: ObservableOperatorLike<unknown, unknown>[]
): AsyncEnumerableOperatorLike<TReq, unknown, TReq, unknown> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? [...iterable.observableOperators, ...operators]
        : operators;
    const reqOperators =
      iterable instanceof LiftedAsyncEnumerable ? iterable.reqOperators : [];

    return new LiftedAsyncEnumerable(source, observableOperators, reqOperators);
  };
}

export function liftReq<TReqA, TReqB, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqB, T>;
export function liftReq<TReqA, TReqB, TReqC, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqC, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqD, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncEnumeratorRequestOperatorLike<TReqD, TReqE>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqE, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, TReqF, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncEnumeratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncEnumeratorRequestOperatorLike<TReqE, TReqF>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqF, T>;
export function liftReq<TReqA, TReqB, TReqC, TReqD, TReqE, TReqF, TReqG, T>(
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncEnumeratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncEnumeratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncEnumeratorRequestOperatorLike<TReqF, TReqG>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqG, T>;
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
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncEnumeratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncEnumeratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncEnumeratorRequestOperatorLike<TReqF, TReqG>,
  op7: AsyncEnumeratorRequestOperatorLike<TReqG, TReqH>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqH, T>;
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
  op1: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
  op2: AsyncEnumeratorRequestOperatorLike<TReqB, TReqC>,
  op3: AsyncEnumeratorRequestOperatorLike<TReqC, TReqD>,
  op4: AsyncEnumeratorRequestOperatorLike<TReqD, TReqE>,
  op5: AsyncEnumeratorRequestOperatorLike<TReqE, TReqF>,
  op6: AsyncEnumeratorRequestOperatorLike<TReqF, TReqG>,
  op7: AsyncEnumeratorRequestOperatorLike<TReqG, TReqH>,
  op8: AsyncEnumeratorRequestOperatorLike<TReqH, TReqI>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqI, T>;
export function liftReq<T>(
  ...operators: AsyncEnumeratorRequestOperatorLike<unknown, unknown>[]
): AsyncEnumerableOperatorLike<unknown, T, unknown, T> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? iterable.observableOperators
        : [];
    const reqOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? [...iterable.reqOperators, ...operators]
        : operators;

    return new LiftedAsyncEnumerable(source, observableOperators, reqOperators);
  };
}
