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

  schedule(continuation: SchedulerContinuationLike): DisposableLike {
    return this.scheduler.schedule(continuation);
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
    const liftedNotify = this.reqOperators.reduce(
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
      liftedNotify,
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
