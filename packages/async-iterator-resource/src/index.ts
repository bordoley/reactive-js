import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import { AsyncIteratorResourceLike } from "@reactive-js/ix";
import { OperatorLike } from "@reactive-js/pipe";
import {
  ObservableLike,
  SubscriberLike,
  MulticastObservableLike,
} from "@reactive-js/rx";

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

class LiftedIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  readonly dispatcher: (req: TReq) => void;
  readonly disposable: DisposableLike;
  readonly observable: MulticastObservableLike<T>;

  constructor(
    dispatcher: (req: TReq) => void,
    disposable: DisposableLike,
    observable: MulticastObservableLike<T>,
  ) {
    this.dispatcher = dispatcher;
    this.disposable = disposable;
    this.observable = observable;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
  dispatchOperator?: (dispatcher: (req: TReq) => void) => (req: TReqA) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));
  const disposable: DisposableLike = (iterator as any).disposable || iterator;

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  const liftedDispatcher: (req: TReqA) => void =
    dispatchOperator !== undefined
      ? dispatchOperator(dispatcher)
      : (dispatcher as any);

  return new LiftedIteratorResourceImpl(
    liftedDispatcher,
    disposable,
    liftedObservable as MulticastObservableLike<TA>,
  );
};

export const lift = <TReq, T, TA>(
  operator: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, TA> =>
  liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  operator: (dispatcher: (req: TReq) => void) => (ref: TReqA) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, T> =>
  liftImpl(undefined, operator);
