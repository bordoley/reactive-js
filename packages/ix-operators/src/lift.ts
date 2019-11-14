import {
  Observable,
  Operator as SubscriberOperator,
} from "@reactive-js/rx-core";

import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
  Operator,
} from "@reactive-js/ix-core";

export const lift = <TReq>(
  operator: SubscriberOperator<any, any>,
  ...operators: readonly SubscriberOperator<any, any>[]
): Operator<TReq, any, TReq, any> => (
  delegate: AsyncIteratorLike<TReq, any>,
) => {
  const [observable, disposable, dispatcher] =
    delegate instanceof DelegatingAsyncIterator
      ? [delegate.observable, delegate.disposable, delegate.dispatcher]
      : [delegate, delegate, (req: TReq) => delegate.dispatch(req)];

  const liftedObservable = Observable.lift.apply(undefined, [
    observable,
    operator,
    ...operators,
  ] as any);

  return new DelegatingAsyncIterator(liftedObservable, dispatcher, disposable);
};
