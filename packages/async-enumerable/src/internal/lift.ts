import { pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  ObservableOperatorLike,
  publish,
} from "@reactive-js/observable";
import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
  AsyncEnumerableOperatorLike,
} from "./interfaces";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { add, dispose, DisposableLike } from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";

class LiftedAsyncEnumeratorImpl<TReq, T>
  implements AsyncEnumeratorLike<TReq, T> {
  readonly add = add;
  readonly dispose = dispose;
  readonly isSynchronous = false;

  constructor(
    readonly notify: (req: TReq) => void,
    readonly dispatch: (req: TReq) => void,
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

  enumerate(): EnumeratorLike<void, T> {
    return this.observable.enumerate();
  }

  schedule(continuation: SchedulerContinuationLike) {
    this.scheduler.schedule(continuation);
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
  ): AsyncEnumeratorLike<TReq, T> {
    const enumerator = this.source.enumerateAsync(scheduler);

    const notify: (req: any) => void =
      enumerator instanceof LiftedAsyncEnumeratorImpl
        ? enumerator.notify
        : (req: any) => enumerator.notify(req);
    const liftedNotify = this.reqOperators.reduce(
      (acc, next) => next(acc),
      notify,
    );

    const dispatch: (req: any) => void =
      enumerator instanceof LiftedAsyncEnumeratorImpl
        ? enumerator.dispatch
        : (req: any) => enumerator.dispatch(req);
    const lifteddispatch = this.reqOperators.reduce(
      (acc, next) => next(acc),
      dispatch,
    );

    const observable: ObservableLike<any> =
      (enumerator as any).observable || enumerator;
    const liftedObservable = pipe(
      this.observableOperators.reduce((acc, next) => next(acc), observable),
      publish(scheduler, replayCount),
    );

    const disposable = (enumerator as any).disposable || enumerator;
    disposable.add(liftedObservable);

    return new LiftedAsyncEnumeratorImpl(
      liftedNotify,
      lifteddispatch,
      liftedObservable,
      disposable,
      scheduler,
    );
  }
}

export function lift<TReq, TA, TB>(
  op: ObservableOperatorLike<TA, TB>,
): AsyncEnumerableOperatorLike<TReq, TA, TReq, TB> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? [...iterable.observableOperators, op]
        : [op];
    const reqOperators =
      iterable instanceof LiftedAsyncEnumerable ? iterable.reqOperators : [];

    return new LiftedAsyncEnumerable(source, observableOperators, reqOperators);
  };
}

export function liftReq<TReqA, TReqB, T>(
  op: AsyncEnumeratorRequestOperatorLike<TReqA, TReqB>,
): AsyncEnumerableOperatorLike<TReqA, T, TReqB, T> {
  return iterable => {
    const source = (iterable as any).source || iterable;
    const observableOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? iterable.observableOperators
        : [];
    const reqOperators =
      iterable instanceof LiftedAsyncEnumerable
        ? [...iterable.reqOperators, op]
        : [op];

    return new LiftedAsyncEnumerable(source, observableOperators, reqOperators);
  };
}
