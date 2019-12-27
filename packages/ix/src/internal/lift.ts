import { pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  share,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { AsyncIteratorLike, AsyncIteratorOperatorLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";

class LiftedIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  constructor(
    readonly dispatcher: (req: TReq) => void,
    readonly observable: MulticastObservableLike<T>,
  ) {}

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

export const lift = <TReq, TA, TB>(
  operator: ObservableOperatorLike<TA, TB>,
  scheduler: SchedulerLike,
  replay?: number,
): AsyncIteratorOperatorLike<TReq, TA, TReq, TB> => iterator => {
  const observable: ObservableLike<TA> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  return new LiftedIteratorImpl(
    dispatcher,
    pipe(liftedObservable as ObservableLike<TB>, share(scheduler, replay)),
  );
};

export const liftReq = <TReqA, T, TReqB>(
  operator: (dispatcher: (req: TReqA) => void) => (ref: TReqB) => void,
): AsyncIteratorOperatorLike<TReqA, T, TReqB, T> => iterator => {
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;

  const dispatcher: (req: TReqA) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedDispatcher: (req: TReqB) => void = operator(dispatcher);

  return new LiftedIteratorImpl(liftedDispatcher, observable);
};
