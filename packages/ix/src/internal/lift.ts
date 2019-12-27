import { pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  ObservableOperatorLike,
  publish,
} from "@reactive-js/rx";
import {
  AsyncIteratorLike,
  AsyncIteratorResourceLike,
  AsyncIterableLike,
  AsyncIterableOperatorLike,
} from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { DisposableOrTeardown, DisposableLike } from "@reactive-js/disposable";

class LiftedAsyncIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  constructor(
    readonly dispatch: (req: TReq) => void,
    readonly observable: MulticastObservableLike<T>,
  ) {}

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

class LiftedAsyncIteratorResourceImpl<TReq, T>
  extends LiftedAsyncIteratorImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  constructor(
    dispatch: (req: TReq) => void,
    observable: MulticastObservableLike<T>,
    readonly disposable: DisposableLike,
  ) {
    super(dispatch, observable);
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
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
        : ((req: any) => iterator.dispatch(req));
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

export const lift = <TReq, TA, TB>(
  operator: ObservableOperatorLike<TA, TB>,
): AsyncIterableOperatorLike<TReq, TA, TReq, TB> => iterable => {
  const source = (iterable as any).source || iterable;
  const observableOperators =
    iterable instanceof LiftedAsyncIterable
      ? [...iterable.observableOperators, operator]
      : [operator];
  const reqOperators =
    iterable instanceof LiftedAsyncIterable ? iterable.reqOperators : [];

  return new LiftedAsyncIterable(source, observableOperators, reqOperators);
};


export const liftReq = <TReqA, TReqB, T>(
  operator: AsyncIteratorRequestOperatorLike<TReqA, TReqB>
): AsyncIterableOperatorLike<TReqA, T, TReqB, T> => iterable => {
  const source = (iterable as any).source || iterable;
  const observableOperators =
    iterable instanceof LiftedAsyncIterable
      ? iterable.observableOperators
      : [];
  const reqOperators =
    iterable instanceof LiftedAsyncIterable 
      ? [...iterable.reqOperators, operator] 
      : [operator];

  return new LiftedAsyncIterable(source, observableOperators, reqOperators);
};
