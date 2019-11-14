import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
  Operator,
} from "@reactive-js/ix-core";

export const mapRequest = <TSrcReq, TReq, T>(
  mapper: (v: TReq) => TSrcReq,
): Operator<TSrcReq, T, TReq, T> => (
  delegate: AsyncIteratorLike<TSrcReq, T>,
) => {
  const [observable, disposable, dispatcher] =
    delegate instanceof DelegatingAsyncIterator
      ? [delegate.observable, delegate.disposable, delegate.dispatcher]
      : [delegate, delegate, (req: TSrcReq) => delegate.dispatch(req)];

  const mappedDispatcher = (req: TReq) => dispatcher(mapper(req));

  return new DelegatingAsyncIterator(observable, mappedDispatcher, disposable);
};
