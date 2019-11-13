import {
  lift as liftObservable,
  Operator as SubscriberOperator,
} from "@rx-min/rx-core";

import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
  Operator,
} from "@rx-min/ix-core";

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

  const liftedObservable = liftObservable.apply(undefined, [
    observable,
    operator,
    ...operators,
  ] as any);

  return new DelegatingAsyncIterator(liftedObservable, dispatcher, disposable);
};
