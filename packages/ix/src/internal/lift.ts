import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  share,
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

export const lift = <TReq, T, TA>(
  operator: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
  scheduler: SchedulerLike,
  replay?: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, TA> => iterator => {
  const observable: ObservableLike<T> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  return new LiftedIteratorImpl(
    dispatcher,
    pipe(liftedObservable as ObservableLike<TA>, share(scheduler, replay)),
  );
};

export const liftReq = <TReq, T, TReqA>(
  operator: (dispatcher: (req: TReq) => void) => (ref: TReqA) => void,
): AsyncIteratorOperatorLike<TReq, T, TReqA, T> => iterator => {
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;

  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedDispatcher: (req: TReqA) => void = operator(dispatcher);

  return new LiftedIteratorImpl(liftedDispatcher, observable);
};
