import { AsyncIteratorLike } from "@reactive-js/ix";
import { OperatorLike } from "@reactive-js/pipe";
import {
  ObservableLike,
  SubscriberLike,
  MulticastObservableLike,
} from "@reactive-js/rx";

export interface AsyncIteratorOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

class LiftedIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  readonly dispatcher: (req: TReq) => void;
  readonly observable: MulticastObservableLike<T>;

  constructor(
    dispatcher: (req: TReq) => void,
    observable: MulticastObservableLike<T>,
  ) {
    this.dispatcher = dispatcher;
    this.observable = observable;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
  dispatchOperator?: (dispatcher: (req: TReq) => void) => (req: TReqA) => void,
): AsyncIteratorOperatorLike<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorResourceImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  const liftedDispatcher: (req: TReqA) => void =
    dispatchOperator !== undefined
      ? dispatchOperator(dispatcher)
      : (dispatcher as any);

  return new LiftedIteratorImpl(
    liftedDispatcher,
    liftedObservable as MulticastObservableLike<TA>,
  );
};

export const lift = <TReq, T, TA>(
  operator: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
): AsyncIteratorOperatorLike<TReq, T, TReq, TA> =>
  liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  operator: (dispatcher: (req: TReq) => void) => (ref: TReqA) => void,
): AsyncIteratorOperatorLike<TReq, T, TReqA, T> =>
  liftImpl(undefined, operator);
